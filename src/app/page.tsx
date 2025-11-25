import React from 'react';
import HeroSection from '../sections/hero/+Page';
import ContactSection from '../sections/ContactSection';
import WesternFeaturesSection from '../sections/WesternFeaturesSection';
import CategorySliders from '../sections/CategorySliders';

export default function Home(): React.ReactElement {
  return (
    <div className="page">
      <HeroSection />
      <WesternFeaturesSection />
      <CategorySliders />
      <ContactSection />
    </div>
  );
}
