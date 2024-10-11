import AboutUs from "@/components/GeneralUi/AboutUs";
import Catergories from "@/components/GeneralUi/Catergories";
import Clients from "@/components/GeneralUi/Clients";
import HeroSection from "@/components/GeneralUi/HeroSection";
import Footer from "@/components/GeneralUi/Mainfooter";

import Navbar from "@/components/GeneralUi/NavBar";
import ProvideServices from "@/components/GeneralUi/ProvideServices";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProvideServices />
      <Catergories />

      <Clients />
      <AboutUs />
      <Footer />
    </>
  );
};

export default page;
