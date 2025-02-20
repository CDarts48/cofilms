import React from 'react';
import { Film, Monitor, MapPin, Calendar, Play, Mic, Camera } from 'lucide-react';
import './code.css';

function SidebarContent() {
    return (
        <div className="sidebar-content">
            <div className="sidebar-section">
                <Film className="sidebar-icon" />
                <h3 className="sidebar-title">Film</h3>
                <p className="sidebar-description">Explore the world of film production.</p>
            </div>
            <div className="sidebar-section">
                <Monitor className="sidebar-icon" />
                <h3 className="sidebar-title">Television</h3>
                <p className="sidebar-description">Discover television production insights.</p>
            </div>
            <div className="sidebar-section">
                <MapPin className="sidebar-icon" />
                <h3 className="sidebar-title">Locations</h3>
                <p className="sidebar-description">Find the perfect shooting locations.</p>
            </div>
            <div className="sidebar-section">
                <Calendar className="sidebar-icon" />
                <h3 className="sidebar-title">Events</h3>
                <p className="sidebar-description">Stay updated with film events.</p>
            </div>
            <div className="sidebar-section">
                <Play className="sidebar-icon" />
                <h3 className="sidebar-title">Play</h3>
                <p className="sidebar-description">Enjoy the latest film releases.</p>
            </div>
            <div className="sidebar-section">
                <Mic className="sidebar-icon" />
                <h3 className="sidebar-title">Music</h3>
                <p className="sidebar-description">Explore music in film production.</p>
            </div>
            <div className="sidebar-section">
                <Camera className="sidebar-icon" />
                <h3 className="sidebar-title">Camera</h3>
                <p className="sidebar-description">Learn about camera techniques.</p>
            </div>
        </div>
    );
}

export default SidebarContent;