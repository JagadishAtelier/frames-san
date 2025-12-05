import React from "react";

const villas = {
  left: {
    img: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5e08/68513c47b3dcbe5b21c6c162_1.jpg",
    title: "Villa Sundara",
    desc: "A paradise for two, where morning light dances on the water and evenings are filled with the sweet silence.",
    features: ["4 bedrooms", "2 terrace", "sauna", "6 bedrooms", "3 bathrooms"],
    area: "218",
    areaDesc: "stylish space",
  },
  right: [
    {
      img: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5e08/68513cc3714afb19871074e3_2.jpg",
      title: "Villa Kaela",
      features: [
        "2 bedrooms",
        "mountain view",
        "sauna",
        "1 terrace",
        "lake view",
        "4 bedrooms",
      ],
    },
    {
      img: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5e08/68513ce889084115b2592b97_3.jpg",
      title: "Villa Solaya",
      features: ["3 bathrooms", "sauna", "2 terrace", "4 bedrooms", "mountain view"],
    },
  ],
};

export default function ResortSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10 mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Life Along The Coast
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              The villas were built with low-impact methods, following the
              land’s natural curves to blend seamlessly into the coastal
              landscape.
            </p>
          </div>

          {/* BUTTON */}
          <button className="
            group bg-black text-white px-6 py-3 rounded-full 
            flex items-center gap-4 
            relative overflow-hidden self-start
            hover:bg-gray-900 transition
          ">
            {/* LEFT ARROW (appears on hover) */}
            <img
              src="/icons/chevron-right.svg"
              className="
                absolute invert left-5 w-4 opacity-0 
                -translate-x-4 transition-all duration-300
                group-hover:opacity-100 group-hover:translate-x-0
              "
            />

            {/* Text */}
            <span className="relative z-10 transition-all duration-300 group-hover:translate-x-6">
              View All Available Villas
            </span>

            {/* RIGHT ARROW (slides out) */}
            <img
              src="/icons/chevron-right.svg"
              className="
                invert w-4 relative transition-all duration-300
                group-hover:translate-x-4 group-hover:opacity-0
              "
            />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {/* LEFT BIG CARD (SPAN 2) */}
          <div className="lg:col-span-2 bg-white/30 backdrop-blur-sm rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6">

            {/* IMAGE */}
            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
              <img src={villas.left.img} className="w-full h-full object-cover" />

              {/* FEATURES ON IMAGE */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {villas.left.features.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/80 text-black text-xs sm:text-sm rounded-full backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* INFO RIGHT SIDE */}
            <div className="flex flex-col justify-between flex-1">

              {/* AREA BOX */}
              <div className="flex items-center gap-4 mb-6 sm:mb-15">
                <div className="p-6 bg-white/70 border border-gray-300 rounded-full shadow-sm">
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/6851263bb91fe7531b08f691_Frame.svg"
                    className="w-10 sm:w-12"
                  />
                </div>

                <div className="px-3 py-6 bg-white/70 border border-gray-300 rounded-full text-center shadow-sm">
                  <div className="text-lg sm:text-xl font-semibold">
                    {villas.left.area} <span className="text-sm ml-1">M2</span>
                  </div>
                  <div className="text-gray-500 text-xs">{villas.left.areaDesc}</div>
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                  {villas.left.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-5">
                  {villas.left.desc}
                </p>
              </div>

              {/* DISCOVER BUTTON */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="font-medium">Discover More</span>

                <div className="w-10 h-10 rounded-full bg-black/80 flex items-center justify-center overflow-hidden transition group-hover:bg-white">
                  {/* Old arrow slides out */}
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                    className="w-4 absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-4"
                  />
                  {/* New arrow slides in */}
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                    className="w-4 absolute opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SMALL CARDS */}
          {villas.right.map((card, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden shadow-lg relative">

              <img src={card.img} className="w-full h-[300px] md:h-full object-cover" />

              {/* Features */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {card.features.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Title + Arrow */}
              <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-semibold">{card.title}</h3>

                <div className="w-10 h-10 rounded-full bg-white/70 backdrop-blur flex items-center justify-center hover:bg-white transition cursor-pointer">
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                    className="w-4 invert"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
