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

    /* ---------------- RAW SCROLL (TEXT & LINEAR CARDS) ---------------- */
    const { scrollYProgress: rawScrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    /* ---------------- SPRING SCROLL (ONLY FOR ROTATION/SMOOTHNESS) ---------------- */
    const slowScrollYProgress = useSpring(rawScrollYProgress, {
        stiffness: 30,
        damping: 25,
        mass: 1.3,
    });

    /* ---------------- BACKGROUND REVEAL (UNCHANGED) ---------------- */
    const rawReveal = useTransform(rawScrollYProgress, [0.05, 0.45], [60, 0]);
    const smoothReveal = useSpring(rawReveal, { stiffness: 30, damping: 20 });
    const clipPath = useTransform(
        smoothReveal,
        v => `inset(${v}% 0% ${v}% 0%)`
    );

    /* ---------------- TEXT ANIMATIONS (UNCHANGED) ---------------- */
const textScroll = useSpring(rawScrollYProgress, {
  stiffness: 80,  // higher = faster movement
  damping: 20,    // lower = more responsive
  mass: 1,        // normal weight
});


const smoothYLets = useTransform(textScroll, [0.15, 0.25], ["100%", "0%"]);
const smoothYBrand = useTransform(textScroll, [0.15, 0.25], ["-100%", "0%"]);

const smoothYBuild = useTransform(textScroll, [0.28, 0.38], ["100%", "0%"]);
const smoothYYour = useTransform(textScroll, [0.28, 0.38], ["-100%", "0%"]);


    const textOpacity = useTransform(rawScrollYProgress, [0.55, 0.65], [1, 0]);
    const textScale = useTransform(rawScrollYProgress, [0.55, 0.65], [1, 0.95]);

    return (
        /* INCREASED HEIGHT TO 1400vh FOR SLOW BUT CONSTANT SPEED */
        <section ref={containerRef} className="relative w-full h-[1400vh]" id="work">
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

                            <div className="space-y-0 md:space-y-2 font-bold uppercase leading-[0.85]">
                                <div className="flex justify-center gap-4 text-6xl md:text-[9rem]">
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYLets, display: "block" }}>Let’s</motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYBuild, display: "block" }} className="text-red-600">Build</motion.span>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-4 text-6xl md:text-[9rem]">
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYYour, display: "block" }} className="text-red-600">Your</motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYBrand, display: "block" }}>Brand</motion.span>
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

                {/* ---------------- IMAGE CARDS ---------------- */}
                <div className="absolute inset-0 flex items-center justify-center z-50" style={{ perspective: 1200 }}>
                    {cards.map((card, i) => {
                        const CARDS_START = 0.68;
                        const CARDS_END = 0.98;
                        const TOTAL_RANGE = CARDS_END - CARDS_START;

                        // ACTIVE: duration of movement relative to scroll progress
                        // GAP: space between cards (now significantly increased)
                        const ACTIVE = TOTAL_RANGE * 0.10;
                        const GAP = TOTAL_RANGE * 0.20;
                        const STEP = ACTIVE + GAP;

                        const start = CARDS_START + i * STEP;
                        const end = start + ACTIVE;

                        // Using rawScrollYProgress instead of slowScrollYProgress 
                        // for "y" to ensure speed is constant (linear) and not easing at the end.
                        const y = useTransform(
                            rawScrollYProgress,
                            [start, end],
                            ["110vh", "0vh"],
                            { clamp: true }
                        );
                        const rotateX = useTransform(
                            rawScrollYProgress,
                            [start, end],
                            [25, 0],
                            { clamp: true }
                        );

                        const opacity = useTransform(
                            rawScrollYProgress,
                            [start - 0.01, start],
                            [0, 1],
                            { clamp: true }
                        );

                        return (
                            <motion.div
                                key={card.id}
                                style={{
                                    y,
                                    rotateX,
                                    opacity,
                                    transformOrigin: "bottom center",
                                    perspective: "1200px",
                                    zIndex: 50 + i,
                                }}
                                className="absolute w-[90vw] md:w-[60vw] rounded-3xl overflow-hidden shadow-2xl bg-white group"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-[60vh] md:h-[60vh]">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Title Overlay (Glassmorphism Effect) */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 
     w-[65%] md:w-[55%] 
     group-hover:w-[90%] md:group-hover:w-[85%]
     transition-[width] duration-500 ease-out">

                                        <div className="flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl">
                                            <div className="flex items-center gap-3">
                                                {/* Red Pulse/Production Dot */}
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                                </span>
                                                <h3 className="text-black font-medium text-sm md:text-base">
                                                    {card.title}
                                                </h3>
                                            </div>

                                            <span className="text-black/60 text-xs md:text-sm font-light italic">
                                                ( Production )
                                            </span>
                                        </div>
                                    </div>
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