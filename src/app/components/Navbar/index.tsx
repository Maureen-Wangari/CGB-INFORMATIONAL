"use client";
import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar: React.FC = () => {
  return (
    <nav className={`bg-white text-[#081dc2] ${poppins.className} shadow-md`}>
      <div className="py-4 px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Images/logo.png"
            alt="CGB Travels Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          {/* <span className="ml-2 text-lg font-bold">CGB Travels</span> */}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#services" className="hover:text-gray-500">Services</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;