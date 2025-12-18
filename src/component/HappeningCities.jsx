import React from "react";
import { Star } from "lucide-react";

export default function HappeningCities() {
  const badges = [
    {
      label: "Advertising",
      title: "Cost-effective advertising",
      desc: "With a free listing, you can advertise your rental with no upfront costs",
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Exposure",
      title: "Reach millions with Chisfis",
      desc: "Millions of people are searching for unique places to stay around the world",
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Secure",
      title: "Secure and simple",
      desc: "A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online",
      color: "bg-red-100 text-red-600",
    },
  ];

  const bubbles = [
    {
      name: "Arun Kumar",
      rating: 4.9,
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      className: "top-10 -left-10",
    },
    {
      name: "Priya Sharma",
      rating: 5.0,
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      className: "top-5 right-10",
    },
    {
      name: "Kavya Reddy",
      rating: 4.9,
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      className: "top-40 right-0",
    },
    {
      name: "Vikram Patel",
      rating: 5.0,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      className: "top-1/2 left-10",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">Benefits</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Happening cities</h2>

          <div className="space-y-10">
            {badges.map((item, index) => (
              <div key={index}>
                <span className={`text-xs px-3 py-1 rounded-full ${item.color}`}>{item.label}</span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 max-w-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE WITH BUBBLES */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-[250px] rounded-br-none rounded-tl-none">
            <img
              src="https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?fm=jpg&q=60&w=3000"
              alt="City"
              className="w-full h-[700px] object-cover"
            />
          </div>

          {/* Floating bubbles */}
          {bubbles.map((b, i) => (
            <div
              key={i}
              className={`absolute ${b.className} bg-white shadow-xl rounded-full flex items-center gap-3 py-2 px-4 min-w-[180px]`}>
              <img
                src={b.img}
                alt={b.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700 text-sm">{b.name}</span>
                <span className="text-xs flex items-center gap-1 text-gray-500">
                  <Star size={12} className="text-yellow-500" /> {b.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}