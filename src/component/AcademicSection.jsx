import React, { useState } from "react";

export default function AcademicSection() {
  const [activeCard, setActiveCard] = useState(0); // first card active by default

  const cards = [
    {
      title: "Our Vission",
      desc:
        "To be a serene sanctuary where nature, comfort, and soulful experiences come together—offering every guest a peaceful escape and unforgettable moments at Sel Resort.",
      icon:
        "https://cdn-icons-png.freepik.com/256/10632/10632284.png",
    },
    {
      title: "Our Story",
      desc:
        "Sel Resort was born from a vision to create a peaceful escape where nature, comfort, and mindful living come together. ",
      icon:
        "https://cdn-icons-png.freepik.com/256/1966/1966649.png",
    },
    {
      title: "Our Mission",
      desc:
        "To provide warm hospitality, thoughtfully designed stays, and immersive nature-inspired experiences that rejuvenate the mind, body, and soul—while preserving the beauty and harmony of our surroundings.",
      icon:
        "https://cdn-icons-png.freepik.com/256/4897/4897169.png",
    },
  ];

  return (
    <section className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left IMAGE */}
          <div className="lg:col-span-4 h-[100%]">
            <img
              src="https://cdn.prod.website-files.com/684c437bd1bedfba51264f73/68580aa6a7ec7380abf637da_man-pan-KTSYy-3XVSo-unsplash-p-2000.jpg"
              alt="Sel Resort"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
                    <div className="lg:col-span-4 space-y-22 hidden lg:block">
            <div className="py-6 flex flex-col justify-evenly  my-auto h-[38vh]">
              <p className="text-sm text-gray-500">
                Nature • Comfort • Experience
              </p>

              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Why Guests Choose Sel Resort
              </h2>

              <p className="text-gray-600">
                A peaceful retreat surrounded by nature, designed for comfort,
                relaxation, and unforgettable moments.
              </p>
            </div>

            {/* CARD 0 */}
            <FeatureCard
              {...cards[0]}
              active={activeCard === 0}
              onHover={() => setActiveCard(0)}
              onLeave={() => setActiveCard(0)}
            />
          </div>
                    {/* CENTER CARDS */}
          <div className="lg:col-span-4 lg:grid gap-6 hidden ">
            {cards.slice(1).map((card, index) => (
              <FeatureCard
                key={index}
                {...card}
                active={activeCard === index + 1}
                onHover={() => setActiveCard(index + 1)}
                onLeave={() => setActiveCard(0)}
              />
            ))}
          </div>


          {/* Right CONTENT */}

          <div className="flex flex-col-reverse gap-7 w-full lg:hidden">
                    {/* CENTER CARDS */}
          <div className="lg:col-span-4 grid gap-6">
            {cards.slice(1).map((card, index) => (
              <FeatureCard
                key={index}
                {...card}
                active={activeCard === index + 1}
                onHover={() => setActiveCard(index + 1)}
                onLeave={() => setActiveCard(0)}
              />
            ))}
          </div>


          {/* Right CONTENT */}
          <div className="lg:col-span-4 space-y-22">
            <div className="py-6 flex flex-col justify-evenly  my-auto h-[38vh]">
              <p className="text-sm text-gray-500">
                Nature • Comfort • Experience
              </p>

              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Why Guests Choose Sel Resort
              </h2>

              <p className="text-gray-600">
                A peaceful retreat surrounded by nature, designed for comfort,
                relaxation, and unforgettable moments.
              </p>
            </div>

            {/* CARD 0 */}
            <FeatureCard
              {...cards[0]}
              active={activeCard === 0}
              onHover={() => setActiveCard(0)}
              onLeave={() => setActiveCard(0)}
            />
          </div>
</div>


        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function FeatureCard({ title, desc, icon, active, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`rounded-2xl px-6 py-14 transition-all duration-300 cursor-pointer shadow-lg h-[35vh]
        ${active ? "bg-[#ffb47d] text-black" : "bg-white text-gray-900"}
      `}
    >
      {/* <img src={icon} alt={title} className="w-12 h-12 mb-4" /> */}
      <h4 className="text-2xl font-semibold mb-2">{title}</h4>
      <p className={`${active ? "text-black" : "text-gray-600"}`}>
        {desc}
      </p>
    </div>
  );
}
