import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const GetIntouchSection: React.FC = () => {
  return (
    <>
      <div className="  container flex-col bg-[#ffc20e] justify-start items-center h-screen">
        {/* Background video or image */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 opacity-40 z-10"></div>

        {/* Text container */}
        <div className="relative py-24 container z-20  text-white">
          <p className="lg:text-[12rem] md:text-7xl text-8xl font-bold text-transparent outline-white2">
            GET <br /> IN TOUCH
          </p>
        </div>
        <div className="flex mx-4 justify-around w-48 ">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
        </div>

        {/* Optional play button */}
      </div>
      <div className="bg-white p-8  ">
        <p> © Cornerstone Sports LLP, 2024. All Rights Reserved. </p>
      </div>
    </>
  );
};

export default GetIntouchSection;
