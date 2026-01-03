import React from 'react';
import FadeUpText from './FadeUpText';
import ScrollRevealText from './FadeUpText';

const LegionSection = () => {
  // const keys = [
  //   { src: "/Keys/F-RED.png", rotate: "-rotate-[16deg]", translate: "-translate-y-2" },
  //   { src: "https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f7218a42e83168255817_Keys%206.avif", rotate: "rotate-[8deg]", translate: "-translate-y-0" },
  //   { src: "https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f7212eb0ac6549c67e31_Keys%205.avif", rotate: "-rotate-[25deg]", translate: "translate-y-2" },
  //   { src: "https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f721e58c58a4e79802ce_Keys%204.avif", rotate: "rotate-0", translate: "translate-y-0" },
  //   { src: "https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f721c59aee920800b5df_Keys%202.avif", rotate: "rotate-[8deg]", translate: "translate-y-6" },
  //   { src: "https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f7219fd506c24419ae39_Keys%203.avif", rotate: "rotate-[17deg]", translate: "translate-y-2" },
  // ];
  const keys = [
    { src: "/Keys/F-RED.png", },
    { src: "/Keys/R.png" },
    { src: "/Keys/A.png", },
    { src: "/Keys/M.png", },
    { src: "/Keys/E.png", },
    { src: "/Keys/S.png", },
  ];
  const keys2 = [
    { src: "/Keys/O.png", },
    { src: "/Keys/F_.png" },

  ]
  const keys3 = [
    { src: "/Keys/S-RED.png", },
    { src: "/Keys/A_.png" },
    { src: "/Keys/N.png" },
  ]

  return (
    <section className="flex items-center justify-center px-6 py-10 font-sans text-[#0a0a0a]">
      <div className="max-w-5xl text-center flex flex-col items-center">
        <ScrollRevealText
          text="Who are we"
          className="text-lg mb-6 opacity-80 block border-b-2 border-red-600 w-fit"
        />
        <ScrollRevealText
          text="We don’t just take photos we frame emotions, stories, and timeless moments."
          className="text-4xl md:text-6xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-0 items-center justify-center"
        />

        {/* Keycaps Container */}
        <div className="flex justify-center items-center gap-2 md:gap-0  lg:h-32" data-aos="fade-down" data-aos-delay="2">
          {keys.map((key, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 hover:scale-110 ${key.rotate} ${key.translate}`}
            >
              <img
                src={key.src}
                alt={`Keycap ${index}`}
                className="w-16 md:w-28 h-auto drop-shadow-xl"
              />
            </div>
          ))}
        </div>
        <div className='flex flex-row gap-10'>
          <div className="flex justify-center items-center gap-2 md:gap-0 lg:h-32" data-aos="fade-down" data-aos-delay="2">
            {keys2.map((key, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 hover:scale-110 ${key.rotate} ${key.translate}`}
              >
                <img
                  src={key.src}
                  alt={`Keycap ${index}`}
                  className="w-16 md:w-28 h-auto drop-shadow-xl"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-0 lg:h-32" data-aos="fade-down" data-aos-delay="2">
            {keys3.map((key, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 hover:scale-110 ${key.rotate} ${key.translate}`}
              >
                <img
                  src={key.src}
                  alt={`Keycap ${index}`}
                  className="w-16 md:w-28 h-auto drop-shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Description Paragraph */}

        {/* <div className="max-w-4xl mb-6">
          <FadeUpText
            text="Frames of San is a creative photography studio dedicated to capturing authentic emotions, 
natural expressions, and meaningful stories. From portraits to events, we craft visuals 
that feel timeless, personal, and truly yours."
            className="text-lg md:text-xl text-black leading-relaxed"
          />
        </div> */}

        {/* CTA Button */}
        {/* <a 
          href="/contact" 
          data-aos="fade-down" data-aos-delay="4"
          className="group relative flex items-center bg-black text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-zinc-800"
        >
          <span className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></span>
          <span className="text-lg font-medium">Learn More</span>
        </a> */}

      </div>
    </section>
  );
};

export default LegionSection;