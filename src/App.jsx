import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutClients from "./Components/AboutClients";
import RecentProjects from "./Components/RecentProjects";
import ServicesSection from "./Components/ServicesSection";
import CTASection from "./Components/CTASection";
import CTAText from "./Components/CTAText";

import AOS from "aos";
import "aos/dist/aos.css";

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
<AboutClients/>
<RecentProjects/>
<ServicesSection/>
<CTASection/>
<CTAText/>
</>
  );
}
