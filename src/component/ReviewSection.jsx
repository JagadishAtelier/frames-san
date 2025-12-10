import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ratingData = [
  {
    logo: "/icons/agooda.png",
    rating: "4.6",
    subText: "Guest Rating",
    stars: 4.5,
    delay: 100,
  },
  {
    logo: "/icons/booking.png",
    rating: "9.1",
    subText: "1,240+ Reviews",
    stars: 5,
    delay: 200,
  },
  {
    logo: "/icons/Makemytrip.png",
    rating: "4.4",
    subText: "Traveler Rating",
    stars: 4,
    delay: 300,
  },
  {
    logo: "/icons/TripAdvisor.svg",
    rating: "4.5",
    subText: "Guest Choice",
    stars: 4.5,
    delay: 400,
  },
  {
    logo: "/icons/google.png",
    rating: "4.8",
    subText: "Customer Rated",
    stars: 5,
    delay: 500,
    span: "col-span-2 md:col-span-1",
  },
];

const ReviewSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  const renderStars = (count) => {
    const stars = [];
    const full = Math.floor(count);
    const half = count % 1 !== 0;

    for (let i = 0; i < full; i++) stars.push(<FaStar key={i} />);
    if (half) stars.push(<FaStarHalfAlt key="half" />);
    while (stars.length < 5)
      stars.push(
        <FaStar key={`e-${stars.length}`} className="text-gray-300" />
      );

    return stars;
  };

  return (
    <div className="px-2">
      <section
        className="py-10 bg-white relative rounded-xl"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-center text-3xl md:text-6xl font-semibold text-gray-900 mb-14"
            data-aos="fade-up"
          >
            Trusted by Guests Worldwide
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-10">
            {ratingData.map((item, index) => (
              <div
                className={`group cursor-pointer bg-white rounded-2xl p-8 text-center
              ${item.span || ""}`}
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <img
                  src={item.logo}
                  className="h-8 mx-auto mb-4 grayscale group-hover:grayscale-0 duration-300"
                />

                <p className="text-5xl font-bold text-gray-900">
                  {item.rating}
                </p>
                <p className="text-gray-500 text-sm mt-2">{item.subText}</p>

                <div className="flex justify-center gap-1 text-blue-400 text-xl mt-3">
                  {renderStars(item.stars)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
