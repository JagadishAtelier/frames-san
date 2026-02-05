import { ArrowRight } from 'lucide-react';
import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
const MoreData = () => {
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
    ];



    return (
        <section className=" text-black pt-10 pb-16 px-6 md:px-10 relative">
            {/* Grid Layout matches the staggered images in the prompt */}
            <div className="max-w-[2560px] mx-auto">
                {/* FIRST ROW – STAGGERED DESIGN */}
                <div className="flex flex-col lg:flex-row lg:gap-30 gap-10 items-end">

                    {/* LEFT BIG CARD */}
                    <div className="w-full lg:w-[52%]">
                        <ProjectCard project={projects[0]} />
                    </div>

                    {/* RIGHT SMALL CARD (OFFSET DOWN) */}
                    <div className="w-full lg:w-[42%] lg:mt-24">
                        <ProjectCard project={projects[1]} />
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

export default MoreData;