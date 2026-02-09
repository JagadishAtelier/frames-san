import { ArrowRight } from 'lucide-react';
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
    const navigate = useNavigate();

    
    const projects = [
        {
            id: 1,
            title: "Frames of Silence",
            category: "FINE ART PHOTOGRAPHY",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            dots: 1,
            description:
                "A study of stillness and solitude captured through minimal compositions.Light, shadow, and space work together to evoke quiet emotion.Each frame invites the viewer to pause, reflect, and feel the silence within."
        },
        {
            id: 2,
            title: "Urban Stories",
            category: "STREET PHOTOGRAPHY",
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
            dots: 2,
            description:
                "Unscripted moments from everyday city life.Human expressions, fleeting gestures, and raw energy fill each frame.These photographs document stories that exist only for a split second."
        },
        {
            id: 3,
            title: "Echoes of Nature",
            category: "LANDSCAPE PHOTOGRAPHY",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            dots: 3,
            description:
                "Vast landscapes captured in their most authentic form.Changing light and natural textures shape every scene.These images reflect the quiet power and timeless rhythm of nature."
        },
        {
            id: 4,
            title: "Moments Between Us",
            category: "PORTRAIT PHOTOGRAPHY",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            dots: 4,
            description:
                "Portraits that focus on emotion rather than pose.Subtle expressions and natural light reveal true personality.Each image tells a personal story of connection and presence."
        },
        {
            id: 5,
            title: "Still Life Stories",
            category: "PRODUCT & STILL LIFE",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            dots: 5,
            description:
                "Carefully arranged compositions built around light and balance.Textures, colors, and form create visual harmony.Every object is photographed to tell a refined and intentional story."
        },
    ];


    return (
        <section id="work" className="bg-[#040406] text-white pt-0 min-[1024px]:pt-10 min-[1280px]:pt-15 min-[1536px]:pt-0 pb-16 px-6 min-[1024px]:px-12 min-[1280px]:px-20 relative overflow-hidden">
            {/* Top Header Section */}
            <div className="max-w-7xl min-[1024px]:max-w-7xl min-[1280px]:max-w-none min-[1537px]:max-w-none mx-auto mb-16">
                <div data-aos="fade-right" data-aos-delay="0" className="flex justify-between items-center">
                    <span className="text-2xl md:text-2xl font-medium text-white">LATEST PROJECTS</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <h2 data-aos="fade-right" data-aos-delay="0" className="text-6xl min-[1024px]:text-8xl min-[1280px]:text-9xl font-bold uppercase font-handwriting tracking-wider text-[#BD0100]">
                        Our <br /> Services
                    </h2>
                    <p data-aos="fade-left" data-aos-delay="0" className="text-white text-lg min-[1024px]:text-lg min-[1280px]:text-xl min-[1536px]:text-2xl md:max-w-xs md:ml-auto">
                        Precision hydrographics for vehicles and custom gear — flawless finishes, factory-grade durability. Precision dipped. Perfection delivered.
                    </p>
                </div>
            </div>

            {/* Grid Layout matches the staggered images in the prompt */}
            <div className="max-w-7xl min-[1024px]:max-w-7xl min-[1280px]:max-w-none min-[1537px]:max-w-none min-[1537px]:w-[100%] min-[1280px]:w-[100%] mx-auto">
                {/* FIRST ROW – STAGGERED DESIGN */}
                <div className="flex flex-col lg:flex-row lg:gap-30 gap-10 items-end">

                    {/* LEFT BIG CARD */}
                    <div className="w-full lg:w-[52%]" data-aos="fade-right" data-aos-delay="0">
                        <ProjectCard project={projects[0]} />
                    </div>

                    {/* RIGHT SMALL CARD (OFFSET DOWN) */}
                    <div className="w-full lg:w-[42%] lg:mt-24" data-aos="fade-left" data-aos-delay="0">
                        <ProjectCard project={projects[1]} />
                    </div>

                </div>

                {/* Project 3 (Full Width or Centered depending on layout preference) */}
                <div className="w-full lg:w-[52%] lg:my-24 my-10 mx-auto" data-aos="fade-down" data-aos-delay="0">
                    <ProjectCard project={projects[2]} />
                </div>

                {/* Project 4 & 5 Row */}
                <div className="flex flex-col lg:flex-row lg:gap-30 gap-10 items-end">
                    <div className="w-full lg:w-[42%] lg:mt-24" data-aos="fade-right" data-aos-delay="0">
                        <ProjectCard project={projects[3]} />
                    </div>
                    <div className="w-full lg:w-[52%]" data-aos="fade-left" data-aos-delay="0">
                        <ProjectCard project={projects[4]} isLarge={true} />
                    </div>
                </div>
            </div>
            <div className="lg:block hidden pointer-events-none absolute -bottom-30 left-0 w-full h-32 bg-gradient-to-b from-[#040406] to-[#f3f3f3]" />
        </section>
    );
};

const ProjectCard = ({ project, isLarge = false }) => {
    const cardRef = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
const navigate = useNavigate();
    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();

        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
  const handleClick = () => {
    const slug = project.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/work/${slug}`);
  };

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="group relative cursor-pointer hover:cursor-none"
            onClick={handleClick}
        >

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-4/3 mb-6">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                    className="
    absolute inset-0
    bg-black/50
    opacity-0
    transition-opacity duration-300
    group-hover:opacity-100
  "
                />
                {/* FOLLOW VIEW BUTTON */}
                <div
                    className={`
            pointer-events-none
            absolute
            -translate-x-1/2
            -translate-y-1/2
            transition-opacity duration-300
            ${hovered ? "opacity-100" : "opacity-0"}
          `}
                    style={{
                        left: pos.x,
                        top: pos.y,
                    }}
                >
                    <div className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                        View
                    </div>
                </div>
            </div>

            {/* Metadata */}
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    {/* Dots */}
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 w-1.5 rounded-full ${i < project.dots ? "bg-white" : "bg-zinc-700"
                                    }`}
                            />
                        ))}
                    </div>

                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="text-xs text-zinc-500 tracking-widest uppercase">
                        {project.category}
                    </p>
                </div>

                <div className="relative w-8 h-8 overflow-hidden">
                    {/* Arrow 1 (default) */}
                    <ArrowRight
                        className="
      absolute inset-0
      transition-all duration-300 ease-out
      group-hover:translate-x-full
      group-hover:opacity-0
    "
                    />

                    {/* Arrow 2 (incoming) */}
                    <ArrowRight
                        className="
      absolute inset-0
      -translate-x-full
      opacity-0
      transition-all duration-300 ease-out
      group-hover:translate-x-0
      group-hover:opacity-100
    "
                    />
                </div>

            </div>
        </div>
    );
};

export default PortfolioSection;