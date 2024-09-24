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
  const [horizontalScrollComplete, setHorizontalScrollComplete] = useState(false);

  useEffect(() => {
    // Control body scroll based on horizontal scroll state
    if (!horizontalScrollComplete) {
      document.body.style.overflow = "hidden"; // Disable vertical scroll
    } else {
      document.body.style.overflow = "auto"; // Enable vertical scroll after horizontal scroll finishes
    }

    const handleScroll = (event: WheelEvent) => {
      const step = 20; // Scroll step

      if (event.deltaY > 0) {
        // Scrolling down
        setScrollIndex((prev) => Math.min(prev + step, 300));
      } else {
        // Scrolling up
        setScrollIndex((prev) => Math.max(prev - step, 0));
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      document.body.style.overflow = "auto"; // Ensure vertical scrolling is restored when component unmounts
    };
  }, [horizontalScrollComplete]);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-sections");
    if (scrollContainer) {
      scrollContainer.style.transform = `translateX(-${scrollIndex}vw)`;
      scrollContainer.style.transition = "transform 0.1s ease-out";
    }

    // Check if horizontal scroll is complete (i.e., at the end)
    if (scrollIndex >= 300) {
      setHorizontalScrollComplete(true); // Horizontal scrolling complete
    } else {
      setHorizontalScrollComplete(false); // Reset when scrolling back up
    }
  }, [scrollIndex]);

  return (
    <div>
      <Navbar />
      <SmokeCanvas />

      {/* Horizontal scrolling section */}
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

      {/* Only display One8WorldSection after horizontal scroll completes */}
      {horizontalScrollComplete && (
        <div className="w-full">
          <One8WorldSection />
        </div>
      )}
    </div>
  );
}