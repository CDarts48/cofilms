'use client';

import React, { CSSProperties } from 'react';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';

interface Festival {
    name: string;
    url: string;
    location: string;
    date: string;
    blocksIframe?: boolean;
}

const festivals: Festival[] = [
    { name: 'Colorado Environmental Film Festival', url: 'https://ceff.net/', location: 'Golden', date: 'February', blocksIframe: true },
    { name: 'Boulder International Film Festival', url: 'https://biff1.com/', location: 'Boulder', date: 'March' },
    { name: 'Durango Independent Film Festival', url: 'https://durangofilm.org/', location: 'Durango', date: 'March' },
    { name: 'Frozen Dead Guy Days Film Festival', url: 'https://frozendeadguydays.com/', location: 'Nederland', date: 'March' },
    { name: "Aspen Short's Fest", url: 'https://aspenfilm.org/our-festivals/shortsfest/', location: 'Aspen', date: 'April' },
    { name: 'Indie Spirit Film Festival', url: 'https://www.indiespiritfilmfestival.org/', location: 'Colorado Springs', date: 'April' },
    { name: 'Mountainfilm', url: 'https://www.mountainfilm.org/', location: 'Telluride', date: 'May - Memorial Day Weekend', blocksIframe: true },
    { name: 'Telluride Film Festival', url: 'https://www.telluridefilmfestival.org/', location: 'Telluride', date: 'August/September - Labor Day Weekend' },
    { name: 'Aspen Filmfest', url: 'https://aspenfilm.org/festivals/aspen-filmfest/', location: 'Aspen', date: 'September' },
    { name: 'Breckenridge Film Festival', url: 'https://breckfilm.org/', location: 'Breckenridge', date: 'September' },
    { name: 'Crested Butte Film Festival', url: 'https://cbfilmfest.org/', location: 'Crested Butte', date: 'September', blocksIframe: true },
    { name: 'Denver Film Festival', url: 'https://denverfilm.org/denverfilmfestival/', location: 'Denver', date: 'November' },
    { name: "Rocky Mountain Women's Film Festival", url: 'https://rmwfilm.org/', location: 'Colorado Springs', date: 'November' },
    { name: 'Vail Film Festival', url: 'https://www.vailfilmfestival.com/', location: 'Vail', date: 'December' },
    { name: 'Emerging Filmmakers Project', url: 'https://www.bugtheatre.org/the-emerging-filmmakers-project', location: 'Denver', date: 'Monthly - Year-round' },
];

const festivalCardStyle: CSSProperties = {
    marginBottom: 24,
    background: '#23283a',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
};

const festivalCardHoverStyle: CSSProperties = {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(255, 180, 0, 0.3)',
};

export default function FilmFestivalsPage(): React.ReactElement {
    return (
        <>
            <BasicHeader />

            <main
                style={{
                    maxWidth: 700,
                    margin: '40px auto',
                    background: '#181c24',
                    color: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    padding: '32px 24px',
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                } as CSSProperties}
            >
                <section style={{ marginBottom: 32 } as CSSProperties}>
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            marginBottom: 8,
                            letterSpacing: 1,
                            color: '#ffb400',
                            textShadow: '1px 2px 8px #0008',
                        } as CSSProperties}
                    >
                        🎬 Colorado Film Festivals Guide
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e0e0e0', marginBottom: 0 } as CSSProperties}>
                        Explore the vibrant film festival scene in Colorado, showcasing local talent and cinematic creativity.<br />
                        <span style={{ color: '#ffb400' }}>Stay tuned for upcoming festivals, events, and opportunities to celebrate film in the heart of Colorado.</span>
                    </p>
                </section>
                <section>
                    <h2
                        style={{
                            fontSize: '1.5rem',
                            marginBottom: 24,
                            color: '#fff',
                            borderBottom: '2px solid #ffb400',
                            paddingBottom: 6,
                            letterSpacing: 0.5,
                        } as CSSProperties}
                    >
                        Film Festivals in Colorado <span style={{ fontWeight: 400, color: '#ffb400' }}>(by Month)</span>
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {festivals.map((festival, index) => (
                            <div
                                key={index}
                                style={festivalCardStyle}
                                onClick={() => window.open(festival.url, '_blank')}
                                onMouseEnter={(e) => {
                                    Object.assign(e.currentTarget.style, festivalCardHoverStyle);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
                                }}
                            >
                                <div style={{
                                    height: '300px',
                                    width: '100%',
                                    position: 'relative',
                                    pointerEvents: 'none',
                                    background: festival.blocksIframe ? 'linear-gradient(135deg, #1a1e2e 0%, #23283a 100%)' : 'transparent'
                                }}>
                                    {!festival.blocksIframe ? (
                                        <>
                                            <iframe
                                                src={festival.url}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none',
                                                    pointerEvents: 'none'
                                                }}
                                                title={festival.name}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'rgba(0,0,0,0.1)'
                                            }} />
                                        </>
                                    ) : (
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            position: 'relative',
                                            background: '#1a1a1a',
                                            overflow: 'hidden'
                                        }}>
                                            {/* Clapboard top with stripes */}
                                            <div style={{
                                                height: '25%',
                                                background: 'repeating-linear-gradient(90deg, #000 0px, #000 30px, #fff 30px, #fff 60px)',
                                                borderBottom: '4px solid #333',
                                                position: 'relative',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
                                            }}>
                                                {/* Hinge circles */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '20px',
                                                    transform: 'translateY(-50%)',
                                                    width: '15px',
                                                    height: '15px',
                                                    borderRadius: '50%',
                                                    background: '#666',
                                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                                                }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    right: '20px',
                                                    transform: 'translateY(-50%)',
                                                    width: '15px',
                                                    height: '15px',
                                                    borderRadius: '50%',
                                                    background: '#666',
                                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                                                }} />
                                            </div>

                                            {/* Clapboard body */}
                                            <div style={{
                                                flex: 1,
                                                background: '#2a2a2a',
                                                padding: '30px 20px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '20px',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <div style={{
                                                    fontSize: '4rem',
                                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                                                }}>🎬</div>
                                                <div style={{
                                                    color: '#ffb400',
                                                    fontSize: '1.8rem',
                                                    fontWeight: 700,
                                                    textAlign: 'center',
                                                    lineHeight: 1.3,
                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                                    maxWidth: '90%'
                                                }}>
                                                    {festival.name}
                                                </div>
                                                <div style={{
                                                    background: 'rgba(255, 180, 0, 0.15)',
                                                    padding: '12px 24px',
                                                    borderRadius: '8px',
                                                    border: '2px solid rgba(255, 180, 0, 0.3)'
                                                }}>
                                                    <div style={{
                                                        color: '#e0e0e0',
                                                        fontSize: '1rem',
                                                        textAlign: 'center',
                                                        marginBottom: '6px'
                                                    }}>
                                                        📍 {festival.location}
                                                    </div>
                                                    <div style={{
                                                        color: '#bbb',
                                                        fontSize: '0.95rem',
                                                        textAlign: 'center',
                                                        fontStyle: 'italic'
                                                    }}>
                                                        📅 {festival.date}
                                                    </div>
                                                </div>
                                                <div style={{
                                                    color: '#888',
                                                    fontSize: '0.9rem',
                                                    textAlign: 'center',
                                                    fontStyle: 'italic',
                                                    marginTop: '8px'
                                                }}>
                                                    Click to visit website →
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div style={{
                                    padding: '16px 20px',
                                    background: 'rgba(24, 28, 36, 0.95)'
                                }}>
                                    <h3 style={{
                                        margin: 0,
                                        marginBottom: '8px',
                                        color: '#ffb400',
                                        fontSize: '1.25rem',
                                        fontWeight: 600
                                    }}>
                                        {festival.name}
                                    </h3>
                                    <div style={{
                                        display: 'flex',
                                        gap: '12px',
                                        color: '#e0e0e0',
                                        fontSize: '0.95rem'
                                    }}>
                                        <span>{festival.location}</span>
                                        <span style={{ color: '#ffb400' }}>•</span>
                                        <span style={{ fontStyle: 'italic', color: '#bbb' }}>{festival.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <ContactSection />
        </>
    );
}
