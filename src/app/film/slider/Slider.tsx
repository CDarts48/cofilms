'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

interface Movie {
    imageUrl: string;
    title: string;
    year?: string;
    rating?: string;
    description?: string;
    wikipediaUrl?: string;
    thumbnail?: string;
    filmingLocations?: string;
    imdbUrl?: string;
}

interface StylesObject {
    [key: string]: CSSProperties;
}

interface MovieSliderProps {
    onImageChange?: (imageUrl: string) => void;
}

export default function MovieSlider({ onImageChange }: MovieSliderProps): React.ReactElement {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [movieData, setMovieData] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async (): Promise<void> => {
            try {
                console.log('Fetching movies from /moviesWithDetails.json');
                const response = await axios.get<Movie[]>('/moviesWithDetails.json');
                console.log('Movies loaded:', response.data.length);
                setMovieData(response.data);
            } catch (error) {
                console.error('Failed to fetch movie data:', error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        if (movieData.length > 0 && onImageChange) {
            onImageChange(movieData[currentIndex].imageUrl);
        }
    }, [currentIndex, movieData, onImageChange]);

    const handleNext = (): void => {
        if (currentIndex < movieData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = (): void => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(movieData.length - 1);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    if (movieData.length === 0) {
        return (
            <div style={{
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffb400',
                fontSize: '1.3rem',
                background: '#181c24',
                borderRadius: 16,
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
            }}>
                Loading...
            </div>
        );
    }

    const containerStyle: CSSProperties = {
        maxWidth: 1400,
        margin: '0 auto',
        padding: '20px',
        position: 'relative',
        fontFamily: 'Segoe UI, Arial, sans-serif',
    };

    const sliderContainerStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '40px',
        position: 'relative',
    };

    const navButtonStyle: CSSProperties = {
        background: 'rgba(24,28,36,0.85)',
        border: 'none',
        borderRadius: '50%',
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        transition: 'all 0.3s',
        boxShadow: '0 4px 16px #0008',
    };

    const navButtonLeftStyle: CSSProperties = {
        ...navButtonStyle,
        left: '20px',
    };

    const navButtonRightStyle: CSSProperties = {
        ...navButtonStyle,
        right: '20px',
    };

    const posterContainerStyle: CSSProperties = {
        position: 'relative',
        width: 480,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const posterImageContainerStyle: CSSProperties = {
        width: '100%',
        height: 720,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 12px 48px rgba(0,0,0,0.6)',
        background: '#111',
        transition: 'transform 0.3s ease',
    };

    const descriptionContainerStyle: CSSProperties = {
        flex: 1,
        maxWidth: 700,
        padding: '20px',
        background: 'rgba(24,28,36,0.95)',
        borderRadius: 12,
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        color: '#e0e0e0',
        lineHeight: 1.6,
        fontSize: '1rem',
        animation: 'slideDown 0.3s ease-out',
    };

    const descriptionTitleStyle: CSSProperties = {
        color: '#ffb400',
        fontSize: '1.4rem',
        fontWeight: 700,
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    };

    const wikipediaLinkStyle: CSSProperties = {
        display: 'inline-block',
        marginTop: '16px',
        padding: '8px 16px',
        background: '#ffb400',
        color: '#181c24',
        textDecoration: 'none',
        borderRadius: 6,
        fontWeight: 600,
        transition: 'background 0.2s',
    };

    const posterImageStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        borderRadius: 12,
        boxShadow: '0 2px 12px #0008',
    };

    const movieInfoOverlayStyle: CSSProperties = {
        width: '100%',
        background: 'rgba(24,28,36,0.92)',
        borderRadius: '12px',
        padding: '14px 16px 12px',
        marginBottom: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
    };

    const movieTitleStyle: CSSProperties = {
        fontSize: '1.3rem',
        fontWeight: 700,
        margin: 0,
        color: '#ffb400',
        letterSpacing: 0.5,
        textShadow: '1px 2px 8px #0008',
    };

    const movieMetaStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 6,
        fontSize: '1rem',
        color: '#e0e0e0',
    };

    const ratingContainerStyle: CSSProperties = {
        background: '#23283a',
        borderRadius: 8,
        padding: '2px 10px',
        marginLeft: 8,
        color: '#ffb400',
        fontWeight: 600,
        fontSize: '1.02rem',
        boxShadow: '0 1px 4px #0004',
    };

    const paginationStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        gap: 10,
    };

    const paginationDotStyle = (active: boolean): CSSProperties => ({
        width: active ? 18 : 10,
        height: 10,
        borderRadius: 8,
        background: active ? '#ffb400' : '#444',
        transition: 'all 0.2s',
        boxShadow: active ? '0 2px 8px #ffb40088' : 'none',
        opacity: active ? 1 : 0.7,
    });

    return (
        <div style={containerStyle}>
            <button style={navButtonLeftStyle} onClick={handlePrev} aria-label="Previous">
                <FaChevronLeft size={28} color="white" />
            </button>

            <button style={navButtonRightStyle} onClick={handleNext} aria-label="Next">
                <FaChevronRight size={28} color="white" />
            </button>

            <div style={sliderContainerStyle}>
                <div style={posterContainerStyle}>
                    <div style={posterImageContainerStyle}>
                        <img
                            src={movieData[currentIndex].imageUrl}
                            style={posterImageStyle}
                            alt={movieData[currentIndex].title}
                        />
                    </div>
                </div>

                {movieData[currentIndex].description && (
                    <div style={descriptionContainerStyle}>
                        <div style={movieInfoOverlayStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <h2 style={movieTitleStyle}>{movieData[currentIndex].title}</h2>
                                {movieData[currentIndex].year && (
                                    <span style={{ fontSize: '1rem', color: '#e0e0e0' }}>{movieData[currentIndex].year}</span>
                                )}
                                {movieData[currentIndex].rating && (
                                    <div style={ratingContainerStyle}>
                                        {movieData[currentIndex].rating}
                                    </div>
                                )}
                            </div>
                        </div>
                        <p style={{ margin: 0 }}>{movieData[currentIndex].description}</p>
                        {movieData[currentIndex].filmingLocations && (
                            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255, 180, 0, 0.2)' }}>
                                <strong style={{ color: '#ffb400' }}>Filmed in Colorado:</strong>
                                <p style={{ margin: '6px 0 0 0', color: '#e0e0e0' }}>
                                    {movieData[currentIndex].filmingLocations}
                                </p>
                            </div>
                        )}
                        {movieData[currentIndex].imdbUrl && (
                            <a
                                href={movieData[currentIndex].imdbUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    marginTop: '16px',
                                    padding: '10px 20px',
                                    background: '#ffb400',
                                    color: '#181c24',
                                    textDecoration: 'none',
                                    borderRadius: 6,
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#ffc733';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 180, 0, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#ffb400';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Learn More on IMDB →
                            </a>
                        )}
                    </div>
                )}
            </div>

            <div style={paginationStyle}>
                {Array.isArray(movieData) && movieData.map((_: Movie, i: number) => (
                    <div
                        key={i}
                        style={paginationDotStyle(i === currentIndex)}
                    />
                ))}
            </div>
        </div>
    );
}
