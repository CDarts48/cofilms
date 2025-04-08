import React from 'react';
import './code.css';

function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        background: "url('/Peaks.png') center/100% 100% no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Colorado Films</h1>
        <p className="hero-description">
        Colorado Films is your gateway to discovering movies shaped by the spirit of Colorado.</p>
        <a href="#explore" className="explore-button">
          Explore Now
        </a>
      </div>
    </section>
  );
}

export default HeroSection;