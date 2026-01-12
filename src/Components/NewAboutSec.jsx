import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedWords from './AnimatedWords';
import StatsSection from './StatsSection';

function NewAboutSec() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // --- TEXT ANIMATION (0.0 to 0.5) ---
  const aboutUsProgress = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const visualsProgress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const paraProgress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // --- RIGHT SIDE & STATS REVEAL (Starts AFTER text is done at 0.5) ---
  // This ensures the camera and stats stay hidden until the text is readable
  const revealOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  const revealY = useSpring(
    useTransform(scrollYProgress, [0.5, 0.7], [120, 0]),
    { stiffness: 120, damping: 22 }
  );

  // Overshoot scale (pop effect)
  const cardScale = useSpring(
    useTransform(scrollYProgress, [0.5, 0.6, 0.75], [0.6, 1.08, 1]),
    { stiffness: 160, damping: 18 }
  );

  // Tiny tilt for life
  const cardRotate = useSpring(
    useTransform(scrollYProgress, [0.5, 0.7], [-6, 0]),
    { stiffness: 120, damping: 20 }
  );


  return (
    <div className='relative' id='about'>
      <section ref={sectionRef} className="relative h-[450vh] bg-[#040406] pb-20 lg:block hidden">

        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-20 z-10">

          <div className="mx-auto flex flex-col lg:flex-row items-center w-full gap-10">

            {/* LEFT COLUMN: TEXT */}
            <div className="flex-1 space-y-6">
              <AnimatedWords
                text="About Us"
                progress={aboutUsProgress}
                limit={0.1}
                className="text-2xl md:text-3xl font-medium text-white"
              />
              <div className="w-full">
                <AnimatedWords
                  text="Visuals That Speak Louder Than Words"
                  progress={visualsProgress}
                  limit={0.2}
                  highlightCount={2}
                  highlightClass="text-white font-handwriting capitalize tracking-wide"
                  className="text-3xl md:text-6xl font-semibold text-[#BD0100] uppercase tracking-tighter"
                />
              </div>
              <div className="max-w-2xl">
                <AnimatedWords
                  text="Frames of San is a creative photography and videography studio built on the art of authentic storytelling. We capture genuine emotions and meaningful moments, transforming them into visuals that feel natural, timeless, and deeply personal."
                  progress={paraProgress}
                  limit={0.3}
                  className="text-lg md:text-xl text-white/80 leading-relaxed"
                />
                <AnimatedWords
                  text="With a strong passion for visual excellence, we specialize in refined photography and cinematic videography carefully crafted to preserve memories, evoke emotion, and tell stories that live beyond the moment."
                  progress={paraProgress}
                  limit={0.5}
                  className="text-lg md:text-xl text-white/80 leading-relaxed"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: REVEALS AFTER TEXT */}
            <motion.div
              style={{
                opacity: revealOpacity,
                scale: cardScale,
                y: revealY,
                rotate: cardRotate,
                transformPerspective: 1000
              }}
              className="flex-none lg:flex-1 relative w-full h-[30vh] lg:h-[500px]"
            >

              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,_rgba(120,0,0,1)_0%,_rgba(0,0,0,1)_65%)]">
                <img src="/aboutBgprop.svg" className="absolute -right-20 w-full h-full object-contain scale-110 opacity-60 z-0" alt="" />
                <img
                  src="/about1.png"
                  className="relative z-10 w-full h-full object-contain scale-[1.35]"
                  style={{ transform: "scaleX(-1)" }}
                  alt="camera"
                />
              </div>
            </motion.div>
          </div>

          {/* STATS SECTION: ALSO REVEALS AFTER TEXT */}
          <motion.div
            style={{ opacity: revealOpacity, y: revealY }}
            className="w-full mt-12"
          >
            <StatsSection />
          </motion.div>

        </div>
      </section>
      <div className="lg:block hidden pointer-events-none relative bottom-10 left-0 w-full h-32 bg-gradient-to-b from-[#040406] to-[#f3f3f3]" />

      {/* ================= MOBILE ONLY (STATIC) ================= */}
      <div className="block lg:hidden bg-[#040406] px-6 py-10" id="about">
        <div className="flex flex-col gap-10">

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-white">
              About Us
            </h2>

            <h1 className="text-3xl font-semibold text-[#BD0100] uppercase tracking-tighter leading-tight">
              <span className="text-white font-handwriting capitalize tracking-wide">
                Visuals That
              </span>{" "}
              Speak Louder Than Words
            </h1>

            <p className="text-base text-white/80 leading-relaxed">
              Frames of San is a creative photography and videography studio dedicated
              to capturing real emotions and meaningful moments. We believe every frame
              should tell a story—one that feels natural, timeless, and authentic.
              With a passion for visual storytelling, we specialize in photography and
              cinematic videography that preserves memories beautifully.
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full h-[30vh] flex items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(circle,_rgba(120,0,0,1)_0%,_#040406_65%)]">
            <img
              src="/aboutBgprop.svg"
              className="absolute w-full h-full object-contain opacity-60"
              alt=""
            />
            <img
              src="/about1.png"
              className="relative z-10 w-full h-full object-contain scale-[1.25]"
              style={{ transform: "scaleX(-1)" }}
              alt="about"
            />
          </div>

        </div>
      </div>

    </div>
  );
}

export default NewAboutSec;
