import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import AnimatedWords from './AnimatedWords';

function NewAboutSec() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ================= LEFT TEXT ================= */

  // Raw transforms (slightly faster range)
  const textXRaw = useTransform(scrollYProgress, [0, 0.35], [200, 0]);
  const textOpacityRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [0, 1, 1]
  );

  // Smooth spring motion
  const textX = useSpring(textXRaw, {
    stiffness: 120,
    damping: 20,
    mass: 0.6,
  });

  const textOpacity = useSpring(textOpacityRaw, {
    stiffness: 120,
    damping: 25,
  });

  /* ================= RIGHT CARDS ================= */

  const card1Opacity = useTransform(scrollYProgress, [0.5, 0.58], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.58, 0.66], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.66, 0.74], [0, 1]);
  const card4Opacity = useTransform(scrollYProgress, [0.74, 0.82], [0, 1]);

  const cardScaleRaw = useTransform(scrollYProgress, [0.5, 0.82], [0.85, 1]);

  const cardScale = useSpring(cardScaleRaw, {
    stiffness: 100,
    damping: 18,
  });

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-[#1c1c1c]">
      <div className="sticky top-0 h-fit w-full flex items-start overflow-hidden px-6 md:px-12 lg:px-20 py-20">
        <div className="mx-auto flex flex-col lg:flex-row items-center w-full gap-10">

          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className="flex-1 space-y-8"
          >
            <AnimatedWords
              text="About Us"
              progress={scrollYProgress}
              limit={0.15}
              className="text-4xl md:text-5xl font-bold text-white"
            />

            <AnimatedWords
              text="Photography & Videography Studio"
              progress={scrollYProgress}
              limit={0.3}
              startOffset={0.15}
              className="text-2xl md:text-7xl font-semibold text-red-600"
            />

            <AnimatedWords
              text="Frames of San is a creative photography and videography studio dedicated to capturing real emotions and meaningful moments. We believe every frame should tell a story one that feels natural, timeless, and authentic. With a passion for visual storytelling, we specialize in photography and cinematic videography that preserves memories beautifully. From weddings and portraits to events and brand visuals, our work is driven by creativity, detail, and emotion."
              progress={scrollYProgress}
              limit={0.45}
              startOffset={0.3}
              className="text-lg md:text-xl text-white"
            />
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div className="flex-none lg:flex-1 relative w-full h-[50vh] lg:h-[600px] mt-12 lg:mt-0">

            <motion.div
              style={{ opacity: card1Opacity, scale: cardScale }}
              className="absolute top-0 left-0 md:w-60 md:h-60 w-36 h-36 rounded-2xl md:rounded-[40px] overflow-hidden z-10"
            >
              <img src="/hero3.jpg" className="w-full h-full object-cover" alt="" />
            </motion.div>

            <motion.div
              style={{ opacity: card2Opacity, scale: cardScale }}
              className="absolute top-[15%] left-[25%] md:w-60 md:h-60 w-36 h-36 z-20"
            >
              <img src="/h1.jpg" className="w-full h-full object-cover md:rounded-[40px] rounded-2xl" alt="" />
              <div className="hidden md:flex absolute -top-10 right-0 bg-white text-black px-4 py-2 rounded-full text-xs font-bold">
                @nina
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: card3Opacity, scale: cardScale }}
              className="absolute top-[30%] left-[40%] md:w-60 md:h-60 w-36 h-36 z-30"
            >
              <img src="/h2.jpg" className="w-full h-full object-cover md:rounded-[40px] rounded-2xl" alt="" />
              <div className="hidden md:flex absolute -top-10 left-0 bg-zinc-800 text-white px-4 py-2 rounded-full text-xs font-bold">
                @austin
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: card4Opacity, scale: cardScale }}
              className="absolute top-[45%] left-[60%] md:w-60 md:h-60 w-36 h-36 rounded-2xl md:rounded-[40px] overflow-hidden z-40"
            >
              <img src="/h3.jpg" className="w-full h-full object-cover" alt="" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 left-0 w-full h-[10vh] bg-gradient-to-b from-[#1c1c1c] to-[#f3f3f3]" />
    </section>
  );
}

export default NewAboutSec;
