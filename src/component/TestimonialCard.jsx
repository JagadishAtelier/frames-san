import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const families = [
  {
    name: "Sunder's Family",
    text: "Staying at Sel was like stepping into another world. Each villa tells its own story, and the location by the sea is beyond breathtaking.",
  },
  {
    name: "Vidulya Reddy",
    text: "A truly unforgettable experience. The service, the ambiance, and the attention to detail were exceptional. We felt like home.",
  },
  {
    name: "Hillen Nathan",
    text: "A peaceful escape from my busy routine. The villas are beautifully designed and the staff made sure everything was perfect!",
  },
  {
    name: "Muthu Kumar's Family",
    text: "One of the best vacations we’ve had. Sel offers a blend of luxury and nature that creates a calming experience like no other.",
  },
];

export default function TestimonialCard() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % families.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? families.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative min-h-[65vh] sm:pb-0 pb-10 flex flex-col items-center gap-10 bg-white">
      
      {/* HEADING */}
      {/* <h2 className="text-4xl text-center px-10 leading-relaxed sm:leading-normal sm:px-0 md:text-5xl sm:mb-2 relative z-50 font-semibold text-black/80">
        What our Customers say?
      </h2> */}

      {/* GRID BACKGROUND */}
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

      {/* MAIN CARD */}
      <div className="relative overflow-hidden w-[90%] max-w-5xl bg-[#95b1eb] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Decorative top-right shape */}
        <div className="absolute -right-6 -top-6 opacity-10 md:opacity-5 invert-100 pointer-events-none select-none animate-spin [animation-duration:20s]">
          <img src="/icons/vector-light1.png" className="w-28 md:w-40" />
        </div>

        {/* LEFT LIST */}
        <div className="w-full md:w-[220px] flex flex-col justify-between">
          <div>
            {families.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`py-2 text-[15px] cursor-pointer transition
              ${
                active === i
                  ? "font-semibold text-black border-b-2 border-black"
                  : "text-black/50 border-b border-black/10"
              }`}
            >
              {item.name}
            </div>
          ))}
          </div>

          <p className="text-sm text-black/70 mt-6">
            Reviews : <span className="font-semibold">9.3/10</span>
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 relative flex flex-col">
          
          {/* QUOTE ICON */}
          <div className="mb-6"><img src="/icons/quates.svg" alt="quates" /></div>

          {/* TEXT */}
          <p className="text-2xl md:text-4xl leading-normal text-black font-semibold max-w-2xl">
            {families[active].text}
          </p>

          {/* NAV BUTTONS */}
          <div className="flex gap-4 mt-8 self-end md:absolute md:bottom-0 md:right-0">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-900 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
