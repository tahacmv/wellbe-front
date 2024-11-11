// src/components/FindYourMindMateBanner.js
import React from 'react';
import { Link } from 'react-router-dom';

const FindYourMindMateBanner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-0 max-w-screen-lg">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src="/BannerImage2.png" alt="Find Your Mind Mate" className="w-3/4 md:w-full" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#2E2F37] mb-4 leading-tight">
            Find Your <span className="text-[#1DA1F2]">perfect Mind Mate</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Discover the perfect consultant to guide you on your journey to mental well-being.
          </p>
          <Link
            to="/explore-experts"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            Explore Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FindYourMindMateBanner;
