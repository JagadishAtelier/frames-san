import {
  Wifi,
  Volume2,
  Waves,
  MonitorSmartphone,
  Bath,
  ShowerHead,
  SprayCan,
  Cable,
  Camera,
  Headphones,
} from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
    { icon: <Wifi size={20} />, label: "Fast wifi" },
    { icon: <Bath size={20} />, label: "Bathtub" },
    { icon: <Headphones size={20} />, label: "Hair dryer" },
    { icon: <Volume2 size={20} />, label: "Sound system" },
    { icon: <ShowerHead size={20} />, label: "Shampoo" },
    { icon: <SprayCan size={20} />, label: "Body soap" },
    { icon: <Waves size={20} />, label: "Water Energy" },
    { icon: <Waves size={20} />, label: "Water Polo" },
    { icon: <Cable size={20} />, label: "Cable Car" },
    { icon: <MonitorSmartphone size={20} />, label: "Tv Smart" },
    { icon: <Camera size={20} />, label: "Cctv Camera" },
    { icon: <MonitorSmartphone size={20} />, label: "Virtual Reality Vr" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-gray-900">Amenities</h2>
      <p className="text-gray-500 mt-1 mb-6">
        About the property’s amenities and services
      </p>

      {/* Soft Divider */}
      <div className="w-full h-px bg-gray-200 mb-8"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6">
        {amenities.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-700">
            <div className="text-gray-600">{item.icon}</div>
            <span className="text-[15px]">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-gray-200 mt-8 mb-6"></div>

      {/* Button */}
      <button className="border border-gray-300 px-5 py-2 rounded-full text-gray-700 text-[15px] hover:bg-gray-100 transition">
        View more 20 amenities
      </button>
    </div>
  );
}
