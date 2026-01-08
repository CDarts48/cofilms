'use client';

import React, { useState } from 'react';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';
import emailjs from '@emailjs/browser';

export default function ColoradoFilmsThePodcast() {
    const [email, setEmail] = useState('');
    const [showPastEpisodes, setShowPastEpisodes] = useState(false);
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: name,
                    from_email: email,
                    message: `New podcast subscriber: ${name} (${email})`,
                    to_email: 'info@coloradofilms.com',
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setMessage('✅ Thanks for subscribing! We\'ll keep you updated.');
            setEmail('');
            setName('');
        } catch (error) {
            console.error('Subscription error:', error);
            setMessage('❌ Oops! Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <BasicHeader />

            <div style={styles.container}>
                <div style={styles.hero}>
                    <h1 style={styles.title}>Colorado Films The Podcast</h1>
                    <p style={styles.subtitle}>
                        Conversations about Colorado's film industry, behind-the-scenes stories,
                        and interviews with filmmakers who create their art in Colorado.
                    </p>
                </div>

                <div style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            Latest Episodes
                        </h2>
                        <p style={styles.text}>
                            Listen to our podcast exploring Colorado's film industry, behind-the-scenes stories, and interviews with filmmakers.
                        </p>

                        <div style={styles.episodeCard}>
                            <h3 style={styles.episodeTitle}> Episode 3: A Conversation with Justin Balog</h3>
                            <p style={styles.episodeDescription}>
                                A conversation with Justin Balog about his work in Colorado's film community, insights on producing and promoting local film, and reflections on recent projects. Justin shares stories from his career and advice for emerging filmmakers.
                            </p>
                            <p style={styles.listenLabel}>Listen here:</p>
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

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <button
                                onClick={() => setShowPastEpisodes(!showPastEpisodes)}
                                style={styles.loadAllButton}
                            >
                                {showPastEpisodes ? '▲ Hide Past Episodes' : '▼ Load All Past Episodes'}
                            </button>
                        </div>

                        {showPastEpisodes && (
                            <div style={{ marginTop: '2rem' }}>
                                <div style={styles.episodeCard}>
                                    <h3 style={styles.episodeTitle}> Episode 1: Colorado Films - An Introduction</h3>
                                    <p style={styles.episodeDescription}>
                                        Welcome to Colorado Films The Podcast! Join us as we begin our journey through the state's rich cinematic history.
                                    </p>
                                    <p style={styles.listenLabel}>Listen here:</p>
                                    <div style={styles.buttonGroup}>
                                        <a
                                            href="https://open.spotify.com/episode/3bGQHoPhjJDauQuDzLFQpY"
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
                                            href="https://podcasts.apple.com/us/podcast/colorado-films/id1860422839"
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
                        )}

                    </section>
                    <section style={styles.sponsorSection}>
                        <h2 style={styles.sponsorTitle}>Sponsor / Hire Us</h2>
                        <p style={styles.sponsorText}>
                            Interested in sponsoring our podcast or hiring us for your project?
                            We'd love to hear from you!
                        </p>
                        <a href="mailto:info@coloradofilms.com?subject=Sponsorship/Collaboration Inquiry" style={styles.sponsorButton}>
                            Get in Touch
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0000 0%, #2d0a0a 50%, #1a0000 100%)',
        color: '#FFFFFF',
        paddingTop: '4rem',
        paddingBottom: '2rem',
    },
    hero: {
        textAlign: 'center',
        padding: '2rem 1.5rem',
        maxWidth: '800px',
        margin: '0 auto',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '900',
        marginTop: '1rem',
        marginBottom: '0.75rem',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    subtitle: {
        fontSize: '1rem',
        color: '#C19A6B',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto',
    },
    sponsorHeaderLink: {
        display: 'inline-block',
        marginTop: '1.25rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#FFD700',
        color: '#1a0000',
        textDecoration: 'none',
        borderRadius: '50px',
        fontSize: '0.95rem',
        fontWeight: '700',
        border: '2px solid #FFA500',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.4)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '1rem',
    },
    section: {
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1.25rem',
        border: '2px solid rgba(255, 215, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    },
    sectionTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#FFD700',
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#E8E8E8',
    },
    loadingNote: {
        fontSize: '0.9rem',
        lineHeight: '1.6',
        color: '#C19A6B',
        fontStyle: 'italic',
        marginTop: '1rem',
        marginBottom: '0.5rem',
        textAlign: 'center',
    },
    episodeCard: {
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        border: '2px solid rgba(255, 215, 0, 0.3)',
        transition: 'all 0.3s ease',
    },
    episodeTitle: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#FFD700',
        marginBottom: '0.75rem',
    },
    episodeDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#E8E8E8',
        marginBottom: '1.25rem',
    },
    listenLabel: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#FFD700',
        marginBottom: '0.75rem',
        textAlign: 'center',
    },
    listenButton: {
        display: 'inline-block',
        padding: '0.85rem 2rem',
        backgroundColor: '#1DB954',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #1ed760',
        boxShadow: '0 4px 16px rgba(29, 185, 84, 0.4)',
    },
    appleButton: {
        display: 'inline-block',
        padding: '0.85rem 2rem',
        backgroundColor: '#FC3C44',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #ff4d55',
        boxShadow: '0 4px 16px rgba(252, 60, 68, 0.4)',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    iconButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    loadAllButton: {
        display: 'inline-block',
        padding: '1rem 2.5rem',
        backgroundColor: 'rgba(255, 215, 0, 0.15)',
        color: '#FFD700',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #FFD700',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.3)',
    },
    viewAllButton: {
        display: 'inline-block',
        marginTop: '1.5rem',
        padding: '1rem 2.5rem',
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        color: '#FFD700',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #FFD700',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.3)',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        fontSize: '1.125rem',
        lineHeight: '2',
        color: '#E8E8E8',
        paddingLeft: '2rem',
        position: 'relative',
        marginBottom: '0.75rem',
    },
    episodeContainer: {
        marginTop: '1rem',
        marginBottom: '1rem',
        borderRadius: '12px',
        overflow: 'hidden',
    },
    spotifyEmbed: {
        borderRadius: '12px',
    },
    spotifyLink: {
        display: 'inline-block',
        marginTop: '0.75rem',
        padding: '0.5rem 1.25rem',
        backgroundColor: '#1DB954',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '24px',
        fontWeight: '600',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },
    subscribeForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginTop: '1rem',
        maxWidth: '500px',
    },
    input: {
        padding: '0.75rem',
        fontSize: '0.95rem',
        borderRadius: '8px',
        border: '2px solid rgba(255, 215, 0, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: '#FFFFFF',
        outline: 'none',
        transition: 'all 0.3s ease',
    },
    subscribeButton: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        backgroundColor: '#FFD700',
        color: '#1a0000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    message: {
        marginTop: '0.75rem',
        fontSize: '0.95rem',
        fontWeight: '500',
        textAlign: 'center',
    },
    sponsorSection: {
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.1) 100%)',
        borderRadius: '12px',
        padding: '2rem 1.5rem',
        marginBottom: '1.25rem',
        border: '3px solid rgba(255, 215, 0, 0.4)',
        boxShadow: '0 8px 32px rgba(255, 215, 0, 0.2)',
        textAlign: 'center',
    },
    sponsorTitle: {
        fontSize: '1.75rem',
        fontWeight: '800',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    sponsorText: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#E8E8E8',
        marginBottom: '1.5rem',
        maxWidth: '600px',
        margin: '0 auto 1.5rem',
    },
    sponsorButton: {
        display: 'inline-block',
        padding: '0.85rem 2rem',
        fontSize: '1rem',
        fontWeight: '700',
        backgroundColor: '#FFD700',
        color: '#1a0000',
        textDecoration: 'none',
        borderRadius: '50px',
        border: '2px solid #FFA500',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.4)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
};
