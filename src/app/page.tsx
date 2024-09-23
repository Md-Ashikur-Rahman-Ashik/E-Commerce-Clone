"use client";
import { useEffect, useState } from "react";
import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import BeReadyComponent from "@/components/ReadySection/BeReadyComponent";
import BeReadySection from "@/components/ReadySection/BeReadySection";
import ReadySection from "@/components/ReadySection/ReadySection";
import SmokeCanvas from "../components/Smockanimation";
import One8WorldSection from "@/components/One8WorldSection/One8WorldSection";

export default function Home() {
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const step = 20; // Increased step for faster scrolling
      if (event.deltaY > 0) {
        setScrollIndex((prev) => Math.min(prev + step, 300)); // Scroll down
      } else {
        setScrollIndex((prev) => Math.max(prev - step, 0)); // Scroll up
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-sections");
    if (scrollContainer) {
      scrollContainer.style.transform = `translateX(-${scrollIndex}vw)`;
      scrollContainer.style.transition = "transform 0.1s ease-out"; // Faster transition
    }
  }, [scrollIndex]);

  return (
    <div>
      <Navbar />
      <SmokeCanvas />

      <div className="h-screen w-full overflow-hidden">
        <div
          id="scroll-sections"
          className="h-screen w-[400vw] flex"
          style={{ scrollbarWidth: "none" }}
        >
          <section className="h-screen w-screen flex-shrink-0 text-white flex justify-center items-center">
            <BannerSection />
          </section>

          <section className="h-screen w-screen flex-shrink-0 flex justify-center items-center">
            <ReadySection />
          </section>

          <section className="h-screen w-screen flex-shrink-0 flex justify-center items-center">
            <BeReadyComponent />
          </section>

          <section className="h-screen w-screen flex-shrink-0 flex justify-center items-center">
            <BeReadySection />
          </section>
        </div>
      </div>
      <One8WorldSection></One8WorldSection>
    </div>
  );
}
