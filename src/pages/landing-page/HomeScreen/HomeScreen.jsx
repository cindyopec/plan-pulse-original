import React from 'react';
import Header from '../Header/Header';
import Landingpage from '../LandingPage/Landingpage';
import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature';

const HomeScreen = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Feature/>
      <Landingpage/>
    </div>
  );
}

export default HomeScreen;
