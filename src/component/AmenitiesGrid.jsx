import { useState } from "react";
const amenities = [
  {
    title: "Relaxing Spa & Jacuzzi",
    subtitle: "Unwind, recharge, rejuvenate",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    description:
      "Where soothing treatments and warm bubbles melt your stress away. The perfect escape to relax, recharge, and rejuvenate.",
  },
  {
    title: "Tranquil Garden Courtyard",
    subtitle: "Nature at your doorstep",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    description:
      "A peaceful green sanctuary designed for calm mornings and relaxing evenings.",
  },
  {
    title: "In-Room Breakfast Service",
    subtitle: "Mornings made better",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    description:
      "Enjoy a delicious breakfast served fresh to your room.",
  },
  {
    title: "Design-Forward Rooms",
    subtitle: "Where comfort meets aesthetic",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    description:
      "Thoughtfully designed interiors that balance luxury and comfort.",
  },
  {
    title: "Room Service",
    subtitle: "Comfort delivered to your door",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description:
      "Round-the-clock service for all your cravings.",
  },
  {
    title: "In-Room Mini Bar",
    subtitle: "Refresh & relax anytime",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    description:
      "A curated selection of beverages available anytime.",
  },
  {
    title: "High-Speed Wi-Fi",
    subtitle: "Stay connected, seamlessly",
    image:
      "https://images.unsplash.com/photo-1587614382346-ac4a3a9a1d33",
    description:
      "Fast and reliable internet for work or entertainment.",
  },
  {
    title: "Concierge Services",
    subtitle: "Your personalized travel assistant",
    image:
      "https://images.unsplash.com/photo-1551887373-6d8cfc7c4d05",
    description:
      "Personal assistance to enhance your stay.",
  },
];

export default function AmenitiesGrid() {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Text */}
            <div className="absolute inset-x-0 bottom-8 px-6 max-w-sm text-white z-10">
              <p className="text-sm opacity-80">{item.subtitle}</p>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            </div>

            {/* Plus Button */}
            <div className="absolute bottom-6 right-6 z-10">
              <div className="h-10 w-10 rounded-full border border-white/50 flex items-center justify-center text-white text-xl">
                +
              </div>
            </div>

            {/* Hover Card */}
            <div
              className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500
                ${
                  active === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <div className="bg-black/80 text-white p-6 rounded-xl max-w-[85%] relative">
                <button
                  className="absolute top-3 right-3 text-white/70 hover:text-white"
                  onClick={() => setActive(null)}
                >
                  ✕
                </button>

                <h4 className="text-lg font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
