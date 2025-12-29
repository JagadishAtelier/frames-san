import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import MarqueeText from "./MarqueeText";

const CTASection = () => {
  const images = [
    "/h4.jpg",
    "/h2.jpg", // Replace with your 2nd image
    "/h6.jpg", // Replace with your 3rd image
  ];

  const cardVariants = {
    animate: (i) => {
      const startY =
        i === 0 ? -120 :
          i === 1 ? 0 :
            120;

      const scale =
        i === 0 ? 1 :
          i === 1 ? 0.96 :
            0.92;

      const opacity =
        i === 0 ? 1 :
          i === 1 ? 0.9 :
            0.85;

      // 🔥 HOLD TIME AT CENTER
      const centerHold =
        i === 2 ? 0.15 :   // index 2 moves FIRST
          i === 1 ? 0.45 :
            0.55;

      const t0 = 0;
      const t1 = 0.3;                 // reach center
      const t2 = t1 + centerHold;     // hold
      const tEnd = 1;

      return {
        x:
          i === 2
            ? ["-120vw", "0vw", "3vw", "-1.5vw", "6vw", "120vw"] // jerk first
            : ["-120vw", "0vw", "0vw", "120vw"],               // wait → follow

        y: [startY, 0, 0, 0],
        scale: [scale, 1, 1, 1],
        opacity: [opacity, 1, 1, 1],

        rotate: [
          i === 0 ? -8 : i === 2 ? 8 : 0,
          0,
          i === 0 ? -12 : i === 2 ? 12 : 0,
          0,
        ],

        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,

          // ⏱️ KEY PART
          times:
            i === 2
              ? [t0, t1, t1 + 0.05, t2, t2 + 0.1, tEnd] // exits immediately
              : [t0, t1, t2, tEnd],                     // waits, then follows
        },
      };
    },
  };




  return (
    <section className="relative overflow-hidden lg:py-5 py-20 lg:mt-24 mt-0" data-aos="fade-right" data-aos-delay="0">

      {/* ===== BACKGROUND TEXT (Top) ===== */}
      <div className="absolute lg:-top-2 -top-5 left-0 w-full z-0 opacity-10 pointer-events-none">
        <MarqueeText text="Let’s Create" direction="left" speed={5} />
      </div>


      {/* ===== CENTER ANIMATION AREA ===== */}
      <div className="relative z-10 flex justify-center items-center lg:h-[400px] h-[40vh]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            animate="animate"
            className="absolute rounded-2xl border-[6px] border-white bg-white shadow-2xl"
            style={{ zIndex: 10 + i }}


          >
            <img
              src={src}
              alt={`Slide ${i}`}
              className="h-[20vh] w-full md:h-[30vh] md:w-full lg:h-[340px] lg:w-[560px] rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* ===== BACKGROUND TEXT (Bottom) ===== */}
      <div className="absolute lg:-bottom-2 bottom-0 left-0 w-full z-0 opacity-10">
        <MarqueeText text="Let’s Create" direction="right" speed={5} />
      </div>

    </section>
  );
};

export default CTASection;