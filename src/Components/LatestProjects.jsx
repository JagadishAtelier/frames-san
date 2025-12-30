import React from "react";

const projectsLeft = [
    {
        title: "Velocity Concept",
        date: "Automotive Vision",
        link: "/works/themotto",
        image:
            "/g1.jpg",
        videoMp4:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.mp4",
        videoWebm:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.webm",
    },
    {
        title: "Urban Machine",
        date: "Design in Motion",
        link: "/works/miami-adventure",
        image:
            "/g2.jpg",
        videoMp4:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.mp4",
        videoWebm:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.webm",

    },
];

const projectsRight = [
    {
        title: "Midnight Drive",
        date: "Performance Study",
        link: "/works/lovelace-studio",
        image:
            "/g3.jpg",
        videoMp4:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.mp4",
        videoWebm:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.webm",
    },
    {
        title: "Aero Form",
        date: "Sculpted Speed",
        link: "/works/fightclub",
        image:
            "/g4.jpg",
        videoMp4:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.mp4",
        videoWebm:
            "https://cdn.prod.website-files.com/665d6de231632c7d5d5e9895/66602250bdc609b7dc4f79e3_-c7fc-46ec-8441-bd8a00095aa7%20%281%29-transcode.webm",
    },
];

export default function LatestProjects() {
    return (
        <section className="lg:py-24 overflow-hidden">
            <div className="mx-auto lg:px-10 px-5">
                {/* Title */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
                    <div className="uppercase border-b-2 border-red-600 w-fit tracking-wider text-black font-medium" data-aos="fade-right" data-aos-delay="0">
                        Our Work
                    </div>
                    <div data-aos="fade-left" data-aos-delay="0">
                        <p className="text-3xl font-semibold mb-2">
                            Our <span className="text-red-600">latest projects</span>
                        </p>
                        <p className="max-w-md">
                            Each project reflects our dedication to excellence, creativity,
                            and innovation.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-30">
                    {/* Left Column */}
                    <div className="space-y-16" data-aos="fade-right" data-aos-delay="0">
                        {projectsLeft.map((item, i) => (
                            <ProjectCard key={i} {...item} />
                        ))}

                        {/* <button className="lg:block hidden px-8 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                            All Works
                        </button> */}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16 lg:pt-25" data-aos="fade-left" data-aos-delay="0">
                        {projectsRight.map((item, i) => (
                            <ProjectCard key={i} {...item} />
                        ))}
                    </div>
                    {/* <button className="lg:hidden block mt-10 md:mt-0 px-8 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                        All Works
                    </button> */}
                </div>
            </div>
        </section>
    );
}

/* ---------------- CARD ---------------- */

function ProjectCard({ title, date, link, image, videoMp4, videoWebm }) {
    return (
        <div>
            <a
                href={link}
                className="relative block overflow-hidden rounded-lg group"
                data-aos="fade-down" data-aos-delay="0"
            >
                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="w-full md:h-[420px] h-[30vh] object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* Video (if exists) */}
                {videoMp4 && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <source src={videoMp4} type="video/mp4" />
                        {videoWebm && <source src={videoWebm} type="video/webm" />}
                    </video>
                )}
            </a>

            {/* Description */}
            <div className="flex items-center justify-between mt-5">
                <div>
                    <a href={link}>
                        <p className="text-2xl font-semibold hover:opacity-70 transition text-red-600">
                            {title}
                        </p>
                    </a>
                    <p className="text-sm mt-2 text-black">{date}</p>
                </div>

                {/* <a
                    href={link}
                    className="relative text-sm font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                >
                    Learn more
                </a> */}
            </div>
        </div>
    );
}
