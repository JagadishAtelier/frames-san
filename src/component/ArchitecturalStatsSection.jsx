const ArchitecturalStatsSection = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-5 py-14 sm:py-16 md:pt-15 md:pb-5 ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8 items-center mx-auto">
          
          {/* Left Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-semibold leading-tight">
              Architectural Excellence <br className="hidden sm:block" />
              Built On Creative Vision
            </h2>

            <button className="group mt-6 inline-flex items-center gap-2 border-b border-white/60 pb-1 text-sm font-medium tracking-wide transition-all hover:border-white">
              Discover More
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Stat 1 */}
          <div className="md:col-span-1">
            <div className="text-[#c8a47e] text-5xl sm:text-6xl font-semibold">
              85%
            </div>
            <p className="mt-3 text-base sm:text-lg text-black/80 leading-relaxed">
              Delivering Eco-Friendly <br className="hidden sm:block" />
              Projects
            </p>
          </div>

          {/* Stat 2 */}
          <div className="md:col-span-1">
            <div className="text-[#c8a47e] text-5xl sm:text-6xl font-semibold">
              45+
            </div>
            <p className="mt-3 text-base sm:text-lg text-black/80 leading-relaxed">
              Industry Awards And <br className="hidden sm:block" />
              Accolades
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitecturalStatsSection;
