"use client";
import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
  display: "swap",
});

const LandvistaAbout: React.FC = () => {
  return (
    <div
      id="about"
      className={`${poppins.className} text-3xl max-w-[90%] mx-auto px-2 sm:px-3 lg:px-4`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center mt-16">
        About <span className="text-[#2030aa]">CGB Travels</span>
      </h2>
      <section
        id="about"
        className="relative bg-gradient-to-b rounded-3xl from-[#0033cc] to-[#081dc2] text-white py-12"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-60 rounded-3xl overflow-hidden">
            <img
              src="/Images/world.jpg"
              alt="World Map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <p className="text-xl sm:text-xl md:text-xl max-w-4xl mx-auto mb-8">
              At <span className="font-semibold">CGB Travels</span>, we turn
              your travel dreams into reality. With years of experience in visa
              processing, we specialize in making your journey to Australia,
              the US, the UK, and Canada seamless and stress-free. Whether
              you're traveling for work, study, or leisure, we are here to
              guide you every step of the way.
            </p>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg mb-4">
                  <img
                    src="/Images/visa-icon.jpg"
                    alt="Visa Assistance"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visa Assistance</h3>
                <p className="text-sm text-gray-200">
                  Expert guidance for all types of visas, ensuring a smooth and
                  hassle-free process.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg mb-4">
                  <img
                    src="/Images/flight.jpg"
                    alt="Travel Planning"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel Planning</h3>
                <p className="text-sm text-gray-200">
                  Personalized travel plans tailored to your needs and
                  preferences.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg mb-4">
                  <img
                    src="/Images/travel.jpg"
                    alt="24/7 Support"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-200">
                  Our dedicated team is available around the clock to assist
                  you.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg mb-4">
                  <img
                    src="/Images/globe.jpg"
                    alt="Global Expertise"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
                <p className="text-sm text-gray-200">
                  Extensive knowledge of visa policies and travel regulations
                  worldwide.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a
                href="#contacts"
                className="bg-[#CA7558] hover:bg-[#b04d3b] text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandvistaAbout;