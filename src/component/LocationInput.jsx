import React, { useRef, useState, useEffect } from "react";

export default function LocationInput({ className }) {
  const ref = useRef();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  // Close popover when clicking outside
  useEffect(() => {
    const handle = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, [open]);

  return (
    <div ref={ref} className={`relative flex ${className}`}>
      <div
        className="flex-1 px-6 py-4 cursor-pointer flex items-center space-x-3"
        onClick={() => setOpen(true)}
      >
        <span className="text-neutral-400">📍</span>
        <input
          className="bg-transparent w-full outline-none"
          placeholder="Location"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {open && (
        <div className="absolute top-full mt-3 bg-white rounded-xl shadow-xl p-4 w-full z-30">
          {["Mumbai", "Goa", "Delhi"].map((city) => (
            <div
              key={city}
              className="p-3 cursor-pointer hover:bg-neutral-100"
              onClick={() => {
                setValue(city);
                setOpen(false);
              }}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
