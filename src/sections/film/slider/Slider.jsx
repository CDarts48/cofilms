'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import './code.css';

export default function MovieSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movies.json');
        setMovieData(response.data);
      } catch (error) {
        console.error('Failed to fetch movie data', error);
      }
    };

    fetchMovies();
  }, []);

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

  if (movieData.length === 0) {
    return <div>Loading...</div>;
  }

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