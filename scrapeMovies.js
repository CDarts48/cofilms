const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const WIKIPEDIA_URL = 'https://en.wikipedia.org/wiki/Category:Films_shot_in_Colorado';

async function fetchHTML(url) {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}

async function scrapeMovieLinks() {
  const $ = await fetchHTML(WIKIPEDIA_URL);
  const movieLinks = [];

  // Select the div with class "mw-category mw-category-columns"
  $('div.mw-category.mw-category-columns ul li a').each((index, element) => {
    const href = 'https://en.wikipedia.org' + $(element).attr('href');
    movieLinks.push(href);
  });

  return movieLinks;
}

async function scrapeMovieImages(movieLinks) {
  const movies = [];

  for (const link of movieLinks) {
    const $ = await fetchHTML(link);
    const title = $('h1').text();
    const imageUrl = $('table.infobox img').first().attr('src');

    if (imageUrl) {
      movies.push({
        title,
        imageUrl: 'https:' + imageUrl,
      });
    } else {
      movies.push({
        title,
        imageUrl: 'N/A',
      });
    }
  }

  return movies;
}

scrapeMovieLinks().then(async (movieLinks) => {
  const movies = await scrapeMovieImages(movieLinks);
  fs.writeFileSync('movies.json', JSON.stringify(movies, null, 2));
  console.log('Movies saved to movies.json');
}).catch((error) => {
  console.error('Error scraping movie links:', error);
});