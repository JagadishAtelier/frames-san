import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
    {
        id: "01",
        question: "WHAT IS FRAMES OF SAN ALL ABOUT?",
        answer:
            "Frames of San is a creative photography brand focused on capturing timeless moments through cinematic storytelling, artistic framing, and emotional depth."
    },
    {
        id: "02",
        question: "WHAT TYPES OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
        answer:
            "We specialize in portraits, lifestyle shoots, weddings, events, travel, and conceptual photography with a strong focus on mood, light, and composition."
    },
    {
        id: "03",
        question: "DO YOU OFFER CUSTOM PHOTOSHOOTS?",
        answer:
            "Yes. Every shoot is customized based on your vision, location, and story to ensure the final frames feel personal and authentic."
    },
    {
        id: "04",
        question: "HOW DO I BOOK A PHOTOSHOOT?",
        answer:
            "You can reach out through our website or social platforms. Once we understand your requirements, we’ll guide you through the booking and planning process."
    },
    {
        id: "05",
        question: "HOW LONG DOES IT TAKE TO RECEIVE THE FINAL PHOTOS?",
        answer:
            "Typically, edited photographs are delivered within 7–14 days, depending on the scale and complexity of the shoot."
    },
    {
        id: "06",
        question: "DO YOU PROVIDE EDITING AND RETOUCHING?",
        answer:
            "Absolutely. Every image goes through professional color grading and retouching to maintain a consistent, cinematic Frames of San signature style."
    }
];


const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white min-h-screen lg:py-20 pt-10 lg:px-6 relative overflow-hidden">
            <div className="min-[1024px]:w-[80%] w-full mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center lg:mb-16 mb-5" data-aos="fade-down" data-aos-delay="2">
                    <h2 className="text-2xl min[1024px]:text-5xl min-[1280px]:text-5xl min-[1536px]:text-6xl font-bold uppercase">
                        Frequently <br /> Asked Questions
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="border-t border-zinc-800">
                    {faqData.map((item, index) => (
                        <div key={item.id} className="border-b border-zinc-800" data-aos="fade-down" data-aos-delay="2">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center py-8 text-left group hover:bg-zinc-900/30 transition-all px-4"
                            >
                                <span className="hidden lg:block text-xs min[1024px]:text-base min-[1280px]:text-base min-[1536px]:text-base text-white mr-8 md:mr-16">{item.id}</span>
                                <span className="flex-1 text-sm min[1024px]:text-base min-[1280px]:text-base min-[1536px]:text-xl font-bold tracking-wider uppercase">
                                    {item.question}
                                </span>
                                <Plus
                                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-gray-400' : 'rotate-0'}`}
                                />
                            </button>

                            {/* Animated Expandable Content */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-8' : 'max-h-0'}`}>
                                <div className="lg:pl-24 pl-5 lg:pr-12  text-gray-400 text-base min[1024px]:text-base min-[1280px]:text-base min-[1536px]:text-xl">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;