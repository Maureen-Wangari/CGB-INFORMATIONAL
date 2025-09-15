"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const LandingPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: '/images/visa.jpg',
      title: 'VISA APPLICATION PROCESS',
      subText: 'The visa application process involves guiding you through the necessary steps to apply for a visa. This includes understanding the specific requirements for your destination, gathering the required documents, filling out application forms, and submitting them to the appropriate authorities. Our team ensures that your application is accurate and complete, minimizing the chances of delays',
      buttonText: 'CONTACT US'
    },
    {
      image: '/images/globe-passport.jpg',
      title: 'CONSULTATION SERVICES',
      subText: 'Our visa consultation services are designed to provide you with expert advice tailored to your travel needs. Whether you are unsure about the type of visa you need, the eligibility criteria, or the documentation required, we’re here to help. We’ll assess your situation, answer your questions, and provide personalized recommendations to make the process smooth and stress-free',
      buttonText: 'CONTACT US'
    },
    {
      image: '/images/globe-travs.jpg',
      title: 'APPOINTMENT BOOKINGS',
      subText: 'Learn how to prepare for potential flooding and protect your property. Access our resources on flood prevention, emergency planning, and recovery strategies.',
      buttonText: 'CONTACT US'
    }
  ];

  useEffect(() => {
    document.body.style.overflow = 'unset';

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${poppins.className}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-400 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            layout="fill" 
            objectFit="cover" 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-8 md:p-8 lg:p-6 rounded-lg w-[85%] max-w-[900px] z-20">
              <h2 className="text-[#081dc2] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {slide.title}
              </h2>
              <div className="flex mb-6">
                <div className="w-1 bg-red-500 mr-4"></div>
                <p className="text-gray-900 text-lg md:text-xl lg:text-xl">
                  {slide.subText}
                </p>
              </div>
              <button className="bg-sky-500/100 hover:bg-teal-700 text-white py-3 px-5 rounded-full transition duration-300 text-xl">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
