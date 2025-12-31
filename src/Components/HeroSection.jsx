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

  /* ================= TEXT (NO MERGE BACK) ================= */
  const leftTextRaw = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -430]
  );
  const rightTextRaw = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, 470]
  );

  const leftTextX = useSpring(leftTextRaw, springConfig);
  const rightTextX = useSpring(rightTextRaw, springConfig);

  /* ================= CARD ENTER → HOLD ================= */
  const stackYRaw = useTransform(
    scrollYProgress,
    [0, 0.35],
    [800, 0]
  );
  const stackY = useSpring(stackYRaw, springConfig);

  /* ================= SPLIT (FINAL STATE) ================= */
  const leftImgXRaw = useTransform(
    scrollYProgress,
    [0.55, 0.7],
    [0, -180]
  );
  const rightImgXRaw = useTransform(
    scrollYProgress,
    [0.55, 0.7],
    [0, 180]
  );

  /* ================= ROTATION (FINAL STATE) ================= */
  const leftImgRotateRaw = useTransform(
    scrollYProgress,
    [0.55, 0.7],
    [0, -6]
  );
  const rightImgRotateRaw = useTransform(
    scrollYProgress,
    [0.55, 0.7],
    [0, 6]
  );

  const leftImgX = useSpring(leftImgXRaw, springConfig);
  const rightImgX = useSpring(rightImgXRaw, springConfig);
  const leftImgRotate = useSpring(leftImgRotateRaw, springConfig);
  const rightImgRotate = useSpring(rightImgRotateRaw, springConfig);

  /* ================= SCROLL NORMALIZER ================= */
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    let isActive = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    const normalizeDelta = (deltaY) => {
      const minDelta = 10;
      return Math.sign(deltaY) * Math.max(Math.abs(deltaY), minDelta);
    };

    const onWheel = (e) => {
      if (!isActive) return;
      e.preventDefault();

      const slowFactor = 0.6;
      const delta = normalizeDelta(e.deltaY);

      window.scrollBy({
        top: delta * slowFactor,
        behavior: "auto"
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/68de1493b47616b2526c4ba7/68f0f5cdb4be16b218305de8_Hero%20Bg.avif')"
      }}
    >

      {/* ================= DESKTOP VIEW ================= */}
      <section
        ref={containerRef}
        className="hidden lg:block w-full h-[220vh]"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/68de1493b47616b2526c4ba7/68f0f5cdb4be16b218305de8_Hero%20Bg.avif')"
      }}>

            {/* TEXT */}
            <motion.div className="absolute z-30 flex text-black flex-col">
              <motion.p
                style={{ x: isDesktop ? leftTextX : 0 }}
                className="text-[10vw] font-bold leading-none uppercase"
              >
                <span>Visi</span>
                <span>lity</span>
              </motion.p>
              <motion.p
                style={{ x: isDesktop ? rightTextX : 0 }}
                className="text-[10vw] font-bold leading-none text-red-600 uppercase"
              >
                                <span>Imp</span>
                <span>act</span>
              </motion.p>
            </motion.div>

            {/* IMAGE STACK */}
            <motion.div
              style={{ y: isDesktop ? stackY : 0 }}
              className="relative flex items-center justify-center"
            >
              {/* LEFT */}
              <motion.div
                style={{ x: leftImgX, rotate: leftImgRotate }}
                className="absolute w-[250px] h-[50vh]"
              >
                <img
                  src="/hero1.jpg"
                  className="rounded-2xl h-full w-full object-cover shadow-xl"
                  alt=""
                />
              </motion.div>

              {/* RIGHT */}
              <motion.div
                style={{ x: rightImgX, rotate: rightImgRotate }}
                className="absolute w-[250px] h-[50vh]"
              >
                <img
                  src="/hero3.jpg"
                  className="rounded-2xl h-full w-full object-cover shadow-xl"
                  alt=""
                />
              </motion.div>

              {/* CENTER */}
              <div className="relative w-[250px] h-[55vh] z-20">
                <img
                  src="/herocam.jpg"
                  className="rounded-2xl h-full w-full object-cover shadow-2xl"
                  alt=""
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= TABLET VIEW ================= */}
      <section className="hidden md:flex lg:hidden w-full min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold mb-8">FRAMES</h1>
        <div className="flex items-center justify-center gap-4">
          <img className="w-[220px] h-[380px] object-cover rounded-2xl -right-10 relative" src="/hero1.jpg" />
          <img className="w-[240px] h-[420px] object-cover rounded-2xl z-10" src="/herocam.jpg" />
          <img className="w-[220px] h-[380px] object-cover rounded-2xl -left-10 relative" src="/hero3.jpg" />
        </div>
        <div className="flex items-center gap-2 mt-10">
          <MapPin />
          <span>Based in Coimbatore</span>
        </div>
      </section>

      {/* ================= MOBILE VIEW ================= */}
      <section className="flex md:hidden w-full min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">FRAMES</h1>
        <img src="/herocam.jpg" className="w-full max-w-[320px] h-[420px] rounded-2xl mb-6 object-cover" />
        <div className="flex items-center gap-2">
          <MapPin />
          <span>Based in Coimbatore</span>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
