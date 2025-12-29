import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const NavLink = ({ href, label }) => (
        <a
            href={href}
            className="group relative overflow-hidden h-6 inline-block"
        >
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
        <header className="w-full fixed top-2 z-50" data-aos="fade-down" data-aos-delay="0">
            <div className="mx-auto lg:px-10">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center ">
                        <a href="/" className="">
                            <img
                                src="/san1.png"
                                alt="Logo"
                                className="lg:h-25 h-20"
                            />
                        </a>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center gap-10 text-sm text-black font-semibold bg-white py-3 px-5 rounded-4xl mb-0">
                            <NavLink href="/" label="Home" />
                            <NavLink href="/work/work-1" label="Work" />
                            <NavLink href="/about" label="About" />
                            {/* <NavLink href="/blog" label="Blog" /> */}
                        </nav>
                    </div>
                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-6 bg-white rounded-4xl ps-4 py-1">
                        <a
                            href="mailto:framesofsan@gmail.com"
                            className="group flex items-center gap-2 overflow-hidden"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/688ed27b183ff7b96a8f0002_email.svg"
                                alt="Email"
                                className="w-4"
                            />
                            <div className="relative">
                                <div className="transition-transform duration-300 group-hover:-translate-y-full text-black">
                                    Email
                                </div>
                                <div className="absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
                                    Email
                                </div>
                            </div>
                        </a>

                        <a
                            href="/contact/contact-1"
                            className="relative overflow-hidden px-8 py-1.5 border border-black bg-black rounded-full text-sm group text-white"
                        >
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                Contact
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                Contact
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col items-center pe-5"
                        aria-label="Menu"
                    >
                        <div className="w-6 h-[2px] bg-black mb-1"></div>
                        <div className="w-6 h-[2px] bg-black mb-1"></div>
                        <div className="w-6 h-[2px] bg-black"></div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden flex flex-col bg-white p-6 rounded-2xl mx-auto w-[95%] justify-center items-center text-center space-y-6 font-semibold">
                        <NavLink href="/" label="Home" />
                        <NavLink href="/work/work-1" label="Work" />
                        <NavLink href="/about" label="About" />
                        {/* <NavLink href="/blog" label="Blog" />
                        <NavLink href="/contact/contact-1" label="Contact" /> */}
                    </div>
                )}
            </div>
        </header>
    );
}
