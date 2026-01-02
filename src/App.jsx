import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import CTASection from "./Components/CTASection";
import CTAText from "./Components/CTAText";

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

// Initialize AOS once
AOS.init({
  duration: 1000,     // global animation duration
  easing: "ease-in-out",
  once: true,         // animate only once
  offset: 120,        // trigger distance
});
export default function App() {
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
