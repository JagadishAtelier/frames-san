import React from 'react';

const experiences = [
{
    title: "PROFESSIONAL PHOTOGRAPHER",
    category: "PORTRAIT, PRODUCT & EVENT PHOTOGRAPHY",
    date: "2022 - PRESENT",
    description: "Captured high-quality portraits, product shots, and event photography with a strong focus on composition, lighting, and storytelling. Delivered visually compelling images aligned with client branding and creative goals."
  },
  {
    title: "PHOTO EDITING & POST-PRODUCTION",
    category: "LIGHTROOM & PHOTOSHOP",
    date: "2022 - PRESENT",
    description: "Performed advanced photo retouching, color correction, and image optimization using Adobe Lightroom and Photoshop to ensure professional-grade output across digital and print platforms."
  },
  {
    title: "CLIENT COLLABORATION & CREATIVE DIRECTION",
    category: "CUSTOM PHOTOSHOOTS",
    date: "2021 - PRESENT",
    description: "Worked closely with clients to understand concepts, themes, and usage requirements. Planned and executed customized photoshoots that balanced creativity, technical precision, and client expectations."
  }
];

const ExperienceSection = () => {
    return (
        <section className="relative w-full bg-black text-white md:py-20 py-10 pb-0 px-6 md:px-12 mt-10">

            <div className="relative z-10 w-full mx-auto">

                <div className="flex lg:flex-row flex-col justify-between w-full">
                    {/* Left Side: Large Title */}
                    <div data-aos="fade-down" data-aos-delay="0" className="w-1/2 lg:sticky relative lg:top-24 top-0 h-fit">
                        <h2 className="text-2xl md:text-4xl font-bold uppercase">
                            Experiences
                        </h2>
                    </div>

                    {/* Right Side: List */}
                    <div className="w-full space-y-16 lg:px-5 lg:pt-10">
                        {experiences.map((exp, index) => (
                            <div key={index} className="group border-b border-zinc-800 lg:pb-12 pb-5 last:border-0 mb-5 lg:mb-12">
                                <div className='flex justify-between items-start'>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <h3 data-aos="fade-down" data-aos-delay="0" className="text-lg min-[1024px]:text-2xl min-[1280px]:text-2xl min-[1536px]:text-3xl font-bold  text-zinc-100 group-hover:text-white transition-colors">
                                                {exp.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-col justify-between items-start gap-2 text-xs min-[1024px]:text-sm min-[1280px]:text-sm min-[1536px]:text-base font-bold tracking-wider uppercase text-zinc-400">
                                            <span data-aos="fade-down" data-aos-delay="0">{exp.category}</span>
                                            <div data-aos="fade-down" data-aos-delay="0" className=" text-zinc-500 block lg:hidden">{exp.date}</div>
                                        </div>

                                        <p data-aos="fade-down" data-aos-delay="0" className="text-zinc-400 leading-relaxed max-w-2xl mt-2 text-sm min-[1024px]:text-base min-[1280px]:text-base min-[1536px]:text-xl">
                                            {exp.description}
                                        </p>
                                    </div>
                                    <div data-aos="fade-down" data-aos-delay="0" className="hidden lg:block text-zinc-500 min-[1024px]:text-base min-[1280px]:text-base min-[1536px]:text-xl">{exp.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;