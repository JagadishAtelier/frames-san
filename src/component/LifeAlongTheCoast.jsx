import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const villas = [
  {
    name: "Villa Sundara",
    description:
      "A place where time stands still. Among herbs’ scent and the wind’s whisper, find peace hidden from the world.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    ],
  },
  {
    name: "Villa Miraia",
    description:
      "An intimate retreat designed for serene coastal living with panoramic sea views.",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    ],
  },
  {
    name: "Villa Azari",
    description:
      "Modern luxury meets nature with expansive open spaces and refined interiors.",
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    ],
  },
];

export default function LifeAlongTheCoast() {
  const [activeVilla, setActiveVilla] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const villa = villas[activeVilla];
  const images = villa.images;

  const changeImage = (nextIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveImage(nextIndex);
      setIsAnimating(false);
    }, 300); // match CSS duration
  };

  const prevImage = () =>
    changeImage(activeImage === 0 ? images.length - 1 : activeImage - 1);

  const nextImage = () =>
    changeImage(activeImage === images.length - 1 ? 0 : activeImage + 1);

  useEffect(() => {
    setActiveImage(0);
  }, [activeVilla]);

  return (
    <section className="bg-white py-28 px-40">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-20">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-10">
          <h2 className="text-5xl font-bold leading-tight max-w-sm">
            Life Along The Coast
          </h2>

          <div className="space-y-6">
            {villas.map((villa, i) => (
              <button
                key={villa.name}
                onClick={() => setActiveVilla(i)}
                className="block text-left group"
              >
                {/* NAME + LINE */}
                <div className="flex items-center gap-4">
                  <span
                    className={`text-lg transition-colors duration-300 ${
                      i === activeVilla
                        ? "text-[#758dc2] font-medium"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {villa.name}
                  </span>

                  {/* ANIMATED LINE */}
                  <span
                    className={`
            h-0.5 w-40 bg-[#758dc2]
            origin-left transform transition-transform duration-800 ease-out
            ${i === activeVilla ? "scale-x-100" : "scale-x-0"}
          `}
                  />
                </div>

                {/* DESCRIPTION */}
                {i === activeVilla && (
                  <p className="mt-2 text-sm text-gray-700 max-w-sm">
                    {villa.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          <a className="mt-16 text-sm text-gray-500 hover:text-black">
            Accommodation Details →
          </a>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="flex items-center justify-between mb-8 gap-8">
            <p className="text-sm text-gray-500 max-w-xs">
              The villas were crafted using a low-impact building method that
              embraces the land’s natural contours.
            </p>

            <button className="h-10 rounded-full bg-black px-8 text-xs text-white">
              View All Resort
            </button>
          </div>

          {/* IMAGE WITH FADE + SCALE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={images[activeImage]}
                alt={villa.name}
                className={`h-[440px] w-full object-cover transition-all duration-300 ease-in-out
                  ${
                    isAnimating
                      ? "opacity-40 scale-150"
                      : "opacity-100 scale-100"
                  }
                `}
              />
            </div>

            {/* ARROWS */}
            <button
              onClick={prevImage}
              className="absolute -left-7 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-[#758dc2] border-4 border-white flex items-center justify-center shadow"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute -right-7 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-[#758dc2] border-4 border-white flex items-center justify-center shadow"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
