'use client';

import React from 'react';
import Link from 'next/link';
import { Film, Mountain, Star, ChevronDown, Monitor, MapPin, Calendar, Play, Mic, Camera } from 'lucide-react';
import '../header/code.css';

function HeroSection(): React.ReactElement {
  return (
    <section className="hero">
      {/* Stage lighting navigation at top */}
      <header className="header">
        <div className="header-top">
          <div className="header-brand"></div>
        </div>
        <nav className="header-menu">
          <div className="header-content">
            <div className="header-section">
              <Link href="/film">
                <div className="header-link">
                  <Play className="header-icon" />
                  <h3 className="header-title">Filmed Here</h3>
                </div>
              </Link>
            </div>
            <div className="header-section">
              <Link href="/television">
                <div className="header-link">
                  <Monitor className="header-icon" />
                  <h3 className="header-title">Television</h3>
                </div>
              </Link>
            </div>
            <div className="header-section">
              <Link href="/OurPodcast">
                <div className="header-link">
                  <MapPin className="header-icon" />
                  <h3 className="header-title">Our Podcast</h3>
                </div>
              </Link>
            </div>
            <div className="header-section">
              <Link href="/FilmFestivals">
                <div className="header-link">
                  <Calendar className="header-icon" />
                  <h3 className="header-title">Film Festivals</h3>
                </div>
              </Link>
            </div>
            <div className="header-section">
              <Link href="/music">
                <div className="header-link">
                  <Mic className="header-icon" />
                  <h3 className="header-title">Music</h3>
                </div>
              </Link>
            </div>
            <div className="header-section">
              <Link href="/news">
                <div className="header-link">
                  <Camera className="header-icon" />
                  <h3 className="header-title">News</h3>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Curtain valance at top */}
      <div className="curtain-valance"></div>

      {/* Curtain tassels */}
      <div className="curtain-tassel curtain-tassel-left"></div>
      <div className="curtain-tassel curtain-tassel-right"></div>

      <div className="hero-content">
        <div className="hero-subtitle">
          <Mountain size={24} style={{ display: 'inline-block', marginRight: '0.5rem' }} />
          Where Mountains Meet Cinema
        </div>

        <h1 className="hero-title">
          Colorado Films
        </h1>

        <p className="hero-description">
          Your gateway to discovering extraordinary movies shaped by the spirit of Colorado.
          From the Rocky Mountains to the Western plains, explore the cinematic landscape
          that makes Colorado a filmmaker's paradise.
        </p>

        <div className="hero-buttons">
          <a href="/film" className="button button-primary">
            <Film size={20} />
            Explore Films
          </a>
          <a href="/FilmFestivals" className="button button-secondary">
            <Star size={20} />
            Film Festivals
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-indicator-text">Scroll</span>
        <div className="scroll-indicator-icon"></div>
      </div>
    </section>
  );
}

export default HeroSection;
