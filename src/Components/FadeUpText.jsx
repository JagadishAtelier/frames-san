import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollRevealText = ({ text, className = "" }) => {
  const containerRef = useRef(null);
  const words = text.split(" ");

  // Track scroll progress of this specific element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" means start when top of element hits bottom of viewport
    // "end center" means finish when bottom of element hits center of viewport
    offset: ["start 0.8", "start 0.2"], 
  });

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // Calculate the start and end range for each word individually
        const start = i / words.length;
        const end = (i + 1) / words.length;
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  // Map the scroll progress (0 to 1) to an opacity value
  // This creates the "filling in" effect
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative mr-2 lg:mr-3 mt-2">
      {/* Background/Base Layer (Grayed out) */}
      <span className="absolute opacity-20 text-black">{children}</span>
      {/* Animated Layer (Turns Black) */}
      <motion.span style={{ opacity }} className="text-black">
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollRevealText;