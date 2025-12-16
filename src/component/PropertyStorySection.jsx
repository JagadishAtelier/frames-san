import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Home, Utensils, Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

/* ---------------- ICON MAP ---------------- */
const iconMap = {
  Home,
  Utensils,
  Sparkles,
};

/* ---------------- DATA ---------------- */
const data = {
  sectionLabel: "Our Restaurants at the Resort",
  title: [
    "Exceptional Dining",
    "Crafted by Master Chefs",
    "For Unforgettable Evenings.",
  ],
  rightDescription:
    "From sunrise breakfasts to candle-lit dinners, our restaurants blend exquisite flavors, refined ambience, and warm hospitality for a truly memorable dining experience.",
  cta: "Reserve a Table",
  slides: [
    {
      title: "Signature Dining Spaces",
      description:
        "Thoughtfully designed restaurant interiors that balance elegance and comfort, creating the perfect setting for every occasion.",
      icon: "Home",
      leftImage:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      rightImage:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    },
    {
      title: "Chef-Curated Cuisine",
      description:
        "Indulge in carefully crafted menus featuring seasonal ingredients, bold flavors, and artful presentation by our expert chefs.",
      icon: "Utensils",
      leftImage:
        "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
      rightImage:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c",
    },
    {
      title: "Atmosphere & Ambience",
      description:
        "Enjoy dining in beautifully lit spaces with serene views, soft music, and an inviting ambience that elevates every meal.",
      icon: "Sparkles",
      leftImage:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      rightImage:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    },
  ],
};


/* ---------------- SCROLL SCALE HOOK ---------------- */
const useScrollScale = () => {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = 1 - rect.top / windowHeight;
      const clamped = Math.min(Math.max(progress, 0), 1);

      setScale(1 + clamped * 0.12); // max scale 1.12
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, scale };
};

/* ---------------- COMPONENT ---------------- */
const PropertyStorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftImageSwiperRef = useRef(null);
  const rightImageSwiperRef = useRef(null);
  const cardSwiperRef = useRef(null);

  const { ref: leftRef, scale: leftScale } = useScrollScale();
  const { ref: rightRef, scale: rightScale } = useScrollScale();

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-500 mb-4">{data.sectionLabel}</p>

          <h2 className="text-4xl font-bold leading-snug max-w-lg">
            {data.title.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>

          {/* LEFT IMAGE */}
          <div
            ref={leftRef}
            className="mt-10 relative overflow-hidden rounded-3xl"
          >
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              allowTouchMove={false}
              onSwiper={(swiper) => (leftImageSwiperRef.current = swiper)}
            >
              {data.slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={slide.leftImage}
                    alt=""
                    style={{ transform: `scale(${leftScale})` }}
                    className="w-full h-[620px] object-cover transition-transform duration-500 ease-out"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* FLOATING CARD */}
            <div className="absolute bottom-5 left-6 right-6">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onSwiper={(swiper) => (cardSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  const index = swiper.realIndex;
                  setActiveIndex(index);
                  leftImageSwiperRef.current?.slideToLoop(index);
                  rightImageSwiperRef.current?.slideToLoop(index);
                }}
              >
                {data.slides.map((slide, i) => {
                  const Icon = iconMap[slide.icon];
                  return (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-gray-600" />
                          </div>

                          <div className="flex gap-2">
                            {data.slides.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() =>
                                  cardSwiperRef.current?.slideToLoop(idx)
                                }
                                className={`w-2 h-2 rounded-full transition ${
                                  idx === activeIndex
                                    ? "bg-gray-700"
                                    : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <h4 className="font-semibold text-lg mb-2">
                          {slide.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {slide.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <div ref={rightRef} className="overflow-hidden rounded-3xl">
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              allowTouchMove={false}
              onSwiper={(swiper) => (rightImageSwiperRef.current = swiper)}
            >
              {data.slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={slide.rightImage}
                    alt=""
                    style={{ transform: `scale(${rightScale})` }}
                    className="w-full h-[620px] object-cover transition-transform duration-500 ease-out"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-lg">
            {data.rightDescription}
          </p>

          <button className="mt-6 inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-900 transition">
            {data.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyStorySection;
