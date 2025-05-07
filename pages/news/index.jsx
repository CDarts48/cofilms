import React, { useEffect, useState } from 'react';

export default function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
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
    return <p>Loading news articles...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Colorado Entertainment News</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h2 style={{ margin: '0 0 8px' }}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#0070f3' }}
              >
                {article.title}
              </a>
            </h2>
            <p style={{ margin: '0 0 8px' }}>{article.description}</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
              Published: {article.published_at ? new Date(article.published_at).toLocaleString() : 'Unknown'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}