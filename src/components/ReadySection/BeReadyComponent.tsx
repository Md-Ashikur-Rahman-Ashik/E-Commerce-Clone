import React from "react";

const BeReadyComponent: React.FC = () => {
  return (

    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
    <div className="flex justify-center items-center h-screen ">
      <div className="text-center">
        {/* First outlined "BE READY" */}

        <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold outline-gray">
          BE READY
        </p>


        {/* Filled "BE READY" */}

        <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold text-white">
          BE READY
        </p>

        {/* Filled "BE BETTER" */}

        <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold text-white">
          BE BETTER
        </p>


        {/* Last outlined "BE BETTER" */}

        <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold outline-gray">
          BE BETTER
        </p>
      </div>
    </div>
  );
};

export default BeReadyComponent;
