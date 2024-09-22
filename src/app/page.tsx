"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import BeReadySection from "@/components/ReadySection/BeReadySection";
import SmokeCanvas from "@/components/smockanimation.jsx";
import GetIntouchSec from "@/components/Getintouch.jsx";
// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // GSAP Scroll Animation for BeReadySection
    gsap.fromTo(
      ".be-ready-section", // Target element by class
      { x: 1000, opacity: 0 }, // Start position and opacity
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".be-ready-section", // The element to trigger the scroll animation
          start: "top 80%", // Start animation when the top of the element hits 80% of the viewport height
          end: "bottom 20%", // End animation at 20% of the viewport height
          scrub: true, // Smooth animation as you scroll
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <SmokeCanvas />
      <div className="absolute">
        <BannerSection />
      </div>

      {/* Section that will animate on scroll */}
      <div className="be-ready-section bg-gray-900">
        <BeReadySection />
      </div>
      <div>
        <GetIntouchSec />
      </div>
      {/* Add extra content to ensure scrolling */}
    </div>
  );
}
