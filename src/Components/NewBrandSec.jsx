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

    /* ---------------- RAW SCROLL (TEXT) ---------------- */
    const { scrollYProgress: rawScrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    /* ---------------- SLOWED SCROLL (CARDS ONLY) ---------------- */
    const slowScrollYProgress = useSpring(rawScrollYProgress, {
        stiffness: 30,
        damping: 25,
        mass: 1.3,
    });

    /* ---------------- BACKGROUND REVEAL ---------------- */
    const rawReveal = useTransform(rawScrollYProgress, [0.05, 0.45], [60, 0]);
    const smoothReveal = useSpring(rawReveal, { stiffness: 30, damping: 20 });
    const clipPath = useTransform(
        smoothReveal,
        v => `inset(${v}% 0% ${v}% 0%)`
    );

    /* ---------------- TEXT ANIMATIONS (UNCHANGED) ---------------- */
    const smoothYLets = useSpring(
        useTransform(rawScrollYProgress, [0.15, 0.45], ["100%", "0%"]),
        { stiffness: 40, damping: 25 }
    );

    const smoothYBrand = useSpring(
        useTransform(rawScrollYProgress, [0.15, 0.45], ["-100%", "0%"]),
        { stiffness: 40, damping: 25 }
    );

    const smoothYBuild = useSpring(
        useTransform(rawScrollYProgress, [0.3, 0.6], ["100%", "0%"]),
        { stiffness: 40, damping: 25 }
    );

    const smoothYYour = useSpring(
        useTransform(rawScrollYProgress, [0.3, 0.6], ["-100%", "0%"]),
        { stiffness: 40, damping: 25 }
    );

    const textOpacity = useTransform(rawScrollYProgress, [0.55, 0.65], [1, 0]);
    const textScale = useTransform(rawScrollYProgress, [0.55, 0.65], [1, 0.95]);

    return (
        <section ref={containerRef} className="relative w-full h-[380vh]" id="work">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* KEEP SCROLLING */}
                <div className="absolute top-1/4 inset-0 flex items-start justify-center">
                    <p className="text-sm tracking-[0.3em] uppercase text-black">
                        Keep scrolling
                    </p>
                </div>

                {/* TEXT + BG */}
                <motion.div
                    style={{ clipPath }}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                >
                    <motion.div
                        style={{ opacity: textOpacity, scale: textScale }}
                        className="w-full h-full flex flex-col items-center justify-center text-black"
                    >
                        <div className="flex flex-col items-center px-6 text-center">

                            {/* MARQUEE */}
                            <div className="mb-10">
                                <div className="w-[280px] sm:w-[420px] md:w-[600px] overflow-hidden">
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView="auto"
                                        spaceBetween={24}
                                        loop
                                        speed={7000}
                                        autoplay={{ delay: 0, disableOnInteraction: false }}
                                        allowTouchMove={false}
                                        className="!ease-linear"
                                    >
                                        {Array.from({ length: 8 }).map((_, i) => (
                                            <SwiperSlide key={i} className="!w-auto">
                                                <span className="text-xs md:text-sm uppercase tracking-[0.2em]">
                                                    Bring Ideas To Life —
                                                </span>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* TEXT */}
                            <div className="space-y-0 md:space-y-2 font-bold uppercase leading-[0.85]">

                                <div className="flex justify-center gap-4 text-6xl md:text-[9rem]">
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYLets, display: "block" }}>
                                            Let’s
                                        </motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.span
                                            style={{ y: smoothYBuild, display: "block" }}
                                            className="text-red-600"
                                        >
                                            Build
                                        </motion.span>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-4 text-6xl md:text-[9rem]">
                                    <div className="overflow-hidden">
                                        <motion.span
                                            style={{ y: smoothYYour, display: "block" }}
                                            className="text-red-600"
                                        >
                                            Your
                                        </motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYBrand, display: "block" }}>
                                            Brand
                                        </motion.span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16">
                                <a
                                    href="/contact"
                                    className="px-12 py-5 border border-black bg-black text-white rounded-full uppercase tracking-widest hover:bg-transparent hover:text-black transition-all"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ---------------- IMAGE CARDS (SLOWED) ---------------- */}
                <div
                    className="absolute inset-0 flex items-center justify-center z-50"
                    style={{ perspective: 1200 }}
                >
                    {cards.map((card, i) => {
                        const CARDS_START = 0.6;
                        const CARDS_END = 0.95;
                        const TOTAL_RANGE = CARDS_END - CARDS_START;

                        const ACTIVE = TOTAL_RANGE * 0.22; // movement
                        const GAP = TOTAL_RANGE * 0.25;    // pause
                        const STEP = ACTIVE + GAP;

                        const start = CARDS_START + i * STEP;
                        const end = start + ACTIVE;

                        // Card moves only in its window
                        const y = useTransform(
                            slowScrollYProgress,
                            [start, end],
                            ["100vh", "0vh"],
                            { clamp: true }
                        );

                        // Hide future cards completely
                        const opacity = useTransform(
                            slowScrollYProgress,
                            [start - 0.02, start],
                            [0, 1],
                            { clamp: true }
                        );

                        const smoothY = useSpring(y, {
                            stiffness: 40,
                            damping: 26,
                            mass: 1.4,
                        });

                        return (
                            <motion.div
                                key={card.id}
                                style={{
                                    y: smoothY,
                                    opacity,
                                    zIndex: i,
                                    pointerEvents: "none",
                                }}
                                className="absolute w-[90vw] md:w-[70vw] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-[60vh] md:h-[70vh] object-cover"
                                />
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default NewBrandSec;
