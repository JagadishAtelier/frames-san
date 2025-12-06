import { useEffect, useRef, useState } from "react";

const footerData = {
  topMenu: {
    left: [
      "About Sel Hospitality",
      "Our Services",
      "Our Properties",
      "Careers",
    ],
    center: {
      phone: "+91 98765 43210",
      email: "info@selhospitality.com",
    },
    right: ["Facebook", "Instagram", "Pinterest"],
  },
  bottomRow: {
    left: { text: "© Sel. All Rights Reserved.", link: "Licensing" },
    center: "88/1A Tidewalk Blvd, Byron Bay, Coimbatore 641045, India",
    right: {
      text: "Developed and Maintained by",
      link: "Atelier",
      url: "https://www.theateliercreation.com/",
    },
  },
  bgText: "SEL HOSPITALITY",
};

export default function Footer() {
  const bgTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0, // Trigger as soon as it enters the viewport
        rootMargin: "0px 0px -100px 0px", // Trigger a bit before fully visible
      }
    );

    if (bgTextRef.current) observer.observe(bgTextRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#0E0F0F] text-white pt-20 pb-36 rounded-xl relative overflow-hidden">
      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-sm">
        {/* LEFT MENU */}
        <div className="space-y-2 md:space-y-3 text-center md:text-left">
          {footerData.topMenu.left.map((item, idx) => (
            <p key={idx} className="hover:opacity-80 cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        {/* CENTER CONTACT */}
        <div className="text-center flex flex-col items-center gap-2 my-6 md:my-0">
          <p className="text-xl md:text-2xl font-medium tracking-wide">
            {footerData.topMenu.center.phone}
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-[#F4D0A1]">
            {footerData.topMenu.center.email}
          </p>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="space-y-2 md:space-y-3 text-center md:text-right">
          {footerData.topMenu.right.map((item, idx) => (
            <p key={idx} className="hover:opacity-80 cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16 text-[12px] md:text-[13px] text-white/70 gap-4 md:gap-0 text-center md:text-left">
        <div>
          {footerData.bottomRow.left.text} <br />
          <span className="underline cursor-pointer text-white/70">
            {footerData.bottomRow.left.link}
          </span>
        </div>
        <div className="leading-relaxed">{footerData.bottomRow.center}</div>
        <div className="leading-relaxed sm:text-right">
          {footerData.bottomRow.right.text}{" "}
          <a
            className="underline cursor-pointer text-white/70"
            href={footerData.bottomRow.right.url}
          >
            {footerData.bottomRow.right.link}
          </a>
        </div>
      </div>

      {/* HUGE BACKGROUND TEXT */}
      <h1
        ref={bgTextRef}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 
    text-[46px] sm:text-[150px] md:text-[150px] font-bold tracking-tight 
    pointer-events-none select-none leading-tight sm:leading-none sm:whitespace-nowrap text-center sm:text-left
    bg-linear-to-r from-[#95b1eb] via-indigo-600 to-[#95b1eb] 
    text-transparent bg-clip-text
    transition-transform duration-1000
    ${isVisible ? "translate-y-0 sm:translate-y-4 opacity-100" : "translate-y-10 opacity-0"}
  `}
      >
        {footerData.bgText}
      </h1>
    </div>
  );
}
