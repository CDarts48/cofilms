"use client";

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
    return (
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: '#ffb400',
        background: '#181c24'
      }}>
        Loading film news...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: '#ff4d4f',
        background: '#181c24'
      }}>
        {error}
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '40px auto',
        background: '#181c24',
        color: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        padding: '32px 24px',
        fontFamily: 'Segoe UI, Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '2.2rem',
          marginBottom: 18,
          letterSpacing: 1,
          color: '#ffb400',
          textShadow: '1px 2px 8px #0008',
        }}
      >
        🎬 Colorado Entertainment News
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '18px 20px',
              backgroundColor: '#23283a',
              boxShadow: '0 2px 8px #0002',
              transition: 'box-shadow 0.2s',
            }}
          >
            <h2 style={{
              margin: '0 0 10px',
              fontSize: '1.25rem',
              color: '#ffb400',
              textShadow: '0 1px 4px #0006'
            }}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#ffb400',
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.target.style.color = '#fff')}
                onMouseOut={e => (e.target.style.color = '#ffb400')}
              >
                {article.title}
              </a>
            </h2>
            <p style={{
              margin: '0 0 10px',
              color: '#e0e0e0',
              fontSize: '1.05rem',
              lineHeight: 1.5
            }}>
              {article.description}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.98rem',
              color: '#bbb',
              marginTop: 8
            }}>
              <span>
                <span style={{ color: '#ffb400' }}>Published:</span>{' '}
                {article.published_at ? new Date(article.published_at).toLocaleString() : 'Unknown'}
              </span>
              <span>
                <span style={{ color: '#ffb400' }}>Source:</span>{' '}
                {article.source || 'Unknown'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}