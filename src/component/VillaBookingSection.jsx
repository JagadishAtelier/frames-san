export default function VillaBookingSection() {
  return (
    <section className="relative px-5 overflow-hidden mt-10">
      <div className="w-full h-[70vh] sm:h-screen rounded-3xl relative">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/form-bg.webp"
            alt="Villa"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between py-8 sm:py-20 px-16 h-full gap-2 sm:gap-10">

          {/* LEFT SIDE TEXT */}
          <div className="text-white max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Come As You Are And We Will Take Care Of The Rest
            </h2>
          </div>

          {/* RIGHT SIDE FORM CARD */}
          <div className="mt-10 md:mt-0">
            <div className="w-[360px] md:w-[420px] bg-white/30 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <h3 className="text-center text-white text-xl font-semibold mb-6">
                See Available Villas
              </h3>

              {/* FORM */}
              <form className="space-y-6">

                {/* ARRIVAL + DEPARTURE */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Arrival */}
                  <div>
                    <label className="text-white text-sm mb-1 block">
                      ARRIVAL
                    </label>
                    <select className="w-full bg-white/90 text-black px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#FFC299] transition">
                      <option>30 Apr</option>
                      <option>03 May</option>
                      <option>08 May</option>
                    </select>
                  </div>

                  {/* Departure */}
                  <div>
                    <label className="text-white text-sm mb-1 block">
                      DEPARTURE
                    </label>
                    <select className="w-full bg-white/90 text-black px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#FFC299] transition">
                      <option>04 May</option>
                      <option>08 May</option>
                      <option>12 May</option>
                    </select>
                  </div>
                </div>

                {/* GUESTS */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Adults */}
                  <div>
                    <label className="text-white text-sm mb-1 block">Adults</label>
                    <select className="w-full bg-white/90 text-black px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#FFC299] transition">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3–5 Adults</option>
                    </select>
                  </div>

                  {/* Children */}
                  <div>
                    <label className="text-white text-sm mb-1 block">Children</label>
                    <select className="w-full bg-white/90 text-black px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#FFC299] transition">
                      <option>1 Child</option>
                      <option>2 Children</option>
                      <option>No Children</option>
                    </select>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#FFC299] hover:bg-[#ffb47d] transition text-black font-medium py-3 rounded-full"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
