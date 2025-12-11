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
      <AboutUs />
      <ResortSection />
      <VillaBookingSection />
      <VisionMissionSection />
      <RestaurantResortSection />
      <GallerySection/>
      <ReviewSection />
      <ReviewSlider />
      
      {/* <TestimonialCard/> */}
      <div className="px-2">
        <Footer />
      </div>
    </>
  );
};

export default Home;
