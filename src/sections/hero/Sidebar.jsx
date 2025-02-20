"use client";

import React, { useState } from 'react';
import './code.css';
import SidebarContent from './SidebarContent';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="hero-section">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                🎥
            </button>
            <div className={`hero-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <SidebarContent />
            </div>
        </div>
    );
}

export default Sidebar;