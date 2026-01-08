'use client';

import React, { CSSProperties, MouseEvent } from 'react';

interface Feature {
    title: string;
    description: string;
    link: string;
    badge?: string;
}

interface Styles {
    [key: string]: CSSProperties;
}

const features: Feature[] = [
    {
        title: 'Past Episodes',
        description: '',
        link: '/ColoradoFilmsThePodcast'
    },
    {
        title: 'Subscribe',
        description: 'Never miss an episode - subscribe on your favorite platform',
        link: 'https://open.spotify.com/show/0iSGHDK46jWAjAdxVGsAhr'
    },
    // {
    //     badge: 'In Production',
    //     title: 'Western Film History',
    //     description: 'Deep dives into Colorado\'s legendary Western movie heritage',
    //     link: '/under-construction'
    // },
    // {
    //     badge: 'In Production',
    //     title: 'Behind the Scenes',
    //     description: 'Discover the stories behind Colorado\'s iconic filming locations',
    //     link: '/under-construction'
    // }
];

function PodCastSection(): React.ReactElement {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                {/* Decorative Western Border */}
                <div style={styles.borderTop}></div>

                <div style={styles.header}>
                    <h2 style={styles.title}>Colorado Films: The Podcast</h2>

                </div>

                {/* Freshest Episode Container */}
                <div style={styles.freshestEpisodeContainer}>
                    <h3 style={styles.freshestEpisodeTitle}>Most Recent Episode</h3>
                    <div style={styles.episodeCard}>
                        <h4 style={styles.episodeTitle}>Episode 3: A Conversation with Justin Balog</h4>
                        <p style={styles.episodeDescription}>
                            A conversation with Justin Balog about his work, the Colorado's film community, local projects, as well as the rewards & challenges of being a Director of Photography.
                        </p>
                        <div style={styles.buttonGroup}>
                            <a
                                href="https://open.spotify.com/episode/58VIortyTLDPjkPPWUdxNc"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.iconButton}
                                title="Listen on Spotify"
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                            </a>
                            <a
                                href="https://podcasts.apple.com/us/podcast/a-conversation-with-justin-balog/id1860422839?i=1000744049253"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.iconButton}
                                title="Listen on Apple Podcasts"
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={styles.grid}>
                    {features.map((feature, index) => {
                        // Special handling for Subscribe card
                        if (feature.title === 'Subscribe') {
                            return (
                                <div
                                    key={index}
                                    style={styles.card as CSSProperties}
                                >
                                    <h3 style={styles.cardTitle}>{feature.title}</h3>
                                    <p style={styles.cardDescription}>{feature.description}</p>
                                    <div style={styles.subscribeButtonGroup}>
                                        <a
                                            href="https://open.spotify.com/show/0iSGHDK46jWAjAdxVGsAhr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.subscribeButton}
                                            title="Subscribe on Spotify"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://podcasts.apple.com/us/podcast/colorado-films/id1860422839"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.subscribeButton}
                                            title="Subscribe on Apple Podcasts"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            );
                        }

                        // Regular cards
                        return (
                            <a
                                href={feature.link}
                                key={index}
                                style={styles.card as CSSProperties}
                                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(92, 64, 51, 0.3)';
                                }}
                                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(92, 64, 51, 0.2)';
                                }}
                            >
                                {feature.badge && (
                                    <div style={styles.badge}>{feature.badge}</div>
                                )}
                                <h3 style={styles.cardTitle}>{feature.title}</h3>
                                <p style={styles.cardDescription}>{feature.description}</p>
                                <div style={styles.arrow}>→</div>
                            </a>
                        );
                    })}
                </div>

                {/* Decorative Western Border */}
                <div style={styles.borderBottom}></div>
            </div>
        </section>
    );
}

const styles: Styles = {
    section: {
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #F5E6D3 0%, #E8D5C4 50%, #F5E6D3 100%)',
        position: 'relative',
    },
    borderTop: {
        height: '4px',
        background: 'repeating-linear-gradient(90deg, #5C4033 0px, #5C4033 20px, transparent 20px, transparent 40px)',
        marginBottom: '4rem',
    },
    borderBottom: {
        height: '4px',
        background: 'repeating-linear-gradient(90deg, #5C4033 0px, #5C4033 20px, transparent 20px, transparent 40px)',
        marginTop: '4rem',
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    header: {
        textAlign: 'center',
        marginBottom: '5rem',
        maxWidth: '700px',
        margin: '0 auto 5rem',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '700',
        color: '#5C4033',
        marginBottom: '1.5rem',
        letterSpacing: '0.02em',
        fontFamily: 'Georgia, serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#8B7355',
        lineHeight: '1.7',
    },
    freshestEpisodeContainer: {
        maxWidth: '900px',
        margin: '0 auto 5rem',
        padding: '3rem',
        background: 'linear-gradient(135deg, rgba(245, 230, 211, 0.95) 0%, rgba(232, 213, 196, 0.9) 100%)',
        border: '4px solid #8B7355',
        borderRadius: '16px',
        boxShadow: '0 12px 40px rgba(92, 64, 51, 0.3)',
        textAlign: 'center',
    },
    freshestEpisodeTitle: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#5C4033',
        marginBottom: '2rem',
        fontFamily: 'Georgia, serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    videoPlaceholder: {
        width: '100%',
        height: '352px',
        background: '#000',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid #8B7355',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
    },
    episodeCard: {
        background: 'rgba(245, 230, 211, 0.95)',
        borderRadius: '12px',
        padding: '2rem',
        border: '3px solid #8B7355',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    },
    episodeTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#2C1810',
        marginBottom: '1rem',
        fontFamily: 'Georgia, serif',
    },
    episodeDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#5C4033',
        marginBottom: '1.5rem',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    iconButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #8B7355',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        textDecoration: 'none',
    },
    subscribeButtonGroup: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: 'auto',
        paddingTop: '1rem',
    },
    subscribeButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #8B7355',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        textDecoration: 'none',
    },
    videoIframe: {
        width: '100%',
        height: '352px',
        border: 'none',
        borderRadius: '8px',
    },
    placeholderText: {
        fontSize: '1.5rem',
        color: '#2C1810',
        fontWeight: '600',
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'Georgia, serif',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
    },
    card: {
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, rgba(245, 230, 211, 0.9) 0%, rgba(232, 213, 196, 0.8) 100%)',
        backdropFilter: 'blur(10px)',
        border: '3px solid #8B7355',
        borderRadius: '8px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 6px 16px rgba(92, 64, 51, 0.2)',
        position: 'relative',
    },
    iconWrapper: {
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #C19A6B 0%, #A0522D 100%)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 12px rgba(92, 64, 51, 0.3)',
        border: '2px solid #8B7355',
    },
    icon: {
        color: '#2C1810',
    },
    badge: {
        backgroundColor: '#FFD700',
        color: '#5C4033',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        fontSize: '0.875rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '1rem',
        border: '2px solid #8B7355',
        boxShadow: '0 2px 8px rgba(92, 64, 51, 0.2)',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#5C4033',
        marginBottom: '1rem',
        letterSpacing: '0.02em',
        fontFamily: 'Georgia, serif',
    },
    cardDescription: {
        fontSize: '1rem',
        color: '#8B7355',
        lineHeight: '1.6',
        marginBottom: '1rem',
    },
    arrow: {
        fontSize: '1.5rem',
        color: '#C19A6B',
        fontWeight: '700',
        marginTop: 'auto',
    },
};

export default PodCastSection;
