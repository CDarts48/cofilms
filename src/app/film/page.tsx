'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, Monitor, MapPin, Calendar, Mic, Camera } from 'lucide-react';
import './code.css';
import '../../sections/header/code.css';
import MovieSlider from './slider/Slider';

export default function HeroSection(): React.ReactElement {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    return (
        <div
            className="film-section"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(15px)',
                zIndex: 0,
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Basic navigation header */}
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
                        <Link href="/Our Podcast" style={{
                            color: '#FFD700',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            transition: 'color 0.3s',
                        }}>
                            Podcast
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

                <MovieSlider onImageChange={setBackgroundImage} />
            </div>
        </div>
    );
}
