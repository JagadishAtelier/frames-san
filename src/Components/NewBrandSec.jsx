import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const cards = [
  {
    id: 1,
    title: "Moments in Motion",
    image: "/h1.jpg",
   glow: "rgba(255, 140, 0, 0.45)"

  },
  {
    id: 2,
    title: "Timeless Portraits",
    image: "/h2.jpg",
    glow: "rgba(0, 0, 0, 0.55)"

  },
  {
    id: 3,
    title: "Visual Storytelling",
    image: "/h3.jpg",
    glow: "rgba(255, 193, 7, 0.45)"

  },
];


const NewBrandSec = () => {
    const containerRef = useRef(null);

    const { scrollYProgress: rawScrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    /* ---------------- TEXT REVEAL SMOOTHING ---------------- */
    // Increased mass and damping creates that "one smooth motion" feel
    const textSpring = useSpring(rawScrollYProgress, {
        stiffness: 25,   // Lower stiffness for a slower start
        damping: 30,     // Higher damping to prevent bounciness
        mass: 2,         // Higher mass gives it "weight" so it glides
    });

    /* ---------------- BACKGROUND REVEAL ---------------- */
    // We map the background clip reveal to happen early (0.05 to 0.3)
    const clipReveal = useTransform(textSpring, [0.05, 0.3], [60, 0]);
    const clipPath = useTransform(clipReveal, v => `inset(${v}% 0% ${v}% 0%)`);

    /* ---------------- TEXT ANIMATIONS ---------------- */
/* ---------------- TEXT ANIMATIONS ---------------- */
// Text finishes its "opening" animation by 0.25
const smoothYLets = useTransform(textSpring, [0.10, 0.22], ["100%", "0%"]);
const smoothYBrand = useTransform(textSpring, [0.10, 0.22], ["-100%", "0%"]);
const smoothYBuild = useTransform(textSpring, [0.12, 0.25], ["100%", "0%"]);
const smoothYYour = useTransform(textSpring, [0.12, 0.25], ["-100%", "0%"]);

/* ---------------- THE FIX: QUICKER HIDING ---------------- */
// CHANGED: Starts hiding at 0.28 and is GONE by 0.32
// This ensures the text is completely invisible before the first card hits the center.
const textOpacity = useTransform(rawScrollYProgress, [0.28, 0.35], [1, 0]);
const textScale = useTransform(rawScrollYProgress, [0.28, 0.35], [1, 0.9]);

    return (
        <section ref={containerRef} className="relative w-full h-[1200vh]" id="work">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* KEEP SCROLLING HINT */}
                <div className="absolute top-1/4 inset-0 flex items-start justify-center">
                    <p className="text-sm tracking-[0.3em] uppercase text-black/40">
                        Keep scrolling
                    </p>
                </div>

                {/* TEXT + BG SECTION */}
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
                                    <div className="overflow-hidden font-mona-narrow">
                                        <motion.span className="font-mona" style={{ y: smoothYLets, display: "block" }}>Let’s</motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.h1 style={{ y: smoothYBuild, display: "block" }} className="h-tag font-mona-narrow">Build</motion.h1>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-4 text-6xl md:text-[9rem]">
                                    <div className="overflow-hidden">
                                        <motion.span style={{ y: smoothYYour, display: "block" }} className="h-tag font-mona-narrow">Your</motion.span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.span className="font-mona-narrow" style={{ y: smoothYBrand, display: "block" }}>Brand</motion.span>
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

                {/* ---------------- IMAGE CARDS (UNAFFECTED BY TEXT SPRING) ---------------- */}
                <div className="absolute inset-0 flex items-center justify-center z-50" style={{ perspective: 1200 }}>
                    {cards.map((card, i) => {
                        // Cards remain on the linear rawScrollYProgress
                        const CARDS_START = 0.30; 
                        const CARDS_END = 0.95;
                        const TOTAL_RANGE = CARDS_END - CARDS_START;

                        const ACTIVE = TOTAL_RANGE * 0.12;
                        const GAP = TOTAL_RANGE * 0.18;
                        const STEP = ACTIVE + GAP;

                        const start = CARDS_START + i * STEP;
                        const end = start + ACTIVE;

                        const y = useTransform(rawScrollYProgress, [start, end], ["110vh", "0vh"], { clamp: true });
                        const rotateX = useTransform(rawScrollYProgress, [start, end], [25, 0], { clamp: true });
                        const opacity = useTransform(rawScrollYProgress, [start - 0.02, start], [0, 1], { clamp: true });

                        return (
<motion.div
  key={card.id}
  style={{
    y,
    rotateX,
    opacity,
    transformOrigin: "bottom center",
    zIndex: 50 + i,
  }}
  whileHover={{
    boxShadow: `0 0 160px 35px ${card.glow}`,
  }}
  transition={{
    boxShadow: { duration: 0.4, ease: "easeOut" },
  }}
  className="absolute w-[90vw] md:w-[60vw] rounded-3xl overflow-hidden shadow-2xl group"
>

                                <div className="relative w-full lg:h-[60vh] h-[35vh] ">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[65%] md:w-[55%] group-hover:w-[85%] transition-[width] duration-500 ease-out ">
                                        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl">
                                            <div className="flex items-center gap-3">
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                                </span>
                                                <h3 className="text-black font-medium text-sm md:text-base">{card.title}</h3>
                                            </div>
                                            <span className="text-black/60 text-xs md:text-sm font-light italic">( Production )</span>
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