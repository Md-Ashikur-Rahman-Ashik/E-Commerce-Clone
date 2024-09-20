"use client";
import { useEffect, useState } from "react";
import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import BeReadyComponent from "@/components/ReadySection/BeReadyComponent";
import BeReadySection from "@/components/ReadySection/BeReadySection";
import ReadySection from "@/components/ReadySection/ReadySection";
import SmokeCanvas from "../components/Smockanimation";

export default function Home() {
  const [scrollIndex, setScrollIndex] = useState(0);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      console.log("Scrolling", event.deltaY); // Debugging log
      if (event.deltaY > 0) {
        // Scroll Down
        setScrollIndex((prev) => Math.min(prev + 1, 2)); // Max scroll index = 2 (3 sections)
      } else {
        // Scroll Up
        setScrollIndex((prev) => Math.max(prev - 1, 0)); // Min scroll index = 0
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Apply horizontal transform based on scrollIndex
  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-sections");
    if (scrollContainer) {
      console.log("Scroll Index:", scrollIndex); // Debugging log
      // Debugging: Log the computed styles and check if the transform applies
      console.log(`Transforming: translateX(-${scrollIndex * 100}vw)`);

      scrollContainer.style.transform = `translateX(-${scrollIndex * 100}vw)`;
      scrollContainer.style.transition = "transform 0.5s ease-in-out";
    }
  }, [scrollIndex]);

  return (
    <div>
      <Navbar />
      <SmokeCanvas />
      <div className="h-screen w-full overflow-hidden">
        {/* First Section */}
        <section
          id="first"
          className="h-screen w-full bg-black text-white flex justify-center items-center"
        >
          <BannerSection />
        </section>

        {/* Horizontal Scrolling Sections */}
        <div
          className="h-screen w-[300vw] flex flex-row overflow-hidden" // Added flex-row for horizontal layout
          id="scroll-sections"
        >
          <section className="h-screen w-screen flex-shrink-0 bg-yellow-400 flex justify-center items-center">
            <ReadySection />
          </section>

          <section className="h-screen w-screen flex-shrink-0 bg-red-400 flex justify-center items-center">
            <BeReadyComponent />
          </section>

          <section className="h-screen w-screen flex-shrink-0 bg-blue-400 flex justify-center items-center">
            <BeReadySection />
          </section>
        </div>
      </div>
    </div>
  );
}
