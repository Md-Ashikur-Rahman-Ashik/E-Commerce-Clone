"use client";
import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import OneWorld from "@/components/OneWorld";
import SmokeCanvas from "../components/Smockanimation";
import GetIntouchSection from "@/components/GetIntouchSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SmokeCanvas />

      <div className="h-screen w-full overflow-x-hidden">

        <div className="h-screen w-[400vw] flex" style={{ scrollbarWidth: "none" }}>
          <section className="h-screen w-screen flex-shrink-0 text-white flex justify-center items-center">
            <BannerSection />
          </section>

          <section
            id="scroll-sections"
            style={{ zIndex: "999999" }}
            className={`h-screen bg-gray-900 w-screen flex-shrink-0 flex justify-center items-center`}
          >
            <div className="relative mt-24 flex justify-center items-center h-screen">
              <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
              >
                <source src="/path/to/your/video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 opacity-40 z-10"></div>

              <div className="relative z-20 text-center text-white">
                <p className={`lg:text-[8rem] md:text-7xl text-4xl font-bold text-transparent outline-white`}>
                  BE READY
                </p>
                <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold text-white">
                  BE READY
                </p>
                <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold text-white">
                  BE BETTER
                </p>
                <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold text-transparent outline-white">
                  BE BETTER
                </p>
                <p className="lg:text-[8rem] md:text-7xl text-4xl font-bold text-transparent outline-white">
                  BE BETTER
                </p>
              </div>

              <div className="absolute bottom-10 right-10 z-20">
                <button className="bg-yellow-400 text-black p-4 rounded-full font-bold">
                  PLAY VIDEO
                </button>
              </div>
            </div>
          </section>
        </div>

        <div>
          <OneWorld />
          <GetIntouchSection />{" "}
        </div>
      </div>
    </div>
  );
}