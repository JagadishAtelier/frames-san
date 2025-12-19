import React from "react";

const CTAText = () => {
  return (
    <section className="relative lg:mt-10">
      <div className="relative z-10 text-center">
        {/* ===== Text ===== */}
        <p className="mx-auto max-w-3xl text-3xl font-medium text-black md:text-4xl">
Frames of San is a creative studio delivering focused design solutions for modern brands. We value speed, simplicity, and strong visual direction.
        </p>

        {/* ===== Hover Button ===== */}
        <a
          href="/contact/contact-1"
          className="group relative inline-flex mt-8 py-5 px-20 items-center justify-center overflow-hidden rounded-full border border-black bg-black text-sm font-medium text-white"
        >
          {/* Default text */}
          <span className="absolute transition-transform duration-300 ease-out group-hover:-translate-y-100">
            Get Start
          </span>

          {/* Hover text */}
          <span className="absolute translate-y-9 transition-transform duration-300 ease-out group-hover:translate-y-0">
            Get Start
          </span>
        </a>
      </div>
    </section>
  );
};

export default CTAText;
