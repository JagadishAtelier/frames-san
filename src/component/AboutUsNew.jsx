import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const IMAGES = [
  [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop",
  ],
  [
    "https://plus.unsplash.com/premium_photo-1661962821338-c07da63995f9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000&auto=format&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000&auto=format&fit=crop",
  ],
];

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
    label: "Nature Reserve",
  },
  {
    iconColor: "/icons/icon4-color.svg",
    iconWhite: "/icons/icon4-white.svg",
    label: "4 Cliffside Infinity Pools",
  },
];

const AboutUsNew = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Infinite marquee
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      // ✅ Floating animation (FIXED)
      gsap.utils.toArray(".float-img").forEach((img, i) => {
        gsap.to(img, {
          x: gsap.utils.random(-25, 25),
          y: gsap.utils.random(-20, 20),
          duration: gsap.utils.random(4, 7),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.15,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white text-black overflow-hidden flex items-center"
    >
      <div className="flex w-full flex-col lg:flex-row items-center px-6 lg:px-10 gap-16">

        {/* LEFT — MARQUEE */}
        <div
          className="relative w-full h-1/2 lg:w-1/2 overflow-hidden mt-5 rounded-xl
                     bg-[url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/df/4b/6e/caption.jpg?w=1200&h=-1&s=1')]
                     bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 bg-black/20 z-0" />

          <div
            ref={trackRef}
            className="relative z-10 flex w-max gap-20 lg:gap-40 will-change-transform"
          >
            {[...IMAGES, ...IMAGES].map((column, i) => (
              <div key={i} className="flex flex-col shrink-0 relative">
                {column.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt=""
                    className={`
                      float-img
                      w-64 h-80 lg:w-80 lg:h-[350px]
                      object-cover rounded-md shadow-2xl
                      transition-transform duration-500 hover:scale-105
                      will-change-transform
                      ${
                        j === 1
                          ? "mt-[-150px] ml-20 lg:ml-32 z-10"
                          : "relative z-0"
                      }
                    `}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Vector */} <img src="/icons/vector-light1.png" className="absolute -right-5 top-50 -translate-y-1/2 w-[420px] opacity-10 pointer-events-none" alt="" />

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 z-20 backdrop-blur-sm p-4 rounded-xl">
          <span className="text-xs tracking-widest uppercase bg-[#758dc2] text-white px-4 py-2 rounded-full w-max">
            About Us
          </span>

          <h1 className="text-4xl lg:text-7xl font-bold leading-[1.1]">
            Sel Offers <br /> Quiet Beauty
          </h1>

          <p className="text-black/60 max-w-md text-lg leading-relaxed">
            Sel offers quiet beauty and deep stillness — a sanctuary with soul,
            where refined design lives in harmony with the Mountains.
          </p>

          <div className="grid grid-cols-2 md:flex md:gap-10 gap-8 mt-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-white border border-[#a3b7c2] shadow-sm transition-all duration-300 group-hover:bg-[#1C1C1C]">
                  <img src={item.iconColor} className="w-10 h-10 absolute group-hover:opacity-0" />
                  <img src={item.iconWhite} className="w-10 h-10 absolute opacity-0 group-hover:opacity-100" />
                </div>
                <p className="mt-4 text-gray-700 font-semibold text-sm text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsNew;
