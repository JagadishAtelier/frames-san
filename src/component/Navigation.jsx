import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = ({ bg }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  const isStayPage = location.pathname.startsWith("/stay");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Sticky background logic
      setIsSticky(currentScroll > 20);

      // Scroll direction detection
      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down
        setScrollUp(false);
      } else {
        // Scrolling up
        setScrollUp(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const dynamicBG = isSticky
    ? "backdrop-blur-xl bg-black/20 border-b border-white/20 shadow-lg"
    : bg === "dark"
    ? "bg-black/50 backdrop-blur-md"
    : bg === "light"
    ? "bg-white/50 backdrop-blur-md text-black"
    : bg === "transparent" && isStayPage
    ? "bg-black/20 backdrop-blur-lg"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${dynamicBG}`}
      style={{
        transform: scrollUp ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white font-medium">
        {/* LEFT — Logo / Menu */}
        <div className="flex items-center gap-8">
          <img
            src="/sel_logo_white.png"
            alt="SEL Hospitality"
            className="w-28 md:hidden"
          />

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition">About</Link>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
            <Link to="/" className="hover:text-gray-300 transition">Aminities</Link>
          </div>
        </div>

        <div className="hidden md:flex mx-auto h-full justify-self-center w-36 items-center justify-center">
          <img src="/sel_logo_white.png" alt="SEL Hospitality" className="w-full" />
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            Book Now
          </button>
          <Link to={"/auth"} className="hidden md:block px-6 py-2 rounded-full text-black border border-white/30 backdrop-blur-md bg-[#eea159] hover:bg-[#eea1597e] hover:text-white transition duration-200">
            Log in
          </Link>
          

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-black/40 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 text-white">
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">Home</Link>
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">About</Link>
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-gray-300">Aminities</Link>
          <button className="mt-3 px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            Book Now
          </button>
          <button className="mt-3 px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
