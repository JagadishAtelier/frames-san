import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
    { src: "/brand1.png", classes: "lg:h-20 h-6" },
    { src: "/brand2.png", classes: "lg:h-20 h-5" },
    { src: "/brand3.png", classes: "lg:h-20 h-5" },
    { src: "/brand4.png", classes: "lg:h-20 h-7" },
    { src: "/brand5.png", classes: "lg:h-20 h-6" },
    { src: "/brand6.png", classes: "lg:h-20 h-5" },
    { src: "/brand7.png", classes: "lg:h-12 h-6" },
    { src: "/brand8.png", classes: "lg:h-20 h-6" },
    { src: "/brand9.png", classes: "lg:h-20 h-5" },
    { src: "/brand10.png", classes: "lg:h-20 h-7" },
];


export default function AboutClients() {
    return (
        <section className="pt-20 text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-1 grid-cols-1 gap-20 items-center">

                {/* LEFT CONTENT */}
                <div className="flex lg:flex-row flex-col gap-5 items-start lg:justify-end lg:ms-auto lg:w-[75%] w-full">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 rounded-full" />
                        <span className="uppercase tracking-widest text-sm text-black">
                            About
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl leading-tight">
                        Frames of San is a creative design studio built for brands and startups that value clarity, speed, and impact. We craft thoughtful visual experiences that help ideas take shape and stories stand out.
                    </h2>
                </div>

                {/* RIGHT CAROUSEL */}
                <div className="relative">
                    {/* Gradient fade */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#f3f3f3] to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#f3f3f3] to-transparent z-10" />

                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={60}
                        loop
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        className="w-full"
                    >
                        {[...clients, ...clients].map((logo, index) => (
                            <SwiperSlide key={index} className="!w-auto flex items-center">
                                <img
                                    src={logo.src}
                                    alt="Client logo"
                                    className={`${logo.classes} opacity-80 hover:opacity-100 transition`}
                                />
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}
