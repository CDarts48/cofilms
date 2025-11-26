const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

// Read the movies.json file
const movies = JSON.parse(fs.readFileSync('./public/movies.json', 'utf8'));

// Function to get filming locations from Wikipedia page
async function getFilmingLocations(title) {
    try {
        const searchTitle = title.replace(/ /g, '_');
        const url = `https://en.wikipedia.org/wiki/${searchTitle}`;
        
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'ColoradoFilmsBot/1.0 (https://coloradofilms.com; contact@coloradofilms.com)',
            }
        });
        
        const $ = cheerio.load(response.data);
        const locations = [];
        
        // Search for Colorado locations in the page text
        const pageText = $('body').text();
        
        // Common Colorado locations to search for
        const coloradoLocations = [
            'Denver', 'Colorado Springs', 'Boulder', 'Fort Collins', 'Aspen', 
            'Vail', 'Breckenridge', 'Telluride', 'Durango', 'Grand Junction',
            'Pueblo', 'Lakewood', 'Aurora', 'Rocky Mountain National Park',
            'Mesa Verde', 'Garden of the Gods', 'Pikes Peak', 'Steamboat Springs',
            'Estes Park', 'Loveland', 'Greeley', 'Longmont', 'Arvada', 'Westminster',
            'Centennial', 'Thornton', 'Colorado', 'Ouray', 'Silverton', 'Crested Butte',
            'Georgetown', 'Central City', 'Black Hawk', 'Red Rocks', 'Manitou Springs',
            'Glenwood Springs', 'Salida', 'Buena Vista', 'Leadville', 'Montrose'
        ];
        
        // Check for filming location section
        const filmingSection = $('h2:contains("Production"), h2:contains("Filming"), h3:contains("Filming"), span:contains("Filming locations")').parent().nextAll('p, ul').first().text();
        
        coloradoLocations.forEach(location => {
            const regex = new RegExp(`\\b${location}\\b`, 'gi');
            if (regex.test(pageText) || regex.test(filmingSection)) {
                if (!locations.includes(location)) {
                    locations.push(location);
                }
            }
        });
        
        return locations.length > 0 ? locations.join(', ') : null;
    } catch (error) {
        return null;
    }
}

// Function to get Wikipedia page info
async function getWikipediaInfo(title) {
    try {
        // Convert title to Wikipedia URL format
        const searchTitle = title.replace(/ /g, '_');
        
        // Get page summary from Wikipedia API with proper headers
        const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchTitle}`, {
            headers: {
                'User-Agent': 'ColoradoFilmsBot/1.0 (https://coloradofilms.com; contact@coloradofilms.com)',
                'Accept': 'application/json'
            }
        });
        
        // Get filming locations
        const locations = await getFilmingLocations(title);
        
        return {
            title: response.data.title,
            description: response.data.extract,
            url: response.data.content_urls.desktop.page,
            thumbnail: response.data.thumbnail?.source || null,
            year: extractYear(response.data.extract),
            filmingLocations: locations,
        };
    } catch (error) {
        console.error(`Error fetching ${title}:`, error.message);
        return null;
    }
}

// Helper function to extract year from description
function extractYear(text) {
    const yearMatch = text.match(/\b(19\d{2}|20\d{2})\b/);
    return yearMatch ? yearMatch[0] : null;
}

// Main function to process all movies
async function processMovies() {
    const moviesWithDetails = [];
    
    console.log(`Processing ${movies.length} movies...`);
    
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        console.log(`[${i + 1}/${movies.length}] Fetching: ${movie.title}`);
        
        const details = await getWikipediaInfo(movie.title);
        
        if (details) {
            moviesWithDetails.push({
                ...movie,
                wikipediaUrl: details.url,
                description: details.description,
                year: details.year,
                thumbnail: details.thumbnail,
                filmingLocations: details.filmingLocations
            });
        } else {
            // Keep original movie data if Wikipedia fetch fails
            moviesWithDetails.push(movie);
        }
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Save the enhanced data
    fs.writeFileSync(
        './public/moviesWithDetails.json',
        JSON.stringify(moviesWithDetails, null, 2)
    );
    
    console.log('\nDone! Enhanced movie data saved to moviesWithDetails.json');
    console.log(`Successfully processed: ${moviesWithDetails.filter(m => m.wikipediaUrl).length}/${movies.length} movies`);
}

// Run the script
processMovies().catch(console.error);
