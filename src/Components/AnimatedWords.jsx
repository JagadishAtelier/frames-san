import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";

const AnimatedWords = ({
  text,
  progress,
  limit = 0.2,
  startOffset = 0,
  className = "",
  highlightCount = 0,          // 👈 NEW
  highlightClass = "",         // 👈 NEW
}) => {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap items-center ${className}`}>
      {words.map((word, i) => {
        const start = startOffset + i * 0.01;
        const end = start + limit;

        const xRaw = useTransform(progress, [start, end], ["100vw", "0vw"]);
        const opacityRaw = useTransform(progress, [start, end], [0, 1]);

        const x = useSpring(xRaw, { stiffness: 60, damping: 20, mass: 0.5 });
        const opacity = useSpring(opacityRaw, { stiffness: 60, damping: 20 });

        return (
          <motion.span
            key={i}
            style={{ x, opacity }}
            className={`
              inline-block whitespace-nowrap mr-[0.3em]
              ${highlightCount && i < highlightCount ? highlightClass : ""}
            `}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedWords;
