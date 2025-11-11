import React from 'react';
import Link from 'next/link';
import { Film, Monitor, MapPin, Calendar, Play, Mic, Camera } from 'lucide-react';
import './code.css';

export default function HeaderContent(): React.ReactElement {
    return (
        <div className="header-content">
            <div className="header-section">
                <Link href="/film">
                    <div className="header-link">
                        <Play className="header-icon" />
                        <h3 className="header-title">Filmed Here</h3>
                    </div>
                </Link>
                <p className="header-description">Movies filmed in Colorado.</p>
            </div>
            <div className="header-section">
                <Link href="/television">
                    <div className="header-link">
                        <Monitor className="header-icon" />
                        <h3 className="header-title">Television</h3>
                    </div>
                </Link>
                <p className="header-description">Television Shows filmed in Colorado.</p>
            </div>
            <div className="header-section">
                <Link href="/locations">
                    <div className="header-link">
                        <MapPin className="header-icon" />
                        <h3 className="header-title">Shows</h3>
                    </div>
                </Link>
                <p className="header-description">Find the perfect shooting locations.</p>
            </div>
            <div className="header-section">
                <Link href="/FilmFestivals">
                    <div className="header-link">
                        <Calendar className="header-icon" />
                        <h3 className="header-title">Film Festivals</h3>
                    </div>
                </Link>
                <p className="header-description">Stay updated with film festivals.</p>
            </div>
            <div className="header-section">
                <Link href="/music">
                    <div className="header-link">
                        <Mic className="header-icon" />
                        <h3 className="header-title">Music</h3>
                    </div>
                </Link>
                <p className="header-description">Explore music in film production.</p>
            </div>
            <div className="header-section">
                <Link href="/news">
                    <div className="header-link">
                        <Camera className="header-icon" />
                        <h3 className="header-title">News</h3>
                    </div>
                </Link>
                <p className="header-description">Hot off the Press.</p>
            </div>
        </div>
    );
}
