'use client';

import React, { useState } from 'react';
import { Mic, Headphones, Play, Calendar } from 'lucide-react';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';
import emailjs from '@emailjs/browser';

export default function ColoradoFilmsThePodcast() {
    const [email, setEmail] = useState('');
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
                    <Mic size={48} color="#FFD700" />
                    <h1 style={styles.title}>Colorado Films The Podcast</h1>
                    <p style={styles.subtitle}>
                        Conversations about Colorado's film industry, behind-the-scenes stories,
                        and interviews with filmmakers who create their art in Colorado.
                    </p>
                    <a
                        href="mailto:info@coloradofilms.com?subject=Sponsorship/Collaboration Inquiry"
                        style={styles.sponsorHeaderLink}
                    >
                        💼 Sponsor / Hire Us
                    </a>
                </div>

                <div style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Play size={24} style={{ marginRight: '0.75rem' }} />
                            Newest Episode
                        </h2>
                        <div style={styles.episodeContainer}>
                            <iframe
                                style={styles.spotifyEmbed}
                                src="https://open.spotify.com/embed/episode/5VU9e3jzptQE3cs9Yvi59M?utm_source=generator"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </div>
                        <a
                            href="https://open.spotify.com/episode/5VU9e3jzptQE3cs9Yvi59M?si=NiC--adsSV6pUsm6n6wPEw"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.spotifyLink}
                        >
                            Open in Spotify →
                        </a>

                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Play size={24} style={{ marginRight: '0.75rem' }} />
                            Archives
                        </h2>
                        <div style={styles.episodeContainer}>
                            <iframe
                                style={styles.spotifyEmbed}
                                src="https://open.spotify.com/embed/episode/3bGQHoPhjJDauQuDzLFQpY?utm_source=generator"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </div>
                        <a
                            href="https://open.spotify.com/episode/3bGQHoPhjJDauQuDzLFQpY?si=U9M3qM7BTjOmDpGrpYZl-g"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.spotifyLink}
                        >
                            Open in Spotify →
                        </a>
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
