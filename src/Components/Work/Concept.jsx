import React from 'react'

function Concept() {
    return (
        <section className="w-full px-6 md:px-12 pb-16 overflow-hidden">
            <div className=" mx-auto flex flex-col gap-12">

                {/* Block 1 */}
                <div className="flex lg:flex-row justify-between items-start flex-col gap-4">
                    <h6 data-aos="fade-right" data-aos-delay="2" className="text-lg min-[1024px]:text-lg min-[1280px]:text-2xl min-[1536px]:text-2xl uppercase tracking-wider text-black font-medium lg:w-1/2 w-full">
                        Concept
                    </h6>
                    <p data-aos="fade-left" data-aos-delay="2" className="text-black text-base min-[1024px]:text-lg min-[1280px]:text-lg min-[1536px]:text-2xl leading-relaxed lg:w-1/2 w-full">
                        The concept defines the story behind every image. It brings together
                        emotion, atmosphere, and visual intent to shape how the subject is
                        portrayed. From mood and narrative to styling and perspective, the
                        concept ensures each photograph communicates a clear and meaningful vision.

                    </p>
                </div>

            </div>
        </section>
    )
}

export default Concept