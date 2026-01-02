import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeUpText = ({ text, className = "" }) => {
  const words = text.split(" ");
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false, // Allow re-animation
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const springConfig = { type: "spring", stiffness: 50, damping: 25 };

  const containerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1, // Reverse order when hiding
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.1, // Forward order when showing
        staggerDirection: 1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 100,      // Move down when hiding
      opacity: 0,
      transition: springConfig,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: springConfig,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap justify-center overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-2 py-1">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default FadeUpText;
