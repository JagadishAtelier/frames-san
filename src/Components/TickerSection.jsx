import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/follow/f7.jpg",
  "/follow/f2.jpg",
  "/follow/f3.jpg",
  "/follow/f4.jpg",
  "/follow/f5.jpg",
  "/follow/f6.jpg",
  "/follow/f7.jpg",
  "/follow/f1.jpg",
  "/follow/f2.jpg",
  "/follow/f3.jpg",
  "/follow/f4.jpg",
  "/follow/f1.jpg",
];

export default function TickerSection() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  /* SCREEN CHECK */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------------- DESKTOP SCROLL LOGIC ---------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const heroWidth = useSpring(
    useTransform(scrollYProgress, [0, 0.35], ["100vw", "25rem"]),
    { stiffness: 60, damping: 20 }
  );

  const heroHeight = useSpring(
    useTransform(scrollYProgress, [0, 0.35], ["100vh", "70vh"]),
    { stiffness: 60, damping: 20 }
  );

  const heroRadius = useSpring(
    useTransform(scrollYProgress, [0, 0.35], ["0px", "20px"]),
    { stiffness: 80, damping: 18 }
  );

  const heroOpacity = useSpring(
    useTransform(scrollYProgress, [0.32, 0.36], [1, 0]),
    { stiffness: 100, damping: 25 }
  );

  const x = useSpring(
    useTransform(scrollYProgress, [0.45, 1], [0, -3000]),
    { stiffness: 40, damping: 25 }
  );

  const loopImages = [...images, ...images];

  /* ---------------- MOBILE / TABLET VIEW ---------------- */
  if (isMobile) {
    return (
      <section className="relative pb-10 md:pb-20 overflow-hidden">
        <p className="uppercase font-anton text-4xl text-center mb-6">
          stay connected
        </p>

        <div className="relative">
          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/frames_of_san?igsh=bnNiMHM3N2EzY3N6"
            target="_blank"
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       flex gap-2 items-center bg-white px-6 py-3 rounded-full font-bold"
          >
            <img
              src="https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8b1ac28985d91e1df7e8_Button%20CTA%20Icon.svg"
              className="w-6 h-6"
            />
            <span className="font-handwriting text-lg">frames_of_san</span>
          </a>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={16}
            className="px-4 w-[90%]"
            breakpoints={{
              0: {
                slidesPerView: 1, // mobile
              },
              768: {
                slidesPerView: 2, // tablet
              },
            }}
          >

            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="h-[45vh] rounded-xl overflow-hidden">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }

  /* ---------------- DESKTOP VIEW ---------------- */
  return (
    <section ref={sectionRef} className="relative h-[350vh] mt-10">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <p className="absolute uppercase font-anton top-18 left-1/2 -translate-x-1/2 text-8xl font-bold">
          stay connected
        </p>

        <a
          href="https://www.instagram.com/frames_of_san?igsh=bnNiMHM3N2EzY3N6"
          target="_blank"
          className="absolute z-50 flex gap-2 top-1/2 left-1/2 -translate-x-1/2
                     bg-white px-10 py-3 rounded-full text-2xl font-bold"
        >
          <img src="https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8b1ac28985d91e1df7e8_Button%20CTA%20Icon.svg" />
          <p className="">frames_of_san</p>
        </a>

        {/* HERO */}
        <motion.div
          style={{
            width: heroWidth,
            height: heroHeight,
            borderRadius: heroRadius,
            opacity: heroOpacity,
          }}
          className="absolute z-10 overflow-hidden mt-24"
        >
          <img src="/follow/f1.jpg" className="w-full h-full object-cover" />
        </motion.div>

        {/* SCROLL SLIDER */}
        <motion.div style={{ x }} className="relative flex items-center space-x-6 mt-24">
          <div className="w-[25rem] h-[70vh] flex-shrink-0" />

          {loopImages.map((img, i) => (
            <div
              key={i}
              className="w-[25rem] h-[70vh] rounded-xl overflow-hidden flex-shrink-0"
            >
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
