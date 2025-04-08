import React from 'react';
import Link from 'next/link';
import { Film, Monitor, MapPin, Calendar, Play, Mic, Camera } from 'lucide-react';
import './code.css';

function HeaderContent() {
    return (
        <div className="header-content">
            <div className="header-section">
                <Link href="/film">
                    <div className="header-link">
                        <Film className="header-icon" />
                        <h3 className="header-title">Film</h3>
                    </div>
                </Link>
                <p className="header-description">Explore the world of film production.</p>
            </div>
            <div className="header-section">
                <Link href="/television">
                    <div className="header-link">
                        <Monitor className="header-icon" />
                        <h3 className="header-title">Television</h3>
                    </div>
                </Link>
                <p className="header-description">Discover television production insights.</p>
            </div>
            <div className="header-section">
                <Link href="/locations">
                    <div className="header-link">
                        <MapPin className="header-icon" />
                        <h3 className="header-title">Locations</h3>
                    </div>
                </Link>
                <p className="header-description">Find the perfect shooting locations.</p>
            </div>
            <div className="header-section">
                <Link href="/events">
                    <div className="header-link">
                        <Calendar className="header-icon" />
                        <h3 className="header-title">Events</h3>
                    </div>
                </Link>
                <p className="header-description">Stay updated with film events.</p>
            </div>
            <div className="header-section">
                <Link href="/play">
                    <div className="header-link">
                        <Play className="header-icon" />
                        <h3 className="header-title">Play</h3>
                    </div>
                </Link>
                <p className="header-description">Enjoy the latest film releases.</p>
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
                <Link href="/camera">
                    <div className="header-link">
                        <Camera className="header-icon" />
                        <h3 className="header-title">Camera</h3>
                    </div>
                </Link>
                <p className="header-description">Learn about camera techniques.</p>
            </div>
        </div>
    );
}

export default HeaderContent;