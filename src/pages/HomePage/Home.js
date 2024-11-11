// src/pages/HomePage.js
import React from 'react';
import Banner from './Banner/HomeBanner1';
import Features from './Banner/Features';
import Consultants from './Banner/Consultants';
import FindYourMindMateBanner from './Banner/HomeBanner2';
import FAQs from './Banner/Faq';

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Features />
      <Consultants />
      <FindYourMindMateBanner />
      <FAQs />
    </div>
  );
};

export default HomePage;
