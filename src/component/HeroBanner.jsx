import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import HeroSearchForm from "./HeroSearchForm";

export default function HeroBanner() {
  const slides = [
    "/images/hero-bg.webp",
    "/images/hero-bg.webp",
    "/images/hero-bg.webp",
  ];

  return (
    <section className="relative w-full min-h-screen h-screen px-2 py-1.5 overflow-x-clip overflow-y-visible">
      {/* ---------- SLIDER ONLY FOR IMAGES ---------- */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".hero-next-btn",
          prevEl: ".hero-prev-btn",
        }}
        speed={1200}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full rounded-[15px] overflow-hidden"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* IMAGE */}
              <img
                src={img}
                className="w-full h-full object-cover slide-image"
                alt="Hero Banner"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 rounded-[20px] z-10 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ---------- FIXED OVERLAY CONTENT (NOT SLIDING) ---------- */}
      <div className="absolute inset-0 z-10 pointer-events-none ">
        <div className="h-full flex flex-col justify-self-start mt-30 sm:mt-0 sm:justify-center px-12 md:px-20 lg:px-28 text-white max-w-screen">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight drop-shadow-xl">
            SEL Offers <br /> Quiet and Deep <br /> Stillness
          </h1>
          <h1 className="opacity-0 text-6xl md:text-4xl font-bold leading-tight drop-shadow-xl">
            SEL Offers <br /> Quiet and Deep <br /> Stillness
          </h1>
        </div>
        {/* ---------- Booking Form ---------- */}
        <div className="absolute z-200 bg-white/30 backdrop-blur-xl px-3 rounded-2xl bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
          <HeroSearchForm />
        </div>

        {/* ---------- NAV BUTTONS ---------- */}
        <button
          className="hero-prev-btn hero-nav-btn hero-nav-left absolute left-0 top-1/2 -translate-y-1/2 w-14 h-32 flex items-center justify-end pointer-events-auto group"
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684fcedd774fca94d66d9706_Left%20Png.svg")',
          }}
        >
          <img
            src="/icons/chevron-left.svg"
            className="w-6 h-6 mr-3 transition-transform duration-300 transform group-hover:-translate-x-2"
          />
        </button>

        <button
          className="hero-prev-btn hero-nav-btn hero-nav-right absolute right-0 top-1/2 -translate-y-1/2 w-14 h-32 flex items-center justify-start pointer-events-auto group"
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684fcedc25e45d423cca2cd2_Right%20Png.svg")',
          }}
        >
          <img
            src="/icons/chevron-right.svg"
            className="w-6 h-6 ml-3 transition-transform duration-300 transform group-hover:translate-x-2"
          />
        </button>
      </div>
    </section>
  );
}
