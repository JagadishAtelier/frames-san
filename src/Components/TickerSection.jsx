import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { useEffect, useState } from "react";

const images = [
    "/follow/f1.jpg",
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

useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024); // mobile + tablet
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
}, []);


const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isMobile
        ? ["start 500%", "end end"]   // MOBILE: start later
        : ["start start", "end end"] // DESKTOP: original behavior
});


/* HERO TRANSFORM (RAW) */
const heroWidthRaw = useTransform(scrollYProgress, [0, 0.35], ["100vw", "25rem"]);
const heroHeightRaw = useTransform(scrollYProgress, [0, 0.35], ["100vh", "70vh"]);
const heroRadiusRaw = useTransform(scrollYProgress, [0, 0.35], ["0px", "20px"]);
const heroOpacityRaw = useTransform(scrollYProgress, [0.32, 0.36], [1, 0]);

/* SMOOTH SPRINGS */
const heroWidth = useSpring(heroWidthRaw, {
  stiffness: 60,
  damping: 20,
  mass: 0.8,
});

const heroHeight = useSpring(heroHeightRaw, {
  stiffness: 60,
  damping: 20,
  mass: 0.8,
});

const heroRadius = useSpring(heroRadiusRaw, {
  stiffness: 80,
  damping: 18,
});

const heroOpacity = useSpring(heroOpacityRaw, {
  stiffness: 100,
  damping: 25,
});


    /* SECTION-BOUND LOOP */
/* SLIDER SMOOTH SCROLL */
const rawX = useTransform(scrollYProgress, [0.45, 1], [0, -3000]);

const x = useSpring(rawX, {
  stiffness: 40,
  damping: 25,
  mass: 1.2,
});


    const loopImages = [...images, ...images];

    return (
        <section ref={sectionRef} className="relative lg:h-[400vh] h-fit lg:mt-10">
            <div className="sticky top-0 lg:h-screen h-fit overflow-hidden flex lg:items-center items-start justify-center">
                <p className="absolute font-anton lg:top-18 top-10 left-5 lg:left-1/2 lg:-translate-x-1/2 z-0 lg:text-8xl text-4xl w-full lg:w-auto font-bold text-black pointer-events-none">
                    FOLLOW ME
                </p>
                <a href="https://www.instagram.com/frames_of_san?igsh=bnNiMHM3N2EzY3N6" target="_blank" className="absolute flex gap-2 top-1/2 left-1/2 -translate-x-1/2 z-50 text-2xl font-bold text-black cursor-pointer bg-white px-10 py-3 rounded-4xl">
                    <img src="https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8b1ac28985d91e1df7e8_Button%20CTA%20Icon.svg" />
                    <p>frames_of_san</p>
                </a>


                {/* HERO */}
                <motion.div
                    style={{
                        width: heroWidth,
                        height: heroHeight,
                        borderRadius: heroRadius,
                        opacity: heroOpacity,
                    }}
                    className="absolute z-10 overflow-hidden lg:mt-24 mt-0 hidden md:block"
                >
                    <img src={images[0]} className="w-full h-full object-cover" />
                </motion.div>

                {/* SLIDER */}
                <motion.div
                    style={{ x }}
                    className="relative flex items-center space-x-6 lg:mt-24"
                >
                    {/* HERO SLOT */}
                    <div className="w-[25rem] h-[70vh] flex-shrink-0" />

                    {loopImages.map((img, index) => (
                        <div
                            key={index}
                            className="lg:w-[25rem] lg:h-[70vh] h-[40vh] w-[15rem] rounded-xl overflow-hidden flex-shrink-0"
                        >
                            <img src={img} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
