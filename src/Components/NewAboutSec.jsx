import React from 'react'
import { motion } from 'framer-motion'

function NewAboutSec() {
    return (
        <section className="lg:pb-0 px-6 md:px-12 lg:px-10 ">
            <div className="mx-auto flex flex-col lg:flex-row lg:items-end gap-16">

                {/* Left Content Column */}
                <div className="flex-1 space-y-8">
                    <div className="uppercase tracking-wider text-black border-b-2 border-red-600 w-fit font-medium"  data-aos="fade-down" data-aos-delay="0">
                        About Us
                    </div>

                    <p className="text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight text-black"  data-aos="fade-down" data-aos-delay="2">
                        <span className='text-red-600'>Photography & Videography</span> Studio
                    </p>

                    <p className="text-lg text-black max-w-lg leading-relaxed mt-5"  data-aos="fade-down" data-aos-delay="2">
                        Frames of San is a creative photography and videography studio dedicated to capturing real emotions and meaningful moments. We believe every frame should tell a story — one that feels natural, timeless, and authentic.

                        With a passion for visual storytelling, we specialize in photography and cinematic videography that preserves memories beautifully. From weddings and portraits to events and brand visuals, our work is driven by creativity, detail, and emotion.
                    </p>
{/* 
                    <button  data-aos="fade-down" data-aos-delay="0" className="px-8 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                        Read More
                    </button> */}
                </div>

                {/* Right Cards */}
                <div className="flex-none lg:flex-1 relative w-full h-[35vh] md:h-[55vh] lg:h-[500px] mt-12 lg:mt-0">

                    {/* Card 1 (SOURCE) */}
                    <div className="relative lg:absolute top-0 left-0 md:w-60 lg:h-60 w-40 h-40 rounded-md  md:rounded-[40px] overflow-hidden z-10 shadow-xl">
                        <img
                            src="/g5.jpg"
                            className="w-full h-full object-cover"
                            alt="Artistic student"
                        />
                    </div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ x: -126, y: -65 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative lg:absolute -top-30 left-1/6 md:-top-30 md:left-1/6 lg:top-[13%] lg:left-[21%] md:w-60 lg:h-60 w-40 h-40 z-20 shadow-2xl"
                    >
                        <img
                            src="/h1.jpg"
                            className="w-full h-full object-cover md:rounded-[40px] rounded-md"
                            alt="Desk setup"
                        />
                        {/* Tag */}
                        <div className="absolute -top-17 right-1/8 bg-white text-black px-6 py-3 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                            @nina
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white absolute -bottom-2 right-4"></div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ x: -252, y: -140 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative lg:absolute -top-60 left-1/3 md:-top-60 md:left-1/3 lg:top-[28%] lg:left-[42%] md:w-60 lg:h-60 w-40 h-40 rounded-md md:rounded-[40px] z-30 shadow-2xl"
                    >
                        <img
                            src="/h2.jpg"
                            className="w-full h-full object-cover md:rounded-[40px] rounded-md"
                            alt="Record player"
                        />
                        {/* Tag */}
                        <div className="absolute -top-17 right-1/8 bg-zinc-800 text-white px-6 py-3 rounded-full text-sm font-bold shadow-md">
                            @austin
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-zinc-800 absolute -bottom-2 right-4"></div>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ x: -376, y: -225 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                        viewport={{ once: true }}
                        className="relative lg:absolute -top-90 left-1/2 md:-top-90 md:left-1/2 lg:top-[45%] lg:left-[62.8%] md:w-60 lg:h-60 w-40 h-40 rounded-md md:rounded-[40px] overflow-hidden z-40 shadow-2xl"
                    >
                        <img
                            src="/h3.jpg"
                            className="w-full h-full object-cover"
                            alt="Books and headphones"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default NewAboutSec
