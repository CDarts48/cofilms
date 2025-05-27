import Parser from 'rss-parser';

const parser = new Parser();

const rssFeeds = [
  { url: 'https://www.denverpost.com/feed/', name: 'Denver Post' },
  { url: 'https://www.5280.com/feed/', name: '5280 Magazine' },
  { url: 'https://www.cpr.org/rss/arts-and-culture/', name: 'Colorado Public Radio' },
  { url: 'https://www.rmpbs.org/rss/', name: 'Rocky Mountain PBS' },
  { url: 'https://patch.com/colorado/denver/rss.xml', name: 'Patch Denver' },
  { url: 'https://coloradosun.com/feed/', name: 'Colorado Sun' },
  { url: 'https://news.google.com/rss/search?q=colorado+film+OR+tv+OR+television+OR+media+OR+entertainment+when:7d&hl=en-US&gl=US&ceid=US:en', name: 'Google News' },
  { url: 'https://www.westword.com/denver/Rss.xml', name: 'Westword' },
  { url: 'https://www.boulderweekly.com/feed/', name: 'Boulder Weekly' }
];

// Keyword weights for scoring relevance
const KEYWORD_SCORES = {
  colorado: 3,
  film: 5,
  television: 4,
  tv: 4,
  media: 2,
  entertainment: 5,
  documentary: 4,
  festival: 4,
  cinema: 5,
  screening: 4,
  drama: 3,
  arts: 3,
  movie: 4,
  actors: 2,
  denver: 2,
  aurora: 1,
  boulder: 1,
  trump: -5,
  rockies: -1
  Nuggets: -1,
  Broncos: -1,
  Avalanche: -1,
  Rapids: -1,
};

// Score content based on weighted keyword matches
function calculateRelevanceScore(content) {
  let score = 0;
  for (const [keyword, weight] of Object.entries(KEYWORD_SCORES)) {
    const matches = content.match(new RegExp(`\\b${keyword}\\b`, 'gi'));
    if (matches) {
      score += matches.length * weight;
    }
  }
  return score;
}

// Filter and score articles, keeping those above a threshold
function filterRelevant(items, minScore = 7) {
  return items
    .map((item) => {
      const content = `${item.title} ${item.contentSnippet || ''}`.toLowerCase();
      const score = calculateRelevanceScore(content);
      return { ...item, relevanceScore: score };
    })
    .filter((item) => item.relevanceScore >= minScore)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

export default async function handler(req, res) {
  try {
    const rssResults = await Promise.all(
      rssFeeds.map(async ({ url, name }) => {
        try {
          const feed = await parser.parseURL(url);
          const relevantItems = filterRelevant(feed.items);
          return relevantItems.map((item) => ({
            ...item,
            source: name
          }));
        } catch (err) {
          console.error(`Failed to parse RSS from ${url}`, err);
          return [];
        }
      })
    );

    const allRssArticles = rssResults.flat();

    // Normalize the structure
    const normalizedData = allRssArticles.map((article) => ({
      title: article.title,
      description: article.contentSnippet || article.description || '',
      url: article.link,
      source: article.source,
      published_at: article.pubDate || null,
      relevanceScore: article.relevanceScore
    }));

    res.status(200).json(normalizedData);
  } catch (error) {
    console.error('Error fetching or merging data:', error);
    res.status(500).json({ error: 'Failed to fetch entertainment news.' });
  }
}
