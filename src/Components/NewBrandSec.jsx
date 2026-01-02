import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const cards = [
    { id: 1, title: "Brand Identity", image: "/h1.jpg" },
    { id: 2, title: "UI / UX Design", image: "/h2.jpg" },
    { id: 3, title: "Web Experience", image: "/h3.jpg" },
];

const NewBrandSec = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 1. Vertical Background Reveal
    const rawReveal = useTransform(scrollYProgress, [0.05, 0.45], [60, 0]);
    const smoothReveal = useSpring(rawReveal, { stiffness: 30, damping: 20 });
    const clipPath = useTransform(smoothReveal, (v) => `inset(${v}% 0% ${v}% 0%)`);

    // 2. Individual Word Animations

    // Group A: "Let's" (Raises UP from center)
    const yLets = useTransform(scrollYProgress, [0.15, 0.45], ["100%", "0%"]);
    const smoothYLets = useSpring(yLets, { stiffness: 40, damping: 25 });

    // Group B: "Brand" (Drops DOWN from center - first delay group)
    const yBrand = useTransform(scrollYProgress, [0.15, 0.45], ["-100%", "0%"]);
    const smoothYBrand = useSpring(yBrand, { stiffness: 40, damping: 25 });

    // Group C: "Build" (Raises UP from center - second delay group)
    const yBuild = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);
    const smoothYBuild = useSpring(yBuild, { stiffness: 40, damping: 25 });

    // Group D: "Your" (Drops DOWN from center - second delay group)
    const yYour = useTransform(scrollYProgress, [0.3, 0.6], ["-100%", "0%"]);
    const smoothYYour = useSpring(yYour, { stiffness: 40, damping: 25 });
    const textOpacity = useTransform(scrollYProgress, [0.55, 0.65], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0.55, 0.65], [1, 0.95]);

    return (
        <section ref={containerRef} className="relative w-full h-[300vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                <div className="absolute top-1/4 inset-0 flex items-start justify-center">
                    <p className="text-sm tracking-[0.3em] uppercase text-black">
                        Keep scrolling
                    </p>
                </div>

                <motion.div
                    style={{ clipPath }}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                >
                    <motion.div
                        style={{ opacity: textOpacity, scale: textScale }}
                        className="w-full h-full flex flex-col items-center justify-center text-black"
                    >
                        <div className="flex flex-col items-center px-6 text-center">
                            {/* Marquee */}
                            <div className="mb-10">
                                <div className="w-[280px] sm:w-[420px] md:w-[600px] overflow-hidden">
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView="auto"
                                        spaceBetween={24}
                                        loop={true}
                                        speed={7000}
                                        autoplay={{ delay: 0, disableOnInteraction: false }}
                                        allowTouchMove={false}
                                        className="!ease-linear"
                                    >
                                        {Array.from({ length: 8 }).map((_, i) => (
                                            <SwiperSlide key={i} className="!w-auto">
                                                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-black">
                                                    Bring Ideas To Life —
                                                </span>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* TEXT REVEAL */}
                            <div className="space-y-0 md:space-y-2 font-bold uppercase leading-[0.85]">

                                {/* Line 1: Let's (Up) Build (Up) */}
                                <div className="flex justify-center gap-4 text-6xl md:text-[9rem]">
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYLets, display: "block" }}>
                                            Let’s
                                        </motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.p style={{ y: smoothYBuild, display: "block" }} className="text-red-600">
                                            Build
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Line 2: Your (Down) Brand (Down) */}
                                <div className="flex justify-center gap-4 text-6xl md:text-[9rem]">
                                    <div className="overflow-hidden">
                                        <motion.p style={{ y: smoothYYour, display: "block" }} className="text-red-600">
                                            Your
                                        </motion.p>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYBrand, display: "block" }}>
                                            Brand
                                        </motion.span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16">
                                <a href="/contact" className="px-12 py-5 border border-black bg-black text-white rounded-full uppercase tracking-widest hover:bg-transparent hover:text-black transition-all">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div
                    className="absolute inset-0 flex items-center justify-center z-50"
                    style={{ perspective: 1200 }}
                >
                    {cards.map((card, i) => {

                        const CARDS_START = 0.65;
                        const CARDS_END = 0.99;
                        const TOTAL_RANGE = CARDS_END - CARDS_START;
                        const STEP = TOTAL_RANGE / cards.length;

                        const start = CARDS_START + i * STEP;
                        const end = start + STEP * 0.9;

                        const y = useTransform(
                            scrollYProgress,
                            [start, end, CARDS_END],
                            ["120%", "0%", "0%"]
                        );

                        const rotateX = useTransform(scrollYProgress, [start, end], [40, 0]);
                        const rotateY = useTransform(scrollYProgress, [start, end], [0, 0]);
                        const rotateZ = useTransform(scrollYProgress, [start, end], [0, 0]);

                        const opacity = useTransform(
                            scrollYProgress,
                            [start, start + 0.01],
                            [0, 1]
                        );

                        return (
                            <motion.div
                                key={card.id}
                                style={{ y, rotateX, rotateY, rotateZ, opacity }}
                                className="group absolute w-[320px] md:w-[70vw] rounded-2xl overflow-hidden"
                            >
                                {/* IMAGE WRAPPER */}
                                <div className="overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt=""
                                        className="
        w-full h-[70vh] object-cover
        transition-transform duration-700 ease-out
        rounded-2xl
      "
                                    />
                                </div>

                                {/* TEXT CONTAINER */}
                                <div
                                    className="
      relative -top-16
      w-1/2 group-hover:w-full
      mx-auto
      flex justify-center
      px-8 py-3
      text-center font-semibold text-lg
      rounded-2xl
      bg-white/70
      backdrop-blur-md
      border border-white/40
      transition-all duration-500 ease-out
      group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
    "
                                >
                                    {card.title}
                                </div>
                            </motion.div>

                        );
                    })}
                </div>


            </div>

        </section>
    );
};

export default NewBrandSec;