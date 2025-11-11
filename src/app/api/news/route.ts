import Parser from 'rss-parser';
import { NextRequest, NextResponse } from 'next/server';

interface RSSFeed {
    url: string;
    name: string;
}

interface RSSItem {
    title: string;
    contentSnippet?: string;
    description?: string;
    link: string;
    pubDate?: string;
}

interface ScoredItem extends RSSItem {
    relevanceScore: number;
    source: string;
}

interface NormalizedArticle {
    title: string;
    description: string;
    url: string;
    source: string;
    published_at: string | null;
    relevanceScore: number;
}

const parser = new Parser();

const rssFeeds: RSSFeed[] = [
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
const KEYWORD_SCORES: Record<string, number> = {
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
    rockies: -1,
    Deion: -1,
    Nuggets: -1,
    Broncos: -1,
    Avalanche: -1,
    Rapids: -1,
    Buffaloes: -4,
    Rams: -1,
    Rockies: -1,
    Football: -3,
};

// Score content based on weighted keyword matches
function calculateRelevanceScore(content: string): number {
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
function filterRelevant(items: RSSItem[], minScore: number = 7): ScoredItem[] {
    return items
        .map((item) => {
            const content = `${item.title} ${item.contentSnippet || ''}`.toLowerCase();
            const score = calculateRelevanceScore(content);
            return { ...item, relevanceScore: score, source: '' } as ScoredItem;
        })
        .filter((item) => item.relevanceScore >= minScore)
        .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const rssResults = await Promise.all(
            rssFeeds.map(async ({ url, name }) => {
                try {
                    const feed = await parser.parseURL(url);
                    const relevantItems = filterRelevant(feed.items as RSSItem[]);
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
        const normalizedData: NormalizedArticle[] = allRssArticles.map((article) => ({
            title: article.title,
            description: article.contentSnippet || article.description || '',
            url: article.link,
            source: article.source,
            published_at: article.pubDate || null,
            relevanceScore: article.relevanceScore
        }));

        return NextResponse.json(normalizedData);
    } catch (error) {
        console.error('Error fetching or merging data:', error);
        return NextResponse.json({ error: 'Failed to fetch entertainment news.' }, { status: 500 });
    }
}
