import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";

import BeReadyComponent from "@/components/ReadySection/BeReadyComponent";
import BeReadySection from "@/components/ReadySection/BeReadySection";
import ReadySection from "@/components/ReadySection/ReadySection";

import SmokeCanvas from "@/components/smockanimation.jsx";

export default function Home() {
  return (
    <div>

      <Navbar />
<SmokeCanvas />      
      <BannerSection />
      <ReadySection></ReadySection>
      <BeReadyComponent></BeReadyComponent>
      <BeReadySection></BeReadySection>
    </div>
  );
}
