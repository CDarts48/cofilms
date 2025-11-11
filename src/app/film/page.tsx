import React from 'react';
import './code.css';
import MovieSlider from './slider/Slider';

export default function HeroSection(): React.ReactElement {
    return (
        <div className="film-section">
            <MovieSlider />
        </div>
    );
}
