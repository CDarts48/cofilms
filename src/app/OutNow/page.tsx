"use client";

import React, { useEffect, useState, CSSProperties } from 'react';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';
import axios from 'axios';

interface OutNowItem {
    title: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    facebook?: string;
    images?: string[];
    link?: string;
    year?: string;
    date?: string;
    time?: string;
    type?: string;
    free?: boolean;
    logo?: string;
    venue?: string;
    description?: string;
}

export default function OutNowPage(): React.ReactElement {
    const [items, setItems] = useState<OutNowItem[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const res = await axios.get<OutNowItem[]>('/outNow.json');
                const data = res.data || [];

                const today = new Date();
                const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

                // helper to extract a parsable date from various date strings
                const parseDate = (s?: string): Date | null => {
                    if (!s) return null;
                    // try extracting patterns like 'January 22, 2026' or 'Jan 15, 2026'
                    const m = s.match(/([A-Za-z]+\s+\d{1,2},\s*\d{4})/);
                    const dateStr = m ? m[1] : s;
                    const d = new Date(dateStr);
                    return isNaN(d.getTime()) ? null : d;
                };

                const annotated = data.map((item) => ({
                    item,
                    sortDate: parseDate(item.date),
                }));

                // filter out items with a date that has already passed (if a date exists)
                const upcoming = annotated.filter(({ sortDate }) => {
                    if (!sortDate) return true; // keep undated items
                    return sortDate >= startOfToday;
                });

                // sort: dated items ascending, then undated items
                upcoming.sort((a, b) => {
                    if (a.sortDate && b.sortDate) return a.sortDate.getTime() - b.sortDate.getTime();
                    if (a.sortDate && !b.sortDate) return -1;
                    if (!a.sortDate && b.sortDate) return 1;
                    return 0;
                });

                setItems(upcoming.map((x) => x.item));
            } catch (err) {
                console.error('Failed to load out now data', err);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={styles.page}>
            <style>{`
                /* OutNow responsive helpers */
                .cs-card { }
                .cs-cardInner { }
                .cs-media { }
                .cs-image { }
                .cs-info { }
                .cs-visit { }
                .cs-socials { }

                @media (max-width: 720px) {
                    .cs-cardInner {
                        flex-direction: column !important;
                        gap: 12px !important;
                        align-items: stretch !important;
                    }

                    .cs-media {
                        width: 100% !important;
                        height: auto !important;
                        min-height: 180px !important;
                        border-radius: 8px !important;
                    }

                    .cs-image {
                        width: 100% !important;
                        height: auto !important;
                        object-fit: contain !important;
                    }

                    .cs-info {
                        padding: 8px 0 !important;
                    }

                    .cs-visit {
                        display: block !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                    }

                    .cs-socials {
                        flex-wrap: wrap !important;
                        gap: 8px !important;
                    }

                    .cs-movieTitle { font-size: 1.25rem !important; }
                    .cs-meta { font-size: 0.95rem !important; }
                    .cs-venue { font-size: 1rem !important; }
                }

                @media (max-width: 420px) {
                    .cs-media { min-height: 140px !important; }
                    .cs-movieTitle { font-size: 1.1rem !important; }
                    .cs-description { font-size: 0.95rem !important; }
                    .cs-socials { justify-content: flex-start !important; }
                }
            `}</style>
            <BasicHeader />

            <main style={styles.container}>
                <h1 style={styles.title}>Out Now</h1>
                <p style={styles.subtitle}>Films we have on the radar. If you would like your film added please message <a href="mailto:info@coloradofilms.com">info@coloradofilms.com</a></p>

                <div style={styles.list}>
                    {items.length === 0 && (
                        <div style={styles.empty}>No upcoming titles configured yet. Add entries to <code>/public/outNow.json</code>.</div>
                    )}

                    {items.map((item, idx) => (
                        <MovieCard key={idx} item={item} />
                    ))}
                </div>
            </main>

            <ContactSection />
        </div>
    );
}

function MovieCard({ item }: { item: OutNowItem }): React.ReactElement {
    const images = item.images && item.images.length > 0 ? item.images : [];
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (!images.length) return;
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images]);

    const hasImage = images.length > 0;

    return (
        <section style={styles.card} className="cs-card">
            <div style={styles.cardInner} className="cs-cardInner">
                <div style={styles.media} className="cs-media">
                    {hasImage ? (
                        <img className="cs-image" src={images[index]} alt={item.title} style={styles.image} />
                    ) : (
                        <div style={styles.placeholder} className="cs-placeholder">
                            <div style={styles.placeholderText}>Image not available</div>
                            {item.instagram && (
                                <a href={item.instagram} target="_blank" rel="noopener noreferrer" style={styles.linkText}>{item.instagram}</a>
                            )}
                        </div>
                    )}
                </div>

                <div style={styles.info} className="cs-info">
                    <div style={styles.infoTop}>
                        <h2 style={styles.movieTitle} className="cs-movieTitle">{item.title}</h2>
                        {item.date ? (
                            <div style={styles.meta} className="cs-meta">{item.date}{item.time ? ` · ${item.time}` : ''}</div>
                        ) : item.year ? (
                            <div style={styles.meta} className="cs-meta">{item.year}</div>
                        ) : null}
                        {item.venue && (
                            <h3 style={styles.venue} className="cs-venue">{item.venue}</h3>
                        )}
                        {item.description && <p style={styles.description} className="cs-description">{item.description}</p>}
                    </div>

                    <div style={styles.infoBottom}>
                        <div style={styles.controls}>
                            <div style={{ marginLeft: 'auto' }}>
                                <a className="cs-visit" href={item.link || '#'} target="_blank" rel="noopener noreferrer" style={styles.visitButton}>Visit film page</a>
                            </div>
                        </div>

                        {/* Social links (SVGs) */}
                        <div style={styles.socials} className="cs-socials">
                        {item.youtube && (
                            <a href={item.youtube} target="_blank" rel="noopener noreferrer" style={styles.socialButton} aria-label="YouTube">
                                <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <rect width="24" height="24" rx="4" ry="4" fill="#FF0000" />
                                    <path d="M9.5 7.5v9l7-4.5-7-4.5z" fill="#fff" />
                                </svg>
                            </a>
                        )}
                        {item.tiktok && (
                            <a href={item.tiktok} target="_blank" rel="noopener noreferrer" style={styles.socialButton} aria-label="TikTok">
                                <svg width="32" height="32" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <rect x="0" y="0" width="1024" height="1024" rx="160" ry="160" fill="#000" />
                                    <path xmlns="http://www.w3.org/2000/svg" fill="#ED2C58" d="M781.1,430.7v82.5c0,0-62.3,8.9-141.1-44.5c0,31.8,0,63.5,0,95.3c0,64.6,8.4,131.7-21.5,191.5 c-31.3,62.6-93.8,102.4-164,102.4c-36.8,0-71.1-10.6-100-29c33.7,33.3,80,53.8,131.1,53.8c70.3,0,132.7-39.8,164-102.4 c29.9-59.8,21.5-126.9,21.5-191.5c0-31.8,0-63.5,0-95.3c78.8,53.4,141.1,44.5,141.1,44.5V435C801,434.2,790.7,432.7,781.1,430.7z " />
                                </svg>
                            </a>
                        )}
                        {item.facebook && (
                            <a href={item.facebook} target="_blank" rel="noopener noreferrer" style={styles.socialButton} aria-label="Facebook">
                                <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <rect width="24" height="24" rx="4" fill="#1877F2" />
                                    <path d="M15.12 8.5h-1.36c-.66 0-.8.31-.8.78V10.5h2.16l-.28 2.1h-1.88V20h-2.24v-7.4H9.8v-2.1h1.2V9.8c0-1.9 1.08-3.2 3.02-3.2.86 0 1.6.06 1.5.1v1.8z" fill="#fff" />
                                </svg>
                            </a>
                        )}
                        {item.instagram && (
                            <a href={item.instagram} target="_blank" rel="noopener noreferrer" style={styles.socialButton} aria-label="Instagram">
                                <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <defs>
                                        <linearGradient id="instaGrad" x1="0" x2="1" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#feda75" />
                                            <stop offset="20%" stopColor="#fa7e1e" />
                                            <stop offset="40%" stopColor="#d62976" />
                                            <stop offset="60%" stopColor="#962fbf" />
                                            <stop offset="80%" stopColor="#4f5bd5" />
                                        </linearGradient>
                                    </defs>
                                    <rect width="24" height="24" rx="5" fill="url(#instaGrad)" />
                                    <path d="M7 7h10v10H7z" fill="none" />
                                    <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#fff" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
                                </svg>
                            </a>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: CSSProperties } = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #fff8f0 0%, #f6eee6 100%)',
        color: '#2C1810',
    },
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '3rem 1.25rem 6rem',
    },
    title: {
        fontSize: '2.25rem',
        fontWeight: 800,
        color: '#8B5E3C',
        // marginBottom: '0.5rem',
    },
    subtitle: {
        color: '#5C4033',
        // marginBottom: '2rem',
    },
    list: {
        display: 'grid',
        // gap: '2rem',
    },
    card: {
        background: 'linear-gradient(180deg, #ffffff, #f7f1e6)',
        border: '1px solid rgba(92,64,51,0.06)',
        borderRadius: 12,
        padding: 8,
        color: '#2C1810',
    },
    cardInner: {
        display: 'flex',
        gap: 12,
        alignItems: 'stretch',
    },
    media: {
        width: 360,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'block',
    },
    placeholder: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    placeholderText: {
        color: '#6b6b6b',
    },
    linkText: {
        color: '#5C4033',
        textDecoration: 'underline',
        fontSize: '0.85rem',
    },
    info: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    infoTop: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
    },
    infoBottom: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
    },
    movieTitle: {
        margin: 0,
        padding: 0,
        color: '#5C4033',
        fontSize: '1.5rem',
        fontWeight: 800,
        lineHeight: 1.1,
    },
    description: {
        margin: 0,
        padding: 0,
        color: '#4b3a2f',
        lineHeight: 1.3,
    },
    meta: {
        margin: 0,
        padding: 0,
        color: '#6b6b6b',
        fontSize: '0.95rem',
        lineHeight: 1.2,
    },
    venue: {
        margin: 0,
        padding: 0,
        color: '#4b3a2f',
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: 1.2,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 0,
    },
    sliderNav: {
        display: 'flex',
        gap: 8,
    },
    navButton: {
        padding: '8px 12px',
        background: '#ffffff',
        color: '#2C1810',
        border: '1px solid rgba(92,64,51,0.12)',
        borderRadius: 6,
        cursor: 'pointer',
    },
    visitButton: {
        padding: '10px 16px',
        background: '#ffb400',
        color: '#111',
        textDecoration: 'none',
        borderRadius: 6,
        fontWeight: 700,
        boxShadow: '0 6px 16px rgba(0,0,0,0.08)'
    },
    socials: {
        marginTop: 12,
        display: 'flex',
        gap: 10,
        alignItems: 'center',
    },
    socialButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 12,
        background: '#ffffff',
        border: '1px solid rgba(92,64,51,0.06)',
        textDecoration: 'none',
        boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
        transition: 'transform 0.15s ease',
    },
};
