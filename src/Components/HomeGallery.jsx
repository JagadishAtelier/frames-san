import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const cards = [
    { id: 1, img: "/h1.jpg", rotate: -7, dataaos: "zoom-out", dataaosdelay: "0" },
    { id: 2, img: "/h2.jpg", rotate: 4 },
    { id: 3, img: "/h3.jpg", rotate: -2 },
    { id: 4, img: "/h4.jpg", rotate: 5 },
    { id: 5, img: "/h5.jpg", rotate: 0 },
];

function HomeGallery() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth, weighted scroll feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20
    });

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-[#f3f3f3]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* ALWAYS SLIDING BACKGROUND TEXT */}
                <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee-continuous">
                        {[...Array(4)].map((_, i) => (
                            <h1 key={i} className="text-9xl font-black uppercase tracking-tighter leading-none">
                                Frames of san
                            </h1>
                        ))}
                    </div>
                </div>

                {/* STACKED CARDS CONTAINER */}
                <div className="relative md:w-1/2 md:h-[50vh] w-[90%] h-[30vh] lg:w-1/2 lg::h-[55vh]">
                    {cards.map((card, index) => {
                        // Reversing index so the last card (index 4) starts moving first (at scroll 0)
                        const reverseIndex = cards.length - 1 - index;

                        // Defines the window of scroll where this specific card moves
                        const start = reverseIndex * 0.12;
                        const end = start + 0.25;

                        // Only transforming Y (Vertical Position) and Rotation
                        const y = useTransform(smoothProgress, [start, end], [0, -1200]);
                        const rotate = useTransform(smoothProgress, [start, end], [card.rotate, 0]);
                        return (

                            <motion.div
                                key={card.id}
                                style={{
                                    y,
                                    rotate,
                                    zIndex: index,
                                    
                                }}
                                className="absolute inset-0 rounded-[2rem] overflow-hidden"
                            >
                                <img
                                    src={card.img}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                        );
                    })}
                </div>

                {/* STATIC UI ELEMENTS */}
                <div className="absolute bottom-10 flex flex-col items-center">
                    <p className="text-gray-800 font-medium mb-4">Frames Of San</p>
                    <button className="flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full hover:scale-105 transition-transform">
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_8px_red]" />
                        <span className="font-bold text-xs uppercase tracking-widest">Learn More</span>
                    </button>
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-continuous {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </div>
    );
}

export default HomeGallery;