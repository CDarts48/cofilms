'use client';

import React from 'react';
import Link from 'next/link';

const linkStyle: React.CSSProperties = {
    color: '#FFD700',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'color 0.3s',
    padding: '0.5rem 0.75rem',
    whiteSpace: 'nowrap',
};

export default function BasicHeader(): React.ReactElement {
    return (
        <header style={{
            background: 'rgba(0, 0, 0, 0.9)',
            padding: '0.75rem 1rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            width: '100%',
            boxSizing: 'border-box',
        }}>
            <nav style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                maxWidth: '100%',
                margin: '0 auto',
            }}>
                <Link href="/" style={linkStyle}>
                    Home
                </Link>
                <Link href="/film" style={linkStyle}>
                    Films
                </Link>
                <Link href="/OurPodcast" style={linkStyle}>
                    Podcast
                </Link>
                <Link href="/FilmFestivals" style={linkStyle}>
                    Festivals
                </Link>
                <Link href="/news" style={linkStyle}>
                    News
                </Link>
            </nav>
            <style jsx>{`
                @media (max-width: 768px) {
                    nav {
                        gap: 0.25rem !important;
                        padding: 0.25rem 0;
                    }
                    a {
                        font-size: 0.85rem !important;
                        padding: 0.4rem 0.5rem !important;
                    }
                }
                @media (max-width: 480px) {
                    nav {
                        gap: 0.15rem !important;
                    }
                    a {
                        font-size: 0.75rem !important;
                        padding: 0.3rem 0.4rem !important;
                    }
                }
            `}</style>
        </header>
    );
}
