import React from 'react';
import HeroSection from '../sections/hero/+Page';
import ContactSection from '../sections/ContactSection';
import Header from '../sections/header/Header'; 

export default function Home() {
  return (
    <div className="page">
      <Header />
      <HeroSection />
      <ContactSection />
    </div>
  );
}