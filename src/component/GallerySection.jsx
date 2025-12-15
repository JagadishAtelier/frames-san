import React, { useEffect, useState } from "react";
import CircularGallery from "./CircularGallery"; // adjust path
import { Link } from "react-router-dom";

const GallerySection = () => {
  const [bendValue, setBendValue] = useState(1.5); // desktop default

  // Detect screen width
  useEffect(() => {
    const updateBend = () => {
      if (window.innerWidth < 768) {
        setBendValue(0.05); // mobile
      } else {
        setBendValue(1.5); // desktop
      }
    };

    updateBend();
    window.addEventListener("resize", updateBend);

    return () => window.removeEventListener("resize", updateBend);
  }, []);

  return (
    <div
      style={{ height: "650px", position: "relative" }}
      className="bg-white mb-60 z-10"
    >
      {/* BG dots */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(0 65 255 /50%) 1px, #ffffff 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Title */}
      <h2 className="text-4xl font-semibold text-black text-center pt-20">
        See Why Guests Love Staying With Us
      </h2>
      <p className="text-md text-gray-500 text-center mt-5">
        Every picture tells a story of relaxation, beauty, and unforgettable hospitality.
      </p>

      {/* Circular Gallery */}
      <CircularGallery
        bend={bendValue}
        textColor="#fff"
        borderRadius={0.05}
        scrollEase={0.02}
      />

      {/* Button */}
      <div className="flex justify-center absolute -bottom-40 w-full">
        <Link to={"/gallery"} className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition shadow-lg">
          View All
        </Link>
      </div>
    </div>
  );
};

export default GallerySection;
