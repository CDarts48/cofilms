'use client';

import React from 'react';
import { Film, Mountain, Star, ChevronDown } from 'lucide-react';

function HeroSection(): JSX.Element {
  return (
    <section className="hero">
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
