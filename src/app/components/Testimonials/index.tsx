"use client";
import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <section className="relative mt-16 bg-gray-100">
     {/* Hero Section */}
<div className="relative flex items-center justify-between h-[600px] bg-gray-100 px-8 sm:px-16">
  {/* Text Section */}
  <div className="flex-1 text-left">
  <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-[#ef9007] leading-tight">
      Your Visa
    </h1>
    <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[#ef9007] leading-tight">
      Our Mission
    </h1>
      <p className="text-lg sm:text-xl mb-6 text-gray-700">
      Expert help for your US, UK, Schengen, Canadian & Australian visa needs.
    </p>
    <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300">
      Start Your Application
    </button>
  </div>

  {/* Image Section */}
  <div className="flex-1">
    <Image
      src="/Images/hero-background.png"
      alt="Hero Background"
      width={400}
      height={200}
      className="rounded-lg object-cover"
    />
  </div>
</div>

{/* Visa Types Section */}
<div className="max-w-[1440px] mx-auto py-20 px-4 sm:px-8 bg-[#f9fafb]">
  <h2 className="text-4xl font-bold text-center mb-4 text-[#20365B]">Visa Types</h2>
  <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
    Learn more about the different visa categories we support and get the right help for your travel plans.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {[
      {
        name: "US Visa",
        icon: "/Images/us-icon.svg",
        description: "Work, travel or study in the U.S. stress-free We’ll help you choose the right visa, avoid mistakes, and prepare for your embassy interview.",
        link: "/visa/us",
      },
      {
        name: "UK Visa",
        icon: "/Images/uk-icon.svg",
        description: "Planning a trip, school or relocation to the UK? Let us handle the paperwork and guide you step-by-step for smooth approval.",
        link: "/visa/uk",
      },
      {
        name: "Schengen Visa",
        icon: "/Images/schengen-icon.svg",
        description: "Access 27 European countries with one visa. Whether for tourism, study or work—we’ll help you build a strong Schengen application.",
        link: "/visa/schengen",
      },
      {
        name: "Canadian Visa",
        icon: "/Images/canada-icon.svg",
        description: "Explore life, work, or education in Canada. From visitor visas to study permits, we simplify every step",
        link: "/visa/canada",
      },
    ].map((visa, index) => (
      <a
        key={index}
        href={visa.link}
        className="bg-white hover:shadow-xl shadow-md rounded-xl p-6 text-center transition-transform transform hover:-translate-y-1"
      >
        <Image
          src={visa.icon}
          alt={visa.name}
          width={60}
          height={60}
          className="mx-auto mb-5"
        />
        <h3 className="text-xl font-semibold mb-2 text-[#20365B]">{visa.name}</h3>
        <p className="text-sm text-gray-500">{visa.description}</p>
        <span className="inline-block mt-4 text-sm font-medium text-[#ef9007] hover:underline">
          Learn More →
        </span>
      </a>
    ))}
  </div>
</div>


   {/* Testimonial Section */}
<div className="bg-[#fbbf24] py-16">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">What Our Clients Say</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial Cards */}
      {[
        {
          quote: "Thanks to their guidance, my visa application process was stress-free. Highly recommend!",
          name: "Sarah W.",
        },
        {
          quote: "CGB Travels made my dream of studying abroad come true. Their team is amazing!",
          name: "John D.",
        },
        {
          quote: "The process was smooth and efficient. I got my visa in no time. Thank you!",
          name: "Emily R.",
        },
      ].map((testimonial, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
          <span className="text-sm text-gray-500">- {testimonial.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>
      {/* How It Works Section */}
      <div className="max-w-[1440px] mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { step: "Consultation", icon: "/Images/consultation-icon.svg" },
            { step: "Document Prep", icon: "/Images/document-icon.svg" },
            { step: "Visa Submission", icon: "/Images/submission-icon.svg" },
          ].map((process, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={process.icon} alt={process.step} width={40} height={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{process.step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;