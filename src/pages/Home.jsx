import React from "react";
import HeroBanner from "../component/HeroBanner";
import Navigation from "../component/Navigation";
import ResortSection from "../component/ResortSection";
import AboutUs from "../component/AboutUs";
import VillaBookingSection from "../component/VillaBookingSection";
import VisionMissionSection from "../component/VisionMissionSection";
import TestimonialCard from "../component/TestimonialCard";
import Footer from "../component/Footer";
import ReviewSection from "../component/ReviewSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReviewSlider from "../component/ReviewSlider";
import RestaurantResortSection from "../component/RestaurantResortSection";
import GallerySection from "../component/GallerySection";
import PropertyStorySection from "../component/PropertyStorySection";
import AboutUsNew from "../component/AboutUsNew";
import ArchitecturalStatsSection from "../component/ArchitecturalStatsSection";
import GallerySectionNew from "../component/GallerySectionNew";
import NewAboutSection from "../component/NewAboutSection";
import AcademicSection from "../component/AcademicSection";
import TestimonialSlider from '../component/TestimonialSlider'
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <HeroBanner />
      {/* <AboutUs /> */}
      <ArchitecturalStatsSection/>
      <NewAboutSection />
      <ResortSection />
      <VillaBookingSection />
      <AcademicSection />
      <PropertyStorySection/>
      {/* <RestaurantResortSection /> */}
      {/* <GallerySection/> */}
      <GallerySectionNew/>
      {/* <div className="h-0 sm:h-90 md:h-0 lg:h-0"/> */}
      <ReviewSection />
      {/* <ReviewSlider /> */}
      <TestimonialSlider/>
      
      {/* <TestimonialCard/> */}
      <div className="px-2">
        <Footer />
      </div>
    </>
  );
};

export default Home;
