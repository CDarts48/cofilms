"use client";

import React from 'react';
import './code.css';
import HeaderContent from './headerContent';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-brand">
          <h1>Colorado Films</h1>
        </div>
      </div>
      <nav className="header-menu">
        <HeaderContent />
      </nav>
    </header>
  );
}

export default Header;