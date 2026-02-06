import React from 'react'
import { motion } from "framer-motion";
function SliderText() {
    const items = Array(6).fill("More Works");

    return (
        <div data-aos="fade-down" data-aos-delay="2" className="w-full overflow-hidden lg:py-6">
            <div
                className="relative w-full"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
                }}
            >
                <motion.ul
                    className="flex items-center gap-10 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                >
                    {[...items, ...items].map((text, index) => (
                        <li key={index} className="flex-shrink-0">
                            <h3 className="text-3xl md:text-7xl font-semibold whitespace-nowrap">
                                {text}{"  "}
                                <span className="text-[#BD0100] ms-5">{text}</span>
                            </h3>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default SliderText