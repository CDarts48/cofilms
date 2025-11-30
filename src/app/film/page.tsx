'use client';

import React, { useState } from 'react';
import './code.css';
import '../../sections/header/code.css';
import MovieSlider from './slider/Slider';
import BasicHeader from '../../components/BasicHeader';

export default function HeroSection(): React.ReactElement {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    return (
        <div
            className="film-section"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(15px)',
                zIndex: 0,
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <BasicHeader />
                <MovieSlider onImageChange={setBackgroundImage} />
            </div>
        </div>
    );
}
