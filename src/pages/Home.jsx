import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import JoinSection from '../components/JoinSection';
import WinnersSection from '../components/WinnersSection';
import MediaPartnersSection from '../components/MediaPartnersSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WinnersSection />
      <JoinSection />
      <MediaPartnersSection />
    </div>
  );
};

export default Home;
