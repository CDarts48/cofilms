'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import MovieSlider from './slider/Slider';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';
import MoviesWatchedSlider from '../../components/MoviesWatchedSlider';

export default function FilmsPage(): React.ReactElement {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    return (
        <div className={styles['film-section']}>
            {/* Header Section */}
            <section className={styles['films-header-section']}>
                <BasicHeader />
            </section>

            {/* Movies Watched Section */}
            <section className={styles['films-movieswatched-section']}>
                <h2 style={{ color: '#ffb400', fontSize: '2rem', fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Movies Reviews</h2>
                <MoviesWatchedSlider />
            </section>

            {/* Movie Slider Section */}
            <section
                className={styles['films-slider-section']}
                style={backgroundImage ? {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                } : {}}
            >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(35,40,58,0.82)', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ color: '#ffb400', fontSize: '2rem', fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Featured Colorado Films</h2>
                    <MovieSlider onImageChange={setBackgroundImage} />
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles['films-contact-section']}>
                <ContactSection />
            </section>
        </div>
    );
}
