import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsAtTop(currentY === 0);

      if (currentY > lastScrollY && currentY > 120) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const NavLink = ({ href, label }) => (
    <a href={href} className="group relative overflow-hidden inline-block">
      <div className="relative">
        <div className="transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </div>
        <div className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </div>
      </div>
    </a>
  );

  return (
    <header
      className={`fixed top-2 w-full z-50 transition-transform duration-500
        ${showNav ? "translate-y-0" : "-translate-y-32"}
      `}
    >
      <div className="mx-auto lg:px-10">
        <div className="grid grid-cols-3 items-center h-20">

          {/* LEFT LOGO (TOP ONLY) */}
          <a href="/" className="relative flex items-center">
            <div
              className={`transition-all duration-500 ease-out
                ${isAtTop ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
              `}
            >
              <img
                src="/san1.png"
                alt="Logo"
                className="h-20 transition-all duration-500"
              />
            </div>
          </a>

          {/* NAV LINKS */}
          <nav
            className={`hidden sm:flex   gap-10 text-sm font-semibold transition-all duration-300
              ${isAtTop
                ? "bg-transparent px-0 py-0 text-black justify-center items-baseline"
                : "bg-white px-6 py-3 rounded-2xl text-black mx-auto w-fit shadow-lg items-center"
              }
            `}
          >
            <NavLink href="/" label="Home" />
            <NavLink href="#work" label="Work" />

            {/* CENTER LOGO (SCROLL ONLY, NO GAP AT TOP) */}
            <div
              className={`flex justify-center transition-all duration-500 ease-out
                ${isAtTop ? "hidden" : "w-fit"}
              `}
            >
              <img
                src="/logoonly.png"
                alt="Logo"
                className={`h-7 transition-all duration-500
                  ${isAtTop
                    ? "opacity-0 scale-90 -translate-y-1"
                    : "opacity-100 scale-100 translate-y-0"
                  }
                `}
              />
            </div>

            <NavLink href="#about" label="About" />
            <NavLink href="/Contact" label="Contact" />
            {/* <a href="/contact/contact-1">Contact</a> */}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden pe-5"
          >
            <div className="w-6 h-[2px] bg-black mb-1" />
            <div className="w-6 h-[2px] bg-black mb-1" />
            <div className="w-6 h-[2px] bg-black" />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-[90px] left-1/2 -translate-x-1/2 z-[999] md:hidden w-[95%]">
          <div className="flex flex-col bg-white p-6 rounded-2xl items-center space-y-6 font-semibold shadow-xl">
            <NavLink href="/" label="Home" />
            <NavLink href="/work/work-1" label="Work" />
            <NavLink href="/about" label="About" />
            <a
              href="/contact/contact-1"
              className="px-8 py-2 bg-black text-white rounded-full text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
