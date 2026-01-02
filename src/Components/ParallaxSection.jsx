import React, { useEffect, useRef } from "react";

const ParallaxSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const offset = window.pageYOffset;
      parallaxRef.current.style.backgroundPositionY =
        offset * 0.7 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full">
      {/* PARALLAX DIV */}
      <div
        ref={parallaxRef}
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1663305411753-4c305e177ff3?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h2 className="text-3xl md:text-5xl uppercase font-bold bg-white/90 px-6 py-4 rounded-xl">
          Div 2
        </h2>
      </div>

      {/* NORMAL SECTION */}
      <div className="min-h-screen flex items-center justify-center bg-yellow-400">
        <h2 className="text-3xl md:text-5xl uppercase font-bold bg-white px-6 py-4 rounded-xl">
          Div 3
        </h2>
      </div>

      {/* FIXED BACKGROUND PARALLAX */}
      <div
        className="min-h-[600px] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1663183539627-adbe2c8ef43d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h2 className="text-3xl md:text-5xl uppercase font-bold bg-white/90 px-6 py-4 rounded-xl">
          Div 4
        </h2>
      </div>

      {/* NORMAL SECTION */}
      <div className="min-h-screen flex items-center justify-center bg-blue-700 text-white">
        <h2 className="text-3xl md:text-5xl uppercase font-bold bg-black/40 px-6 py-4 rounded-xl">
          Div 5
        </h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
