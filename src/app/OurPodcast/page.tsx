'use client';

import React from 'react';
import { Mic, Headphones, Play, Calendar } from 'lucide-react';
import BasicHeader from '../../components/BasicHeader';

export default function OurPodcast() {
    return (
        <>
            <BasicHeader />

            <div style={styles.container}>
                <div style={styles.hero}>
                    <Mic size={64} color="#FFD700" />
                    <h1 style={styles.title}>Colorado Films The Podcast</h1>
                    <p style={styles.subtitle}>
                        Conversations about Colorado's film industry, behind-the-scenes stories,
                        and interviews with filmmakers who call the Rockies home.
                    </p>
                </div>

                <div style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Headphones size={32} style={{ marginRight: '1rem' }} />
                            Coming Soon
                        </h2>
                        <p style={styles.text}>
                            We're working on bringing you exclusive interviews, industry insights,
                            and captivating stories from Colorado's vibrant film community.
                            Stay tuned for our first episode!
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Play size={32} style={{ marginRight: '1rem' }} />
                            What to Expect
                        </h2>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>In-depth interviews with Colorado filmmakers</li>
                            <li style={styles.listItem}>Behind-the-scenes stories from iconic films</li>
                            <li style={styles.listItem}>Insights into Colorado's film industry</li>
                            <li style={styles.listItem}>Location spotlight features</li>
                            <li style={styles.listItem}>Film festival coverage and reviews</li>
                        </ul>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Calendar size={32} style={{ marginRight: '1rem' }} />
                            Subscribe for Updates
                        </h2>
                        <p style={styles.text}>
                            Be the first to know when we launch! Follow us on social media
                            or check back here for the latest updates.
                        </p>
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
};
