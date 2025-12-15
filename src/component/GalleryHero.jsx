import { Play } from "lucide-react";
import GalleryCard from "./GalleryCard";

const galleryCards = [
  {
    id: "left",
    image:
      "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684aefed3a25b6819fddd29b_1-p-800.webp",
    title: "View All Villas",
    position: "left",
  },
  {
    id: "right",
    image:
      "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684aeff17f4897f4928183ab_2-p-800.webp",
    title: "Our Services",
    position: "right",
  },
];

export default function GalleryHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background */}
      <img
        src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/685a3cf73d56b32034529474_Banner-3.webp"
        alt="Gallery Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Heading */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <h1 className="text-4xl font-semibold md:text-5xl">Our Gallery</h1>
      </div>

      {/* Bottom White Curve */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 180"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,140 480,140 720,120 960,100 1200,40 1440,60 L1440,180 L0,180 Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Floating Cards (JSON Rendered) */}
      {galleryCards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute bottom-5 z-20 hidden md:block animate-float ${
            card.position === "left" ? "left-18" : "right-16"
          }`}
          style={{
            animationDelay: `${(index+1) * 1.2}s`, // stagger for natural motion
          }}
        >
          <GalleryCard image={card.image} title={card.title} />
        </div>
      ))}

      {/* Center Play Button */}
      <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 text-center">
      
        <div className="mx-auto mb-2 flex h-18 w-18 items-center justify-center rounded-full bg-orange-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-200">
            <img
              src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684bbaeede270ba0c81fc1a6_Play.webp"
              className="ml-1 text-black"
            />
          </div>
        </div>

        <div className="flex items-center gap-16 text-sm text-gray-700">
            <span>watch a video</span>
          <span>about us</span>
        </div>
      </div>
    </section>
  );
}
