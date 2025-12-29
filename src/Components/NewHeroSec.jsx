import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapIcon, MapPin } from 'lucide-react';

function NewHeroSec() {
    const totalDuration = 10;
const LEFT_TEXT_DISTANCE = 250;
const RIGHT_TEXT_DISTANCE = 340;

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    /* ================= TEXT ================= */

const leftTextVariants = {
  animate: {
    x: [0, 0, -LEFT_TEXT_DISTANCE, -LEFT_TEXT_DISTANCE, 0],
    transition: {
      duration: totalDuration,
      repeat: Infinity,
      times: [0, 0.3, 0.5, 0.85, 1],
      ease: "easeInOut"
    }
  }
};

const rightTextVariants = {
  animate: {
    x: [0, 0, RIGHT_TEXT_DISTANCE, RIGHT_TEXT_DISTANCE, 0],
    transition: {
      duration: totalDuration,
      repeat: Infinity,
      times: [0, 0.3, 0.5, 0.85, 1],
      ease: "easeInOut"
    }
  }
};


    /* ================= IMAGE STACK (VERTICAL) ================= */

    const imageStackVariants = {
        animate: {
            y: [800, 800, 0, 0, 0, 0, 0, -800],
            transition: {
                duration: totalDuration,
                repeat: Infinity,
                times: [
                    0,
                    0.3,  // moving up
                    0.45, // reach center
                    0.55, // hold
                    0.72, // choreography
                    0.82, // return center
                    0.9,  // hold
                    1     // move up
                ],
                ease: "easeInOut"
            }
        }
    };

    /* ================= SIDE IMAGES ================= */

    const sideImageVariants = (direction) => ({
        animate: {
            x: [
                0,
                0,
                0,
                0,
                direction === 'left' ? -120 : 120,
                direction === 'left' ? -180 : 180,
                direction === 'left' ? -180 : 180,
                0,
                0
            ],
            rotate: [
                0,
                0,
                0,
                0,
                0,
                direction === 'left' ? -12 : 12,
                0,
                0,
                0
            ],
            transition: {
                duration: totalDuration,
                repeat: Infinity,
                times: [
                    0,
                    0.3,
                    0.45, // center
                    0.55, // hold
                    0.65, // slide
                    0.72, // rotate
                    0.78, // rotate back
                    0.82, // back to center
                    0.9   // hold before exit
                ],
                ease: "easeInOut"
            }
        }
    });

    /* ================= JSX ================= */

    return (
        <>
            <section className="hidden lg:flex w-full h-screen overflow-hidden text-black items-center justify-center">
                <div className="w-full flex flex-col items-center">
                    <div className="relative flex items-center justify-center min-h-[50vh]">

                        {/* TEXT */}
                        <div className="flex items-center justify-center text-black " data-aos="fade-up" data-aos-delay="0">
                            <motion.p
                                variants={isDesktop ? leftTextVariants : undefined}
                                animate={isDesktop ? "animate" : false}
                                className="text-[13vw] font-bold leading-none z-30 tracking-tighter text-black"
                            >
                                Fra
                            </motion.p>

                            <motion.p
                                variants={isDesktop ? rightTextVariants : undefined}
                                animate={isDesktop ? "animate" : false}
                                className="text-[13vw] font-bold leading-none z-30 tracking-tighter"
                            >
                                mes
                            </motion.p>
                        </div>

                        {/* IMAGES */}
                        <motion.div
                            variants={isDesktop ? imageStackVariants : undefined}
                            animate={isDesktop ? "animate" : false}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                            <motion.div
                                variants={isDesktop ? sideImageVariants('left') : undefined}
                                animate={isDesktop ? "animate" : false}
                                className="absolute w-[300px] md:w-[250px] h-[50vh] z-10"
                            >
                                <img
                                    src="/hero1.jpg"
                                    className="rounded-2xl shadow-xl h-full w-full"
                                    alt=""
                                />
                            </motion.div>

                            <motion.div
                                variants={isDesktop ? sideImageVariants('right') : undefined}
                                animate={isDesktop ? "animate" : false}
                                className="absolute w-[300px] md:w-[250px] h-[50vh] z-10"
                            >
                                <img
                                    src="/hero-2.jpg"
                                    className="rounded-2xl shadow-xl h-full w-full"
                                    alt=""
                                />
                            </motion.div>

                            <div className="relative w-[300px] md:w-[250px] h-[55vh] z-20">
                                <img
                                    src="/hero3.jpg"
                                    className="rounded-2xl shadow-2xl h-full w-full"
                                    alt=""
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
            {/* ================= TABLET VIEW ================= */}
            <section className="hidden md:flex lg:hidden w-full min-h-screen flex-col items-center justify-center px-6 text-center">

                <h1 className="text-6xl font-bold mb-8">VISUAL</h1>

                <div className="flex items-center justify-center gap-4">
                    <img
                        src="https://cdn.prod.website-files.com/686ca5fa622705ab1db8a274/686e0b405ad684b0fde92895_Camera%20Image.webp"
                        className="w-[220px] h-[380px] object-cover rounded-2xl relative -right-10"
                        alt=""
                    />
                    <img
                        src="https://cdn.prod.website-files.com/686ca5fa622705ab1db8a274/686e0b3836b1758db903e8e4_Holding%20Camra.webp"
                        className="w-[240px] h-[420px] object-cover rounded-2xl shadow-xl relative z-10"
                        alt=""
                    />
                    <img
                        src="https://cdn.prod.website-files.com/686ca5fa622705ab1db8a274/686e0b3c968a6c6dd3d9bb26_Girl%20Takeing%20Image.webp"
                        className="w-[220px] h-[380px] object-cover rounded-2xl relative -left-10"
                        alt=""
                    />
                </div>
                <div className="flex items-center gap-2 mt-10 mb-5">
                    <MapPin />
                    <span className="text-lg">Based in Coimbatore</span>
                </div>

                <h2 className="text-xl font-bold mb-5">We Capture Moments</h2>

                <p className="text-lg text-gray-600 mb-4 w-1/2">
                    Specialized in Commercial, Editorial, Event, Portrait, Product, and Fashion photography.
                </p>

                <p className="font-semibold">Since 2016</p>

            </section>
            {/* ================= MOBILE VIEW ================= */}
            <section className="flex md:hidden w-full min-h-screen flex-col items-center justify-center px-6 text-center">

                <h1 className="text-4xl font-bold mb-6">VISUAL</h1>

                <img
                    src="https://cdn.prod.website-files.com/686ca5fa622705ab1db8a274/686e0b3836b1758db903e8e4_Holding%20Camra.webp"
                    className="w-full max-w-[320px] h-[420px] object-cover rounded-2xl mb-6"
                    alt=""
                />

                <div className="flex items-center gap-2 mb-4">
                    <MapPin />
                    <span className="text-lg">Based in Coimbatore</span>
                </div>

                <h2 className="text-xl font-bold mb-2">We Capture Moments</h2>

                <p className="text-base text-gray-600 mb-4">
                    Specialized in Commercial, Editorial, Event, Portrait, Product, and Fashion photography.
                </p>

                <p className="font-semibold">Since 2016</p>

            </section>


            <div className='hidden lg:hidden items-center justify-between px-10'>
                <div className='flex gap-1 items-center'>
                    <MapPin />
                    <p className='text-2xl'>Based in Coimbatore</p>
                </div>
                <div className='flex flex-col gap-1 items-center w-1/4'>
                    <h1 className='text-2xl font-bold'>We capture moments</h1>
                    <p className='text-lg '>Specialized in Commercial, Editorial, Event, Portrait, Product, and Fashion photography.</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <h1 className='text-2xl font-bold'>Since 2016</h1>
                </div>
            </div>
        </>
    );
}

export default NewHeroSec;
