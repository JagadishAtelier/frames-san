import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const cards = [
    { id: 1, title: "Moments in Motion", image: "/h1.jpg" },
    { id: 2, title: "Timeless Portraits", image: "/h2.jpg" },
    { id: 3, title: "Visual Storytelling", image: "/h3.jpg" },
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
                        const CARDS_START = 0.6;
                        const CARDS_END = 0.95;
                        const TOTAL_RANGE = CARDS_END - CARDS_START;
                        const STEP = TOTAL_RANGE / cards.length;

                        // The card starts moving here
                        const startEntry = CARDS_START + i * STEP;
                        // The card FINISHES its movement here (0.75 creates a gap before the next card)
                        const endEntry = startEntry + (STEP * 0.75);

                        // Y Animation: Starts off-screen, moves to center, then stays clamped at 0
                        const y = useTransform(
                            scrollYProgress,
                            [startEntry, endEntry],
                            ["100vh", "0vh"],
                            { clamp: true }
                        );

                        // Scale Animation: Shrinks previous cards slightly as the next ones arrive
                        const nextCardStart = CARDS_START + (i + 1) * STEP;
                        const scale = useTransform(
                            scrollYProgress,
                            [nextCardStart, nextCardStart + STEP * 0.5],
                            [1, 0.95],
                            { clamp: true }
                        );

                        // Using Spring for the "Smooth" physics
                        const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
                        const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });

                        return (
                            <motion.div
                                key={card.id}
                                style={{
                                    y: smoothY,
                                    scale: smoothScale,
                                    opacity: 1, // Opacity is now locked to 1 (No Fade)
                                    zIndex: i,
                                }}
                                className="absolute w-[90vw] md:w-[70vw] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-[60vh] md:h-[70vh] object-cover"
                                    />
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