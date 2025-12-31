import { useEffect, useRef, useState } from "react";

const skills = [
  "Photography",
  "Videography",
  "Cinematography",
  "Portrait Photography",
  "Wedding Photography",
  "Event Coverage",
  "Product Photography",
  "Commercial Shoots",
  "Lighting Design",
  "Creative Direction",
  "Color Grading",
  "Photo Retouching",
  "Video Editing",
  "Motion Graphics",
  "Drone Videography",
  "Reels & Short Films",
  "Brand Films",
  "Visual Storytelling",
];

export default function SkillsSection() {
  const itemRefs = useRef([]);
  const [opacities, setOpacities] = useState(
    skills.map((_, i) => (i === 0 ? 1 : 0.15))
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      const maxDistance = window.innerHeight / 1.5;

      let closestIndex = 0;
      let closestDistance = Infinity;

      const newOpacities = itemRefs.current.map((el, index) => {
        if (!el) return index === 0 ? 1 : 0.15;

        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - itemCenter);

        // 🔥 Detect active item
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }

        let opacity = 1 - distance / maxDistance;
        return Math.max(0.15, Math.min(1, opacity));
      });

      setOpacities(newOpacities);
      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="border-t border-b border-gray-500 w-fit mx-auto lg:py-20 py-10">
      <div className="px-6 flex gap-7 justify-center">

        {/* LEFT — STICKY */}
        <div className="w-fit">
          <div className="sticky top-1/2 -translate-y-1/2 flex items-center gap-2">
            <p className="text-lg tracking-widest uppercase font-semibold">
              Service
            </p>
            <div className="w-14 h-[2px] bg-red-600" />
          </div>
        </div>

        {/* RIGHT — SCROLLING TEXT */}
        <div className="flex flex-col gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{ opacity: opacities[index] }}
              className="transition-all duration-300"
            >
              <p
                className={`text-2xl md:text-4xl lg:text-[56px] font-light leading-tight
                  ${
                    index === activeIndex
                      ? "text-red-600 font-normal"
                      : "text-gray-900"
                  }
                `}
              >
                {skill}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
