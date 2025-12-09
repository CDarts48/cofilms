import React from 'react';
import HeroSection from '../sections/hero/+Page';
import ContactSection from '../components/ContactSection';
import PodCastSection from '../sections/PodCastSection';
import UpcomingFilmFestivals from '../sections/UpcomingFilmFestivals';

export default function Home(): React.ReactElement {
  return (
    <div className="page">
      <HeroSection />
      <PodCastSection />
      <UpcomingFilmFestivals />
      <ContactSection />
    </div>
  );
}
