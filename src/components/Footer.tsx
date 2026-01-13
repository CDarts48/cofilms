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
            <div style={{ color: '#bbb', fontSize: '0.95rem', marginTop: 8 }}>
                &copy; {new Date().getFullYear()} Colorado Films. All rights reserved.
            </div>
        </footer>
    );
}
