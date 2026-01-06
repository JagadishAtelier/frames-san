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
  const words = text.split(" ");

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden">
          {word.split("").map((letter, li) => (
            <span key={li} className="inline-block overflow-hidden">
              <motion.span variants={letterVariants} className="inline-block">
                {letter}
              </motion.span>
            </span>
          ))}
          {wi !== words.length - 1 && (
            <span className="inline-block w-[0.35em]">&nbsp;</span>
          )}
        </span>
      ))}
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
  const leftTextX = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, -80]), springConfig);
  const leftTextY = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, 150]), springConfig);

  const rightTextX = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, 120]), springConfig);
  const rightTextY = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, -150]), springConfig);

  const leftTextMaxWidth = useSpring(
    useTransform(scrollYProgress, [0.12, 0.25], ["70vw", "32vw"]),
    springConfig
  );

  const rightTextMaxWidth = useSpring(
    useTransform(scrollYProgress, [0.12, 0.25], ["55vw", "32vw"]),
    springConfig
  );

  const textWrap = useTransform(scrollYProgress, v => (v < 0.12 ? "nowrap" : "normal"));
  const leftAlign = useTransform(scrollYProgress, v => (v < 0.12 ? "left" : "flex-start"));
  const rightAlign = useTransform(scrollYProgress, v => (v < 0.12 ? "right" : "flex-end"));

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
            <div className="absolute z-30 flex w-full justify-center px-20 pointer-events-none">
              <motion.p
                style={{
                  x: leftTextX,
                  y: leftTextY,
                  maxWidth: leftTextMaxWidth,
                  whiteSpace: textWrap,
                  textAlign: leftAlign
                }}
                className="text-[5vw] font-bold font-anton leading-[0.9] uppercase text-black"
              >
                <LetterReveal text="Capturing Stories." />
              </motion.p>

              <motion.p
                style={{
                  x: rightTextX,
                  y: rightTextY,
                  maxWidth: rightTextMaxWidth,
                  whiteSpace: textWrap,
                  textAlign: rightAlign
                }}
                className="text-[5vw] font-bold font-anton leading-[0.9] uppercase text-black"
              >
                <LetterReveal text="Creating Legacy." />
              </motion.p>
            </div>

            {/* IMAGE */}
            <motion.div
              style={{ y: stackY }}
              className="relative w-[400px] h-[65vh] z-20"
            >
              <img
                src="/SanthoshPNG.png"
                className="rounded-2xl h-full w-full object-cover"
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
        <h1 className="text-4xl font-bold mb-6 uppercase">
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
