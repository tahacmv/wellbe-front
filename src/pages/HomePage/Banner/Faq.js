// src/components/FAQs.js
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "What is the minimum age for using MindMates?",
    answer: "The minimum age for using MindMates is 18 years old.",
  },
  {
    question: "Is my data and information safe with MindMates?",
    answer: "Yes, MindMates ensures that all user data is encrypted and private.",
  },
  {
    question: "What happens if a message makes me uncomfortable or invades my privacy?",
    answer: "You can report any uncomfortable messages, and our team will review it promptly.",
  },
  {
    question: "Can I become a MindMate?",
    answer: "Yes, you can apply to become a MindMate by filling out the application form on our website.",
  },
  {
    question: "Is calling safe here with MindMates?",
    answer: "Yes, all calls are end-to-end encrypted for your safety and privacy.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, using MindMates for basic services is free. Additional services may incur charges.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0 max-w-screen-lg">
        
        {/* FAQ Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-[#2E2F37] mb-8">FAQ'S</h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-blue-500 rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-semibold text-[#2E2F37]">
                    {item.question}
                  </h3>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-blue-500" />
                  ) : (
                    <FaChevronDown className="text-blue-500" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src="/Faq.png" alt="FAQ Illustration" className="w-3/4 md:w-full" />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
