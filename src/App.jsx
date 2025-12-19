import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutClients from "./Components/AboutClients";
import RecentProjects from "./Components/RecentProjects";
import ServicesSection from "./Components/ServicesSection";
import CTASection from "./Components/CTASection";
import CTAText from "./Components/CTAText";


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
