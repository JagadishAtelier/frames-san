import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const NewBrandSec = () => {
    const containerRef = useRef(null);
const isMobile = window.innerWidth < 768;
    const { scrollYProgress: rawScrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    /* ---------------- TEXT REVEAL SMOOTHING ---------------- */
    // Increased mass and damping creates that "one smooth motion" feel
    const textSpring = useSpring(rawScrollYProgress, {
        stiffness: 120,
        damping: 14,
        mass: 0.6,
    });



    /* ---------------- BACKGROUND REVEAL ---------------- */
    // We map the background clip reveal to happen early (0.05 to 0.3)
    const clipReveal = useTransform(textSpring, [0.05, 0.3], [60, 0], { clamp: true });
    const clipPath = useTransform(clipReveal, v => `inset(${v}% 0% ${v}% 0%)`);

    /* ---------------- TEXT ANIMATIONS ---------------- */
    /* ---------------- TEXT ANIMATIONS ---------------- */
    // Text finishes its "opening" animation by 0.25
    const smoothYLets = useTransform(textSpring, [0.10, 0.22], ["100%", "0%"], { clamp: true });
    const smoothYBrand = useTransform(textSpring, [0.10, 0.22], ["-100%", "0%"], { clamp: true });
    const smoothYBuild = useTransform(textSpring, [0.12, 0.25], ["100%", "0%"], { clamp: true });
    const smoothYYour = useTransform(textSpring, [0.12, 0.25], ["-100%", "0%"], { clamp: true });

    /* ---------------- THE FIX: QUICKER HIDING ---------------- */
    // CHANGED: Starts hiding at 0.28 and is GONE by 0.32
    // This ensures the text is completely invisible before the first card hits the center.
    const textOpacity = useTransform(rawScrollYProgress, [0.28, 0.35], [1, 0], { clamp: true });
    const textScale = useTransform(rawScrollYProgress, [0.28, 0.35], [1, 0.9], { clamp: true });

    /* ---------------- SECOND TEXT (PARA) ---------------- */
    // Starts AFTER main text is fully hidden
    const paraOpacity = useTransform(rawScrollYProgress, [0.36, 0.45], [0, 1], { clamp: true });
    const paraY = useTransform(rawScrollYProgress, [0.36, 0.45], ["20px", "0px"], { clamp: true });
    const paraScale = useTransform(rawScrollYProgress, [0.36, 0.45], [0.96, 1], { clamp: true });

    /* ---------------- STAGGERED IMAGE MOTION ---------------- */

    // IMAGE 1 (starts first)
    const img1Y = useTransform(
        rawScrollYProgress,
        [0.45, 0.75],
        isMobile ? ["320%", "-320%"] : ["150%", "-220%"],
        { clamp: true }
    );


    // IMAGE 2 (slight delay)
    const img2Y = useTransform(
        rawScrollYProgress,
       [0.52, 0.82],
        isMobile ? ["350%", "-320%"] :["150%", "-220%"],
        { clamp: true }
    );


    // IMAGE 3 (moves last)
    const img3Y = useTransform(
        rawScrollYProgress,
        [0.60, 0.90],
        isMobile ? ["320%", "-320%"] :["120%", "-220%"],
        { clamp: true }
    );

    // IMAGE 4 (moves last)
    const img4Y = useTransform(
        rawScrollYProgress,
        [0.68, 0.98],
        isMobile ? ["320%", "-320%"] :["150%", "-220%"],
        { clamp: true }
    );

    // IMAGE 5 (moves last)
    const img5Y = useTransform(
        rawScrollYProgress,
         [0.76, 1.06],
        isMobile ? ["350%", "-320%"] :["150%", "-220%"],
        { clamp: true }
    );

    // IMAGE 6 (moves last)
    const img6Y = useTransform(
        rawScrollYProgress,
        [0.84, 1.14],
        isMobile ? ["320%", "-320%"] : ["150%", "-220%"],
        { clamp: true }
    );


    return (
        <section ref={containerRef} className="relative w-full h-[300vh] md:h-[500vh]" id="work">
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
                                        <motion.span className="font-mona-narrow font-bold" style={{ y: smoothYLets, display: "block" }}>Let’s</motion.span>
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
                    <motion.div
                        style={{
                            opacity: paraOpacity,
                            y: paraY,
                            scale: paraScale,
                        }}
                        className="absolute inset-0 flex items-center justify-center text-center px-6"
                    >
                        <div className="w-[80%] space-y-6">
                            <p className="text-lg md:text-3xl lg:text-5xl font-medium leading-relaxed text-black/80">
                                We craft immersive brand experiences through design,
                                motion, and technology — built to move people and
                                elevate perception.
                            </p>

                            <p className="uppercase tracking-[0.3em] text-sm text-black/50">
                                Strategy • Design • Execution
                            </p>
                        </div>
                    </motion.div>

                    {/* FLOATING IMAGES */}
                    {/* IMAGE 1 */}
                    <motion.img
                        src="https://framerusercontent.com/images/tsluI8yTSUaemKTnvdjeZLUdbI.jpeg?scale-down-to=1024&width=960&height=1280"
                        style={{ y: img1Y }}
                        className="absolute left-[8%] top-[48%] md:w-1/4 w-1/2 rounded-xl z-40"
                    />

                    {/* IMAGE 2 */}
                    <motion.img
                        src="https://framerusercontent.com/images/tsluI8yTSUaemKTnvdjeZLUdbI.jpeg?scale-down-to=1024&width=960&height=1280"
                        style={{ y: img2Y }}
                        className="absolute right-[10%] top-[42%] md:w-1/4 w-1/2 rounded-xl z-40"
                    />

                    {/* IMAGE 3 */}
                    <motion.img
                        src="https://framerusercontent.com/images/tsluI8yTSUaemKTnvdjeZLUdbI.jpeg?scale-down-to=1024&width=960&height=1280"
                        style={{ y: img3Y }}
                        className="absolute left-1/2 top-[60%] -translate-x-1/2 md:w-1/4 w-1/2 rounded-xl z-30"
                    />
                    {/* IMAGE 4 */}
                    <motion.img
                        src="https://framerusercontent.com/images/tsluI8yTSUaemKTnvdjeZLUdbI.jpeg?scale-down-to=1024&width=960&height=1280"
                        style={{ y: img4Y }}
                        className="absolute left-[8%] top-[48%] md:w-1/4 w-1/2 rounded-xl z-40"
                    />

                    {/* IMAGE 5 */}
                    <motion.img
                        src="https://framerusercontent.com/images/tsluI8yTSUaemKTnvdjeZLUdbI.jpeg?scale-down-to=1024&width=960&height=1280"
                        style={{ y: img5Y }}
                        className="absolute right-[10%] top-[42%] md:w-1/4 w-1/2 rounded-xl z-40"
                    />

                    {/* IMAGE 6 */}
                    <motion.img
                        src="/cardLogo.webp"
                        style={{ y: img6Y }}
                        className="absolute left-1/2 top-[60%] -translate-x-1/2 md:w-1/4 w-1/2 rounded-xl z-30"
                    />


                </motion.div>
            </div>
        </section>
    );
};

export default NewBrandSec;