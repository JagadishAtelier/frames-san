import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from 'framer-motion';

const cards = [
    { id: 1, img: "/h1.jpg", rotate: -7 },
    { id: 2, img: "/h2.jpg", rotate: 4 },
    { id: 3, img: "/h3.jpg", rotate: -2 },
    { id: 4, img: "/h4.jpg", rotate: 5 },
    { id: 5, img: "/h5.jpg", rotate: 0 },
];

const HomeGallery = () => {
    const containerRef = useRef(null);
    
    // 1. Detect when the section is in view
    // once: true ensures the observer stops after the first trigger
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    
    // Stages: 'idle' -> 'bg-opening' -> 'bg-finished' -> 'ready'
    const [stage, setStage] = useState('idle');

    useEffect(() => {
        if (isInView && stage === 'idle') {
            setStage('bg-opening');
            
            // Sequence Timing
            const timer1 = setTimeout(() => setStage('bg-finished'), 1600);
            const timer2 = setTimeout(() => setStage('ready'), 2600);
            
            return () => { clearTimeout(timer1); clearTimeout(timer2); };
        }
    }, [isInView]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
    const columns = Array.from({ length: 10 });

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                
                {/* 1. BACKGROUND IMAGE REVEAL (Triggered once) */}
                <AnimatePresence>
                    {stage === 'bg-opening' && (
                        <motion.div 
                            exit={{ opacity: 0 }} 
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex z-50"
                        >
                            {columns.map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ 
                                        duration: 0.7, 
                                        delay: i * 0.1, 
                                        ease: "circOut" 
                                    }}
                                    className="h-full flex-1"
                                    style={{
                                        backgroundImage: `url('/h1.jpg')`,
                                        backgroundSize: '1000% 100%',
                                        backgroundPosition: `${i * 11.11}% 0%`,
                                        transformOrigin: 'bottom'
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 2. BACKGROUND CAROUSEL TEXT (Visible after BG reveal) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={stage !== 'idle' && stage !== 'bg-opening' ? { opacity: 1 } : { opacity: 0 }}
                    className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden z-10"
                >
                    <div className="flex whitespace-nowrap animate-marquee-continuous">
                        {[...Array(4)].map((_, i) => (
                            <p key={i} className="text-[12vw] font-black uppercase tracking-tighter leading-none me-10 text-black">
                                Frames <span className='text-red-600'>of</span> san *
                            </p>
                        ))}
                    </div>
                </motion.div>

                {/* 3. STACKED CARDS (Zoom Out Animation) */}
                <motion.div 
                    initial={{ scale: 2.5, opacity: 0 }}
                    animate={stage !== 'idle' && stage !== 'bg-opening' ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative md:w-1/2 md:h-[50vh] w-[85%] h-[35vh] z-20"
                >
                    {cards.map((card, index) => {
                        const reverseIndex = cards.length - 1 - index;
                        const start = reverseIndex * 0.12;
                        const end = start + 0.25;

                        const scrollY = useTransform(smoothProgress, [start, end], [0, -1200]);
                        const scrollRotate = useTransform(smoothProgress, [start, end], [card.rotate, 0]);

                        return (
                            <motion.div
                                key={card.id}
                                style={{
                                    y: stage === 'ready' ? scrollY : 0,
                                    rotate: stage === 'ready' ? scrollRotate : card.rotate,
                                    zIndex: index,
                                }}
                                className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <img src={card.img} alt="" className="w-full h-full object-cover" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee-continuous {
                  animation: marquee 35s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default HomeGallery;