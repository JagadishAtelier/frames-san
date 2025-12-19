import { useState, useEffect } from "react";
const avatars = [
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/men/18.jpg",
  "https://randomuser.me/api/portraits/men/29.jpg",
];
const testimonials = [
  {
    id: 1,
    name: "Arjun Nair",
    batch: "Bangalore",
    text: "Our stay at SEL Resort was truly unforgettable. The serene surroundings, elegant rooms, and warm hospitality made us feel relaxed from the moment we arrived. It was the perfect escape from city life.",
  },
  {
    id: 2,
    name: "Meenakshi Rao",
    batch: "Chennai",
    text: "SEL Resort offers a beautiful blend of comfort and nature. From the peaceful ambience to the attentive staff and well-maintained amenities, every detail was thoughtfully taken care of.",
  },
];


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[index];

  return (
    <section className="w-full min-h-full py-10 flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto text-center px-6 ">
        {/* Top label */}
        <p className="text-md tracking-wide text-[#426bc5] mb-4">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          Success stories told by our happy students
        </h2>

        {/* Avatars */}
        <div className="relative mb-10 flex justify-center">
          {/* Mask container */}
          <div className="relative w-[260px] overflow-hidden">
            <div className="flex items-center justify-center">
              {avatars.map((img, i) => (
                <div
                  key={i}
                  className={`w-18 h-17 rounded-full overflow-hidden border-2 border-white bg-white
          ${i !== 0 ? "-ml-2" : ""}`}
                >
                  <img
                    src={img}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* LEFT FADE */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />

            {/* RIGHT FADE */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>



        {/* Quote icon */}
        <div className="flex justify-center">
          <span className="text-[#426bc5] text-9xl leading-0 mt-16">“</span>
        </div>

        {/* Testimonial text */}
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
          {active.text}
        </p>

        {/* Author */}
        <div className="text-center">
          <p className="font-semibold text-gray-900">{active.name}</p>
          <p className="text-sm text-gray-500">{active.batch}</p>
        </div>
      </div>
    </section>
  );
}
