'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

interface Movie {
    imageUrl: string;
    title: string;
    year: string;
    rating: string;
}

interface StylesObject {
    [key: string]: CSSProperties;
}

export default function MovieSlider(): React.ReactElement {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [movieData, setMovieData] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async (): Promise<void> => {
            try {
                const response = await axios.get<Movie[]>('/movies.json');
                setMovieData(response.data);
            } catch (error) {
                console.error('Failed to fetch movie data', error);
            }
        };

        fetchMovies();
    }, []);

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
        maxWidth: 520,
        margin: '40px auto',
        background: 'linear-gradient(135deg, #181c24 70%, #23283a 100%)',
        borderRadius: 18,
        boxShadow: '0 6px 32px #0008',
        padding: '32px 0 24px 0',
        position: 'relative',
        fontFamily: 'Segoe UI, Arial, sans-serif',
    };

    const sliderContainerStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    };

    const navButtonStyle: CSSProperties = {
        background: 'rgba(24,28,36,0.7)',
        border: 'none',
        borderRadius: '50%',
        width: 54,
        height: 54,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 2,
        transition: 'background 0.2s',
        boxShadow: '0 2px 8px #0005',
    };

    const posterContainerStyle: CSSProperties = {
        position: 'relative',
        width: 320,
        height: 480,
        margin: '0 32px',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 6px 32px #000a',
        background: '#111',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
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
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'rgba(24,28,36,0.92)',
        borderRadius: '0 0 12px 12px',
        padding: '18px 18px 14px 18px',
        zIndex: 2,
        boxShadow: '0 -2px 12px #0008',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const movieTitleStyle: CSSProperties = {
        fontSize: '1.35rem',
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
        marginTop: 8,
        fontSize: '1.08rem',
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
            <div style={sliderContainerStyle}>
                <button style={navButtonStyle} onClick={handlePrev} aria-label="Previous">
                    <FaChevronLeft size={32} color="white" />
                </button>

                <div style={posterContainerStyle}>
                    <img
                        src={movieData[currentIndex].imageUrl}
                        style={posterImageStyle}
                        alt={movieData[currentIndex].title}
                    />
                    <div style={movieInfoOverlayStyle}>
                        <h2 style={movieTitleStyle}>{movieData[currentIndex].title}</h2>
                        <div style={movieMetaStyle}>
                            <span>{movieData[currentIndex].year}</span>
                            <div style={ratingContainerStyle}>
                                {movieData[currentIndex].rating}
                            </div>
                        </div>
                    </div>
                </div>

                <button style={navButtonStyle} onClick={handleNext} aria-label="Next">
                    <FaChevronRight size={32} color="white" />
                </button>
            </div>

            <div style={paginationStyle}>
                {movieData.map((_: Movie, i: number) => (
                    <div
                        key={i}
                        style={paginationDotStyle(i === currentIndex)}
                    />
                ))}
            </div>
        </div>
    );
}
