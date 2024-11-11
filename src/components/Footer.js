// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-6 md:px-0 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-[#2E2F37] mb-4">WellBe</h2>
            <p className="text-gray-600 mb-4">
              You’ve reached the end, but it’s not the end!
            </p>
            <p className="text-gray-600">
              Remember, you’re not alone. Reach out, seek support, and prioritize your mental well-being.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-[#2E2F37] mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Psychotherapy</li>
              <li>Mental Counseling</li>
              <li>Support Groups</li>
              <li>Case Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#2E2F37] mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span role="img" aria-label="phone">📞</span>
                <span className="ml-2">+14 5464 8272</span>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="email">✉️</span>
                <span className="ml-2">rona@domain.com</span>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="address">📍</span>
                <span className="ml-2">Lazy Tower 192, Burn Swiss</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#2E2F37] mb-4">Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use">Term Of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            copyright 2024 © WellBe all rights reserved
          </p>
          <div className="flex space-x-4 text-[#2E2F37]">
            <FaFacebook className="hover:text-blue-600" />
            <FaInstagram className="hover:text-pink-500" />
            <FaTwitter className="hover:text-blue-400" />
            <FaYoutube className="hover:text-red-500" />
            <FaLinkedin className="hover:text-blue-700" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
