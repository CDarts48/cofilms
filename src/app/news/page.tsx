"use client";

import React, { useEffect, useState, CSSProperties } from 'react';
import BasicHeader from '../../components/BasicHeader';

interface Article {
    url: string;
    title: string;
    description: string;
    published_at: string;
    source: string;
}

const newsCardStyle: CSSProperties = {
    marginBottom: 24,
    background: '#23283a',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    padding: '20px 24px',
};

const newsCardHoverStyle: CSSProperties = {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(255, 180, 0, 0.3)',
};

export default function NewsPage(): React.ReactElement {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async (): Promise<void> => {
            try {
                const response = await fetch('/api/news');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Article[] = await response.json();
                setArticles(data);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Failed to load news articles.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return (
            <>
                <BasicHeader />
                <div style={{
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: '#ffb400',
                    background: '#181c24'
                } as CSSProperties}>
                    Loading film news...
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <BasicHeader />
                <div style={{
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: '#ff4d4f',
                    background: '#181c24'
                } as CSSProperties}>
                    {error}
                </div>
            </>
        );
    }

    return (
        <>
            <BasicHeader />

            <main
                style={{
                    maxWidth: 800,
                    margin: '40px auto',
                    background: '#181c24',
                    color: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    padding: '32px 24px',
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                } as CSSProperties}
            >
                <section style={{ marginBottom: 32 } as CSSProperties}>
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            marginBottom: 8,
                            letterSpacing: 1,
                            color: '#ffb400',
                            textShadow: '1px 2px 8px #0008',
                        } as CSSProperties}
                    >
                        🎬 Colorado Entertainment News
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e0e0e0', marginBottom: 0 } as CSSProperties}>
                        Stay updated with the latest news from Colorado's film industry.<br />
                        <span style={{ color: '#ffb400' }}>Click any article to read the full story.</span>
                    </p>
                </section>

                <section>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {articles.map((article: Article, index: number) => (
                            <div
                                key={index}
                                style={newsCardStyle}
                                onClick={() => window.open(article.url, '_blank')}
                                onMouseEnter={(e) => {
                                    Object.assign(e.currentTarget.style, newsCardHoverStyle);
                                }}
                                onMouseLeave={(e) => {
                                    Object.assign(e.currentTarget.style, newsCardStyle);
                                }}
                            >
                                <h2 style={{
                                    margin: '0 0 12px',
                                    fontSize: '1.4rem',
                                    color: '#ffb400',
                                    fontWeight: 600,
                                } as CSSProperties}>
                                    {article.title}
                                </h2>
                                <p style={{
                                    margin: '0 0 12px',
                                    color: '#e0e0e0',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.6
                                } as CSSProperties}>
                                    {article.description}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.95rem',
                                    color: '#bbb',
                                    marginTop: 12,
                                    paddingTop: 12,
                                    borderTop: '1px solid #333'
                                } as CSSProperties}>
                                    <span>
                                        <span style={{ color: '#ffb400', fontWeight: 600 }}>Published:</span>{' '}
                                        {article.published_at ? new Date(article.published_at).toLocaleDateString() : 'Unknown'}
                                    </span>
                                    <span>
                                        <span style={{ color: '#ffb400', fontWeight: 600 }}>Source:</span>{' '}
                                        {article.source || 'Unknown'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
