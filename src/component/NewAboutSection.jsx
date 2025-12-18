import React from "react";
const items = [
    {
        iconColor: "/icons/icon1-color.svg",
        iconWhite: "/icons/icon1-white.svg",
        label: "14 Spacious Oceanview Villas",
    },
    {
        iconColor: "/icons/icon2-color.svg",
        iconWhite: "/icons/icon2-white.svg",
        label: "3 Distinct Dining Venues",
    },
    {
        iconColor: "/icons/icon3-color.svg",
        iconWhite: "/icons/icon3-white.svg",
        label: "Coastal Nature Reserve",
    },
    {
        iconColor: "/icons/icon4-color.svg",
        iconWhite: "/icons/icon4-white.svg",
        label: "4 Cliffside Infinity Pools",
    },
];
export default function NewAboutSection() {
    return (
        <section className="bg-[#0b0b0b] py-13 lg:h-[113vh] h-auto">
            <div className="mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-10 items-start">

                    {/* LEFT LARGE IMAGE */}
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://cdn.prod.website-files.com/684c437bd1bedfba51264f48/685457ec615d8968cc16e21c_pexels-michael-block-1691617-3225531.jpg"
                            alt="Resort pool"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative text-white">

                        {/* Subtitle */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-white/40"></span>
                            <span className="tracking-[0.3em] text-sm text-white/70">
                                ABOUT US
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                            Sel Offers
                            Quiet Beauty
                        </h2>

                        {/* Description */}
                        <p className="text-white/70 max-w-2xl leading-relaxed mb-8">
                            At Sel, tranquility is not just a feeling — it is a way of life.
                            Surrounded by untouched landscapes and soothing waters, Sel is
                            designed for those who seek meaningful escapes, slow mornings,
                            and evenings wrapped in calm elegance. Every space blends nature,
                            comfort, and refined hospitality to create a truly peaceful stay.
                        </p>

                        {/* Bullet Points */}
                        <div className="flex md:flex-row flex-col gap-10">
                            <div className="">
                                <ul className="space-y-4 text-white/80 mb-10 md:w-full w-full">
                                    <li className="flex gap-3">
                                        <span>✦</span>
                                        <span>Private villas and serene rooms designed for absolute comfort.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✦</span>
                                        <span>Calm pools, open skies, and nature-led experiences.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✦</span>
                                        <span>Thoughtfully curated hospitality with personalized care.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span>✦</span>
                                        <span>A peaceful retreat away from noise, rush, and routine.</span>
                                    </li>
                                </ul>


                                {/* Button */}
                                {/* ICONS + CTA (COMPACT & CENTERED) */}
                                <div className="mt-4 flex flex-col items-start gap-6 lg:w-full w-full">

                                    <div className="flex gap-3 md:flex-wrap lg:flex-nowrap flex-wrap">
                                        {items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-col items-center group cursor-pointer"
                                            >
                                                <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-white border border-[#a3b7c2] transition-all duration-300 group-hover:bg-[#1C1C1C]">
                                                    <img
                                                        src={item.iconColor}
                                                        alt=""
                                                        className="w-6 h-6 absolute transition-opacity duration-300 group-hover:opacity-0"
                                                    />
                                                    <img
                                                        src={item.iconWhite}
                                                        alt=""
                                                        className="w-6 h-6 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                    />
                                                </div>

                                                <p className="mt-2 text-[12px] text-gray-400 text-center max-w-[120px] leading-tight">
                                                    {item.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="/rooms"
                                        className="inline-block px-7 py-3 border border-white/40 tracking-widest text-xs hover:bg-white hover:text-black transition"
                                    >
                                        VIEW ROOMS
                                    </a>
                                </div>
                            </div>



                            {/* RIGHT BOTTOM IMAGE */}
                            <div className="lg:absolute relative right-0 lg:bottom-0 -md:bottom-1/2 bottom-15 lg:w-[360px] md:w-[360px] w-full translate-y-24 ">
                                <div className="overflow-hidden rounded-xl h-[100%]">
                                    <img
                                        src="https://cdn.prod.website-files.com/684c437bd1bedfba51264f48/685457ebec31ca9013fd05fe_pexels-habi-dompil-1539296-2964163.jpg"
                                        alt="Resort second view"
                                        className="w-full object-cover h-[30vh] lg:h-[100%] md:h-[100%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
