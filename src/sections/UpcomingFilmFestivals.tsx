'use client';

import React, { CSSProperties, useState, useEffect } from 'react';

interface Festival {
    name: string;
    url: string;
    location: string;
    date: string;
    blocksIframe?: boolean;
    previewImage?: string;
}

const festivals: Festival[] = [
    { name: 'Colorado Environmental Film Festival', url: 'https://ceff.net/', location: 'Location: Golden', date: 'February 20th-22nd 2026', blocksIframe: true, previewImage: '/CEFF.png' },
    { name: 'Durango Independent Film Festival', url: 'https://durangofilm.org/', location: 'Durango', date: 'March' },
    { name: 'Boulder International Film Festival', url: 'https://biff1.com/', location: 'Boulder', date: 'April 9th -12th' },
    { name: "Aspen Short's Fest", url: 'https://aspenfilm.org/our-festivals/shortsfest/', location: 'Aspen', date: 'April' },
    { name: 'Indie Spirit Film Festival', url: 'https://www.indiespiritfilmfestival.org/', location: 'Colorado Springs', date: 'April' },
    { name: 'Mountainfilm', url: 'https://www.mountainfilm.org/', location: 'Telluride', date: 'May - Memorial Day Weekend', blocksIframe: true },
    { name: 'Telluride Film Festival', url: 'https://www.telluridefilmfestival.org/', location: 'Telluride', date: 'August/September - Labor Day Weekend' },
    { name: 'Aspen Filmfest', url: 'https://aspenfilm.org/festivals/aspen-filmfest/', location: 'Aspen', date: 'September' },
    { name: 'Breckenridge Film Festival', url: 'https://breckfilm.org/', location: 'Breckenridge', date: 'September' },
    { name: 'Crested Butte Film Festival', url: 'https://cbfilmfest.org/', location: 'Crested Butte', date: 'September', blocksIframe: true },
    { name: 'Denver Film Festival', url: 'https://denverfilm.org/denverfilmfestival/', location: 'Denver', date: 'November' },
    { name: "Rocky Mountain Women's Film Festival", url: 'https://rmwfilm.org/', location: 'Colorado Springs', date: 'November' },
    { name: 'Emerging Filmmakers Project', url: 'https://www.bugtheatre.org/the-emerging-filmmakers-project', location: 'Denver', date: 'Monthly - Year-round' },
];

// Get month number from date string
const getMonthNumber = (dateStr: string): number => {
    const monthMap: { [key: string]: number } = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
        'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    };

    for (const [month, num] of Object.entries(monthMap)) {
        if (dateStr.includes(month)) return num;
    }
    return 13; // Year-round events at the end
};

// Get upcoming festivals based on current month
const getUpcomingFestivals = (): Festival[] => {
    const currentMonth = new Date().getMonth() + 1; // 1-12
    const sortedFestivals = [...festivals].sort((a, b) => getMonthNumber(a.date) - getMonthNumber(b.date));

    // Get festivals from current month onwards, then wrap around
    const upcoming = sortedFestivals.filter(f => getMonthNumber(f.date) >= currentMonth);
    const wrapped = sortedFestivals.filter(f => getMonthNumber(f.date) < currentMonth);

    return [...upcoming, ...wrapped];
};

export default function UpcomingFilmFestivals(): React.ReactElement {
    const [upcomingFestivals] = useState<Festival[]>(getUpcomingFestivals());
    const [nextFestival] = useState<Festival | null>(upcomingFestivals[0] || null);
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState<number>(320);
    const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
    const [isLocationHovered, setIsLocationHovered] = useState<boolean>(false);

    useEffect(() => {
        // Delay iframe loading to prevent auto-scroll
        const timer = setTimeout(() => {
            setIframeLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth < 480) {
                setCardWidth(window.innerWidth - 96); // Full width minus padding
            } else if (window.innerWidth < 768) {
                setCardWidth(280);
            } else {
                setCardWidth(320);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollLeft = (): void => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= cardWidth + 24;
        }
    };

    const scrollRight = (): void => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += cardWidth + 24;
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <h2 style={styles.title}>
                    Upcoming Film Festivals in Colorado
                </h2>
            </div>

            {/* Next Festival Feature Container */}
            {nextFestival && (
                <div style={styles.nextFestivalContainer}>
                    <div style={styles.featuredFestivalContent}>
                        <h4 style={styles.featuredFestivalName}>{nextFestival.name}</h4>
                        <div style={styles.featuredDetails}>
                            <div style={styles.featuredDetailRow}>
                                <a
                                    href="https://www.visitgolden.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        ...styles.locationLink,
                                        color: isLocationHovered ? '#FFB400' : '#e0e0e0',
                                        textDecorationColor: isLocationHovered ? '#FFB400' : 'rgba(255, 180, 0, 0.5)',
                                    }}
                                    onMouseEnter={() => setIsLocationHovered(true)}
                                    onMouseLeave={() => setIsLocationHovered(false)}
                                >
                                    {nextFestival.location}
                                </a>
                                <span style={{ color: '#e0e0e0', margin: '0 0.5rem' }}>•</span>
                                <span style={styles.featuredDetailText}>{nextFestival.date}</span>
                            </div>
                        </div>

                        {/* Show iframe if website allows, otherwise show fallback */}
                        {nextFestival.blocksIframe ? (
                            <div style={styles.previewContainer}>
                                {nextFestival.previewImage && (
                                    <a
                                        href={nextFestival.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', display: 'block', width: '100%' }}
                                    >
                                        <img
                                            src={nextFestival.previewImage}
                                            alt={`${nextFestival.name} preview`}
                                            style={styles.previewImage}
                                        />
                                    </a>
                                )}
                                <a
                                    href={nextFestival.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.featuredFestivalLink}
                                >
                                    Visit Festival Website
                                </a>
                            </div>
                        ) : (
                            <div style={styles.iframeContainer}>
                                {iframeLoaded ? (
                                    <iframe
                                        src={nextFestival.url}
                                        style={styles.festivalIframe}
                                        title={nextFestival.name}
                                        loading="lazy"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div style={styles.iframeLoading}>Loading festival website...</div>
                                )}
                                <a
                                    href={nextFestival.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.featuredFestivalLinkSmall}
                                >
                                    Open in New Tab
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div style={styles.sliderContainer}>
                <button
                    onClick={scrollLeft}
                    style={styles.navButton}
                    aria-label="Scroll left"
                >
                </button>

                <div style={styles.festivalsWrapper} ref={sliderRef}>
                    {upcomingFestivals
                        .filter(festival => festival.name !== nextFestival?.name)
                        .map((festival, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.festivalCard,
                                    width: `${cardWidth}px`,
                                    minWidth: `${cardWidth}px`,
                                }}
                            >
                                <div style={styles.cardContent}>
                                    <h3 style={styles.festivalName}>{festival.name}</h3>

                                    <div style={styles.festivalDetails}>
                                        <div style={styles.detailRow}>
                                            <span style={styles.detailText}>{festival.location}</span>
                                        </div>
                                        <div style={styles.detailRow}>
                                            <span style={styles.detailText}>{festival.date}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={festival.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.festivalLink}
                                    >
                                        Visit Festival Site
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>

                <button
                    onClick={scrollRight}
                    style={styles.navButton}
                    aria-label="Scroll right"
                >
                </button>
            </div>

            <div style={styles.viewAllContainer}>
                <a href="/FilmFestivals" style={styles.viewAllButton}>
                    View All Film Festivals
                </a>
            </div>
        </section>
    );
}

const styles: { [key: string]: CSSProperties } = {
    section: {
        padding: '4rem 2rem',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden',
    },
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem',
    },
    title: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        color: '#FFB400',
        marginBottom: '1rem',
        textShadow: '2px 2px 8px rgba(255, 180, 0, 0.3)',
    },
    subtitle: {
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: '#e0e0e0',
        lineHeight: 1.6,
    },
    nextFestivalContainer: {
        maxWidth: '1200px',
        margin: '0 auto 4rem',
        padding: '3rem',
        background: 'linear-gradient(135deg, #23283a 0%, #1a1f2e 100%)',
        border: '4px solid #FFB400',
        borderRadius: '20px',
        boxShadow: '0 16px 48px rgba(255, 180, 0, 0.4)',
        textAlign: 'center',
    },
    nextFestivalTitle: {
        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
        fontWeight: 700,
        color: '#FFB400',
        marginBottom: '2.5rem',
        textShadow: '2px 2px 12px rgba(255, 180, 0, 0.5)',
        letterSpacing: '0.02em',
    },
    featuredFestivalContent: {
        padding: '2rem',
        background: 'rgba(255, 180, 0, 0.05)',
        borderRadius: '12px',
        border: '2px solid rgba(255, 180, 0, 0.2)',
    },
    featuredFestivalName: {
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '2rem',
        lineHeight: 1.3,
    },
    featuredDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginBottom: '2.5rem',
        alignItems: 'center',
    },
    featuredDetailRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'center',
    },
    featuredIcon: {
        color: '#FFB400',
        flexShrink: 0,
    },
    featuredDetailText: {
        color: '#e0e0e0',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
        fontWeight: 500,
        lineHeight: 1.4,
    },
    locationLink: {
        color: '#e0e0e0',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
        fontWeight: 600,
        lineHeight: 1.4,
        textDecoration: 'underline',
        textDecorationColor: 'rgba(255, 180, 0, 0.5)',
        textUnderlineOffset: '4px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },
    featuredFestivalLink: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1.2rem 2.5rem',
        background: 'linear-gradient(135deg, #FFB400 0%, #FF8C00 100%)',
        color: '#0a0a0a',
        textDecoration: 'none',
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        transition: 'all 0.3s ease',
        boxShadow: '0 6px 20px rgba(255, 180, 0, 0.4)',
    },
    iframeContainer: {
        marginTop: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        width: '100%',
    },
    previewContainer: {
        marginTop: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        width: '100%',
    },
    previewImage: {
        width: '100%',
        height: '800px',
        border: '3px solid #FFB400',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(255, 180, 0, 0.3)',
        objectFit: 'cover',
        cursor: 'pointer',
    },
    festivalIframe: {
        width: '100%',
        height: '800px',
        minHeight: '800px',
        border: '3px solid #FFB400',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        overflow: 'auto',
    },
    iframeLoading: {
        width: '100%',
        height: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 180, 0, 0.1)',
        border: '3px solid #FFB400',
        borderRadius: '12px',
        color: '#FFB400',
        fontSize: '1.2rem',
    },
    featuredFestivalLinkSmall: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.8rem 1.5rem',
        background: 'linear-gradient(135deg, #FFB400 0%, #FF8C00 100%)',
        color: '#0a0a0a',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '0.95rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(255, 180, 0, 0.4)',
    },
    sliderContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        maxWidth: '1400px',
        margin: '0 auto',
    },
    navButton: {
        background: '#FFB400',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#0a0a0a',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        zIndex: 2,
        boxShadow: '0 4px 12px rgba(255, 180, 0, 0.3)',
    },
    festivalsWrapper: {
        display: 'flex',
        gap: '1.5rem',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        padding: '1rem 0',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        flex: 1,
    },
    festivalCard: {
        background: 'linear-gradient(135deg, #23283a 0%, #1a1f2e 100%)',
        borderRadius: '16px',
        padding: '0',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
        overflow: 'hidden',
    },
    cardContent: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '280px',
    },
    festivalName: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#FFB400',
        marginBottom: '1.5rem',
        lineHeight: 1.3,
        minHeight: '3.9rem',
    },
    festivalDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '2rem',
        flex: 1,
    },
    detailRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
    },
    icon: {
        color: '#FFB400',
        flexShrink: 0,
    },
    detailText: {
        color: '#e0e0e0',
        fontSize: '1rem',
        lineHeight: 1.4,
    },
    festivalLink: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.5rem',
        background: '#FFB400',
        color: '#0a0a0a',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '0.95rem',
        transition: 'all 0.3s ease',
        alignSelf: 'flex-start',
        marginTop: 'auto',
    },
    viewAllContainer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
    viewAllButton: {
        display: 'inline-block',
        padding: '1rem 2.5rem',
        background: 'linear-gradient(135deg, #FFB400 0%, #FF8C00 100%)',
        color: '#0a0a0a',
        textDecoration: 'none',
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(255, 180, 0, 0.3)',
    },
};
