import React from "react";

import Image from "next/image";
function Loadinganimation() {
  return (
    <div className="loader_overlay">
      <div className="flex  items-center justify-center h-screen bg-black">
        <div className="">
          <Image
            alt="One8"
            src={"/images/E-CommerceLogo-1.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col">
          {/* Upper semi-circle */}
          <div className="loader_spinner"></div>
        </div>
      </div>
    </div>
  );
}

export default Loadinganimation;
