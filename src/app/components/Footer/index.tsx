import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
<footer className="bg-[#646671] text-white py-8">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
    {/* Top Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* About Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <p className="text-sm">
          We are a trusted travel agency specializing in visa services for Australia, the US, the UK, and Canada. Let us help you make your travel dreams a reality.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#overview" className="hover:underline">Overview</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#team" className="hover:underline">Our Team</a></li>
          <li><a href="#contacts" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      {/* Destinations */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Destinations</h3>
        <ul className="space-y-2">
          <li><a href="#australia" className="hover:underline">Australia</a></li>
          <li><a href="#us" className="hover:underline">United States</a></li>
          <li><a href="#uk" className="hover:underline">United Kingdom</a></li>
          <li><a href="#canada" className="hover:underline">Canada</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <p className="text-sm">Email: cgbtravels@gmail.com</p>
        <p className="text-sm">Phone: +254 721 154 231</p>
        <div className="flex space-x-4 mt-4">
          <a href="#ffffff" className="hover:text-gray-300"><img src="/images/xIcon.webp" alt="Twitter" className="w-6 h-6 filter invert" /></a>
          <a href="#ffffff" className="hover:text-gray-300"><img src="/images/instaIcon.svg" alt="Instagram" className="w-6 h-6 filter invert" /></a>
          <a href="#ffffff" className="hover:text-gray-300"><img src="/images/fbIcon.svg" alt="Facebook" className="w-6 h-6 filter invert" /></a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-8 border-t border-white pt-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
