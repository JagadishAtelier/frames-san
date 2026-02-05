import React from 'react'

function Development() {
    return (
        <section className="w-full px-6 md:px-12 pb-16">
            <div className=" mx-auto flex flex-col gap-12">

                {/* Block 1 */}
                <div className="flex lg:flex-row justify-between items-start flex-col gap-4">
                    <h6 className="text-lg min-[1024px]:text-lg min-[1280px]:text-2xl min-[1536px]:text-2xl uppercase tracking-wider text-black font-medium lg:w-1/2 w-full">
                        Development
                    </h6>
                    <p className="text-black text-base min-[1024px]:text-lg min-[1280px]:text-lg min-[1536px]:text-2xl leading-relaxed lg:w-1/2 w-full">
                        Development is where planning turns into execution. Camera settings,
                        lighting setups, lenses, and shooting techniques are carefully selected
                        based on the concept. Each shot is refined through timing, movement,
                        and precision to capture authentic moments and visually compelling frames.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Development