import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const DevelopmentImage = () => {
  const sectionRef = useRef(null);

  // Track scroll ONLY for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Zoom OUT: start big → end normal
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.2, 1]),
    { stiffness: 90, damping: 25 }
  );

  return (
    <section
      ref={sectionRef}
      data-aos="fade-down" data-aos-delay="2"
      className="w-full px-6 md:px-10 pb-10 overflow-hidden"
    >
      <div className="relative max-w-[2560px] mx-auto overflow-hidden rounded-xl h-[30vh] md:h-[90vh]">

        {/* Image ONLY is animated */}
        <motion.img
          src="https://framerusercontent.com/images/HoJJLxsP72QYFpy4P5cdcwhjts.jpeg?width=1153&height=2048"
          alt="Nissan GTR"
          style={{ scale }}
          className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
        />

      </div>
    </section>
  );
};

export default DevelopmentImage;
