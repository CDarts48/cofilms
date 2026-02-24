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
    block?: string;
    runtime?: string;
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

                // helper to parse time string like "7:30 PM" or "1:00 PM" into minutes from midnight
                const parseTime = (t?: string): number => {
                    if (!t) return 0;
                    const match = t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
                    if (!match) return 0;
                    let hours = parseInt(match[1], 10);
                    const minutes = parseInt(match[2], 10);
                    const period = match[3].toUpperCase();
                    if (period === 'PM' && hours !== 12) hours += 12;
                    if (period === 'AM' && hours === 12) hours = 0;
                    return hours * 60 + minutes;
                };

                const annotated = data.map((item) => ({
                    item,
                    sortDate: parseDate(item.date),
                    sortTime: parseTime(item.time),
                }));

                // filter out items with a date that has already passed (if a date exists)
                const upcoming = annotated.filter(({ sortDate }) => {
                    if (!sortDate) return true; // keep undated items
                    return sortDate >= startOfToday;
                });

                // sort: dated items ascending by date, then by time, then undated items
                upcoming.sort((a, b) => {
                    if (a.sortDate && b.sortDate) {
                        const dateDiff = a.sortDate.getTime() - b.sortDate.getTime();
                        if (dateDiff !== 0) return dateDiff;
                        // same date, sort by time
                        return a.sortTime - b.sortTime;
                    }
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

                    /* Hide absolutely positioned logos on mobile */
                    .cs-logo-absolute {
                        display: none !important;
                    }

                    /* Show inline logos on mobile */
                    .cs-logo-inline {
                        display: inline-flex !important;
                    }

                    .cs-image {
                        width: 100% !important;
                        height: auto !important;
                        min-height: 180px !important;
                        max-height: 400px !important;
                        object-fit: contain !important;
                        display: block !important;
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

                {/* Jump to Festival Navigation */}
                <div style={styles.festNav}>
                    <span style={styles.festNavLabel}>Jump to:</span>
                    <a href="#scorpius-films" style={styles.festNavLink}>
                        <img src="https://ml1iawgvqz1y.i.optimole.com/w:210/h:54/q:mauto/ig:avif/https://scorpiusfest.com/wp-content/uploads/2025/06/Colored-Logo-large-site.png" alt="Scorpius Fest" style={styles.festNavLogo} />
                    </a>
                </div>

                <div style={styles.list}>
                    {items.length === 0 && (
                        <div style={styles.empty}>No upcoming titles configured yet. Add entries to <code>/public/outNow.json</code>.</div>
                    )}

                    {items.map((item, idx) => {
                        // Determine if this is the first film for each festival
                        const isCEFF = item.link?.includes('ceff2026.eventive.org');
                        const isScorpiusFest = item.link?.includes('scorpiusfest.com');
                        const isIFS = item.link?.includes('internationalfilmseries.com');
                        const isDairy = item.link?.includes('thedairy.org');

                        const isFirstCEFF = isCEFF && !items.slice(0, idx).some(i => i.link?.includes('ceff2026.eventive.org'));
                        const isFirstScorpius = isScorpiusFest && !items.slice(0, idx).some(i => i.link?.includes('scorpiusfest.com'));
                        const isFirstIFS = isIFS && !items.slice(0, idx).some(i => i.link?.includes('internationalfilmseries.com'));
                        const isFirstDairy = isDairy && !items.slice(0, idx).some(i => i.link?.includes('thedairy.org'));

                        let anchorId = undefined;
                        if (isFirstCEFF) anchorId = 'ceff-films';
                        else if (isFirstScorpius) anchorId = 'scorpius-films';
                        else if (isFirstIFS) anchorId = 'ifs-films';
                        else if (isFirstDairy) anchorId = 'dairy-films';

                        return <MovieCard key={idx} item={item} anchorId={anchorId} />;
                    })}
                </div>
            </main>

            <ContactSection />
        </div>
    );
}

function MovieCard({ item, anchorId }: { item: OutNowItem; anchorId?: string }): React.ReactElement {
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
    const isCEFF = item.link?.includes('ceff2026.eventive.org');
    const isScorpiusFest = item.link?.includes('scorpiusfest.com');
    const isIFS = item.link?.includes('internationalfilmseries.com');
    const isDairy = item.link?.includes('thedairy.org');

    return (
        <section id={anchorId} style={styles.card} className="cs-card">
            {/* Absolute positioned logos for desktop - hidden on mobile */}
            {isCEFF && (
                <a href="https://ceff.net" target="_blank" rel="noopener noreferrer" className="cs-logo-absolute">
                    <img src="https://ceff.net/wp-content/uploads/2025/11/CEFF-Logo-2025-Opt-1.png" alt="CEFF" style={styles.ceffLogo} />
                </a>
            )}
            {isScorpiusFest && (
                <a href="https://scorpiusfest.com/" target="_blank" rel="noopener noreferrer" className="cs-logo-absolute">
                    <img src="https://ml1iawgvqz1y.i.optimole.com/w:210/h:54/q:mauto/ig:avif/https://scorpiusfest.com/wp-content/uploads/2025/06/Colored-Logo-large-site.png" alt="Scorpius Fest" style={styles.scorpiusLogo} />
                </a>
            )}
            {isIFS && (
                <a href="https://internationalfilmseries.com/" target="_blank" rel="noopener noreferrer" className="cs-logo-absolute">
                    <img src="https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/275544251_10158824633292725_2530749262065144813_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=id_Z8EomwbgQ7kNvwHb5I0n&_nc_oc=AdkvnpVc3WrHMlrabRaDlF9ZcDJ7Be0IwW8neEea97kWpLnR7veyB6KfW9EzQ1vpUHY&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=zKmAhwijD3RtE9z3DtjBYw&oh=00_Afv42vD125gRKR4LmIv_0U2npRBu3cYth3o-tIsMKyS-pw&oe=6989D0BC" alt="International Film Series" style={styles.ifsLogo} />
                </a>
            )}
            {isDairy && (
                <a href="https://thedairy.org/" target="_blank" rel="noopener noreferrer" className="cs-logo-absolute">
                    <img src="https://media.thedairy.org/wp-content/uploads/2021/08/02163904/ticketformlogo.png" alt="Dairy Arts Center" style={styles.dairyLogo} />
                </a>
            )}
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
                        {/* Title row with inline logo for mobile */}
                        <div style={styles.titleRow} className="cs-titleRow">
                            <h2 style={styles.movieTitle} className="cs-movieTitle">{item.title}</h2>
                            {/* Inline logos for mobile - hidden on desktop */}
                            {isCEFF && (
                                <a href="https://ceff.net" target="_blank" rel="noopener noreferrer" className="cs-logo-inline" style={styles.logoInline}>
                                    <img src="https://ceff.net/wp-content/uploads/2025/11/CEFF-Logo-2025-Opt-1.png" alt="CEFF" style={styles.logoInlineImg} />
                                </a>
                            )}
                            {isScorpiusFest && (
                                <a href="https://scorpiusfest.com/" target="_blank" rel="noopener noreferrer" className="cs-logo-inline" style={styles.logoInline}>
                                    <img src="https://ml1iawgvqz1y.i.optimole.com/w:210/h:54/q:mauto/ig:avif/https://scorpiusfest.com/wp-content/uploads/2025/06/Colored-Logo-large-site.png" alt="Scorpius Fest" style={styles.logoInlineImg} />
                                </a>
                            )}
                            {isIFS && (
                                <a href="https://internationalfilmseries.com/" target="_blank" rel="noopener noreferrer" className="cs-logo-inline" style={styles.logoInline}>
                                    <img src="https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/275544251_10158824633292725_2530749262065144813_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=id_Z8EomwbgQ7kNvwHb5I0n&_nc_oc=AdkvnpVc3WrHMlrabRaDlF9ZcDJ7Be0IwW8neEea97kWpLnR7veyB6KfW9EzQ1vpUHY&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=zKmAhwijD3RtE9z3DtjBYw&oh=00_Afv42vD125gRKR4LmIv_0U2npRBu3cYth3o-tIsMKyS-pw&oe=6989D0BC" alt="International Film Series" style={styles.logoInlineImgSquare} />
                                </a>
                            )}
                            {isDairy && (
                                <a href="https://thedairy.org/" target="_blank" rel="noopener noreferrer" className="cs-logo-inline" style={styles.logoInline}>
                                    <img src="https://media.thedairy.org/wp-content/uploads/2021/08/02163904/ticketformlogo.png" alt="Dairy Arts Center" style={styles.logoInlineImg} />
                                </a>
                            )}
                        </div>
                        {item.block && (
                            <div style={styles.block} className="cs-block">{item.block}</div>
                        )}
                        {item.date ? (
                            <div style={styles.meta} className="cs-meta">{item.date}{item.time ? ` · ${item.time}` : ''}</div>
                        ) : item.year ? (
                            <div style={styles.meta} className="cs-meta">{item.year}</div>
                        ) : null}
                        {item.block && item.runtime && (
                            <div style={styles.runtime } className="cs-runtime ">Block Runtime : {item.runtime}</div>
                        )}
                        {item.venue && (
                            <h3 style={styles.venue} className="cs-venue">{item.venue}</h3>
                        )}
                        {item.description && <p style={styles.description} className="cs-description">{item.description}</p>}
                    </div>

                    <div style={styles.infoBottom}>
                        {isCEFF && (
                            <div style={styles.discountCode}>Use discount code <strong>PARTNER26</strong> to receive 10% off any single session ticket ($15)</div>
                        )}
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
    festNav: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        padding: '16px 20px',
        marginBottom: 24,
        background: '#fff',
        borderRadius: 12,
        border: '1px solid rgba(92,64,51,0.1)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    },
    festNavLabel: {
        fontSize: '1rem',
        fontWeight: 700,
        color: '#5C4033',
    },
    festNavLink: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 12px',
        background: '#f7f1e6',
        borderRadius: 8,
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    },
    festNavLogo: {
        height: 50,
        width: 'auto',
    },
    festNavLogoSquare: {
        height: 50,
        width: 50,
        borderRadius: 6,
    },
    list: {
        display: 'grid',
        // gap: '2rem',
    },
    card: {
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff, #f7f1e6)',
        border: '1px solid rgba(92,64,51,0.06)',
        borderRadius: 12,
        padding: 8,
        color: '#2C1810',
    },
    ceffLogo: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 160,
        height: 80,
        zIndex: 10,
    },
    scorpiusLogo: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 160,
        height: 'auto',
        zIndex: 10,
    },
    ifsLogo: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 80,
        height: 80,
        borderRadius: 8,
        zIndex: 10,
    },
    dairyLogo: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 120,
        height: 'auto',
        zIndex: 10,
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
    titleRow: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
    },
    logoInline: {
        display: 'none', // hidden by default (desktop), shown on mobile via CSS
        flexShrink: 0,
    },
    logoInlineImg: {
        height: 40,
        width: 'auto',
    },
    logoInlineImgSquare: {
        height: 40,
        width: 40,
        borderRadius: 6,
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
    block: {
        margin: 0,
        marginTop: 15,
        padding: 0,
        color: '#8B5E3C',
        fontSize: '0.9rem',
        fontWeight: 600,
        fontStyle: 'italic',
        lineHeight: 1.2,
    },
    description: {
        margin: 0,
        padding: 0,
        color: '#4b3a2f',
        lineHeight: 1.3,
    },
    meta: {
        marginTop: 8,
        padding: 0,
        color: '#6b6b6b',
        fontSize: '0.95rem',
        lineHeight: 1.2,
    },
    runtime : {
        margin: 0,
        marginTop: 4,
        marginBottom: 12,
        padding: 0,
        color: '#6b6b6b',
        fontSize: '0.9rem',
        lineHeight: 1.2,
    },
    venue: {
        margin: 0,
        marginBottom: 15,
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
    discountCode: {
        margin: 0,
        marginBottom: 10,
        padding: '8px 12px',
        background: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: 6,
        color: '#856404',
        fontSize: '0.9rem',
        lineHeight: 1.3,
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
