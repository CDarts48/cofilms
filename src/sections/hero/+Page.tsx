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
      
        <h1 className="hero-title">
          Colorado Films
        </h1>

        <p className="hero-description">
          Your gateway to discovering extraordinary entertainment shaped by the spirit of Colorado.
          From the Western slope to the Eastern plains, explore what makes Colorado a film lover's paradise.
        </p>

        <div className="hero-buttons">
          <a href="/FilmFestivals" className="button button-primary">
            Film Festivals
          </a>
          <a href="/ColoradoFilmsThePodcast" className="button button-secondary"> 
            The Podcast
          </a>
          <a href="/OutNow" className="button button-secondary"> 
            Films Out Now in Colorado!
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
