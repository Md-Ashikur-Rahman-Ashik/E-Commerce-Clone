import BannerSection from "@/components/BannerSection/BannerSection";
import Navbar from "@/components/Navbar/Navbar";
import ReadySection from "@/components/ReadySection/ReadySection";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <ReadySection></ReadySection>
    </div>
  );
}
