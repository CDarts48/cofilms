import React from 'react';
import HeroSection from '../sections/hero/HeroSection';
import ContactSection from '../sections/ContactSection';
import MovieSlider from '@/sections/film/slider/Slider';

export default function Home() {
  return (
    <div className="page">
      <HeroSection />
      <MovieSlider />
      <ContactSection />
    </div>
  );
}