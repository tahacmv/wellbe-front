// src/components/Consultants.js
import React from 'react';

const consultants = [
  {
    name: 'Your Well-Wisher',
    specialties: ['Depression', 'Psychology'],
    description:
      'I believe that mental health is a key component of well-being and success. I use evidence-based and holistic approaches to address the root causes of mental health issues.',
    icon: '/Profile1.png', // Replace with actual images or SVGs as needed
  },
  {
    name: 'Helping hands',
    specialties: ['Anxiety', 'Depression'],
    description:
      'I believe in following my passion, so I do it through creating mindful beings and creating happy lives on earth.',
    icon: '/Profile2.png', // Replace with actual images or SVGs as needed
  },
  {
    name: 'Smiley',
    specialties: ['Anxiety', 'Psychology'],
    description:
      'My goal as an empathetic practitioner is creating a secure therapeutic environment for clients. I employ versatile approaches to meet individual needs.',
    icon: '/Profile3.png', // Replace with actual images or SVGs as needed
  },
];

const Consultants = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto text-center max-w-screen-lg px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#2E2F37] mb-10">
          Our <span className="text-[#1DA1F2]">Consultants</span>
        </h2>

        {/* Consultant Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {consultants.map((consultant, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/3 text-center transition transform hover:-translate-y-2"
            >
              {/* Icon or Image */}
              <div className="flex justify-center items-center mb-4">
                <img className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-100 text-5xl" src={consultant.icon} />
              </div>
              {/* Consultant Name */}
              <h3 className="text-xl font-semibold text-[#2E2F37] mb-2">
                {consultant.name}
              </h3>
              {/* Specialties */}
              <div className="flex justify-center space-x-2 mb-4">
                {consultant.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-gray-200 text-gray-600 rounded-full px-3 py-1"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              {/* Description */}
              <p className="text-gray-600 mb-6">{consultant.description}</p>
              {/* Start Chat Button */}
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md hover:shadow-lg transition duration-300">
                Start Chat
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultants;
