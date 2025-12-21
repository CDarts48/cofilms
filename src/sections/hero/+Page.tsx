'use client';

import React from 'react';
import { Film, Mountain, Star } from 'lucide-react';
import './code.css';

function HeroSection(): React.ReactElement {
  return (
    <section className="hero">
      {/* Curtain valance at top */}
      <div className="curtain-valance"></div>

      {/* Curtain tassels */}
      <div className="curtain-tassel curtain-tassel-left"></div>
      <div className="curtain-tassel curtain-tassel-right"></div>

      <div className="hero-content">
        <div className="hero-subtitle">
          <Mountain size={24} style={{ display: 'inline-block', marginRight: '0.5rem' }} />
          Breathtaking Views, Unforgettable Films
        </div>

        <h1 className="hero-title">
          Colorado Films
        </h1>

        <p className="hero-description">
          Your gateway to discovering extraordinary entertainment shaped by the spirit of Colorado.
          From the Rocky Mountains to the Eastern plains, explore the cinematic landscape
          that makes Colorado a film lover's paradise.
        </p>

        <div className="hero-buttons">
          <a href="/FilmFestivals" className="button button-primary">
            <Film size={20} />
            Film Festivals
          </a>
          <a href="/OurPodcast" className="button button-secondary">
            <Star size={20} />
            The Podcast
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
