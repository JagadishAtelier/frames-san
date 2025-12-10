import React, { useEffect } from "react";
import { MapPin, Phone, CalendarDays } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// JSON data for restaurants & resorts
const restaurantData = [
  {
    id: 1,
    name: "Lakeview Nature Resort",
    description:
      "A peaceful getaway surrounded by greenery and lakeside views. Perfect for family & couple retreats.",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    location: "Coimbatore, Tamil Nadu",
    phone: "+91 98765 43210",
    booking: "Call for Booking",
    bgColor: "bg-white",
    aosDelay: 100,
  },
  {
    id: 2,
    name: "Spice Garden Restaurant",
    description:
      "Authentic South Indian flavors with premium ambience for friends, family, corporate celebrations.",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    location: "Coimbatore",
    phone: "+91 99887 66554",
    booking: "Open Daily",
    bgColor: "bg-white",
    aosDelay: 400,
  },
  {
    id: 3,
    name: "Signature Hilltop Villas",
    description:
      "Luxury villa stay with private pool, premium dining & scenic hilltop sunrise views with sunrise cafe.",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    location: "Coimbatore",
    phone: "+91 91234 56789",
    booking: "Limited Slots",
    bgColor: "bg-white",
    aosDelay: 800,
  },
];

export default function RestaurantResortSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full relative pb-10">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(0 65 255 /50%) 1px, #ffffff 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Our Restaurants & Resorts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium dining and luxurious stay options crafted to give
            you unforgettable moments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {restaurantData.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition p-5`}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover rounded-xl"
              />
              <h3 className="text-2xl font-semibold mt-5">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>

              <div className="mt-4 space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <MapPin size={18} /> {item.location}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} /> {item.phone}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays size={18} /> {item.booking}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
