import Parser from 'rss-parser';

const parser = new Parser();

// Keyword scoring system
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
  boulder: 1
};

// Calculate a relevance score for each article
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
function filterAndScoreArticles(items, minScore = 6) {
  return items
    .map(item => {
      const content = `${item.title} ${item.contentSnippet || ''}`.toLowerCase();
      const score = calculateRelevanceScore(content);
      return { ...item, relevanceScore: score };
    })
    .filter(item => item.relevanceScore >= minScore)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

export default async function handler(req, res) {
  const rssFeeds = [
   
    'https://www.westword.com/denver/Rss.xml',
    'https://www.5280.com/feed/',
    'https://www.cpr.org/rss/arts-and-culture/',
    'https://www.rmpbs.org/rss/',
    'https://patch.com/colorado/denver/rss.xml',
    'https://coloradosun.com/feed/',
    'https://news.google.com/rss/search?q=colorado+film+OR+tv+OR+television+OR+media+OR+entertainment+when:7d&hl=en-US&gl=US&ceid=US:en'
  ];

  try {
    // Fetch and parse all RSS feeds
    const rssResults = await Promise.all(
      rssFeeds.map(async (url) => {
        try {
          const feed = await parser.parseURL(url);
          return filterAndScoreArticles(feed.items);
        } catch (err) {
          console.error(`Failed to parse RSS from ${url}`, err);
          return [];
        }
      })
    );

    const allRssArticles = rssResults.flat();

    // Normalize structure
    const normalize = (article, source = 'rss') => ({
      title: article.title,
      description: article.description || article.contentSnippet,
      url: article.link,
      source,
      published_at: article.pubDate || null,
      relevanceScore: article.relevanceScore || null
    });

    const normalizedData = allRssArticles.map((a) => normalize(a, 'rss'));

    res.status(200).json(normalizedData);
  } catch (error) {
    console.error('Error fetching or merging data:', error);
    res.status(500).json({ error: 'Failed to fetch entertainment news.' });
  }
}
