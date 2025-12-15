import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryItems as images } from "./galleryData";

export default function InfiniteGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split images into repeating rows: 2 large → 3 medium → repeat
  const getRows = (images) => {
    const rows = [];
    let i = 0;
    while (i < images.length) {
      // 2 large images
      if (i < images.length) {
        rows.push({ type: "large", items: images.slice(i, i + 2) });
        i += 2;
      }
      // 3 medium images
      if (i < images.length) {
        rows.push({ type: "medium", items: images.slice(i, i + 3) });
        i += 3;
      }
    }
    return rows;
  };

  const rows = getRows(images);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-normal">
            Our Gallery
          </h2>
          <div className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Step into a realm where art comes to life.
          </div>
        </div>

        <div className="grid gap-8">
          {rows.map((row, idx) => {
            if (row.type === "large") {
              return (
                <div key={idx} className="grid md:grid-cols-12 gap-4">
                  {row.items[0] && (
                    <div className="md:col-span-4 h-[404px] hover:h-[390px] hover:w-[98%] transition-all duration-700 w-full overflow-hidden">
                      <img
                        src={row.items[0].src}
                        alt="Gallery"
                        className="object-cover w-full h-full rounded-3xl transition-all duration-700 hover:rounded-2xl cursor-pointer"
                        onClick={() => {
                          setCurrentIndex(images.indexOf(row.items[0]));
                          setLightboxOpen(true);
                        }}
                      />
                    </div>
                  )}
                  {row.items[1] && (
                    <div className="md:col-span-8 h-[404px] hover:h-[390px] hover:w-[98%] transition-all duration-700 w-full overflow-hidden">
                      <img
                        src={row.items[1].src}
                        alt="Gallery"
                        className="object-cover w-full h-full rounded-3xl transition-all duration-700 hover:rounded-2xl cursor-pointer"
                        onClick={() => {
                          setCurrentIndex(images.indexOf(row.items[1]));
                          setLightboxOpen(true);
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <div key={idx} className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  {row.items.map((img, i) => (
                    <div
                      key={i}
                      className="h-[277px] hover:h-[260px] hover:w-[98%] transition-all duration-700 w-full rounded-3xl overflow-hidden"
                    >
                      <img
                        src={img.src}
                        alt="Gallery"
                        className="object-cover w-full h-full rounded-3xl transition-all duration-700 hover:rounded-2xl cursor-pointer"
                        onClick={() => {
                          setCurrentIndex(images.indexOf(img));
                          setLightboxOpen(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* Yet Another React Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images.map((img) => ({ src: img.src }))}
        index={currentIndex}
        animation={{ fade: 300 }}
        styles={{
          container: { display: "flex", alignItems: "center", justifyContent: "center" },
          image: { maxHeight: "90vh", objectFit: "contain",borderRaious:"30px" },
        }}
      />
    </section>
  );
}
