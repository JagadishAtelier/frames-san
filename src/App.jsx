import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import CTASection from "./Components/CTASection";
import CTAText from "./Components/CTAText";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import NewHeroSec from "./Components/NewHeroSec";
import NewAboutSec from "./Components/NewAboutSec";
import LatestProjects from "./Components/LatestProjects";
import HomeGallery from "./Components/HomeGallery";
import SkillsSection from "./Components/SkillsSection";
import LegionSection from "./Components/LegionSection";
import HeroSection from "./Components/HeroSection";
import TickerSection from "./Components/TickerSection";
import Footer from "./Components/Footer";
import NewBrandSec from "./Components/NewBrandSec";
import CallToAction from "./Components/CallToAction";
import { useEffect } from "react";

// Initialize AOS once
AOS.init({
  duration: 1000,     // global animation duration
  easing: "ease-in-out",
  once: true,         // animate only once
  offset: 120,        // trigger distance
});
export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll duration in seconds
      easing: (t) => t, // easing function
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
<Navbar/>
<HeroSection/>
<NewAboutSec/>
<NewBrandSec/>
<HomeGallery/>
<SkillsSection/>
<LegionSection/>
<CTASection/>
<CTAText/>
<TickerSection/>
<Footer/>
</>
  );
}
