// src/components/Banner.js
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="bg-[#F4FEFF] py-16 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-0 max-w-screen-lg">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-[#2E2F37] mb-4 leading-tight">
            Healthy Minds, Happy Lives <span className="text-[#1DA1F2]">Mental Health Consultancy</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Welcome to WellBe, your haven for mental wellness! Explore resources, find support, and connect with a community dedicated to well-being.
          </p>
          <Link
            to="/"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src="/BannerImage.png" alt="Mental Health Consultancy" className="w-3/4 md:w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
