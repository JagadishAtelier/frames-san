import React from "react";
import GalleryHero from "../component/GalleryHero";
import InfiniteGallery from "../component/InfiniteGallery";
import Footer from "../component/Footer";

export default function Gallery() {
  return (
    <>
      <GalleryHero
        title="Our Gallery"
        backgroundImage="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/685a3cf73d56b32034529474_Banner-3.webp"
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

      <InfiniteGallery />
      <Footer />
    </>
  );
}
