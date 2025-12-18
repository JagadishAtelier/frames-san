import React, { useEffect, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const villas = {
  left: {
    img: "https://pix10.agoda.net/hotelImages/32213458/-1/c2d3121e2b831da904593823f4778548.jpg?ce=0&s=1000x1000",
    title: "The Farm Retreat",
    desc: "A paradise for two, where morning light dances on the water and evenings are filled with the sweet silence.",
    features: ["4 bedrooms", "2 terrace", "sauna", "6 bedrooms", "3 bathrooms"],
    area: "218",
    areaDesc: "stylish space",
  },
  right: [
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/df/4b/6e/caption.jpg?w=1200&h=-1&s=1",
      title: "Villa Kaela",
      desc: "A paradise for two, where morning light dances on the water and evenings are filled with the sweet silence.",
      area: "218",
      areaDesc: "stylish space",
      features: [
        "2 bedrooms",
        "mountain view",
        "sauna",
        "1 terrace",
        "lake view",
        "4 bedrooms",
      ],
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/171882184.jpg?k=1f8bc7a69eec4ef641847dddf2fd516bee49b8e345a0f938eb4b3b86255a53b9&o=",
      title: "Villa Solaya",
      area: "218",
      areaDesc: "stylish space",
      desc: "A paradise for two, where morning light dances on the water and evenings are filled with the sweet silence.",
      features: [
        "3 bathrooms",
        "sauna",
        "2 terrace",
        "4 bedrooms",
        "mountain view",
      ],
    },
  ],
};

export default function ResortSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullyExpandedIndex, setFullyExpandedIndex] = useState(0);

  const allCards = [
    { type: "big", ...villas.left },
    ...villas.right.map((c) => ({ type: "small", ...c })),
  ];

  // ⭐ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      offset: 120,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      className="pt-16 pb-5 md:py-10 lg:px-10"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="max-w-8xl mx-auto px-4 py-4 sm:px-6 sm:py-15 bg-[#232426] rounded-3xl">
        {/* TOP SECTION */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white sm:text-start text-center font-semibold mb-4">
              Life Along The Coast
            </h2>
            <p className="text-gray-200 text-base sm:text-lg sm:text-start text-center">
              The villas were built with low-impact methods, following the
              land’s natural curves to blend seamlessly into the coastal
              landscape.
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="group self-center bg-white text-black px-6 py-3 rounded-full flex items-center
            gap-4 relative overflow-hidden mx-auto md:mx-0 hover:bg-gray-100 transition"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-delay="150"
          >
            <img
              src="/icons/chevron-right.svg"
              className="absolute left-5 w-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            />
            <span className="relative z-10 transition-all duration-300 group-hover:translate-x-6">
              View All Available Villas
            </span>
            <img
              src="/icons/chevron-right.svg"
              className="w-4 relative transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0"
            />
          </button>
        </div>

        <LayoutGroup>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {allCards.map((card, index) => {
              const isActive = activeIndex === index;

              return isActive ? (
                /* ⭐ ACTIVE EXPANDED CARD WITH AOS */
                <motion.div
                  key={index}
                  layout
                  onClick={() => setActiveIndex(index)}
                  onLayoutAnimationComplete={() => setFullyExpandedIndex(index)}
                  transition={{
                    layout: { duration: 0.6, ease: "easeInOut" },
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="lg:col-span-2 bg-white backdrop-blur-sm rounded-3xl shadow-lg p-2 flex flex-col lg:flex-row gap-4 cursor-pointer"
                >
                  <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden">
                    <img
                      src={card.img}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {card.features?.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/80 text-black text-xs rounded-full backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={
                      fullyExpandedIndex === index
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -40 }
                    }
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="flex flex-col justify-between flex-1 py-6 px-4"
                  >
                    {card.area && (
                      <div className="flex items-center gap-4 mb-6 sm:mb-15">
                        <div className="p-3 bg-white/70 border rounded-full shadow-sm">
                          <img
                            src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/6851263bb91fe7531b08f691_Frame.svg"
                            className="w-10 sm:w-12"
                          />
                        </div>

                        <div className="px-1 py-4 bg-white/70 border rounded-full text-center shadow-sm">
                          <div className="text-lg sm:text-xl font-semibold">
                            {card.area} <span className="text-sm ml-1">M2</span>
                          </div>
                          <div className="text-gray-500 text-xs ">
                            {card.areaDesc}
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                        {card.title}
                      </h3>
                      {card.desc && (
                        <p className="text-gray-600 text-sm sm:text-base mb-5">
                          {card.desc}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 group cursor-pointer">
                      <Link
                        to={`/stay/${card.title}`}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <span className="font-medium">Discover More</span>
                        <div className="w-10 h-10 rounded-full bg-black/80 flex items-center justify-center overflow-hidden transition group-hover:bg-white">
                          <img
                            src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                            className="w-4 absolute transition opacity-100 group-hover:opacity-0 group-hover:translate-x-4"
                          />
                          <img
                            src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                            className="w-4 absolute opacity-0 -translate-x-4 transition group-hover:opacity-100 group-hover:translate-x-0 invert"
                          />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  layout
                  transition={{
                    layout: { duration: 0.6, ease: "easeInOut" },
                    duration: 0.6,
                  }}
                  onClick={() => setActiveIndex(index)}
                  className="group shadow-lg relative rounded-3xl z-10 overflow-hidden cursor-pointer h-[450px] bg-[#232426]"
                >
                  <img
                    src={card.img}
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                    alt={card.title}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    {card.features?.slice(0, 2).map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-wider rounded-full border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Title text positioned specifically to the left of the notch */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <h3 className="text-white text-2xl font-semibold leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* THE ARROW CURVE WRAPPER */}
                  <div className="absolute bottom-0 right-0 z-50">
                    {/* This is the dark "notch" container */}
                    <div className="relative bg-[#232426] pt-4 pl-4 rounded-tl-[2.5rem]">
                      {/* Concave Curve: Top Side */}
                      <div className="absolute -top-5 right-0 w-5 h-5 overflow-hidden">
                        <div className="w-full h-full rounded-br-[20px] shadow-[10px_10px_0_10px_#232426]" />
                      </div>

                      {/* Concave Curve: Left Side */}
                      <div className="absolute bottom-0 -left-5 w-5 h-5 overflow-hidden">
                        <div className="w-full h-full rounded-br-[20px] shadow-[10px_10px_0_10px_#232426]" />
                      </div>

                      {/* The White Arrow Button */}
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-transform duration-300 shadow-sm mr-2px mb-2px">
                        <img
                          src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                          className="w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                          style={{ filter: "brightness(0)" }}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient for Contrast */}
                  {/* <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" /> */}
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
