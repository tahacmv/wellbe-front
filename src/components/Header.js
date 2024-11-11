// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-10 bg-[#F4FEFF]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          WellBe
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <Link to="/" className="text-[#707176] font-poppins font-semibold hover:text-blue-600 transition duration-200">
            Home
          </Link>
          <Link to="/" className="text-[#707176] font-poppins font-semibold hover:text-blue-600 transition duration-200">
            Services
          </Link>
          <Link to="/" className="text-[#707176] font-poppins font-semibold hover:text-blue-600 transition duration-200">
            Contact
          </Link>
          <Link to="/" className="text-[#707176] font-poppins font-semibold hover:text-blue-600 transition duration-200">
            About Us
          </Link>
        </nav>

        {/* Register Button */}
        <Link
          to="/"
          className="px-6 py-2 font-poppins font-semibold text-white rounded-md"
          style={{
            background: 'linear-gradient(to bottom right, #1976D2, #0F3DDE)',
          }}
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
