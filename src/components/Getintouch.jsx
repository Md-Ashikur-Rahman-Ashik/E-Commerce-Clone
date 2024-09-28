import React from "react";

const GetIntouchSec = () => {
  return (
    <div className="relative flex justify-center items-center h-screen  ">
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
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Text container */}
      <div className="relative z-20 text-start text-white">
        {/* First "Be Ready" outline */}
        <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold text-transparent outline-white">
          BE READY
        </p>
        {/* Filled "Be Ready" */}
        {/* Filled "Be Better" */}

        {/* Last two "Be Better" outlines */}
      </div>

      {/* Optional play button */}
      <div className="absolute bottom-10 right-10 z-20">
        <button className="bg-yellow-400 text-black p-4 rounded-full font-bold">
          PLAY VIDEO
        </button>
      </div>
    </div>
  );
};

export default GetIntouchSec;
