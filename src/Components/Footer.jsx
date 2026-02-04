import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-50 bg-black text-white" id="footer">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT CONTAINER */}
      <div
        className="
          relative
          mx-auto
          w-full

          max-w-[1600px]
min-[1280px]:max-w-[1280px]
min-[1536px]:max-w-[1800px]
    min-[1537px]:max-w-none
    min-[1537px]:w-[90%]

          px-6
          min-[1024px]:px-6
          min-[1280px]:px-6
          min-[1536px]:px-20
          min-[1537px]:px-24

          pt-20
          py-10
        "
      >
        {/* DEBUG FLAG */}

        {/* TOP CTA */}
        <div className="space-y-10">
          <p className="text-lg min-[1536px]:text-lg min-[1537px]:text-lg text-white">
            Have a moment worth capturing?
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <p
              className="
                font-semibold
                text-4xl
                min-[1024px]:text-5xl
                min-[1280px]:text-7xl
                min-[1536px]:text-7xl
                min-[1537px]:text-7xl
              "
            >
              Let’s tell your story through lenses
            </p>

            <a
              href="/contact-us"
              className="
                inline-flex
                w-full
                min-[1024px]:w-auto
                min-[1280px]:w-40
                min-[1536px]:w-40
                min-[1537px]:w-55
                items-center
                justify-center
                min-[1536px]:text-lg min-[1537px]:text-2xl
                px-8
                py-4
                text-sm
                font-medium

                border
                border-red-600
                bg-red-600
                rounded-full

                hover:bg-white
                hover:text-black
                transition
              "
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-10" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* NAV */}
          <div className="flex flex-wrap gap-6 text-base min-[1536px]:text-lg min-[1537px]:text-lg font-bold">
            <a href="/" className="hover:opacity-70">Home</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#work" className="hover:opacity-70">Work</a>
          </div>

          {/* COPYRIGHT */}
          <div className="max-w-xl min-[1536px]:max-w-none min-[1537px]:max-w-none text-base min-[1536px]:text-lg min-[1537px]:text-lg leading-relaxed">
            Copyright © 2025. All Rights Reserved.{" "}
            <a
              href="https://theateliercreation.com/"
              className="underline"
            >
              Atelier Creation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
