import React from "react";
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
    <section className="relative lg:mt-10" data-aos="fade-down" data-aos-delay="0">
      <div className="relative z-10 text-center">
        {/* ===== Text ===== */}
        <p className="mx-auto max-w-3xl text-3xl font-medium text-black md:text-4xl">
          Frames of San is a creative studio delivering focused design solutions for modern brands. We value speed, simplicity, and strong visual direction.
        </p>

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
      <div className="flex justify-center mx-auto lg:mt-24 mt-5 w-fit items-center gap-10 text-sm font-semibold bg-white py-3 px-5 rounded-4xl mb-0">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-5 overflow-hidden cursor-pointer text-black"
            data-aos="fade-right" data-aos-delay="0"
          >
            {/* Default text */}
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-5">
              {item.label}
            </span>

            {/* Hover text */}
            <span className="absolute left-0 top-5 block transition-transform duration-300 ease-out group-hover:-translate-y-5">
              {item.label}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-4 flex lg:justify-end text-center" data-aos="fade-up" data-aos-delay="0">
        <p className="text-gray-500 text-sm">
          Copyright @ 2025 designed by <a href="https://ateliertechnologysolutions.com/" className="">Atelier Creation</a>
        </p>
      </div>


    </section>
  );
};

export default CTAText;
