import React from 'react';
import BasicHeader from '../components/BasicHeader';
import HeroSection from '../sections/hero/+Page';
import ContactSection from '../components/ContactSection';
import PodCastSection from '../sections/PodCastSection';
import UpcomingFilmFestivals from '../sections/UpcomingFilmFestivals';

export default function Home(): React.ReactElement {
  return (
    <div className="page">
      <BasicHeader />
      <HeroSection />
      <PodCastSection />
      <UpcomingFilmFestivals />
      <ContactSection />
    </div>
  );
}
