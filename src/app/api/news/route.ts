import { NextRequest, NextResponse } from 'next/server';

interface Article {
    title: string;
    description: string;
    url: string;
    source: string;
    published_at: string | null;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        // Use Google News RSS feed for Colorado entertainment
        const rssUrl = 'https://news.google.com/rss/search?q=colorado+film+OR+television+OR+music+OR+theater+when:30d&hl=en-US&gl=US&ceid=US:en';

        const response = await fetch(rssUrl);
        const xmlText = await response.text();

        // Parse RSS XML
        const articles: Article[] = [];
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        const titleRegex = /<title>(.*?)<\/title>/;
        const linkRegex = /<link>(.*?)<\/link>/;
        const descRegex = /<description>(.*?)<\/description>/;
        const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;
        const sourceRegex = /<source[^>]*?>(.*?)<\/source>/;

        let match;
        while ((match = itemRegex.exec(xmlText)) !== null) {
            const item = match[1];

            const titleRaw = titleRegex.exec(item)?.[1] || '';
            const link = linkRegex.exec(item)?.[1] || '';
            const pubDate = pubDateRegex.exec(item)?.[1] || null;
            const source = sourceRegex.exec(item)?.[1] || 'News Source';

            // Split title and use the part before the source as description
            // Format: "Article Title - Source Name"
            const titleParts = titleRaw.split(' - ');
            const title = titleParts[0].trim();
            const description = titleParts.length > 1 && titleParts[0].length > 50
                ? titleParts[0].trim()
                : `${titleParts[0].trim()} - Latest updates on Colorado entertainment news.`;

            if (title && link) {
                articles.push({
                    title: title,
                    description: description,
                    url: link.trim(),
                    source: source.trim(),
                    published_at: pubDate
                });
            }

            // Limit to 15 articles
            if (articles.length >= 15) break;
        }

        console.log(`Found ${articles.length} articles`);

        return NextResponse.json(articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json({ error: 'Failed to fetch entertainment news.' }, { status: 500 });
    }
}
