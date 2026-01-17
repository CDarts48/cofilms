import React from 'react';

const footerStyle: React.CSSProperties = {
    width: '100%',
    background: '#181c24',
    color: '#fff',
    padding: '32px 0 16px 0',
    textAlign: 'center',
    borderTop: '2px solid #ffb400',
    marginTop: 48,
    fontFamily: 'Segoe UI, Arial, sans-serif',
};

const logoStyle: React.CSSProperties = {
    height: 48,
    marginBottom: 12,
};

const linkStyle: React.CSSProperties = {
    color: '#ffb400',
    margin: '0 12px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1.05rem',
};

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <img
                src="/colorado-flag-medium.png"
                alt="Colorado Films Logo"
                style={logoStyle}
            />
            <div style={{ marginBottom: 8 }}>
                <a href="mailto:info@cofilms.org" style={linkStyle}>Contact</a>
                <a href="/" style={linkStyle}>Home</a>
                <a href="/organizations" style={linkStyle}>Organizations</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 18, margin: '18px 0' }}>
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61585835874209" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="32" height="32" style={{ display: 'block' }} />
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@filmcolorado" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <img src="https://external-content.duckduckgo.com/ip3/www.tiktok.com.ico" alt="TikTok" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com/AColoradoFilm" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    <img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="X (Twitter)" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/filmcolo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="32" height="32" style={{ display: 'block', borderRadius: 6 }} />
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/channel/UCxjCE0wyXTJ3P9L_uVH9cGQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
                {/* Spotify */}
                <a href="https://open.spotify.com/show/0iSGHDK46jWAjAdxVGsAhr" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/colorado-films/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
                {/* Bluesky */}
                <a href="https://bsky.app/profile/coloradofilms.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
                    <img src="https://bsky.app/static/apple-touch-icon.png" alt="Bluesky" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
                {/* Apple Podcasts */}
                <a href="https://podcasts.apple.com/us/podcast/colorado-films/id1860422839" target="_blank" rel="noopener noreferrer" aria-label="Apple Podcasts">
                    <img src="https://marketing.services.apple/mdsa/assets/storage/blobs/images/64dbe2a8587a700007115373/en-us-large@2x.png" alt="Apple Podcasts" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
            </div>
            <div style={{ color: '#bbb', fontSize: '0.95rem', marginTop: 8 }}>
                &copy; {new Date().getFullYear()} Colorado Films. All rights reserved.
            </div>
        </footer>
    );
}
