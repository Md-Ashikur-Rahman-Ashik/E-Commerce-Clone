import React from "react";
import { FaChevronDown } from "react-icons/fa";

const BannerSection: React.FC = () => {
  return (
    <div className="container mx-auto  ">
      <section className="relative h-screen flex items-center justify-center">
        {/* Background for the banner */}
        <div className="absolute inset-0 w-full h-full" />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 lg:px-24">
          {/* Heading */}
          <h1 className="text-yellow-500 w-full text-4xl md:text-7xl lg:text-[8rem] font-bold leading-tight">
            THE one8 AFFAIR
          </h1>

          {/* Subheading */}
          <div className="flex flex-col items-end">
            <p className="text-white md:w-2/3 md:text-xl lg:text-2xl mt-4">
              It is not just a shirt number, it is the prelude of a legacy, a
              celebration, an inspiration.
            </p>
          </div>
          {/* Know More Button */}
          <button className="mt-8 lg:w-1/5 mx-auto px-6 py-3 bg-transparent border border-white text-white md:text-lg lg:text-xl font-semibold hover:bg-white hover:text-black transition-all">
            KNOW MORE
          </button>
        </div>

        {/* Image of the person */}
        <div className="absolute bottom-0 right-0 h-1/2 md:h-2/3 lg:h-3/4">
          {/* <img
          src="/path-to-image.png" // Replace with the actual image path
          alt="Person jumping"
          className="object-cover h-full"
        /> */}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute flex gap-4 bottom-10 left-1/2 transform -translate-x-1/2">
          <span className="text-yellow-500 text-lg md:text-xl">
            SCROLL DOWN
          </span>
          <div className="w-8 h-8 text-yellow-500 animate-bounce mt-2">
            <FaChevronDown />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
