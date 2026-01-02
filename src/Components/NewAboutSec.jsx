import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedWords from './AnimatedWords';

function NewAboutSec() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ================= RIGHT CARDS ANIMATION ================= */
  const card1Opacity = useTransform(scrollYProgress, [0.6, 0.68], [0, 1]); // Unused but shifted
  const card2Opacity = useTransform(scrollYProgress, [0.68, 0.76], [0, 1]); // Unused but shifted
  const card3Opacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]); // Shifted later to create pause
  const card4Opacity = useTransform(scrollYProgress, [0.84, 0.92], [0, 1]); // Unused but shifted

  const cardScale = useSpring(
    useTransform(scrollYProgress, [0.75, 0.95], [0.85, 1]),
    { stiffness: 100, damping: 18 }
  );

  return (
    <div className='relative'>
      <section ref={sectionRef} className="relative h-[450vh] bg-[#040406]">

        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-20 z-10">
          <div className="mx-auto flex flex-col lg:flex-row items-center w-full gap-10 overflow-visible">

            {/* ================= LEFT COLUMN (TEXT) ================= */}
            <div className="flex-1 space-y-6">
              <AnimatedWords
                text="About Us"
                progress={scrollYProgress}
                limit={0.15}
                startOffset={0}
                className="text-2xl md:text-1xl font-medium text-white"
              />

              {/* Wrapped in a container to ensure consistent alignment during travel */}
              <div className="w-full">
                <AnimatedWords
                  text="Visuals That Speak Louder Than Words"
                  progress={scrollYProgress}
                  limit={0.3}
                  startOffset={0.05}
                  highlightCount={2}           // 👈 Visuals That
                  highlightClass="text-white font-handwriting capitalize tracking-wide" // 👈 white
                  className="text-3xl md:text-6xl font-semibold text-[#BD0100] uppercase tracking-tighter"
                />

              </div>

              <div className="max-w-2xl relative z-50">
                <AnimatedWords
                  text="Frames of San is a creative photography and videography studio dedicated to capturing real emotions and meaningful moments. We believe every frame should tell a story—one that feels natural, timeless, and authentic. With a passion for visual storytelling, we specialize in photography and cinematic videography that preserves memories beautifully."
                  progress={scrollYProgress}
                  limit={0.3}
                  startOffset={0.15}
                  className="text-lg md:text-xl text-white/80 leading-relaxed"
                />
              </div>
            </div>

            {/* ================= RIGHT COLUMN (CARDS - ORIGINAL DESIGN) ================= */}
            <motion.div className="flex-none lg:flex-1 relative w-full h-[50vh] lg:h-[800px] mt-12 lg:mt-0 overflow-visible">
              {/* 
              <motion.div style={{ opacity: card1Opacity, scale: cardScale }} className="absolute top-0 left-0 md:w-60 md:h-60 w-36 h-36 rounded-2xl md:rounded-[40px] overflow-hidden z-10">
                <img src="/hero3.jpg" className="w-full h-full object-cover" alt="" />
              </motion.div> */}

              {/* <motion.div style={{ opacity: card2Opacity, scale: cardScale }} className="absolute top-[15%] left-[25%] md:w-60 md:h-60 w-36 h-36 z-20">
                <img src="/h1.jpg" className="w-full h-full object-cover md:rounded-[40px] rounded-2xl" alt="" />
                <div className="hidden md:flex absolute -top-10 right-0 bg-white text-black px-4 py-2 rounded-full text-xs font-bold">@nina</div>
              </motion.div> */}

              <motion.div
                style={{ opacity: card3Opacity, scale: cardScale }}
                className="absolute top-[0%]  right-0 md:w-full md:h-full w-full h-50 z-0 flex items-center justify-center bg-[radial-gradient(circle,_rgba(120,0,0,1)_0%,_rgba(0,0,0,1)_65%)] "
              >
                <img
                  src="/aboutBgprop.svg"
                  className="absolute -right-20 w-full h-full object-contain scale-110 opacity-60 z-0"
                  alt=""
                />
                <img
                  src="/about1.png"
                  className="relative z-10 w-full h-full object-contain scale-[1.35] -right-20"
                  style={{transform:"scaleX(-1)"}}
                  alt="about"
                />
              </motion.div>
              {/* 
              <motion.div style={{ opacity: card4Opacity, scale: cardScale }} className="absolute top-[45%] left-[60%] md:w-60 md:h-60 w-36 h-36 rounded-2xl md:rounded-[40px] overflow-hidden z-40">
                <img src="/h3.jpg" className="w-full h-full object-cover" alt="" />
              </motion.div> */}

            </motion.div>

            {/* <div className='h-[50vh] flex-1'>
              <img src='/about1.png' className='h-full w-full rotate-90 object-cover'/>
            </div> */}
          </div>
        </div>

        {/* BOTTOM IMAGE - Anchored to the section floor */}
        {/* <div className="absolute -bottom-40 left-0 w-full z-0 h-40 pointer-events-none">
          <img
            src="https://cdn.prod.website-files.com/68de1493b47616b2526c4ba7/68f284506ddef7dee7053edf_Bg.avif"
            loading="lazy"
            alt="Texture"
            className="w-full h-full"
          />
        </div> */}
      </section>
    </div>
  );
}

export default NewAboutSec;