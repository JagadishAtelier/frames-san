import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const CTASection = () => {
  const images = [
    "/h4.jpg",
    "/h2.jpg", // Replace with your 2nd image
    "/h6.jpg", // Replace with your 3rd image
  ];

  const cardVariants = {
    animate: (i) => ({
      // Start far left (-1200), come to center (0), then exit far right (1200)
      x: ["-120vw", "0vw", "5vw", "120vw"],
      // Each image rotates its own way when it hits the center
      rotate: [0, 0, i === 0 ? -12 : i === 2 ? 12 : 0, 0],
      opacity: [1, 1, 1, 1],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        // Delay each image by 0.4s so they come from the left one after another
        delay: i * 0.4,
        // 0%: start, 35%: reach center, 65%: stay & rotate, 100%: exit right
        times: [0, 0.35, 0.65, 1],
      },
    }),
  };

  return (
    <section className="relative overflow-hidden lg:py-5 py-20 lg:mt-24 mt-0">

      {/* ===== BACKGROUND TEXT (Top) ===== */}
      <div className="absolute lg:-top-30 -top-5 left-0 w-full z-0 opacity-10">
        <Swiper modules={[Autoplay]} slidesPerView="auto" loop speed={15000}
          autoplay={{ delay: 0, disableOnInteraction: false }} className="w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i} className="!w-auto px-10 py-30">
              <h1 className="lg:text-[14vw] text-9xl font-black uppercase">Let’s Create</h1>
            </SwiperSlide>
          ))}
        </Swiper>
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
      <div className="absolute lg:-bottom-20 bottom-0 left-0 w-full z-0 opacity-10">
        <Swiper modules={[Autoplay]} slidesPerView="auto" loop speed={15000}
          autoplay={{ delay: 0, reverseDirection: true, disableOnInteraction: false }} className="w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i} className="!w-auto px-10 py-20">
              <h1 className="lg:text-[14vw] text-9xl font-black uppercase">Let’s Create</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default CTASection;