import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../Components/Navbar";
import ContactModal from "../Components/ContactModal";
import HeroSection from "../Components/HeroSection";
import VideoSection from "../Components/VideoSection";
import AboutClients from "../Components/AboutClients";
import NewAboutSec from "../Components/NewAboutSec";
import PortfolioSection from "../Components/PortfolioSection";
import NewBrandSec from "../Components/NewBrandSec";
import SkillsSection from "../Components/SkillsSection";
import CTASection from "../Components/CTASection";
import ExperienceSection from "../Components/ExperienceSection";
import Testimonials from "../Components/Testimonials";
import FAQSection from "../Components/FAQSection";
import TickerSection from "../Components/TickerSection";
import Footer from "../Components/Footer";

// AOS init (only once)
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
});

const Home = () => {
  const [open, setOpen] = useState(false);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar onOpenModal={() => setOpen(true)} />
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />

      <HeroSection />
      <VideoSection />
      <AboutClients />
      <NewAboutSec />
      <PortfolioSection />
      <NewBrandSec />

      {/* Optional sections */}
      {/* <LegionSection /> */}
      {/* <HomeGallery /> */}

      <SkillsSection />
      <CTASection />
      <ExperienceSection />
      <Testimonials />
      <FAQSection />
      <TickerSection />
      <Footer />
    </>
  );
};

export default Home;
