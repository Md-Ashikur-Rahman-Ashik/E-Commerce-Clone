import React from "react";
import HoverExpend from "@/components/HoverExpendSec/HoverExpend";
import Image from "next/image";
const OneWorld = () => {
  return (
    <>
      <section className="container">
        <div
          style={{ height: "max-content" }}
          className="flex-col justify-start items-center h-screen "
        >
          <div className="text-start">
            <Image
              alt=""
              src={"/images/logo-yellow.png"}
              height={500}
              width={500}
            />
            <p className="lg:text-[12rem] md:text-7xl text-10xl font-bold outline-yellow">
              World
            </p>
          </div>
          <HoverExpend />
        </div>
      </section>
    </>
  );
};

export default OneWorld;
