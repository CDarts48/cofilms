import React from 'react';
import HeroSection from '../sections/hero/HeroSection';
import MiddleSection from '../sections/MiddleSection';
import ContactSection from '../sections/ContactSection';

export default function Home() {
  return (
    <div className="page">
      <HeroSection />
      <MiddleSection />
      <ContactSection />
    </div>
  );
}