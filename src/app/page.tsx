import React from 'react';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './components/Services';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Services />
    </>
  );
};

export default HomePage;