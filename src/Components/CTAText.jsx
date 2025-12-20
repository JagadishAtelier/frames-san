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
      <div className="flex justify-center mx-auto mt-24 w-fit items-center gap-10 text-sm font-semibold bg-white py-3 px-5 rounded-4xl mb-0">
        {["Instagram", "Contact Us"].map((item) => (
          <p
            key={item}
            className="group relative h-5 overflow-hidden cursor-pointer text-black"
          >
            {/* Default text */}
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-5">
              {item}
            </span>

            {/* Hover text */}
            <span className="absolute left-0 top-5 block transition-transform duration-300 ease-out group-hover:-translate-y-5">
              {item}
            </span>
          </p>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <p className="text-gray-500 text-sm">
          Copyright @ 2025 designed by <a href="https://ateliertechnologysolutions.com/" className="">Atelier Technology</a> - powered by Atelier
        </p>
      </div>


    </section>
  );
};

export default CTAText;
