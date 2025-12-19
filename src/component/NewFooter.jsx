import React from "react";

const marquee = ["SUITS", "RESORT", "ROOMS", "HOTEL", "SUITS", "RESORT", "ROOMS", "HOTEL"];
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function Footer() {
    return (
        <footer className="bg-[#0b0b0b] text-white overflow-hidden">

            {/* ================= CONTENT ================= */}
            <div className="px-6 py-20">
                <div className="grid grid-cols-[1.7fr_1fr_1fr_1.2fr] gap-10">

                    {/* LOGO */}
                    <div>
                        <img
                            src="/sel_logo_white.png"
                            className="w-1/3 mb-5"
                            alt=""
                        />
                        <p className="leading-[22px] text-white/70 mb-6">
Be the first to know about exclusive SEL Resort experiences, seasonal stay offers, and curated wellness escapes. Sign up and unlock a world of relaxed luxury.
                        </p>

                        <div className="flex gap-3">
                            {[
                                "https://cdn.prod.website-files.com/684c437bd1bedfba51264f48/684c437bd1bedfba51264fd5_Group%2027181.png",
                                "https://cdn.prod.website-files.com/684c437bd1bedfba51264f48/684c437bd1bedfba51264fb4_Group%2027180.png",
                                "https://cdn.prod.website-files.com/684c437bd1bedfba51264f48/684c437bd1bedfba51264fa6_Vector%20(1).png",
                                "https://cdn.prod.website-files.com/684c437bd1bedfba51264f48/684c437bd1bedfba51264fc0_Vector.avif",
                            ].map((icon, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
                                >
                                    <img
                                        src={icon}
                                        alt=""
                                        className="w-4 h-4 object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <FooterCol
                        title="QUICK LINKS"
                        items={["Home", "About Us", "Our Rooms", "Blogs"]}
                    />

                    {/* SERVICES */}
                    <FooterCol
                        title="OUR SERVICE"
                        items={["Contact Us", "Gallery", "Hotel Amenities", "Licensing"]}
                    />

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-[20px] font-medium mb-6 tracking-wide">
                            CONTACT US
                        </h4>

                        <ul className="space-y-5 text-white/70">
                            <li className="flex items-center gap-4">
                                <CircleIcon src="https://cdn.prod.website-files.com/684c437bd1bedfba51264f48/686bea56f1be6274e6ac27e7_home-icon-silhouette.avif" />
                                4517 Washington Ave. Coimbatore.
                            </li>

                            <li className="flex items-center gap-4">
                                <CircleIcon src="https://cdn.prod.website-files.com/66af23c63e971add26b5b41a/66c37cfbc2c536121882ee27_phone-call.png" />
                                9876543210
                            </li>

                            <li className="flex items-center gap-4">
                                <CircleIcon src="https://cdn.prod.website-files.com/66af23c63e971add26b5b41a/66c37cfb83e4892ea00ff387_email%20(3).png" />
                                support@sel.com
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ================= COMPONENTS ================= */

function FooterCol({ title, items }) {
    return (
        <div>
            <h4 className="text-[20px] text-[#fff] font-medium mb-6 tracking-wide">
                {title}
            </h4>

            <ul className="space-y-4 text-[#e9e9e9] text-lg">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="relative w-fit cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CircleIcon({ src, alt = "" }) {
    return (
        <span className="w-9 h-9 bg-[#123c47] rounded-full flex items-center justify-center flex-shrink-0">
            <img
                src={src}
                alt={alt}
                className="w-4 h-4 object-contain"
            />
        </span>
    );
}

