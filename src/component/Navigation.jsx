import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-100 transition-all duration-300
        ${isSticky
          ? "backdrop-blur-xl bg-black/20 border-b border-white/20 shadow-lg"
          : "bg-transparent backdrop-blur-0 pt-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white font-medium">

        {/* LEFT — Logo (mobile) / Menu links (desktop) */}
        <div className="flex items-center gap-8">
          {/* MOBILE LOGO (shows only on small screens) */}
          <img
            src="/sel_logo_white.png"
            alt="SEL Hospitality"
            className="w-28 md:hidden"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/" className="hover:text-gray-300 transition">About</Link>
            <Link to="/" className="hover:text-gray-300 transition">Contact</Link>
            <Link to="/" className="hover:text-gray-300 transition">Aminities</Link>
          </div>
        </div>

        {/* CENTER LOGO (desktop only) */}
        <div className="hidden md:flex h-full w-36 items-center justify-center">
          <img
            src="/sel_logo_white.png"
            alt="SEL Hospitality"
            className="w-full"
          />
        </div>

        {/* RIGHT — Book Now (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-6">

          {/* DESKTOP BUTTON */}
          <button className="hidden md:block px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            Book Now
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          bg-black/40 backdrop-blur-xl border-t border-white/10
        `}
      >
        <div className="flex flex-col gap-4 px-6 py-4 text-white">
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">Home</Link>
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">About</Link>
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">Aminities</Link>

          <button className="mt-3 px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
