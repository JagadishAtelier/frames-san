import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <div className="px-2">
        <section className="py-10 bg-[#ffb47d] relative rounded-xl" data-aos="fade-up">
{/* <div className="absolute inset-0 pointer-events-none -z-10">
    <div
      className="w-full h-full opacity-100"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgb(0 65 255 /50%) 1px, #ffffff 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  </div> */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2
          className="text-center text-3xl md:text-6xl font-semibold text-gray-900 mb-14"
          data-aos="fade-up"
        >
          Trusted by Guests Worldwide
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-10">

          {/* Agoda */}
          <div
            className="bg-white border border-gray-200 rounded-2xl  p-8 text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img src="/icons/agooda.png" className="h-8 mx-auto mb-4" />
            <p className="text-5xl font-bold text-gray-900">4.6</p>
            <p className="text-gray-500 text-sm mt-2">Guest Rating</p>

            <div className="flex justify-center gap-1 text-blue-400 text-xl mt-3">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
          </div>

          {/* Booking */}
          <div
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src="/icons/booking.png" className="h-8 mx-auto mb-4 object-contain" />
            <p className="text-5xl font-bold text-gray-900">9.1</p>
            <p className="text-gray-500 text-sm mt-2">
              Excellent · 1,240 Reviews
            </p>

            <div className="flex justify-center gap-1 text-blue-400 text-xl mt-3">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>

          {/* MakeMyTrip */}
          <div
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img src="/icons/Makemytrip.png" className="h-8 mx-auto mb-4" />
            <p className="text-5xl font-bold text-gray-900">4.4</p>
            <p className="text-gray-500 text-sm mt-2">Traveler Rating</p>

            <div className="flex justify-center gap-1 text-blue-400 text-xl mt-3">
              <FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              <FaStar className="text-gray-300" />
            </div>
          </div>

           <div
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img src="/icons/google.png" className="h-8 mx-auto mb-4" />
            <p className="text-5xl font-bold text-gray-900">4.8</p>
            <p className="text-gray-500 text-sm mt-2">Customer Rated</p>

            <div className="flex justify-center gap-1 text-blue-400 text-xl mt-3">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>

          {/* TripAdvisor */}
          <div
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center "
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <img src="/icons/TripAdvisor.svg" className="h-8 mx-auto mb-4" />
            <p className="text-5xl font-bold text-gray-900">4.5</p>
            <p className="text-gray-500 text-sm mt-2">Guest Choice</p>

            <div className="flex justify-center gap-1 text-blue-400 text-xl mt-3">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default ReviewSection;
