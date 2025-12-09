import React from "react";
import { MapPin, Phone, CalendarDays } from "lucide-react";

export default function RestaurantResortSection() {
  return (
    <section className="w-full relative pb-10">
      <div className="absolute inset-0 pointer-events-none ">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(0 65 255 /50%) 1px, #ffffff 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Restaurants & Resorts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium dining and luxurious stay options crafted to give
            you unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition p-5">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="resort"
              className="w-full h-56 object-cover rounded-xl"
            />
            <h3 className="text-2xl font-semibold mt-5">
              Lakeview Nature Resort
            </h3>
            <p className="text-gray-600 mt-2">
              A peaceful getaway surrounded by greenery and lakeside views.
              Perfect for family & couple retreats.
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Coimbatore, Tamil Nadu
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={18} /> Call for Booking
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition p-5">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
              alt="restaurant"
              className="w-full h-56 object-cover rounded-xl"
            />
            <h3 className="text-2xl font-semibold mt-5">
              Spice Garden Restaurant
            </h3>
            <p className="text-gray-600 mt-2">
              Authentic South Indian flavors with premium ambience for friends,
              family, corprate celebrations.
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Coimbatore
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} /> +91 99887 66554
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={18} /> Open Daily
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition p-5">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="villa resort"
              className="w-full h-56 object-cover rounded-xl"
            />
            <h3 className="text-2xl font-semibold mt-5">
              Signature Hilltop Villas
            </h3>
            <p className="text-gray-600 mt-2">
              Luxury villa stay with private pool, premium dining & scenic
              hilltop sunrise views with sunrise cafe.
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Coimbatore
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} /> +91 91234 56789
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays size={18} /> Limited Slots
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
