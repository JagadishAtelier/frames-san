import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxImage = ({data }) => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Only image moves
    const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden perspective-[1200px]"
        >
            {/* Fixed container */}
            <div className="relative w-[95%] h-[30vh] md:h-[90vh] mx-auto overflow-hidden rounded-2xl">
                <motion.img
                    src={data.image}
                    alt="Bmw Drifting"
                    style={{ y }}
                    className="absolute inset-0 w-full h-[120%] object-cover object-center will-change-transform rounded-2xl"
                />
            </div>
            <section className="relative w-full mx-auto">
                <div className="relative flex justify-between p-10 border border-white/10 overflow-hidden">

                    {/* Category */}
                    <div className="flex flex-col gap-2 z-10">
                        <p className="text-sm min-[1024px]:text-lg min-[1280px]:text-lg min-[1536px]:text-2xl text-gray-600">{data.category}</p>
                        <h5 className="text-lg min-[1024px]:text-lg min-[1280px]:text-2xl min-[1536px]:text-2xl font-medium uppercase">
                            {data.title}
                        </h5>
                    </div>

                    {/* Product Duration */}
                    <div className="flex flex-col gap-2 z-10">
                        <p className="text-sm min-[1024px]:text-lg min-[1280px]:text-lg min-[1536px]:text-2xl text-gray-600">Product Duration</p>
                        <h5 className="text-lg min-[1024px]:text-lg min-[1280px]:text-2xl min-[1536px]:text-2xl font-medium uppercase">
                            3 - 4 Weeks
                        </h5>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ParallaxImage;
