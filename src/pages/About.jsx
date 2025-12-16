import React from "react";
import GalleryHero from "../component/GalleryHero";
import AboutUs from "../component/AboutUs";
import VillaBookingSection from "../component/VillaBookingSection";
import LifeAlongTheCoast from "../component/LifeAlongTheCoast";
import ReviewSection from "../component/ReviewSection";
import ReviewSlider from "../component/ReviewSlider";
import Footer from "../component/Footer";

const About = () => {
  return (
    <>
    <GalleryHero
      title="About Us"
      backgroundImage="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/685947918e65ff2b7cb961b2_Banner-1.webp"
      playImage="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684bbaeede270ba0c81fc1a6_Play.webp"
      cards={[
        {
          id: "left",
          image:
            "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684aefed3a25b6819fddd29b_1-p-800.webp",
          title: "View All Resorts",
          position: "left",
        },
        {
          id: "right",
          image:
            "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684aeff17f4897f4928183ab_2-p-800.webp",
          title: "Our Services",
          position: "right",
        },
      ]}
    />
    <AboutUs />
    <VillaBookingSection />
    <LifeAlongTheCoast/>
    <ReviewSection />
      <ReviewSlider />
      
      {/* <TestimonialCard/> */}
      <div className="px-2">
        <Footer />
      </div>
    </>
  );
};

export default About;
