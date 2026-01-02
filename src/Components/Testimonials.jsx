import { useState } from "react";
const testimonials = [
  {
    name: "Emily Johnson",
    location: "USA, California",
    rating: 5,
    text:
      "Damien's photography doesn’t just capture moments; it captures emotions. His work is simply mesmerizing.",
  },
  {
    name: "John Smith",
    location: "USA, California",
    rating: 5,
    text:
      "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
  },
  {
    name: "Samantha Davis",
    location: "USA, California",
    rating: 5,
    text:
      "I was blown away by Damien’s ability to capture the essence of our wedding day. His photographs are our memories.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-14">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              WHAT MY <br />
              <span className="text-red-600 font-handwriting tracking-wide">
                CLIENTS SAY
              </span>
            </h2>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
            >
              ›
            </button>
            <button className="ml-3 px-4 py-2 text-xs rounded-md bg-gray-800 hover:bg-gray-700 transition">
              View all Testimonials →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="flex gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`w-full md:w-1/3 bg-[#111] border border-[#222] rounded-xl p-6 transition-all duration-300 ${
                i === index
                  ? "opacity-100 scale-100"
                  : "opacity-40 scale-95 hidden md:block"
              }`}
            >
              {/* HEADER */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.location}</p>
                </div>
                <div className="flex gap-2 text-gray-400 text-sm">
                  <span>◯</span>
                  <span>◯</span>
                  <span>◯</span>
                </div>
              </div>

              {/* STARS */}
              <div className="flex text-yellow-400 mb-3">
                {"★".repeat(item.rating)}
              </div>

              {/* TEXT */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 h-[2px] w-full bg-gradient-to-r from-blue-500 to-transparent" />
      </div>
    </section>
  );
}
