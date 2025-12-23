'use client';

import React from 'react';
import { Hammer, Mountain, Film, ArrowLeft } from 'lucide-react';
import BasicHeader from '../../components/BasicHeader';
import './styles.css';

export default function UnderConstruction() {
    return (
        <>
            <BasicHeader />

            <div style={styles.container}>
                {/* Wooden Sign Frame */}
                <div style={styles.signFrame}>
                    <div style={styles.signTop}></div>

                    <div style={styles.signBoard}>
                        {/* Corner Nails */}
                        <div style={{ ...styles.nail, top: '20px', left: '20px' }}></div>
                        <div style={{ ...styles.nail, top: '20px', right: '20px' }}></div>
                        <div style={{ ...styles.nail, bottom: '20px', left: '20px' }}></div>
                        <div style={{ ...styles.nail, bottom: '20px', right: '20px' }}></div>

                        {/* Content */}
                        <div style={styles.content}>
                            <Hammer size={80} color="#8B4513" style={styles.hammer} />

                            <h1 style={styles.title}>Under Construction</h1>

                            <div style={styles.divider}>
                                <Mountain size={32} color="#C19A6B" />
                                <div style={styles.dividerLine}></div>
                                <Film size={32} color="#C19A6B" />
                            </div>

                            <p style={styles.message}>
                                We're busy building something special for Colorado Films!
                                <br />
                                This section is currently under construction.
                            </p>

                            <p style={styles.submessage}>
                                Like the old mining towns of Colorado, we're laying the foundation
                                for something great. Check back soon to see what we've built!
                            </p>

                            <a href="/" style={styles.backButton}>
                                <ArrowLeft size={20} />
                                Back to Home
                            </a>
                        </div>
                    </div>

                    {/* Wooden Posts */}
                    <div style={styles.postLeft}></div>
                    <div style={styles.postRight}></div>
                </div>
            </div>
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #E8D5C4 0%, #D4B896 50%, #C19A6B 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
    },
    signFrame: {
        position: 'relative',
        maxWidth: '800px',
        width: '100%',
    },
    signTop: {
        height: '40px',
        background: 'linear-gradient(90deg, #654321 0%, #8B4513 50%, #654321 100%)',
        borderRadius: '8px 8px 0 0',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
        marginBottom: '-10px',
        position: 'relative',
        zIndex: 2,
    },
    signBoard: {
        background: 'linear-gradient(135deg, #DEB887 0%, #D2B48C 50%, #C19A6B 100%)',
        border: '8px solid #654321',
        borderRadius: '12px',
        padding: '4rem 3rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        backgroundImage: `
            repeating-linear-gradient(90deg, 
                transparent 0px, 
                transparent 50px, 
                rgba(101, 67, 33, 0.1) 50px, 
                rgba(101, 67, 33, 0.1) 52px
            )
        `,
    },
    nail: {
        position: 'absolute',
        width: '16px',
        height: '16px',
        background: 'radial-gradient(circle, #2C1810 0%, #1a0f0a 100%)',
        borderRadius: '50%',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    content: {
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
    },
    hammer: {
        marginBottom: '2rem',
        filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3))',
        animation: 'swing 2s ease-in-out infinite',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '900',
        color: '#5C4033',
        marginBottom: '2rem',
        fontFamily: 'Georgia, serif',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
    },
    dividerLine: {
        width: '100px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, #8B7355 50%, transparent 100%)',
    },
    message: {
        fontSize: '1.5rem',
        color: '#5C4033',
        marginBottom: '1.5rem',
        lineHeight: '1.8',
        fontWeight: '600',
    },
    submessage: {
        fontSize: '1.125rem',
        color: '#8B7355',
        marginBottom: '3rem',
        lineHeight: '1.7',
        maxWidth: '600px',
        margin: '0 auto 3rem',
    },
    backButton: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 2.5rem',
        backgroundColor: '#8B4513',
        color: '#F5E6D3',
        textDecoration: 'none',
        borderRadius: '8px',
        fontSize: '1.125rem',
        fontWeight: '700',
        border: '3px solid #654321',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    postLeft: {
        position: 'absolute',
        bottom: '-150px',
        left: '10%',
        width: '30px',
        height: '200px',
        background: 'linear-gradient(180deg, #8B4513 0%, #654321 100%)',
        boxShadow: 'inset -4px 0 8px rgba(0, 0, 0, 0.4), 4px 0 12px rgba(0, 0, 0, 0.3)',
        zIndex: 0,
    },
    postRight: {
        position: 'absolute',
        bottom: '-150px',
        right: '10%',
        width: '30px',
        height: '200px',
        background: 'linear-gradient(180deg, #8B4513 0%, #654321 100%)',
        boxShadow: 'inset 4px 0 8px rgba(0, 0, 0, 0.4), -4px 0 12px rgba(0, 0, 0, 0.3)',
        zIndex: 0,
    },
    tumbleweed1: {
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        fontSize: '3rem',
        opacity: 0.3,
        animation: 'roll 20s linear infinite',
    },
    tumbleweed2: {
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        fontSize: '2rem',
        opacity: 0.25,
        animation: 'roll 25s linear infinite reverse',
    },
};
