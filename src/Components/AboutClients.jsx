import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f6174cc8d5a9b1245f1_logo_client_4.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f61c5a40dff924f4b88_logo_client_2.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f612ef6479f918060c5_logo_client_10.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f61c76749dd0c71edbd_logo_client_7.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f6129f1da9e4e27248f_logo_client_3.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f61fd9fd8d7e6629d57_logo_client_5.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f61e684d3c62f4f66a7_logo_client_8.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f612d62fe871eec4da2_logo_client_6.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f617797fb214c939688_logo_client_9.svg",
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/68916f614cd14cc9dd08432b_logo_client_1.svg",
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
                            <SwiperSlide
                                key={index}
                                className="!w-auto flex items-center"
                            >
                                <img
                                    src={logo}
                                    alt="Client logo"
                                    className="lg:h-10 h-5 opacity-80 hover:opacity-100 transition"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}
