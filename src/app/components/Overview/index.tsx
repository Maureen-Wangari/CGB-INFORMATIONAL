"use client";
import React from 'react';
import { Poppins } from 'next/font/google';
import image from 'next/image'; 

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Overview = () => {
  return (
    <div id='overview' className={`${poppins.className} max-w-[1440px] mx-auto my-6 px-4 sm:px-8`}>  
  <h1 className="text-teal-800 text-center mb-6 text-2xl mt-20 sm:text-3xl md:text-4xl font-bold">
    Overview
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex gap-8">

        {/* US Section */}
        <div className="md:mb-12 bg-gradient-to-b from-[#99b3ff] to-[#0033cc] text-white rounded-3xl shadow-lg p-0 flex flex-col items-center mx-3 h-auto">
      <div className="w-full bg-[#0077B6] rounded-t-3xl flex justify-center items-center py-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">United States</h2>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <div className="absolute -top-4 flex gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md">
            <img src="/Images/us.jpg" alt="United States" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0033cc] rounded-b-3xl p-6">
        <p className="text-base sm:text-sm md:text-lg text-center">
          Our services include assistance with US visa applications, such as tourist, business, and student visas, ensuring compliance with all embassy requirements.
        </p>
      </div>
    </div>
    {/* Australia Section */}
    <div className="md:mb-12 bg-gradient-to-b from-[#99b3ff] to-[#0033cc] text-white rounded-3xl shadow-lg p-0 flex flex-col items-center mx-3 h-auto">
      <div className="w-full bg-[#0077B6] rounded-t-3xl flex justify-center items-center py-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">Australia</h2>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <div className="absolute -top-4 flex gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md">
            <img src="/Images/ausi.jpg" alt="Australia" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0033cc] rounded-b-3xl p-6">
        <p className="text-base sm:text-sm md:text-lg text-center">
          We assist with Australian visa applications, including student, work, and tourist visas. Our team ensures your application meets all requirements for a smooth process.
        </p>
      </div>
    </div>

    {/* UK Section */}
    <div className="md:mb-12 bg-gradient-to-b from-[#99b3ff] to-[#0033cc] text-white rounded-3xl shadow-lg p-0 flex flex-col items-center mx-3 h-auto">
      <div className="w-full bg-[#0077B6] rounded-t-3xl flex justify-center items-center py-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">United Kingdom</h2>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <div className="absolute -top-4 flex gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md">
            <img src="/Images/uk.jpg" alt="United Kingdom" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0033cc] rounded-b-3xl p-6">
        <p className="text-base sm:text-sm md:text-lg text-center">
          We provide expert guidance for UK visa applications, including work, student, and visitor visas, ensuring a hassle-free experience.
        </p>
      </div>
    </div>

    {/* Canada Section */}
    <div className="md:mb-12 bg-gradient-to-b from-[#99b3ff] to-[#0033cc] text-white rounded-3xl shadow-lg p-0 flex flex-col items-center mx-3 h-auto">
      <div className="w-full bg-[#0077B6] rounded-t-3xl flex justify-center items-center py-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">Canada</h2>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <div className="absolute -top-4 flex gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center shadow-md">
            <img src="/Images/canada.jpg" alt="Canada" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0033cc] rounded-b-3xl p-6">
        <p className="text-base sm:text-sm md:text-lg text-center">
          Our team specializes in Canadian visa applications, including permanent residency, work permits, and visitor visas, ensuring a seamless process.
        </p>
      </div>
    </div>
  </div>
</div>
    
  );
};

export default Overview;
