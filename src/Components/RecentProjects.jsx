import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Velocity Concept",
    content: "Automotive Vision",
    role: "Creative Direction",
    image: "/g1.jpg",
    link: "/project/alarm-clock",
  },
  {
    name: "Urban Machine",
    content: "Design in Motion",
    role: "Creative Direction",
    image: "/g2.jpg",
    link: "/project/tracker",
  },
  {
    name: "Midnight Drive",
    content: "Performance Study",
    role: "Creative Direction",
    image: "/g3.jpg",
    link: "/project/industrial",
  },
  {
    name: "Aero Form",
    content: "Sculpted Speed",
    role: "Creative Direction",
    image: "/g4.jpg",
    link: "/project/lens",
  },
  {
    name: "Lens & Light",
    content: "Visual Storytelling",
    role: "Creative Direction",
    image: "/g5.jpg",
    link: "/project/camera",
  },
  {
    name: "Motion Series",
    content: "Concept Engineering",
    role: "Creative Direction",
    image: "/h1.jpg",
    link: "/project/audio-console",
  },
];


const RecentProjects = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="mx-auto lg:px-10 px-5">
        {/* Heading */}
        <div className="flex md:flex-row flex-col justify-between  md:items-center gap-6 mb-16">
          <div className="flex lg:flex-row flex-col lg:items-center items-start gap-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="uppercase text-sm tracking-wide text-black/70">
                Work
              </span>
            </div>
            <h2 className="lg:text-8xl md:text-5xl text-4xl font-semibold">
              Recent projects
            </h2>
          </div>

          <div className="md:text-right">
            <a
              to="/work/work-1"
              className="relative inline-block overflow-hidden group bg-black text-white py-3 px-10 rounded-4xl"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                View All
              </span>
              <span className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                View All
              </span>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              to={project.link}
              className="group block hover:shadow-2xl bg-transparent rounded-xl"
            >
              <div className="relative overflow-hidden rounded-xl border-8 border-white">
                {/* Image */}
                <div
                  className="lg:h-[420px] h-[30vh] rounded-xl bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 blur-md rotate-[-50deg] group-hover:opacity-100 group-hover:blur-0 group-hover:rotate-0 transition-all duration-500">
                  <img
                    src="https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68915d2a739f112512d25fab_arrow.svg"
                    alt="arrow"
                    className="w-14"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-2 bg-white p-3 rounded-2xl">
                <div className="text-lg font-medium">
                  {project.name}
                </div>
                <div className="text-sm text-black/60">
                  {project.content}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
