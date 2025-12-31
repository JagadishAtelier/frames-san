import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebe21ea87383387c0f4_Follow%20Me%20Card%20Img3.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebdb91b926a56051877_Follow%20Me%20Card%20Img2.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebe21ea87383387c0f4_Follow%20Me%20Card%20Img3.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/6835a4f59a8cd04a64b8906f_Insta%20Img4.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebdb91b926a56051877_Follow%20Me%20Card%20Img2.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebe21ea87383387c0f4_Follow%20Me%20Card%20Img3.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebe21ea87383387c0f4_Follow%20Me%20Card%20Img3.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebdb91b926a56051877_Follow%20Me%20Card%20Img2.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebe21ea87383387c0f4_Follow%20Me%20Card%20Img3.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/6835a4f59a8cd04a64b8906f_Insta%20Img4.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebdb91b926a56051877_Follow%20Me%20Card%20Img2.jpg",
    "https://cdn.prod.website-files.com/681af738842b1d81a3872bfb/681c8ebe21ea87383387c0f4_Follow%20Me%20Card%20Img3.jpg",
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


    /* HERO TRANSFORM */
    const heroWidth = useTransform(scrollYProgress, [0, 0.35], ["100vw", "25rem"]);
    const heroHeight = useTransform(scrollYProgress, [0, 0.35], ["100vh", "70vh"]);
    const heroRadius = useTransform(scrollYProgress, [0, 0.35], ["0px", "20px"]);
    const heroOpacity = useTransform(scrollYProgress, [0.32, 0.36], [1, 0]);

    /* SECTION-BOUND LOOP */
    const rawX = useTransform(scrollYProgress, [0.45, 1], [0, -50]);
    const x = useTransform(rawX, (v) => `${v % 20}%`);

    const loopImages = [...images, ...images];

    return (
        <section ref={sectionRef} className="relative lg:h-[400vh] h-fit lg:mt-10">
            <div className="sticky top-0 lg:h-screen h-fit overflow-hidden flex lg:items-center items-start justify-center">
                <p className="absolute lg:top-20 top-10 left-5 lg:left-1/2 lg:-translate-x-1/2 z-0 lg:text-8xl text-4xl w-full lg:w-auto font-bold text-black pointer-events-none">
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
