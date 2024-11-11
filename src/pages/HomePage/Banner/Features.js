// src/components/Features.js
import React from 'react';

const features = [
  {
    title: 'Chat with Expert',
    description:
      'You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.',
    icon: '/Doctor.png', // You can replace this with actual images or icons
    bgColor: 'bg-[#F4FEFF]', // Light background
  },
  {
    title: 'Anonymous Identity',
    description:
      'Talk about the health complaints you are experiencing and don’t hesitate to ask about the proper treatment.',
    icon: '/Medecine.png', // You can replace this with actual images or icons
    bgColor: 'bg-gradient-to-b from-[#4ED6DA] to-[#04789D]', // Gradient background
  },
  {
    title: 'Visit Hospitals',
    description:
      'Get priority services in hospitals with Halodoc. Which allows you to go to the hospital more practically and save time.',
    icon: '/Hospital.png', // You can replace this with actual images or icons
    bgColor: 'bg-[#F4FEFF]', // Light background
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center max-w-screen-lg px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#2E2F37] mb-4">
          Why our <span className="text-[#1DA1F2]">Mental Health</span> Consultants are the Best Choice
        </h2>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg ${feature.bgColor} w-full md:w-1/3`}
            >
              <img className="mb-4 h-24 w-24" src={feature.icon} alt="" />
              <h3 className="text-xl font-semibold text-[#2E2F37] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination Indicators */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
