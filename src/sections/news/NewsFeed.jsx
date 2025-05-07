import Parser from 'rss-parser';
import fetch from 'node-fetch';

const parser = new Parser();
const ENTERTAINMENT_KEYWORDS = ['film', 'tv', 'television', 'media', 'entertainment', 'documentary', 'festival'];

function filterRelevant(items) {
  return items.filter((item) => {
    const content = `${item.title} ${item.contentSnippet || ''}`.toLowerCase();
    return ENTERTAINMENT_KEYWORDS.some((kw) => content.includes(kw)) &&
           content.includes('colorado');
  });
}

export default async function handler(req, res) {
  const API_KEY = process.env.MEDIASTACK_API_KEY;
  const mediastackUrl = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=us&categories=entertainment&languages=en&keywords=colorado&sort=published_desc&limit=20`;

  const rssFeeds = [
    'https://www.westword.com/rss',
    'https://www.5280.com/feed/', // 5280 Magazine
    'https://www.cpr.org/rss/arts-and-culture/' // CPR Arts & Culture
  ];

  try {
    // Fetch Mediastack data
    const mediastackResponse = await fetch(mediastackUrl);
    const mediastackData = await mediastackResponse.json();
    const msArticles = mediastackData.data || [];

    // Fetch and parse all RSS feeds
    const rssResults = await Promise.all(
      rssFeeds.map(async (url) => {
        try {
          const feed = await parser.parseURL(url);
          return filterRelevant(feed.items);
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
      published_at: article.pubDate || article.published_at || null
    });

    const normalizedData = [
      ...msArticles.map((a) => normalize(a, 'mediastack')),
      ...allRssArticles.map((a) => normalize(a, 'rss'))
    ];

    res.status(200).json(normalizedData);
  } catch (error) {
    console.error('Error fetching or merging data:', error);
    res.status(500).json({ error: 'Failed to fetch entertainment news.' });
  }
}
