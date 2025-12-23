'use client';

import React, { useState } from 'react';
import { Mic, Headphones, Play, Calendar } from 'lucide-react';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';
import emailjs from '@emailjs/browser';

export default function OurPodcast() {
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
                    <Mic size={64} color="#FFD700" />
                    <h1 style={styles.title}>Colorado Films The Podcast</h1>
                    <p style={styles.subtitle}>
                        Conversations about Colorado's film industry, behind-the-scenes stories,
                        and interviews with filmmakers who create their art in Colorado.
                    </p>
                </div>

                <div style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Play size={32} style={{ marginRight: '1rem' }} />
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
                            <Play size={32} style={{ marginRight: '1rem' }} />
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

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Calendar size={32} style={{ marginRight: '1rem' }} />
                            Subscribe for Updates
                        </h2>
                        <p style={styles.text}>
                            Be the first to know when we release new episodes!
                        </p>
                        <form onSubmit={handleSubscribe} style={styles.subscribeForm}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={styles.input}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={styles.input}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    ...styles.subscribeButton,
                                    opacity: isSubmitting ? 0.6 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                }}
                            >
                                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                            </button>
                        </form>
                        {message && <p style={styles.message}>{message}</p>}
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
        paddingTop: '6rem',
    },
    hero: {
        textAlign: 'center',
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '0 auto',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '900',
        marginTop: '1.5rem',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: '#C19A6B',
        lineHeight: '1.8',
        maxWidth: '600px',
        margin: '0 auto',
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
    },
    section: {
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        padding: '2.5rem',
        marginBottom: '2rem',
        border: '2px solid rgba(255, 215, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    },
    sectionTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
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
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        borderRadius: '12px',
        overflow: 'hidden',
    },
    spotifyEmbed: {
        borderRadius: '12px',
    },
    spotifyLink: {
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#1DB954',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '24px',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },
    subscribeForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1.5rem',
        maxWidth: '500px',
    },
    input: {
        padding: '1rem',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '2px solid rgba(255, 215, 0, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: '#FFFFFF',
        outline: 'none',
        transition: 'all 0.3s ease',
    },
    subscribeButton: {
        padding: '1rem 2rem',
        fontSize: '1.125rem',
        fontWeight: '600',
        backgroundColor: '#FFD700',
        color: '#1a0000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    message: {
        marginTop: '1rem',
        fontSize: '1rem',
        fontWeight: '500',
        textAlign: 'center',
    },
};
