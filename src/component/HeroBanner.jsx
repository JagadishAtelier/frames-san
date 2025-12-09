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
        <div className="h-full flex flex-col justify-self-start mt-30 sm:mt-0 sm:justify-center px-12 md:px-20 lg:px-28 text-white max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight drop-shadow-xl">
            SEL Offers <br /> Quiet and Deep <br /> Stillness
          </h1>

          {/* <div className="absolute bottom-10 flex mt-6 items-center pointer-events-auto">
            <p className="text-lg leading-relaxed max-w-md text-gray-100 drop-shadow">
              We have a holistic philosophy which translates into creating a
              harmonious environment, by wellness services that aim to detoxify
            </p>

            <button className="group w-15 h-15 cursor-pointer rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-white/10 hover:bg-white/20 transition overflow-hidden relative">
              
              <img
                src="/icons/arrow-down.svg"
                className="w-6 invert-100 absolute transition-all duration-300 transform group-hover:translate-y-10 group-hover:translate-x-10 group-hover:opacity-0"
              />
              <img
                src="/icons/arrow-down.svg"
                className="w-6 invert-100 absolute -translate-y-10 -translate-x-10 transition-all duration-300 opacity-0 transform group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </button>
          </div> */}
        </div>

        {/* ---------- FIXED VIDEO CARD ---------- */}
       {/* <div className="hidden sm:block absolute bottom-10 right-10 pointer-events-auto">
          <div className="flex items-center gap-4 max-w-100 bg-white/70 backdrop-blur-xl rounded-3xl p-4 shadow-lg">
            <div className="w-1.7/3">
              <h3 className="text-black font-semibold text-lg leading-tight">
                Watch A Video <br /> About Us
              </h3>
            </div>

            <div className="w-1.3/3">
              <div className="w-40 h-30 rounded-2xl overflow-hidden relative">
                <img
                  src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68502e21bbd4e7d9c943596e_1.webp"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Video Preview"
                />

                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <div className="relative flex items-center justify-center w-[90px] h-[90px]">
                    <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-md animate-pulse"></div>

                    <div className="relative z-10 w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition">
                      <img
                        src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684fec670619f168c561492c_Polygon%203.svg"
                        className="w-5 hover:scale-85 transition"
                        alt="Play"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> hidden sm:block */}
        <div className=" absolute z-200 bg-white/30 backdrop-blur-xl px-3 rounded-xl sm:bg-none bottom-4 sm:bottom-30 right-3.5 sm:right-10 pointer-events-auto">
        <HeroSearchForm/>
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
