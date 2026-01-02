import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CallToAction = () => {
  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 1. Video Wrapper Scale: Starts at 0.9, expands to 1
  const videoScale = useTransform(smoothProgress, [0, 1], [0.9, 1]);
  
  // 2. Curtain Overlays: Top moves up, bottom moves down
  const topMove = useTransform(smoothProgress, [0, 0.8], ["0%", "-100%"]);
  const bottomMove = useTransform(smoothProgress, [0, 0.8], ["0%", "100%"]);

  // 3. Text Reveal: Opacity and Y-axis slide
  const textOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const textY = useTransform(smoothProgress, [0.4, 0.7], [100, 0]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Helper text */}
        <div className="absolute top-10 z-30 text-white/50 text-xs uppercase tracking-[0.2em]">
          Keep scrolling
        </div>

        {/* Video Wrapper */}
        <motion.div 
          style={{ scale: videoScale }}
          className="absolute inset-0 m-4 md:m-8 overflow-hidden rounded-[2rem] md:rounded-[4rem] z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f23d0b14d2158ab1fa8dea_14471915_3840_2160_30fps%20%281%29-poster-00001.jpg"
          >
            <source src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f23d0b14d2158ab1fa8dea_14471915_3840_2160_30fps%20%281%29-transcode.mp4" type="video/mp4" />
          </video>
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Content Layer */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-20 text-center text-white px-4"
        >
          {/* Subtitle with Asterisk */}
          <div className="flex flex-col items-center mb-6">
            <motion.img 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f7cadfd454c94c5b5251cb_grey-asterisk-icon.svg" 
              className="w-8 h-8 mb-4 opacity-60"
            />
            <div className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-widest flex gap-4 overflow-hidden whitespace-nowrap">
              <span>Bring Ideas To Life — Bring Ideas To Life</span>
            </div>
          </div>

          {/* Titles */}
          <h2 className="text-[12vw] leading-[0.85] font-black italic uppercase italic">
            Let’s <span className="text-gray-500">Build</span>
          </h2>
          <h2 className="text-[12vw] leading-[0.85] font-black italic uppercase italic">
            <span className="text-gray-500">Your</span> Brand
          </h2>

          {/* Button */}
          <div className="mt-12 flex justify-center">
            <a 
              href="#contact"
              className="group relative flex items-center bg-white text-black px-8 py-4 rounded-full font-bold uppercase overflow-hidden hover:pr-12 transition-all duration-300"
            >
              <span className="relative z-10 mr-4">Get in Touch</span>
              <img 
                src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f287b26ff74f4a3003bac0_black-star-icon.svg" 
                className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
                alt="star"
              />
            </a>
          </div>
        </motion.div>

        {/* The Black "Curtain" Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col">
          <motion.div style={{ y: topMove }} className="h-1/2 w-full bg-black origin-top" />
          <motion.div style={{ y: bottomMove }} className="h-1/2 w-full bg-black origin-bottom" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;