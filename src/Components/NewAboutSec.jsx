import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedWords from './AnimatedWords';

function NewAboutSec() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ---------------- SLIGHTLY SLOWER TEXT ANIMATION ----------------
  const aboutUsProgress = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const visualsProgress = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const paraProgress = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  // ---------------- RIGHT CARD ANIMATION ----------------
  const card1Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const card4Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  const cardScale = useSpring(
    useTransform(scrollYProgress, [0.55, 0.75], [0.85, 1]),
    { stiffness: 100, damping: 18 }
  );

  return (
    <div className='relative' id='about'>
      <section ref={sectionRef} className="relative h-[450vh] bg-[#040406]">

        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6 md:px-12 lg:px-20 z-10">
          <div className="mx-auto flex flex-col lg:flex-row items-center w-full gap-10 overflow-visible h-screen">

            {/* ---------------- LEFT COLUMN (TEXT) ---------------- */}
            <div className="flex-1 space-y-6">

              <AnimatedWords
                text="About Us"
                progress={aboutUsProgress}  // slightly slower
                limit={0.1}
                startOffset={0}
                className="text-2xl md:text-3xl font-medium text-white"
              />

              <div className="w-full">
                <AnimatedWords
                  text="Visuals That Speak Louder Than Words"
                  progress={visualsProgress} // slightly slower
                  limit={0.2}
                  startOffset={0}
                  highlightCount={2}
                  highlightClass="text-white font-handwriting capitalize tracking-wide"
                  className="text-3xl md:text-6xl font-semibold text-[#BD0100] uppercase tracking-tighter"
                />
              </div>

              <div className="max-w-2xl relative z-50">
                <AnimatedWords
                  text="Frames of San is a creative photography and videography studio dedicated to capturing real emotions and meaningful moments. We believe every frame should tell a story—one that feels natural, timeless, and authentic. With a passion for visual storytelling, we specialize in photography and cinematic videography that preserves memories beautifully."
                  progress={paraProgress} // slightly slower
                  limit={0.3}
                  startOffset={0}
                  className="text-lg md:text-xl text-white/80 leading-relaxed"
                />
              </div>
            </div>

            {/* ---------------- RIGHT COLUMN (CARD) ---------------- */}
            <motion.div className="flex-none lg:flex-1 relative w-full h-[50vh] lg:h-[800px] mt-12 lg:mt-0 overflow-visible">
              <motion.div
                style={{ opacity: card3Opacity, scale: cardScale }}
                className="absolute top-[0%] right-0 md:w-full md:h-full w-full h-50 z-0 flex items-center justify-center bg-[radial-gradient(circle,_rgba(120,0,0,1)_0%,_#040406_65%)]"
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewAboutSec;
