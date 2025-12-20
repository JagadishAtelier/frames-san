import React, { useEffect } from "react";
import { motion,useAnimation  } from "framer-motion";

const projects = [
  { name: "Velocity Car", subtitle: "Precision Motion", img: "/h1.jpg", link: "#" },
  { name: "Urban Drive", subtitle: "Modern Performance", img: "/h2.jpg", link: "#" },
  { name: "Razor Bike", subtitle: "Pure Speed", img: "/h3.jpg", link: "#" },
  { name: "Concept Coupe", subtitle: "Future Form", img: "/h4.jpg", link: "#" },
  { name: "Sound Sphere", subtitle: "Bold Acoustics", img: "/h5.jpg", link: "#" },
  { name: "Street Moto", subtitle: "Raw Control", img: "/h6.jpg", link: "#" },
];

export default function HeroSection() {
  // CONFIGURATION
  const duration = 6; // How long one card stays on screen total
  const overlapFactor = 0.5; // 0.5 means the next card starts when the current one is halfway through
  const staggerDelay = duration * overlapFactor; 
  const totalCycleTime = projects.length * staggerDelay;
const leftControls = useAnimation();

useEffect(() => {
  if (window.innerWidth < 1024) return; // ❌ mobile & tablet

  const timer = setTimeout(() => {
    leftControls.start({
      scale: 0.85,
      x: -80,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    });
  }, 800);

  return () => clearTimeout(timer);
}, []);


  return (
    <section className="relative flex items-center md:h-screen w-full overflow-hidden ps-10 lg:px-10 pt-40 md:pt-0 ">
      {/* Left Content */}
<motion.div
  animate={leftControls}
  initial={{ scale: 1, x: 0 }}
  className="relative z-10 select-none"
>
  <h1 className="text-[14vw] font-[900] uppercase leading-[0.75] tracking-[-0.06em] text-black" data-aos="fade-left" data-aos-delay="0">
    Frames <br /> of San
  </h1>

  <p className="mt-12 max-w-sm text-xl lg:text-2xl font-medium text-gray-700" data-aos="fade-right" data-aos-delay="0">
    A creative studio shaping bold ideas into meaningful design.
  </p>
</motion.div>


      {/* Right Cards */}
      <div className="absolute right-0 z-20 top-0 h-full w-[30vw] [perspective:1500px]">
        <div className="relative h-full w-full">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0], // Smooth fade in and out
                y: ["100vh", "0vh", "0vh", "-120vh"],
                x: ["15vw", "0vw", "0vw", "30vw"],
                rotateZ: [-15, 0, 0, 35],
                rotateX: [15, 0, 0, -10],
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
               times: [0, 0.4, 0.6, 1], // Timing of the keyframes
                repeat: Infinity,
                // The repeat delay ensures the card waits for the rest of the list to finish
                repeatDelay: totalCycleTime - duration, 
                delay: index * staggerDelay,
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="absolute right-[15%] top-[25%] md:h-[52vh] lg:w-[40vw] md:w-[50vw] h-[35vh] w-[80vw] rounded-[3rem] border-8 border-white overflow-hidden shadow-2xl"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-3xl font-black text-white uppercase tracking-tight">
                    {project.name}
                  </span>
                  <span className="text-sm font-bold text-white/80 uppercase tracking-[0.2em] mt-1">
                    {project.subtitle}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}