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
    if (open) {
      document.body.style.overflow = "hidden"; // ❌ Prevent scroll
    } else {
      document.body.style.overflow = "auto"; // ✅ Restore scroll
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* --- Gallery Grid --- */}
      <div className="relative top-20 grid grid-cols-4 gap-3 h-[90vh] max-h-screen rounded-2xl overflow-hidden p-4 bg-white">
        <div
          className="col-span-2 row-span-2 cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0]}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>

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

        {/* Show all photos button */}
        <button
          onClick={() => openLightbox(0)}
          className="absolute bottom-6 left-6 bg-white shadow px-4 py-3 text-sm rounded-full
             flex items-center gap-2 transition-all duration-300
             hover:-translate-y-1 hover:shadow-lg hover:scale-[1.03] hover:bg-gray-50"
        >
          <LayoutGrid className="text-gray-600" size={18} />
          Show all photos
        </button>
      </div>

      {/* --- Fullscreen Lightbox --- */}
      {open && (
        <div className="fixed inset-0 h-screen bg-black/90 z-50 flex flex-col justify-center items-center">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 bg-white/20 hover:bg-white/40 backdrop-blur p-3 rounded-full text-white"
          >
            <X />
          </button>

          {/* Main Image */}
          <div className="w-[90vw] max-h-[95vh] rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={images[activeIndex]}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Thumbnail Row */}
          <div className="flex absolute bottom-1 gap-2 mt-5 overflow-x-auto px-4 pb-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveIndex(i)}
                className={`h-20 rounded-lg cursor-pointer ${
                  i === activeIndex ? " border-2 border-white" : "opacity-100"
                }`}
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
