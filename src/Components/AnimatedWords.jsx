import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";

const AnimatedWords = ({
  text,
  progress,
  limit = 0.2,
  startOffset = 0,
  className = "",
}) => {
  // Split text by spaces to animate words individually
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap items-center ${className}`}>
      {words.map((word, i) => {
        // Distance delay logic
        const start = startOffset + i * 0.01;
        const end = start + limit;

        // Animate from off-screen right to natural position
        const xRaw = useTransform(progress, [start, end], ["100vw", "0vw"]);
        const opacityRaw = useTransform(progress, [start, end], [0, 1]);

        const x = useSpring(xRaw, { stiffness: 60, damping: 20, mass: 0.5 });
        const opacity = useSpring(opacityRaw, { stiffness: 60, damping: 20 });

        return (
          <motion.span
            key={i}
            style={{ x, opacity }}
            className="inline-block whitespace-nowrap mr-[0.3em]"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedWords;