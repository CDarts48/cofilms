import React from 'react';
import HeroSection from '../sections/hero/+Page';
import ContactSection from '../sections/ContactSection';
import MovieSlider from '@/sections/film/slider/Slider';
import Sidebar from '../sections/sidebar/Sidebar';


export default function Home() {
  return (
    <div className="page">
      <Sidebar/>
      <HeroSection />
      <MovieSlider />
      <ContactSection />
    </div>
  );
}