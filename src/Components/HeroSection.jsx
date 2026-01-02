import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { MapPin } from "lucide-react";

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

  /* ================= CINEMATIC SPRING ================= */
  const springConfig = {
    stiffness: 45,
    damping: 35,
    mass: 1.4
  };

  /* ================= TEXT MOVEMENT ================= */
  const leftTextX = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [0, -120]),
    springConfig
  );

  const leftTextY = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [0, 150]),
    springConfig
  );

  const rightTextX = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [0, 120]),
    springConfig
  );

  const rightTextY = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [0, -150]),
    springConfig
  );

  /* ================= TEXT WRAP AFTER DISTANCE ================= */
  const leftTextMaxWidth = useSpring(
    useTransform(scrollYProgress, [0.18, 0.35], ["70vw", "32vw"]),
    springConfig
  );

  const rightTextMaxWidth = useSpring(
    useTransform(scrollYProgress, [0.18, 0.35], ["55vw", "32vw"]),
    springConfig
  );

  const textWrap = useTransform(
    scrollYProgress,
    v => (v < 0.18 ? "nowrap" : "normal")
  );
  const leftAlign = useTransform(
    scrollYProgress,
    v => (v < 0.18 ? "left" : "flex-start")
  );

  const rightAlign = useTransform(
    scrollYProgress,
    v => (v < 0.18 ? "right" : "flex-end")
  );



  /* ================= CARD ENTER ================= */
  const stackY = useSpring(
    useTransform(scrollYProgress, [0, 0.35], [800, 0]),
    springConfig
  );

  const sideStackY = useSpring(
    useTransform(scrollYProgress, [0.35, 0.6], [800, 0]),
    springConfig
  );

  const sideOpacity = useSpring(
    useTransform(scrollYProgress, [0.35, 0.45], [0, 1]),
    springConfig
  );

  /* ================= SPLIT & ROTATE (SYNCED WITH SIDE RISE) ================= */
  const leftImgX = useSpring(
    useTransform(scrollYProgress, [0.35, 0.6], [0, -180]),
    springConfig
  );

  const rightImgX = useSpring(
    useTransform(scrollYProgress, [0.35, 0.6], [0, 180]),
    springConfig
  );

  const leftImgRotate = useSpring(
    useTransform(scrollYProgress, [0.35, 0.6], [0, -6]),
    springConfig
  );

  const rightImgRotate = useSpring(
    useTransform(scrollYProgress, [0.35, 0.6], [0, 6]),
    springConfig
  );

  /* ================= SCROLL NORMALIZER ================= */
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    let isActive = false;
    const observer = new IntersectionObserver(
      ([entry]) => (isActive = entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(section);

    const onWheel = e => {
      if (!isActive) return;
      e.preventDefault();
      window.scrollBy({ top: e.deltaY * 0.6, behavior: "auto" });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="bg-cover bg-center bg-no-repeat">
      {/* ================= DESKTOP ================= */}
      <section ref={containerRef} className="hidden lg:block w-full h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-image-bg.jpg')" }}
          >
            {/* TEXT */}
            <div className="absolute z-30 flex w-full justify-center px-20 pointer-events-none">
              <motion.p
                style={{
                  x: isDesktop ? leftTextX : 0,
                  y: isDesktop ? leftTextY : 0,
                  maxWidth: isDesktop ? leftTextMaxWidth : "auto",
                  whiteSpace: textWrap,
                  textAlign: leftAlign
                }}
                className="text-[5vw] font-bold font-anton leading-[0.9] uppercase"
              >
                Capturing Stories.{" "}
              </motion.p>

              <motion.p
                style={{
                  x: isDesktop ? rightTextX : 0,
                  y: isDesktop ? rightTextY : 0,
                  maxWidth: isDesktop ? rightTextMaxWidth : "auto",
                  whiteSpace: textWrap,
                  textAlign: rightAlign
                }}
                className="text-[5vw] font-bold font-anton leading-[0.9] uppercase"
              >
                Creating Legacy.
              </motion.p>
            </div>

            {/* IMAGES */}
            <div
              className="relative flex items-center justify-center"
            >
              <motion.div
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
                  className="rounded-2xl h-full w-full object-cover shadow-xl"
                  alt=""
                />
              </motion.div>

              <motion.div
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
                  className="rounded-2xl h-full w-full object-cover shadow-xl"
                  alt=""
                />
              </motion.div>

              <motion.div
                style={{ y: isDesktop ? stackY : 0 }}
                className="relative w-[250px] h-[55vh] z-20"
              >
                <img
                  src="/SanthoshPNG.png"
                  className="rounded-2xl h-full w-full object-cover"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TABLET ================= */}
      <section className="hidden md:flex lg:hidden w-full min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold mb-8">FRAMES</h1>
        <div className="flex items-center justify-center gap-4">
          <img className="w-[220px] h-[380px] rounded-2xl" src="/hero1.jpg" />
          <img className="w-[240px] h-[420px] rounded-2xl z-10" src="/SanthoshPNG.png" />
          <img className="w-[220px] h-[380px] rounded-2xl" src="/hero3.jpg" />
        </div>
        <div className="flex items-center gap-2 mt-10">
          <MapPin />
          <span>Based in Coimbatore</span>
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="flex md:hidden w-full min-h-screen flex-col items-center justify-center px-6 pt-10 text-center">
        <h1 className="text-4xl font-bold mb-6">FRAMES</h1>
        <img
          src="/SanthoshPNG.png"
          className="w-full max-w-[320px] h-[480px] rounded-2xl mb-8 object-cover"
        />
        <div className="flex items-center gap-2">
          <MapPin />
          <span>Based in Coimbatore</span>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
