'use client';

import React, { CSSProperties, MouseEvent } from 'react';
import { Film, Mountain, Users, Calendar, MapPin, Award, LucideIcon } from 'lucide-react';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    link: string;
}

interface Styles {
    [key: string]: CSSProperties;
}

const features: Feature[] = [
    {
        icon: Film,
        title: 'Listen Now',
        description: 'Tune in to our latest episodes exploring Colorado cinema',
        link: '/OurPodcast'
    },
    {
        icon: MapPin,
        title: 'Behind the Scenes',
        description: 'Discover the stories behind Colorado\'s iconic filming locations',
        link: '/OurPodcast'
    },
    {
        icon: Users,
        title: 'Featured Guests',
        description: 'Hear from filmmakers, actors, and industry professionals',
        link: '/OurPodcast'
    },
    {
        icon: Mountain,
        title: 'Western Film History',
        description: 'Deep dives into Colorado\'s legendary Western movie heritage',
        link: '/OurPodcast'
    },
    {
        icon: Award,
        title: 'Subscribe',
        description: 'Never miss an episode - subscribe on your favorite platform',
        link: '/OurPodcast'
    }
];

function WesternFeaturesSection(): React.ReactElement {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                {/* Decorative Western Border */}
                <div style={styles.borderTop}></div>

                <div style={styles.header}>
                    <h2 style={styles.title}>Colorado Films: The Podcast</h2>
                    <p style={styles.subtitle}>
                        Join us as we explore the stories behind Colorado's cinematic legacy
                    </p>
                </div>

                <div style={styles.grid}>
                    {features.map((feature, index) => (
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
                            <div style={styles.iconWrapper}>
                                <feature.icon size={32} style={styles.icon} />
                            </div>
                            <h3 style={styles.cardTitle}>{feature.title}</h3>
                            <p style={styles.cardDescription}>{feature.description}</p>
                            <div style={styles.arrow}>→</div>
                        </a>
                    ))}
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

export default WesternFeaturesSection;
