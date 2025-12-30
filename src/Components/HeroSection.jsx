import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

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

  /* ================= TEXT (MERGES AT VERY END) ================= */
  const leftTextRaw = useTransform(
    scrollYProgress,
    [0, 0.35, 0.9, 1],
    [0, -250, -250, 0]
  );
  const rightTextRaw = useTransform(
    scrollYProgress,
    [0, 0.35, 0.9, 1],
    [0, 340, 340, 0]
  );
  const leftTextX = useSpring(leftTextRaw, springConfig);
  const rightTextX = useSpring(rightTextRaw, springConfig);

  /* ================= CARD ENTER → HOLD → MOVE UP ================= */
  const stackYRaw = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85, 1],
    [800, 0, 0, -320]
  );
  const stackY = useSpring(stackYRaw, springConfig);

  /* ================= SPLIT AFTER CENTER ================= */
  const leftImgXRaw = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.85],
    [0, -220, 0]
  );
  const rightImgXRaw = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.85],
    [0, 220, 0]
  );

  /* ================= ROTATE → STRAIGHT ================= */
  const leftImgRotateRaw = useTransform(
    scrollYProgress,
    [0.55, 0.7, 0.85],
    [0, -6, 0]
  );
  const rightImgRotateRaw = useTransform(
    scrollYProgress,
    [0.55, 0.7, 0.85],
    [0, 6, 0]
  );

  const leftImgX = useSpring(leftImgXRaw, springConfig);
  const rightImgX = useSpring(rightImgXRaw, springConfig);
  const leftImgRotate = useSpring(leftImgRotateRaw, springConfig);
  const rightImgRotate = useSpring(rightImgRotateRaw, springConfig);

  /* ================= SLOW SCROLL HANDLER (TRACKPAD + MOUSE NORMALIZED) ================= */
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    let isActive = false;

    // Intersection observer to detect section in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    // Normalize scroll delta across devices
    const normalizeDelta = (deltaY) => {
      // Ensure trackpad delta is not too small
      const minDelta = 10;
      return Math.sign(deltaY) * Math.max(Math.abs(deltaY), minDelta);
    };

    const onWheel = (e) => {
      if (!isActive) return;
      e.preventDefault();

      const slowFactor = 0.15; // cinematic scroll speed
      const delta = normalizeDelta(e.deltaY);

      window.scrollBy({
        top: delta * slowFactor,
        left: 0,
        behavior: "auto" // smoother, no double interpolation
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="hidden lg:block w-full h-[220vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">

          {/* ================= TEXT ================= */}
          <motion.div className="absolute z-30 flex text-black will-change-transform">
            <motion.p
              style={{ x: isDesktop ? leftTextX : 0 }}
              className="text-[13vw] font-bold leading-none"
            >
              Fra
            </motion.p>
            <motion.p
              style={{ x: isDesktop ? rightTextX : 0 }}
              className="text-[13vw] font-bold leading-none text-red-600"
            >
              mes
            </motion.p>
          </motion.div>

          {/* ================= IMAGE STACK ================= */}
          <motion.div
            style={{ y: isDesktop ? stackY : 0 }}
            className="relative flex items-center justify-center will-change-transform"
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
                src="/hero-2.jpg"
                className="rounded-2xl h-full w-full object-cover shadow-xl"
                alt=""
              />
            </motion.div>

            {/* CENTER */}
            <div className="relative w-[250px] h-[55vh] z-20">
              <img
                src="/hero3.jpg"
                className="rounded-2xl h-full w-full object-cover shadow-2xl"
                alt=""
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
