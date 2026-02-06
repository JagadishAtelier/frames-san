import React from 'react'

function ResearchSection() {
    return (
        <section className="w-full px-6 md:px-12 pb-16 overflow-hidden">
            <div className=" mx-auto flex flex-col gap-12">

                {/* Block 1 */}
                <div className="flex lg:flex-row justify-between items-start flex-col gap-4">
                    <h6 data-aos="fade-right" data-aos-delay="2" className="text-lg min-[1024px]:text-lg min-[1280px]:text-2xl min-[1536px]:text-2xl uppercase tracking-wider text-black font-medium lg:w-1/2 w-full">
                        Research
                    </h6>
                    <p data-aos="fade-left" data-aos-delay="2" className="text-black text-base min-[1024px]:text-lg min-[1280px]:text-lg min-[1536px]:text-2xl leading-relaxed lg:w-1/2 w-full">
                        Every photography project begins with in-depth research. We study the
                        subject, lighting conditions, location, mood, and visual intent to
                        understand the story that needs to be captured. This phase ensures
                        clarity, direction, and a strong creative foundation before the shoot.
                    </p>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-black/20" />

                {/* Block 2 */}
                <div className="flex lg:flex-row justify-between items-start flex-col gap-4">
                    <h6 data-aos="fade-right" data-aos-delay="2" className="text-lg min-[1024px]:text-lg min-[1280px]:text-2xl min-[1536px]:text-2xl uppercase tracking-wider text-black font-medium lg:w-1/2 w-full">
                        Design
                    </h6>
                    <p data-aos="fade-left" data-aos-delay="2" className="text-black text-base min-[1024px]:text-lg min-[1280px]:text-lg min-[1536px]:text-2xl leading-relaxed lg:w-1/2 w-full">
                        Design focuses on composition, framing, and visual storytelling.
                        From color tones and contrast to perspective and balance, each frame
                        is thoughtfully designed to evoke emotion and highlight details.
                        The result is imagery that feels intentional, expressive, and timeless.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default ResearchSection