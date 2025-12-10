import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionMissionSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 px-10">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(0 65 255 / 46%) 1px, #00000000 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-2 sm:gap-16">
        {/* LEFT SIDE */}
        <div className="flex-1 self-start order-1 lg:order-1 text-center lg:text-left">
          {/* Vision Title */}
          <h1
            data-aos="fade-right"
            className="text-[42px] md:text-[90px] font-light leading-none text-gray-900"
          >
            Our <span className="font-semibold">Vision.</span>
          </h1>

          {/* Vision Text */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 mt-6 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Our company helps creators build scalable brands through strategic
            guidance, operational support, and diversified monetization
            opportunities.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex-col hidden lg:flex items-start gap-6 mt-12 order-5 lg:order-3"
          >
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                src="/images/ava1.png"
                className="w-10 h-10 rounded-full ring-2 ring-white"
              />
              <img
                src="/images/ava2.png"
                className="w-10 h-10 rounded-full ring-2 ring-white"
              />
              <img
                src="/images/ava3.webp"
                className="w-10 h-10 rounded-full ring-2 ring-white"
              />
              <img
                src="/images/ava4.webp"
                className="w-10 h-10 rounded-full ring-2 ring-white"
              />
            </div>

            {/* Button */}
            <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition shadow-lg">
              Book Now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 self-end order-3 lg:order-2 text-center lg:text-right mt-10 lg:mt-0">
          <h1
            data-aos="fade-left"
            className="block lg:hidden text-[42px] md:text-[90px] font-light leading-none text-gray-900"
          >
            Our <span className="font-semibold">Mission.</span>
          </h1>

          {/* Mission Text */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 mb-6 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed order-3"
          >
            Our company helps creators build scalable brands through strategic
            guidance, operational support, and diversified monetization
            opportunities.
          </p>

          {/* Mission Title */}
          <h1
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-[42px] hidden lg:block md:text-[90px] font-light leading-none text-gray-900"
          >
            Our <span className="font-semibold">Mission.</span>
          </h1>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex-col flex lg:hidden items-center gap-6 mt-12 order-5 lg:order-3"
        >
          {/* Avatars */}
          <div className="flex -space-x-3">
            <img
              src="/images/ava1.png"
              className="w-10 h-10 rounded-full ring-2 ring-white"
            />
            <img
              src="/images/ava2.png"
              className="w-10 h-10 rounded-full ring-2 ring-white"
            />
            <img
              src="/images/ava3.webp"
              className="w-10 h-10 rounded-full ring-2 ring-white"
            />
            <img
              src="/images/ava4.webp"
              className="w-10 h-10 rounded-full ring-2 ring-white"
            />
          </div>

          {/* Button */}
          <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
