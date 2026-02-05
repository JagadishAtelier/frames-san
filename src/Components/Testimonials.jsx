import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Arun Kumar",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "The photography was beyond expectations. Every emotion and detail was captured beautifully. Truly memorable work.",
  },
  {
    name: "Priya Shankar",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    text: "An amazing experience from start to finish. The photos reflect creativity, patience, and pure passion.",
  },
  {
    name: "Suresh Raman",
    location: "Madurai, Tamil Nadu",
    rating: 5,
    text: "The way moments were captured felt natural and timeless. These photographs will stay with us forever.",
  },
  {
    name: "Meena Lakshmi",
    location: "Trichy, Tamil Nadu",
    rating: 5,
    text: "Professional, friendly, and extremely talented. The final output was elegant and emotionally powerful.",
  },
  {
    name: "Vigneshwaran S",
    location: "Salem, Tamil Nadu",
    rating: 5,
    text: "Attention to detail was outstanding. Every frame tells a story. Highly recommended for any special occasion.",
  },
  {
    name: "Kavitha R",
    location: "Tirunelveli, Tamil Nadu",
    rating: 5,
    text: "The photographs captured the soul of the event. Lighting, angles, and timing were just perfect.",
  },
  {
    name: "Ramesh Babu",
    location: "Erode, Tamil Nadu",
    rating: 5,
    text: "A truly talented photographer who understands moments. The results exceeded all our expectations.",
  },
  {
    name: "Anitha Murugan",
    location: "Thanjavur, Tamil Nadu",
    rating: 5,
    text: "Beautiful storytelling through visuals. Every picture feels alive and full of emotion.",
  }
];


export default function Testimonials() {
    const swiperRef = useRef(null);

    return (
        <section className="relative bg-[#050505] text-white py-10 px-6 lg:px-12 lg:px-20 overflow-hidden min-h-screen flex flex-col justify-center">
            <div className=" mx-auto w-full">
                {/* HEADER SECTION */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:mb-24 gap-8">
                    <div>
                        <p className="text-sm min-[1556px]:text-lg min-[1557px]:text-lg tracking-[0.2em] text-[#666] uppercase mb-5 font-semibold">
                            TESTIMONIALS
                        </p>
                        <h2 className="text-6xl lg:text-8xl leading-none uppercase font-anton tracking-wide text-white">
                            WHAT MY <br />
                            <span className="text-[#D00] font-handwriting text-5xl lg:text-8xl capitalize ml-1 mt-2 inline-block transform -rotate-2">
                                Clients Say
                            </span>
                        </h2>
                    </div>

                    {/* NAVIGATION BUTTONS */}
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-4 mb-4 ms-auto lg:ms-0">
                        <div className="flex gap-4 items-center">
                            <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-14 h-14 rounded-full border border-[#222] bg-[#0a0a0a] flex items-center justify-center hover:bg-[#1a1a1a] hover:border-[#333] transition-all text-gray-400 hover:text-white group"
                        >
                            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-14 h-14 rounded-full border border-[#222] bg-[#0a0a0a] flex items-center justify-center hover:bg-[#1a1a1a] hover:border-[#333] transition-all text-gray-400 hover:text-white group"
                        >
                            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        </div>

                        <button className="ml-6 px-8 h-14 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] border border-transparent hover:border-[#333] text-sm min-[1556px]:text-lg min-[1557px]:text-lg font-medium hidden lg:flex items-center gap-3 transition-all text-gray-300 hover:text-white">
                            View All Testimonials <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
                <div className="border-b border-[#222] mb-10 sm:my-15" />

                {/* SWIPER SLIDER */}
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={testimonials.length > 3}
                    autoplay={
                        testimonials.length > 3
                            ? { delay: 3000, disableOnInteraction: false }
                            : false
                    }
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {testimonials.map((item, i) => (
                        <SwiperSlide key={i} style={{height:"-webkit-fill-available"}}>
                            <div className="h-full group bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-10 hover:border-[#333] transition-all duration-300 relative shadow-2xl shadow-black/50 flex flex-col justify-between">
                                <div className="h-full">
                                    {/* SOCIALS PILL */}
                                    <div className="absolute top-8 right-8 hidden lg:flex items-center gap-4 bg-[#141414] px-5 py-2.5 rounded-full border border-[#222]">
                                        <div className="w-full h-full rounded-full border-gray-400 border p-2"><FaFacebookF size={16} className="text-gray-100 hover:text-white cursor-pointer transition-colors" /></div>
                                        <div className="w-full h-full rounded-full border-gray-400 border p-2"><FaTwitter size={16} className="text-gray-100 hover:text-white cursor-pointer transition-colors" /></div>
                                        <div className="w-full h-full rounded-full border-gray-400 border p-2"><FaLinkedinIn size={16} className="text-gray-100 hover:text-white cursor-pointer transition-colors" /></div>
                                    </div>

                                    {/* USER INFO */}
                                    <div className="mb-8 pt-2">
                                        <h4 className="text-xl min-[1556px]:text-lg min-[1557px]:text-2xl font-bold text-gray-100 mb-1 tracking-wide">{item.name}</h4>
                                        <p className="text-xs min-[1556px]:text-lg min-[1557px]:text-lg text-gray-600 font-medium uppercase tracking-wider">{item.location}</p>
                                    </div>

                                    {/* STARS */}
                                    <div className="flex gap-1.5 text-yellow-500 mb-8 text-sm min-[1556px]:text-lg min-[1557px]:text-lg">
                                        {[...Array(5)].map((_, index) => (
                                            <span key={index} className="text-lg">★</span>
                                        ))}
                                    </div>

                                    {/* TEXT */}
                                    <p className="text-[#888] leading-relaxed text-[15px] min-[1556px]:text-lg min-[1557px]:text-lg font-medium pr-4">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
