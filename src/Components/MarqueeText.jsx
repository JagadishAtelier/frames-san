import React from "react";

const MarqueeText = ({ text, direction = "left", speed = 40 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full pointer-events-none select-none">
      <div
        className={`flex ${
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(6)].map((_, i) => (
          <h1
            key={i}
            className="lg:text-[14vw] text-9xl font-black uppercase me-16"
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
