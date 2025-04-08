import React from 'react';
import HeroSection from '../sections/hero/+Page';
import ContactSection from '../sections/ContactSection';
// import MovieSlider from '@/sections/film/slider/Slider';
import Header from '../sections/header/Header'; // Changed here

export default function Home() {
  return (
    <div className="page">
      <Header />
      <HeroSection />
      {/* <MovieSlider /> */}
      <ContactSection />
    </div>
  );
}