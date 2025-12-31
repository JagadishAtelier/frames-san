import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const NewBrandSec = () => {
    const containerRef = useRef(null);

    // 1. Monitor scroll progress relative to this container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"], // Trigger while the container is in view
    });

// Delay + longer range (starts after slight scroll)
const rawReveal = useTransform(
  scrollYProgress,
  [0.05, 0.65],   // ⬅️ starts a bit late, opens slowly
  [60, 0]         // ⬅️ more closed initially = larger reveal
);

// Spring for smoothness
const smoothReveal = useSpring(rawReveal, {
  stiffness: 20,
  damping: 20,
  mass: 0.6,
});

// Vertical open from center
const clipPath = useTransform(
  smoothReveal,
  (v) => `inset(${v}% 0% ${v}% 0%)`
);


    return (
        // Increase height (300vh) to give the user enough "room" to scroll and see the animation
        <section ref={containerRef} className="relative w-full h-[300vh]">

            {/* Sticky wrapper: keeps the content locked to the screen */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Layer: The "Keep Scrolling" text stays behind */}
                <div className="absolute top-1/4 inset-0 flex items-start justify-center">
                    <p className="text-sm tracking-[0.3em] uppercase text-black">
                        Keep scrolling
                    </p>
                </div>

                {/* Foreground Layer: The Reveal Section */}
                <motion.div
                    style={{ clipPath }}
                    className="relative z-10 w-full h-full flex flex-col items-center justify-center text-black"
                >
                    {/* CONTENT START */}
                    <div className="flex flex-col items-center px-6 text-center">
                        <div className="mb-10">
                            {/* ⬇️ CONTROL WIDTH HERE */}
                            <div className="w-[280px] sm:w-[420px] md:w-[600px] overflow-hidden">
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView="auto"
                                    spaceBetween={24}
                                    loop={true}
                                    speed={7000}              // smooth continuous speed
                                    autoplay={{
                                        delay: 0,               // no stop
                                        disableOnInteraction: false,
                                    }}
                                    allowTouchMove={false}
                                    className="!ease-linear"
                                >
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <SwiperSlide key={i} className="!w-auto">
                                            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-black whitespace-nowrap">
                                                Bring Ideas To Life —
                                            </span>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        <div className="space-y-0 md:space-y-2">
                            <div className="flex justify-center gap-4 text-6xl md:text-[9rem] font-bold uppercase leading-none">
                                <span>Let’s</span>
                                <h1 className="text-gray-500">Build</h1>
                            </div>
                            <div className="flex justify-center gap-4 text-6xl md:text-[9rem] font-bold uppercase leading-none">
                                <h1 className="text-gray-500">Your</h1>
                                <span>Brand</span>
                            </div>
                        </div>

                        <div className="mt-16">
                            <a href="/contact" className="px-12 py-5 border border-black bg-black text-white rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                    {/* CONTENT END */}
                </motion.div>
            </div>
        </section>
    );
};

export default NewBrandSec;