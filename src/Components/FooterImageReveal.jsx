import React from "react";

const FooterImageReveal = () => {
  return (
    // section height determines how much of the image we see at the end
    <section className="relative h-[50vh] z-0">
      
      {/* Sticky container stays at bottom-0 while scrolling through this section */}
      <div className="sticky bottom-0 h-[50vh] w-full overflow-hidden z-0">
        <img
          src="https://cdn.prod.website-files.com/68de1493b47616b2526c4ba7/68debb91563c010cc6f555b3_Cya%20Image.avif"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="absolute bottom-10 left-10 text-white text-[12vw] font-bold opacity-20 leading-none">
          ATELIER
        </h1>
      </div>
    </section>
  );
};

export default FooterImageReveal;
