import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { MapPin } from "lucide-react";

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
              <motion.span
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            </span>
          ))}

          {/* ✅ Proper visible space between words */}
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

  // The scroll target is the tall container (400vh)
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

  /* ================= CINEMATIC SPRING ================= */
  const springConfig = {
    stiffness: 45,
    damping: 35,
    mass: 1.4
  };

  /* ANIMATION TIMELINE (0.0 to 1.0 progress):
     0.0 - 0.3: Text spreads and Main Card rises.
     0.3 - 0.6: Side Cards rise and split apart.
     0.6 - 1.0: PAUSE (Section remains sticky but nothing moves).
  */

  /* ================= TEXT MOVEMENT ================= */
  const leftTextX = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, -80]), springConfig);
  const leftTextY = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 150]), springConfig);
  const rightTextX = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 120]), springConfig);
  const rightTextY = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, -150]), springConfig);

  /* ================= TEXT WRAP/ALIGN ================= */
  const leftTextMaxWidth = useSpring(useTransform(scrollYProgress, [0.15, 0.3], ["70vw", "32vw"]), springConfig);
  const rightTextMaxWidth = useSpring(useTransform(scrollYProgress, [0.15, 0.3], ["55vw", "32vw"]), springConfig);
  const textWrap = useTransform(scrollYProgress, v => (v < 0.15 ? "nowrap" : "normal"));
  const leftAlign = useTransform(scrollYProgress, v => (v < 0.15 ? "left" : "flex-start"));
  const rightAlign = useTransform(scrollYProgress, v => (v < 0.15 ? "right" : "flex-end"));

  /* ================= MAIN CARD ENTER ================= */
  const stackY = useSpring(useTransform(scrollYProgress, [0, 0.3], [800, 0]), springConfig);

  /* ================= SIDE CARDS RISE & SPLIT ================= */
  // Side cards start rising after main card is set (at 0.3) and finish by 0.6
  const sideStackY = useSpring(useTransform(scrollYProgress, [0.3, 0.6], [800, 0]), springConfig);
  const sideOpacity = useSpring(useTransform(scrollYProgress, [0.3, 0.45], [0, 1]), springConfig);

  const leftImgX = useSpring(useTransform(scrollYProgress, [0.45, 0.65], [0, -180]), springConfig);
  const rightImgX = useSpring(useTransform(scrollYProgress, [0.45, 0.65], [0, 180]), springConfig);

  const leftImgRotate = useSpring(useTransform(scrollYProgress, [0.45, 0.65], [0, -6]), springConfig);
  const rightImgRotate = useSpring(useTransform(scrollYProgress, [0.45, 0.65], [0, 6]), springConfig);

  /* ================= SCROLL NORMALIZER ================= */
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    let isActive = false;
    const observer = new IntersectionObserver(
      ([entry]) => (isActive = entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(section);

    const onWheel = e => {
      if (!isActive) return;
      // If we haven't reached the end of the 400vh section, handle smooth scroll
      // This prevents the "jumping" behavior
      if (scrollYProgress.get() < 0.99) {
        // Optional: you can remove preventDefault if you want standard scrolling
        // e.preventDefault(); 
        // window.scrollBy({ top: e.deltaY * 0.8, behavior: "auto" });
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, [scrollYProgress]);

  return (
    <div className="bg-white" id="hero">
      {/* DESKTOP: h-[400vh] creates the long scroll path.
          The 'sticky' container inside stays fixed for the duration.
      */}
      <section ref={containerRef} className="hidden lg:block w-full h-[600vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-image-bg.jpg')" }}
          >
            {/* TEXT LAYER */}
            <div className="absolute z-30 flex w-full justify-center px-20 pointer-events-none" >
              <motion.p
                style={{
                  x: isDesktop ? leftTextX : 0,
                  y: isDesktop ? leftTextY : 0,
                  maxWidth: isDesktop ? leftTextMaxWidth : "auto",
                  whiteSpace: textWrap,
                  textAlign: leftAlign
                }}
                className="text-[5vw] font-bold font-anton leading-[0.9] uppercase text-black"
              >
                <LetterReveal text="Capturing Stories." />
              </motion.p>


              <motion.p
                style={{
                  x: isDesktop ? rightTextX : 0,
                  y: isDesktop ? rightTextY : 0,
                  maxWidth: isDesktop ? rightTextMaxWidth : "auto",
                  whiteSpace: textWrap,
                  textAlign: rightAlign
                }}
                className="text-[5vw] font-bold font-anton leading-[0.9] uppercase text-black"
              >
                <LetterReveal text="Creating Legacy." />
              </motion.p>

            </div>

            {/* IMAGES LAYER */}
            <div className="relative flex items-center justify-center">
              {/* Left Side Image */}
              {/* <motion.div
                style={{
                  x: leftImgX,
                  rotate: leftImgRotate,
                  y: isDesktop ? sideStackY : 0,
                  opacity: isDesktop ? sideOpacity : 1
                }}
                className="absolute w-[250px] h-[50vh]"
              >
                <img
                  src="/hero1.jpg"
                  className="rounded-2xl h-full w-full object-cover shadow-2xl"
                  alt="Photography 1"
                />
              </motion.div> */}

              {/* Right Side Image */}
              {/* <motion.div
                style={{
                  x: rightImgX,
                  rotate: rightImgRotate,
                  y: isDesktop ? sideStackY : 0,
                  opacity: isDesktop ? sideOpacity : 1
                }}
                className="absolute w-[250px] h-[50vh]"
              >
                <img
                  src="/hero3.jpg"
                  className="rounded-2xl h-full w-full object-cover shadow-2xl"
                  alt="Photography 2"
                />
              </motion.div> */}

              {/* Center Main Image */}
              <motion.div
                style={{ y: isDesktop ? stackY : 0 }}
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
        </div>
      </section>

      {/* ================= TABLET ================= */}
      <section className="hidden md:flex lg:hidden w-full min-h-screen flex-col items-center justify-center px-6 text-center bg-gray-50">
        <h1 className="text-6xl font-bold mb-8 uppercase">Capturing Stories. Creating Legacy.</h1>
        <div className="flex items-center justify-center gap-4">
          <img className="w-[220px] h-[380px] rounded-2xl object-cover" src="/hero1.jpg" alt="" />
          <img className="w-[240px] h-[420px] rounded-2xl z-10 object-cover" src="/SanthoshPNG.png" alt="" />
          <img className="w-[220px] h-[380px] rounded-2xl object-cover" src="/hero3.jpg" alt="" />
        </div>
        <div className="flex items-center gap-2 mt-10">
          <MapPin />
          <span className="font-medium">Based in Coimbatore</span>
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="flex md:hidden w-full min-h-[85vh] flex-col items-center justify-center px-6 pt-20 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6 uppercase">Capturing Stories. Creating Legacy.</h1>
        <img
          src="/SanthoshPNG.png"
          className="w-full max-w-[320px] h-[45vh] rounded-2xl mb-8 object-cover shadow-xl"
          alt=""
        />
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <span className="font-medium">Based in Coimbatore</span>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;