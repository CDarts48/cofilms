'use client'; 

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './code.css';

// Sample movie data - this would come from your database later
const movieData = [
  {
    id: 1,
    title: "The Dark Horizon",
    year: "2024",
    rating: "PG-13",
    imageUrl: "https://api.a0.dev/assets/image?text=cinematic%20sci-fi%20movie%20poster%20dark%20mysterious%20with%20dramatic%20lighting&aspect=2:3"
  },
  {
    id: 2,
    title: "Eternal Echo",
    year: "2024",
    rating: "R",
    imageUrl: "https://api.a0.dev/assets/image?text=dramatic%20romantic%20fantasy%20movie%20poster%20with%20ethereal%20atmosphere&aspect=2:3"
  },
  {
    id: 3,
    title: "City of Dreams",
    year: "2024",
    rating: "PG-13",
    imageUrl: "https://api.a0.dev/assets/image?text=neo-noir%20cyberpunk%20movie%20poster%20with%20neon%20city%20lights&aspect=2:3"
  }
];

export default function MovieSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < movieData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(movieData.length - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="container">
      <div className="gradient">
        <div className="slider-container">
          <button className="nav-button left-button" onClick={handlePrev}>
            <FaChevronLeft size={40} color="white" />
          </button>

          <div className="poster-container">
            <img
              src={movieData[currentIndex].imageUrl}
              className="poster-image"
              alt={movieData[currentIndex].title}
            />
            <div className="poster-gradient">
              <div className="movie-info">
                <h2 className="movie-title">{movieData[currentIndex].title}</h2>
                <div className="movie-meta">
                  <span className="movie-year">{movieData[currentIndex].year}</span>
                  <div className="rating-container">
                    <span className="movie-rating">{movieData[currentIndex].rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="nav-button right-button" onClick={handleNext}>
            <FaChevronRight size={40} color="white" />
          </button>
        </div>

        <div className="pagination">
          {movieData.map((_, i) => (
            <div
              key={i}
              className={`pagination-dot ${i === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}