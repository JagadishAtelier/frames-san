import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-black text-white z-50">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 pt-20 py-10">
          {/* Top CTA */}
          <div className="space-y-10">
            <p className="text-lg text-white">Have a moment worth capturing?</p>

            <div className="flex flex-col lg:flex-row lg:items-center md:justify-between gap-8">
              <p className="text-4xl md:text-7xl font-semibold">
                Let’s tell your story through lenses
              </p>

              <a
                href="/contact-us"
                className="inline-flex md:w-1/4 w-full lg:w-[10rem] items-center justify-center px-8 py-4 text-sm font-medium border border-red-600 bg-red-600 rounded-full hover:bg-white hover:text-black transition"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-10"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
            {/* Nav Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/home" className="hover:opacity-70 font-bold text-base">Home</a>
              <a href="/about-us" className="hover:opacity-70 font-bold text-base">About</a>
              <a href="/works" className="hover:opacity-70 font-bold text-base">Work</a>
            </div>

            {/* Copyright */}
            <div className="text-base text-white max-w-xl leading-relaxed">
              Copyright @ 2025. All Rights Reserved.{" "}
              <a
                href="/"
                className="underline"
              >
                Atelier Creation
              </a>
            </div>
          </div>
        </div>
      </footer>

        {/* Sticky container stays at bottom-0 while scrolling through this section */}
        <div className="sticky bottom-0 h-[50vh] w-full overflow-hidden z-0">
          <img
            src="https://cdn.prod.website-files.com/68de1493b47616b2526c4ba7/68debb91563c010cc6f555b3_Cya%20Image.avif"
            alt="Footer Background"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <h1 className="absolute bottom-0 left-60 text-white text-[12vw] font-bold opacity-60 leading-none uppercase">
            Creativity
          </h1>
        </div>
    </div>
  );
};

export default Footer;
