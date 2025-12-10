import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const text =
    "Sel offers quiet beauty and deep stillness — a sanctuary with soul, where refined design lives in harmony with the Mountains.";

  const words = text.split(" ");

  const controls = useAnimation();

  // 👇 allow animation to run when entering & leaving
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // 👇 scroll UP = hide, scroll DOWN = show
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  const items = [
    {
      iconColor: "/icons/icon1-color.svg",
      iconWhite: "/icons/icon1-white.svg",
      label: "14 Spacious Oceanview Villas",
    },
    {
      iconColor: "/icons/icon2-color.svg",
      iconWhite: "/icons/icon2-white.svg",
      label: "3 Distinct Dining Venues",
    },
    {
      iconColor: "/icons/icon3-color.svg",
      iconWhite: "/icons/icon3-white.svg",
      label: "Coastal Nature Reserve",
    },
    {
      iconColor: "/icons/icon4-color.svg",
      iconWhite: "/icons/icon4-white.svg",
      label: "4 Cliffside Infinity Pools",
    },
  ];

  return (
    <section className="relative z-0 w-full pt-32 pb-10 overflow-hidden">
      {/* RIGHT SIDE VECTOR */}
      <img
        src="/icons/vector-light1.png"
        className="absolute -right-5 top-50 -translate-y-1/2 w-[420px] opacity-10 pointer-events-none"
        alt="Vector"
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* TOP CONTENT */}
        <h6 className="text-[#758dc2] tracking-widest text-lg font-semibold mb-6">
          About Us
        </h6>

        {/* WORD-BY-WORD SCROLL ANIMATION */}
        <h2
          ref={ref}
          className="text-3xl md:text-5xl lg:text-6xl text-center font-semibold leading-tight text-[#0A0A0A] max-w-6xl mx-auto flex flex-wrap justify-center"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0.2, y: 0 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.05,
                    duration: 0.4,
                  },
                },
              }}
              initial="hidden"
              animate={controls}
              className="mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* ICON ROW */}
        <div className="grid grid-cols-2 md:flex md:justify-center md:gap-20 gap-8 mt-20">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-white border border-[#a3b7c2] shadow-sm transition-all duration-300 group-hover:bg-[#1C1C1C]">
                <img
                  src={item.iconColor}
                  alt=""
                  className="w-10 h-10 absolute transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={item.iconWhite}
                  alt=""
                  className="w-10 h-10 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <p className="mt-4 text-gray-700 font-semibold max-w-sm text-md md:text-base capitalize text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
