import React from 'react';
import HeroSection from '../sections/hero/+Page';
import ContactSection from '../sections/ContactSection';
import Header from '../sections/header/Header'; 
import MovieSlider from './film/slider/Slider';

export default function Home() {
  return (
    <div className="page">
      <Header />
      <MovieSlider /> 
      <HeroSection />
      <ContactSection />
    </div>
  );
}