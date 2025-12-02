'use client';

import React, { useState, useEffect, CSSProperties, MouseEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

interface Movie {
    title: string;
    imageUrl: string;
    filmingLocations?: string;
    imdbUrl?: string;
}

interface Category {
    name: string;
    keywords: string[];
    icon: string;
}

interface CategorySliderProps {
    category: Category;
    movies: Movie[];
}

interface CategorizedMovies {
    [key: string]: Movie[];
}

interface Styles {
    [key: string]: CSSProperties;
}

// Film categories with keywords to filter movies
const categories: Category[] = [
    {
        name: 'Western Films',
        keywords: ['wide missouri', 'barquero', 'ballad', 'badlands', 'butch cassidy', 'true grit', 'cowboy', 'cat ballou', 'colorado territory', 'denver and rio grande', 'desert scorpion', 'devil\'s doorway', 'duchess and the dirtwater', 'every which way but loose', 'gold rush', 'great k & a train robbery', 'hateful eight', 'lone ranger', 'lone star', 'lucky luke', 'pat and mike', 'riders of the range', 'scarlet west', 'searchers', 'secret of convict lake', 'siege at red river', 'sons of katie elder', 'stagecoach', 'tall tale', 'ticket to tomahawk', 'trail of \'98', 'tracked by bloodhounds', 'unsinkable molly brown', 'vengeance valley', 'viva zapata', 'wolves of the street'],
        icon: '🤠'
    },
    {
        name: 'Action & Thriller',
        keywords: ['cliffhanger', 'die hard', 'fast and furious', 'furious 7', 'geostorm', 'indiana jones', 'lightning jack', 'cop car', 'runaway', 'switchback', 'under siege', 'wargames', 'dangerous love', 'detective pikachu', 'identity thief'],
        icon: '💥'
    },
    {
        name: 'Sports & Adventure',
        keywords: ['art of flight', 'aspen extreme', 'climb dance', 'downhill racer', 'for love of the game', 'one on one', 'winter in vail', 'ice castles', 'bite the bullet'],
        icon: '⛷️'
    },
    {
        name: 'Drama',
        keywords: ['away we go', 'things to do in denver', 'arizona dream', 'broken roads', 'continental divide', 'dear eleanor', 'everybody\'s all-american', 'fidaa', 'frame', 'hacking at leaves', 'misled romance', 'nurse betty', 'on dangerous ground', 'our souls at night', 'out of the depths', 'over the edge', 'p.k. and the kid', 'prestige', 'rain people', 'razor\'s edge', 'rent-a-pal', 'scarecrow', 'silver city', 'stand up and be counted', 'starman', 'takkari donga', 'unglassed windows', 'vanishing point', 'one minute to zero'],
        icon: '🎭'
    },
    {
        name: 'Horror & Thriller',
        keywords: ['shining', 'anatomy of a psycho', 'decampitated', 'elevation', 'elves', 'frankenstein brothers', 'phantoms', 'snowbeast', 'throttle'],
        icon: '👻'
    },
    {
        name: 'Comedy',
        keywords: ['dumb and dumber', 'catch and release', 'national lampoon', 'christmas vacation', 'sleeper', 'even hitler had a girlfriend', 'french gigolo'],
        icon: '😄'
    },
    {
        name: 'Family & Animation',
        keywords: ['detective pikachu', 'wilderness family', 'mountain family robinson', 'new adventures of heidi'],
        icon: '👨‍👩‍👧‍👦'
    },
    {
        name: 'Science Fiction',
        keywords: ['bill, the galactic hero', 'philadelphia experiment', 'star raiders', 'wargames'],
        icon: '🚀'
    },
    {
        name: 'Documentary & Experimental',
        keywords: ['christo\'s valley curtain', 'anticipation of the night', 'aviation cocktail', 'bigger than us', 'fast food nation', 'winter of cyclists'],
        icon: '📹'
    },
    {
        name: 'Independent & Indie',
        keywords: ['colorado c.i.', 'ink', 'endangered species', 'miss arizona', 'finders keepers'],
        icon: '🎬'
    }
];

function CategorySlider({ category, movies }: CategorySliderProps): React.ReactElement | null {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [visibleCount, setVisibleCount] = useState<number>(4);

    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else if (window.innerWidth < 1280) setVisibleCount(3);
            else setVisibleCount(4);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = (): void => {
        if (currentIndex < movies.length - visibleCount) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = (): void => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(Math.max(0, movies.length - visibleCount));
        }
    };

    if (movies.length === 0) return null;

    return (
        <div style={styles.categorySection}>
            <div style={styles.categoryHeader}>
                <span style={styles.categoryIcon}>{category.icon}</span>
                <h3 style={styles.categoryTitle}>{category.name}</h3>
                <span style={styles.movieCount}>({movies.length} films)</span>
            </div>

            <div style={styles.sliderContainer}>
                <button
                    onClick={handlePrev}
                    style={styles.navButton as CSSProperties}
                    onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#8B7355'}
                    onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#C19A6B'}
                >
                    <ChevronLeft size={24} color="#2C1810" />
                </button>

                <div style={styles.moviesWrapper}>
                    <div
                        style={{
                            ...styles.moviesTrack,
                            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                        }}
                    >
                        {movies.map((movie, index) => {
                            return (
                                <div key={index} style={{
                                    ...styles.movieCard,
                                    width: `${100 / visibleCount}%`
                                }}>
                                    <a
                                        href={movie.imdbUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.posterLink as CSSProperties}
                                    >
                                        <div style={styles.posterContainer}>
                                            <img
                                                src={movie.imageUrl}
                                                alt={movie.title}
                                                loading="lazy"
                                                style={styles.poster as CSSProperties}
                                                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                                    e.currentTarget.src = 'https://via.placeholder.com/220x330/5C4033/F5E6D3?text=No+Image';
                                                }}
                                            />
                                            <div style={styles.overlay}>
                                                <h4 style={styles.movieTitle}>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </a>
                                    <h4 style={styles.posterTitle}>{movie.title}</h4>
                                    {movie.filmingLocations && (
                                        <p style={styles.filmingLocation}>📍 {movie.filmingLocations.replace(', Colorado', '')}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    style={styles.navButton as CSSProperties}
                    onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#8B7355'}
                    onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => e.currentTarget.style.background = '#C19A6B'}
                >
                    <ChevronRight size={24} color="#2C1810" />
                </button>
            </div>
        </div>
    );
}

export default function CategorySliders(): React.ReactElement {
    const [allMovies, setAllMovies] = useState<Movie[]>([]);
    const [categorizedMovies, setCategorizedMovies] = useState<CategorizedMovies>({});

    useEffect(() => {
        const fetchMovies = async (): Promise<void> => {
            try {
                const response = await axios.get<Movie[]>('/moviesWithDetails.json');
                const movies = response.data;
                setAllMovies(movies);

                // Categorize movies
                const categorized: CategorizedMovies = {};
                categories.forEach(category => {
                    categorized[category.name] = movies.filter(movie =>
                        category.keywords.some(keyword =>
                            movie.title.toLowerCase().includes(keyword.toLowerCase())
                        )
                    );
                });

                // Add an "All Films" category
                categorized['All Films'] = movies;

                setCategorizedMovies(categorized);
            } catch (error) {
                console.error('Failed to fetch movie data', error);
            }
        };

        fetchMovies();
    }, []);

    if (allMovies.length === 0) {
        return (
            <div style={styles.loading}>
                <div style={styles.loadingText}>Loading Colorado Films...</div>
            </div>
        );
    }

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.mainTitle}>Film Categories</h2>
                    <p style={styles.subtitle}>
                        Explore movies filmed in the beautiful state of Colorado
                    </p>
                </div>

                {categories.map((category, index) => (
                    categorizedMovies[category.name] && categorizedMovies[category.name].length > 0 && (
                        <CategorySlider
                            key={index}
                            category={category}
                            movies={categorizedMovies[category.name]}
                        />
                    )
                ))}

                <div style={styles.viewAllContainer}>
                    <a href="/film" style={styles.viewAllButton}>
                        View All Colorado Films
                    </a>
                </div>
            </div>
        </section>
    );
}

const styles: Styles = {
    section: {
        padding: '6rem 0',
        background: 'linear-gradient(180deg, #F5E6D3 0%, #E8D5C4 100%)',
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    mainTitle: {
        fontSize: '3.5rem',
        fontWeight: '700',
        color: '#5C4033',
        marginBottom: '1rem',
        fontFamily: 'Georgia, serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#8B7355',
        lineHeight: '1.7',
    },
    categorySection: {
        marginBottom: '4rem',
    },
    categoryHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '3px solid #8B7355',
    },
    categoryIcon: {
        fontSize: '2rem',
    },
    categoryTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#5C4033',
        fontFamily: 'Georgia, serif',
        margin: 0,
    },
    movieCount: {
        fontSize: '1rem',
        color: '#8B7355',
        fontWeight: '600',
    },
    sliderContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    },
    navButton: {
        background: '#C19A6B',
        border: '2px solid #8B7355',
        borderRadius: '8px',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(92, 64, 51, 0.3)',
        flexShrink: 0,
    },
    moviesWrapper: {
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
    },
    moviesTrack: {
        display: 'flex',
        transition: 'transform 0.5s ease',
    },
    movieCard: {
        padding: '0 0.5rem',
        flexShrink: 0,
    },
    posterContainer: {
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 6px 16px rgba(92, 64, 51, 0.3)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        border: '3px solid #8B7355',
        aspectRatio: '2/3',
    },
    poster: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(92, 64, 51, 0.95) 100%)',
        padding: '2rem 1rem 1rem',
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease',
    },
    movieTitle: {
        color: '#F5E6D3',
        fontSize: '1rem',
        fontWeight: '700',
        margin: 0,
        lineHeight: '1.3',
        fontFamily: 'Georgia, serif',
    },
    viewAllContainer: {
        textAlign: 'center',
        marginTop: '4rem',
    },
    viewAllButton: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '1.25rem 3rem',
        background: 'linear-gradient(135deg, #C19A6B 0%, #A0522D 100%)',
        color: '#2C1810',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: '700',
        fontSize: '1.1rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 12px rgba(139, 115, 85, 0.4)',
        border: '2px solid #A0522D',
    },
    loading: {
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #F5E6D3 0%, #E8D5C4 100%)',
    },
    loadingText: {
        fontSize: '1.5rem',
        color: '#8B7355',
        fontFamily: 'Georgia, serif',
    },
    posterTitle: {
        color: '#5C4033',
        fontSize: '0.9rem',
        fontWeight: '600',
        margin: '0.75rem 0 0 0',
        padding: '0 0.5rem',
        lineHeight: '1.3',
        fontFamily: 'Georgia, serif',
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    },
    filmingLocation: {
        color: '#8B7355',
        fontSize: '0.75rem',
        fontWeight: '500',
        margin: '0.35rem 0 0 0',
        padding: '0 0.5rem',
        lineHeight: '1.2',
        fontFamily: 'Georgia, serif',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    posterLink: {
        textDecoration: 'none',
        display: 'block',
        cursor: 'pointer',
    },
};
