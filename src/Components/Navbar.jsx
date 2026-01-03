import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // Track top state
            setIsAtTop(currentY === 0);

            // Hide / Show navbar
            if (currentY > lastScrollY && currentY > 100) {
                setShowNav(false); // scrolling down
            } else {
                setShowNav(true); // scrolling up
            }

            setLastScrollY(currentY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const NavLink = ({ href, label }) => (
        <a href={href} className="group relative overflow-hidden h-6 inline-block">
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
            className={`fixed top-2 w-full z-50 transition-transform duration-500 ${showNav ? "translate-y-0" : "-translate-y-32"
                }`}
        >
            <div className="mx-auto lg:px-10">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="relative">
                            {/* Blur ONLY when not at top */}
                            <div
                                className={`absolute inset-0 rounded-md transition-all duration-300 ${!isAtTop && showNav
                                        ? "backdrop-blur-md bg-white/20"
                                        : "backdrop-blur-0 bg-transparent"
                                    }`}
                            />
                            <img
                                src="/san1.png"
                                alt="Logo"
                                className="relative lg:h-25 h-20"
                            />
                        </a>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-6">

                        <div className="rounded-4xl ps-4 py-1 flex items-center gap-6">
                            {/* <a href="mailto:framesofsan@gmail.com" className="flex items-center gap-2">
                                <img
                                    src="https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/688ed27b183ff7b96a8f0002_email.svg"
                                    alt="Email"
                                    className="w-4"
                                />
                                <span className="text-black">Email</span>
                            </a> */}
                        <nav className="hidden sm:flex items-center gap-10 text-sm font-semibold bg-white py-3 px-5 rounded-4xl">
                            <NavLink href="/" label="Home" />
                            <NavLink href="#work" label="Work" />
                            <NavLink href="#about" label="About" />
                                                        <a
                                href="/contact/contact-1"
                                className="px-8 py-1.5 bg-black rounded-full text-sm text-white"
                            >
                                Contact
                            </a>
                        </nav>

                        </div>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden pe-5"
                    >
                        <div className="w-6 h-[2px] bg-black mb-1"></div>
                        <div className="w-6 h-[2px] bg-black mb-1"></div>
                        <div className="w-6 h-[2px] bg-black"></div>
                    </button>
                </div>
            </div>
            {open && (
    <div className="fixed top-[90px] left-1/2 -translate-x-1/2 z-[999] md:hidden w-[95%]">
        <div className="flex flex-col bg-white p-6 rounded-2xl items-center space-y-6 font-semibold shadow-xl">
            <NavLink href="/" label="Home" />
            <NavLink href="/work/work-1" label="Work" />
            <NavLink href="/about" label="About" />

            <a
                href="mailto:framesofsan@gmail.com"
                className="flex items-center gap-2 pt-4"
            >
                <img
                    src="https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/688ed27b183ff7b96a8f0002_email.svg"
                    alt="Email"
                    className="w-4"
                />
                <span>Email</span>
            </a>

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
