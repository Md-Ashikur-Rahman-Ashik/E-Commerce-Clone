import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import SmokeCanvas from "@/components/smockanimation.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SmokeCanvas />
      <BannerSection />
    </div>
  );
}
