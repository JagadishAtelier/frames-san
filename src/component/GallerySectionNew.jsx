import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigate, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const galleryData = {
  background: "#758dc2", // Soft sand/linen color for a natural resort feel
  mainZoomImage:
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
  gridImages: {
    top: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80", // Infinity Pool
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", // Luxury Suite
    ],
    middle: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", // Spa/Massage
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80", // Beach Sunset
    ],
    bottom:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=80", // Coastal View
  },
  textContent: {
    title: "Escape to Unrivaled Serenity",
    description:
      "Discover a sanctuary where the ocean meets the sky. Immerse yourself in private villas, world-class spas, and curated experiences designed to rejuvenate your soul.",
    cta: "Explore Gallery ↗",
    video:
      "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f%2F67bdaf1a42755b16fbdd0b47_7578544-uhd_3840_2160_30fps-transcode.mp4",
  },
};
const GallerySectionNew = () => {
  const navigate = useNavigate();
  const mainContainer = useRef(null);
  const zoomImage = useRef(null);
  const textContent = useRef(null);
  const gridWrapper = useRef(null);
  const galleryHeading = useRef(null); // New Ref for the heading

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(galleryHeading.current, { 
          opacity: 0, 
          y: -50, 
          duration: 0.5 
        }, 0) // Fade out heading immediately
        .to(gridWrapper.current, { scale: 1.1, duration: 2 }, 0)
        .to(".peripheral-img", { opacity: 0, scale: 0.8, duration: 1 }, 0)
        .to(zoomImage.current, {
            width: "100vw",
            height: "100vh",
            maxWidth: "none",
            maxHeight: "none",
            borderRadius: "0px",
            duration: 2,
            ease: "power2.inOut",
          }, 0)
        .to(textContent.current, { opacity: 1, y: 0, duration: 1 }, "-=1");
    }, mainContainer);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-transparent">
      <section
        ref={mainContainer}
        className="relative h-screen w-full overflow-hidden z-10 flex items-center justify-center"
        style={{ backgroundColor: galleryData.background }}
      >
        {/* NEW: PRE-GRID HEADING */}
        <div 
          ref={galleryHeading} 
          className="absolute top-[45%] md:top-[45%] z-20 text-center w-full"
        >
          <h2 className="text-white/40 text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-2">
            Experience
          </h2>
          <h3 className="text-white text-4xl md:text-6xl">
            Our Resort Gallery
          </h3>
        </div>

        {/* THE GRID SYSTEM */}
        <div
          ref={gridWrapper}
          className="relative w-full max-w-[1440px] px-4 md:px-10 flex flex-col gap-3 md:gap-6"
        >
          {/* Top Row */}
          <div className="flex justify-center gap-3 md:gap-6 items-end h-[20vh] md:h-[27vh]">
            <img src={galleryData.gridImages.top[0]} className="peripheral-img w-[40%] h-full object-cover rounded-md shadow-lg" alt="" />
            <img src={galleryData.gridImages.top[1]} className="peripheral-img w-[30%] h-[90%] object-cover rounded-md shadow-lg" alt="" />
          </div>

          {/* Middle Row */}
          <div className="flex justify-center gap-3 md:gap-6 items-center h-[25vh] md:h-[30vh]">
            <img src={galleryData.gridImages.middle[0]} className="peripheral-img w-[20%] h-[90%] object-cover rounded-md shadow-lg" alt="" />
            <div className="relative z-20 shrink-0 overflow-hidden">
              <img
                ref={zoomImage}
                src={galleryData.mainZoomImage}
                className="w-[55vw] md:w-[45vw] h-[25vh] md:h-[35vh] object-cover rounded-xl md:rounded-2xl shadow-2xl"
                alt="Main"
              />
            </div>
            <img src={galleryData.gridImages.middle[1]} className="peripheral-img w-[20%] h-[90%] object-cover rounded-md shadow-lg" alt="" />
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center h-[20vh] md:h-[30vh]">
            <img src={galleryData.gridImages.bottom} className="peripheral-img w-[50%] h-full object-cover rounded-md shadow-lg" alt="" />
          </div>
        </div>

        {/* OVERLAY CONTENT (Fades in after zoom) */}
        <div
          ref={textContent}
          className="absolute inset-0 z-30 bg-black/20 flex flex-col md:flex-row items-center justify-center md:justify-between px-[5%] md:px-[8%] opacity-0 translate-y-10 pointer-events-none"
          style={{ backdropFilter: "blur(1.5px)" }}
        >
          {/* Text Content */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start max-w-2xl text-center md:text-left px-4">
            <h1 className="text-[#eceff7] text-3xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              {galleryData.textContent.title}
            </h1>   
            <p className="text-white/80 max-w-md md:max-w-xl text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              {galleryData.textContent.description}
            </p>
            <button onClick={() => navigate("/gallery")} className="text-white border-b border-white w-fit text-lg md:text-xl pb-1 pointer-events-auto transition-all hover:text-white/70">
              {galleryData.textContent.cta}
            </button>
          </div>

          {/* Windows Mobile Style Grid */}
          <div className="order-1 md:order-2 w-48 h-48 md:w-72 md:h-72 grid grid-cols-2 grid-rows-2 gap-2 md:gap-3 pointer-events-auto mt-8 md:mt-0">

            <div className="col-span-1 row-span-1 bg-[#758dc2] overflow-hidden rounded-md relative shadow-lg">

              <LiveTile images={galleryData.gridImages.top} />

            </div>

            <div className="col-span-1 row-span-1 bg-[#c5a47c] overflow-hidden rounded-md relative shadow-lg">

              <LiveTile images={galleryData.gridImages.middle} />

            </div>

            <div className="col-span-2 row-span-1 bg-black/40 overflow-hidden rounded-md relative ">

              <video

                autoPlay

                muted

                loop

                onClick={() => navigate("/gallery")}

                className="w-full h-full object-cover cursor-pointer"

              >

                <source src={galleryData.textContent.video} type="video/mp4" />

              </video>

              <div
                onClick={() => {
                  navigate("/gallery");
                }}
                className="cursor-pointer absolute bottom-2 left-2 text-[10px] uppercase tracking-widest text-white hover:text-white/60 font-bold"
              >

                Live Preview
                </div>
                </div>
          </div>
        </div>
      </section>

      {/* <section className="h-screen bg-transparent"></section> */}
    </div>
  );
};

const LiveTile = ({ images }) => {
  const [index, setIndex] = React.useState(() =>
    Math.floor(Math.random() * images.length)
  ); // random start
  const tileRef = useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Randomize initial delay so multiple tiles don't animate together
    const initialDelay = Math.random() * 4000;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => {
          const nextIndex = (prev + 1) % images.length;

          gsap.to(tileRef.current, {
            rotationX: -90,
            duration: 0.4,
            onComplete: () => {
              gsap.fromTo(
                tileRef.current,
                { rotationX: 90 },
                { rotationX: 0, duration: 0.4 }
              );
            },
          });

          return nextIndex;
        });
      }, 4000);

      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [images.length]);

  return (
    <div ref={tileRef} className="w-full h-full perspective-1000">
      <img
        src={images[index]}
        className="w-full h-full object-cover cursor-pointer"
        alt="Update"
        onClick={() => navigate("/gallery")}
      />
    </div>
  );
};

export default GallerySectionNew;
