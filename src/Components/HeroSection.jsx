import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const LetterReveal = ({ text }) => {
  const characters = text.split("");

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-block" // Removed break-all to keep words intact
      layout
    >
      {characters.map((char, index) => {
        if (char === " ") {
          return <span key={index}> </span>;
        }
        return (
          <motion.span
            key={index}
            variants={letterVariants}
            layout
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* 🔥 Faster settling spring */
  const springConfig = {
    stiffness: 60,
    damping: 28,
    mass: 1
  };

  /* ================= TEXT ================= */
  const leftTextX = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, -150]), springConfig);
  const leftTextY = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, 150]), springConfig);

  const rightTextX = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, 120]), springConfig);
  const rightTextY = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, -150]), springConfig);

  const leftTextMaxWidthVal = useSpring(
    useTransform(scrollYProgress, [0.12, 0.26], [55, 26]),
    springConfig
  );
  const leftTextMaxWidth = useTransform(leftTextMaxWidthVal, (v) => `${v}vw`);

  const rightTextMaxWidthVal = useSpring(
    useTransform(scrollYProgress, [0.12, 0.26], [55, 23]),
    springConfig
  );
  const rightTextMaxWidth = useTransform(rightTextMaxWidthVal, (v) => `${v}vw`);

  /* ================= MAIN IMAGE ================= */
  const stackY = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [800, 0]),
    springConfig
  );

  /* ================= SIDE IMAGES (optional) ================= */
  const sideStackY = useSpring(
    useTransform(scrollYProgress, [0.25, 0.45], [800, 0]),
    springConfig
  );

  const sideOpacity = useSpring(
    useTransform(scrollYProgress, [0.25, 0.4], [0, 1]),
    springConfig
  );

  const leftImgX = useSpring(
    useTransform(scrollYProgress, [0.4, 0.55], [0, -180]),
    springConfig
  );

  const rightImgX = useSpring(
    useTransform(scrollYProgress, [0.4, 0.55], [0, 180]),
    springConfig
  );

  const leftImgRotate = useSpring(
    useTransform(scrollYProgress, [0.4, 0.55], [0, -6]),
    springConfig
  );

  const rightImgRotate = useSpring(
    useTransform(scrollYProgress, [0.4, 0.55], [0, 6]),
    springConfig
  );

  return (
    <div id="hero">
      {/* ================= DESKTOP ================= */}
      <section
        ref={containerRef}
        className="hidden lg:block w-full h-[260vh] relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-image-bg.jpg')" }}
          >
            {/* TEXT */}
            <div className="absolute z-30 flex w-full justify-center px-4 pointer-events-none">
              <motion.p
                style={{
                  x: leftTextX,
                  y: leftTextY,
                  maxWidth: leftTextMaxWidth,
                }}
                className="text-[5vw] font-bold font-anton leading-none uppercase text-black text-left"
              >
                <LetterReveal text="Capturing Stories." />
              </motion.p>

              <motion.p
                style={{
                  x: rightTextX,
                  y: rightTextY,
                  maxWidth: rightTextMaxWidth,
                }}
                className="text-[5vw] font-bold font-anton leading-none uppercase text-black text-right"
              >
                <LetterReveal text="Creating Legacy." />
              </motion.p>
            </div>

            {/* IMAGE */}
            <motion.div
              style={{ y: stackY }}
              className="relative w-auto h-[65vh] z-20"
            >
              <img
                src="/SanthoshPNG.png"
                className="rounded-2xl h-full w-auto object-cover"
                alt="Main Portrait"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section
        className="flex lg:hidden w-full min-h-[85vh] flex-col items-center justify-center px-6 pt-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-image-bg.jpg')" }}
      >
        <h1 className="text-[4.5vh] tracking-widest font-medium mb-6 uppercase font-only-anton leading-normal">
          Capturing Stories. Creating Legacy.
        </h1>

        <img
          src="/SanthoshPNG.png"
          className="w-full max-w-[320px] h-[45vh] rounded-2xl mb-8 object-cover"
          alt=""
        />
      </section>
    </div>
  );
}

export default HeroSection;
