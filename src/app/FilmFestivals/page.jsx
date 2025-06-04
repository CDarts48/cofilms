import React from 'react';

export default function FilmFestivalsPage() {
    return (
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
            }}
        >
            <section style={{ marginBottom: 32 }}>
                <h1
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: 8,
                        letterSpacing: 1,
                        color: '#ffb400',
                        textShadow: '1px 2px 8px #0008',
                    }}
                >
                    🎬 Colorado Film Festivals Guide
                </h1>
                <p style={{ fontSize: '1.15rem', color: '#e0e0e0', marginBottom: 0 }}>
                    Explore the vibrant film festival scene in Colorado, showcasing local talent and cinematic creativity.<br />
                    <span style={{ color: '#ffb400' }}>Stay tuned for upcoming festivals, events, and opportunities to celebrate film in the heart of Colorado.</span>
                </p>
            </section>
            <section>
                <h2
                    style={{
                        fontSize: '1.5rem',
                        marginBottom: 18,
                        color: '#fff',
                        borderBottom: '2px solid #ffb400',
                        paddingBottom: 6,
                        letterSpacing: 0.5,
                    }}
                >
                    Film Festivals in Colorado <span style={{ fontWeight: 400, color: '#ffb400' }}>(by Month)</span>
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {/* February */}
                    <li style={festivalItemStyle}>
                        <a href="https://ceff.net/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Colorado Environmental Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Golden <span style={festivalDateStyle}>(February)</span></span>
                    </li>
                    {/* March */}
                    <li style={festivalItemStyle}>
                        <a href="https://biff1.com/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Boulder International Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Boulder <span style={festivalDateStyle}>(March)</span></span>
                    </li>
                    <li style={festivalItemStyle}>
                        <a href="https://durangofilm.org/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Durango Independent Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Durango <span style={festivalDateStyle}>(March)</span></span>
                    </li>
                    <li style={festivalItemStyle}>
                        <a href="https://frozendeadguydays.com/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Frozen Dead Guy Days Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Nederland <span style={festivalDateStyle}>(March)</span></span>
                    </li>
                    {/* April */}
                    <li style={festivalItemStyle}>
                        <a href="https://aspenfilm.org/our-festivals/shortsfest/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Aspen Shortsfest
                        </a>
                        <span style={festivalMetaStyle}> – Aspen <span style={festivalDateStyle}>(April)</span></span>
                    </li>
                    <li style={festivalItemStyle}>
                        <a href="https://www.indiespiritfilmfestival.org/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Indie Spirit Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Colorado Springs <span style={festivalDateStyle}>(April)</span></span>
                    </li>
                    {/* May */}
                    <li style={festivalItemStyle}>
                        <a href="https://www.mountainfilm.org/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Mountainfilm
                        </a>
                        <span style={festivalMetaStyle}> – Telluride <span style={festivalDateStyle}>(Memorial Day Weekend, May)</span></span>
                    </li>
                    {/* August/September */}
                    <li style={festivalItemStyle}>
                        <a href="https://www.telluridefilmfestival.org/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Telluride Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Telluride <span style={festivalDateStyle}>(Labor Day Weekend, Aug/Sept)</span></span>
                    </li>
                    {/* September */}
                    <li style={festivalItemStyle}>
                        <a href="https://aspenfilm.org/festivals/aspen-filmfest/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Aspen Filmfest
                        </a>
                        <span style={festivalMetaStyle}> – Aspen <span style={festivalDateStyle}>(September)</span></span>
                    </li>
                    <li style={festivalItemStyle}>
                        <a href="https://breckfilm.org/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Breckenridge Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Breckenridge <span style={festivalDateStyle}>(September)</span></span>
                    </li>
                    <li style={festivalItemStyle}>
                        <a href="https://cbfilmfest.org/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Crested Butte Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Crested Butte <span style={festivalDateStyle}>(September)</span></span>
                    </li>
                    {/* November */}
                    <li style={festivalItemStyle}>
                        <a href="https://denverfilm.org/denverfilmfestival/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Denver Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Denver <span style={festivalDateStyle}>(November)</span></span>
                    </li>
                    <li style={festivalItemStyle}>
                        <a href="https://rmwfilm.org/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Rocky Mountain Women’s Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Colorado Springs <span style={festivalDateStyle}>(November)</span></span>
                    </li>
                    {/* December */}
                    <li style={festivalItemStyle}>
                        <a href="https://www.vailfilmfestival.com/" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Vail Film Festival
                        </a>
                        <span style={festivalMetaStyle}> – Vail <span style={festivalDateStyle}>(December)</span></span>
                    </li>
                    {/* Monthly */}
                    <li style={festivalItemStyle}>
                        <a href="https://www.bugtheatre.org/the-emerging-filmmakers-project" target="_blank" rel="noopener noreferrer" style={festivalLinkStyle}>
                            Emerging Filmmakers Project
                        </a>
                        <span style={festivalMetaStyle}> – Denver <span style={festivalDateStyle}>(Monthly)</span></span>
                    </li>
                </ul>
            </section>
        </main>
    );
}

// Inline styles
const festivalItemStyle = {
    marginBottom: 18,
    background: '#23283a',
    borderRadius: 8,
    padding: '14px 18px',
    boxShadow: '0 2px 8px #0002',
    display: 'flex',
    alignItems: 'center',
};

const festivalLinkStyle = {
    color: '#ffb400',
    fontWeight: 600,
    fontSize: '1.08rem',
    textDecoration: 'none',
    marginRight: 6,
};

const festivalMetaStyle = {
    color: '#fff',
    fontWeight: 400,
};

const festivalDateStyle = {
    color: '#bbb',
    fontStyle: 'italic',
};