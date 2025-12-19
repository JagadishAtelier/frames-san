import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Velocity Car",
    subtitle: "Precision Motion",
    img: "/h1.jpg",
    link: "#",
  },
  {
    name: "Urban Drive",
    subtitle: "Modern Performance",
    img: "/h2.jpg",
    link: "#",
  },
  {
    name: "Razor Bike",
    subtitle: "Pure Speed",
    img: "/h3.jpg",
    link: "#",
  },
  {
    name: "Concept Coupe",
    subtitle: "Future Form",
    img: "/h4.jpg",
    link: "#",
  },
  {
    name: "Sound Sphere",
    subtitle: "Bold Acoustics",
    img: "/h5.jpg",
    link: "#",
  },
  {
    name: "Street Moto",
    subtitle: "Raw Control",
    img: "/h6.jpg",
    link: "#",
  },
];


export default function HeroSection() {
  const visibleTime = 5;
  const gapTime = 0;
  const slotTime = visibleTime + gapTime;
  const totalCycleTime = projects.length * slotTime;


  return (
    <section className="relative flex items-center md:h-screen w-full overflow-hidden ps-10 lg:px-10 pt-40 md:pt-0">
      {/* Left Content */}
      <div className="relative z-10 select-none">
        <h1 className="text-[14vw] font-[900] uppercase leading-[0.75] tracking-[-0.06em] text-black">
          Frames <br /> of San
        </h1>
        <p className="mt-12 max-w-sm text-xl lg:text-2xl font-medium text-gray-700">
          A creative studio shaping bold ideas into meaningful design.
        </p>
      </div>

      {/* Right Cards */}
      <div className="absolute right-0 z-20 top-0 h-full w-[70vw] perspective-[1500px]">
        <div className="relative h-full w-full">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 1 }}
              animate={{
                y: ["100vh", "0vh", "0vh", "-150vh"],
                x: ["15vw", "0vw", "0vw", "40vw"],
                rotateZ: [-15, 0, 0, 45],
                rotateX: [15, 0, 0, -10],
              }}
              transition={{
                duration: visibleTime,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 1],

                repeat: Infinity,
                repeatDelay: totalCycleTime - visibleTime,
                delay: index * slotTime,
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="absolute right-[15%] top-[25%] md:h-[52vh] lg:w-[40vw] md:w-[50vw] h-[30vh] w-[80vw] rounded-[3rem] border-8 border-white overflow-hidden"
            >

              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/40 to-transparent">
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