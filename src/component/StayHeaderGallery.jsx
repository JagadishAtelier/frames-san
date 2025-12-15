import { LayoutGrid, X } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/stayimages/pexels-photo-6129967.webp",
  "/stayimages/pexels-photo-261394.webp",
  "/stayimages/pexels-photo-6969831.webp",
  "/stayimages/pexels-photo-6527036.webp",
  "/stayimages/pexels-photo-6527036.webp",
  "/stayimages/pexels-photo-6438752.webp",
];

export default function StayHeaderGallery() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* ---------- GALLERY GRID (FULL WIDTH) ---------- */}
      <div
        className="
          relative top-20 
          grid 
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
          gap-2 sm:gap-3
          h-[45vh] sm:h-[55vh] lg:h-[90vh]
          max-h-screen 
          rounded-2xl 
          overflow-hidden 
          p-2 sm:p-4 
          bg-transprent
        "
      >
        {/* Main Big Image */}
        <div
          className="
            col-span-2 
            row-span-2 
            sm:col-span-2 sm:row-span-2 
            lg:col-span-2 lg:row-span-2
            cursor-pointer
          "
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0]}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>

        {/* Remaining Images */}
        {images.slice(1, 5).map((img, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={() => openLightbox(i + 1)}
          >
            <img
              src={img}
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </div>
        ))}

        {/* Show All Photos Button */}
        <button
          onClick={() => openLightbox(0)}
          className="
            absolute bottom-2 left-3 lg:bottom-6 lg:left-5.5 
            bg-white shadow 
            px-3 py-2 sm:px-4 sm:py-3 
            text-xs sm:text-sm
            rounded-full
            flex items-center gap-2 
            transition-all 
            duration-300
            hover:-translate-y-1 hover:shadow-lg hover:scale-[1.03] 
            hover:bg-gray-50
          "
        >
          <LayoutGrid className="text-gray-600" size={16} />
          Show all photos
        </button>
      </div>

      {/* ---------- FULLSCREEN LIGHTBOX ---------- */}
      {open && (
        <div className="fixed top-20 inset-0 h-screen bg-black/90 flex flex-col justify-center items-center">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-22 right-6 lg:top-5 lg:right-10 bg-black/50 border-gray-10 hover:bg-white/40 backdrop-blur p-3 rounded-full text-white"
          >
            <X />
          </button>

          {/* Main Image */}
          <div className="w-[90vw] lg:w-[95vw] max-h-[95vh] h-screen lg:h-auto rounded-sm overflow-hidden flex items-center justify-center">
            <img
              src={images[activeIndex]}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Thumbnails Row */}
          <div
            className="
              flex gap-2  absolute bottom-20
              overflow-x-auto 
              my-auto
              px-4 py-4 
              w-full justify-center bg-linear-180 from-transparent to-70% to-black/50
            "
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveIndex(i)}
                className={`
                  h-16 sm:h-20 rounded-lg cursor-pointer 
                  transition 
                  ${i === activeIndex ? "border-2 border-white" : "opacity-80"}
                `}
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
