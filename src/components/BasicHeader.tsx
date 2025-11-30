'use client';

import React from 'react';
import Link from 'next/link';

export default function BasicHeader(): React.ReactElement {
    return (
        <header style={{
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '1rem 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
        }}>
            <nav style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                <Link href="/" style={{
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                }}>
                    Home
                </Link>
                <Link href="/film" style={{
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                }}>
                    Films
                </Link>
                <Link href="/television" style={{
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                }}>
                    Television
                </Link>
                <Link href="/OurPodcast" style={{
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                }}>
                    Colorado Films The Podcast
                </Link>
                <Link href="/FilmFestivals" style={{
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                }}>
                    Festivals
                </Link>
                <Link href="/news" style={{
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                }}>
                    News
                </Link>
            </nav>
        </header>
    );
}
