import React from "react";
import FadeUpText from "./FadeUpText";
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/framesofsan", // client Instagram
  },
  {
    label: "Contact Us",
    href: "https://wa.me/8610878315 ", // client WhatsApp number
  },
];

const CTAText = () => {
  return (
    <section className="relative">
      <div className="relative z-10 text-center">
        {/* ===== Text ===== */}
      <FadeUpText
        text="Frames of San is a creative studio delivering focused design solutions for modern brands."
        className="mx-auto max-w-3xl text-3xl font-medium text-black md:text-4xl"
      />
      <FadeUpText
        text="We value speed, simplicity, and strong visual direction."
        className="mx-auto max-w-3xl text-3xl font-medium text-black md:text-4xl"
      />


        {/* ===== Hover Button ===== */}
        <a
          href="/contact/contact-1"
          data-aos="fade-down" data-aos-delay="0"
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

      {/* <div className="mt-4 flex lg:justify-end text-center" data-aos="fade-up" data-aos-delay="0">
        <p className="text-gray-500 text-sm">
          Copyright @ 2025 designed by <a href="https://ateliertechnologysolutions.com/" className="">Atelier Creation</a>
        </p>
      </div> */}


    </section>
  );
};

export default CTAText;
