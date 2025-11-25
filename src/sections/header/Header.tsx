"use client";

import React from 'react';
import './code.css';
import HeaderContent from './headerContent';

export default function Header(): React.ReactElement {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-brand">
                </div>
            </div>
            <nav className="header-menu">
                <HeaderContent />
            </nav>
        </header>
    );
}
