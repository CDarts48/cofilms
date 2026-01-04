'use client';

import React from 'react';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';

export default function Scores() {
    return (
        <>
            <BasicHeader />

            <div style={styles.container}>
                <div style={styles.hero}>
                    <h1 style={styles.title}>Film Scores of Colorado</h1>
                    <p style={styles.subtitle}>
                        Discover the composers, musicians, and orchestras that bring
                        Colorado's cinematic stories to life through music.
                    </p>
                </div>

                <div style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            Coming Soon
                        </h2>
                        <p style={styles.text}>
                            We're compiling an extensive collection of film scores composed
                            and recorded in Colorado. From sweeping orchestral pieces to
                            intimate acoustic performances, explore the soundtracks that
                            define Colorado cinema.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            What to Expect
                        </h2>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Profiles of Colorado-based film composers</li>
                            <li style={styles.listItem}>Iconic film scores recorded in Colorado</li>
                            <li style={styles.listItem}>Recording studios and orchestras</li>
                            <li style={styles.listItem}>Behind-the-scenes stories of score production</li>
                            <li style={styles.listItem}>Interviews with composers and musicians</li>
                        </ul>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            Featured Content
                        </h2>
                        <p style={styles.text}>
                            Check back soon for featured film scores, composer spotlights,
                            and exclusive content about the music that makes Colorado films
                            unforgettable.
                        </p>
                    </section>
                </div>
            </div>
            <ContactSection />
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0000 0%, #2d0a0a 50%, #1a0000 100%)',
        color: '#FFFFFF',
        paddingTop: '1rem',
    },
    hero: {
        textAlign: 'center',
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
};
