import React, { useLayoutEffect } from "react";
import Bookingform from "./Bookingform";
import { Heart, Share2, Users, Bed, Bath, Home } from "lucide-react";
import Stayinfosection from "./Stayinfosection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AmenitiesSection from "./AmenitiesSection";
import AvailabilityCalendar from "./AvailabilityCalendar";
import { useParams } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function BookingPage() {
    const { name } = useParams();

  useLayoutEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".booking-box",
      start: "top top+=120",      // start pinning 120px from top
      end: "bottom+=2000 bottom",  // stop earlier (controls total pin height)
      pin: true,
      pinSpacing: true,
      markers: false,
    });

    return () => {
      trigger.kill();
    };
  }, []);


  return (
    <div className="min-h-screen relative bg-white p-6 mt-20 page-end">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hotel Info Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col gap-4">
            {/* Top Row */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-[13px] font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                Entire cabin
              </span>

              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <Heart size={18} className="text-gray-700" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <Share2 size={18} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-[26px] leading-tight font-semibold text-gray-900 mb-3">
                {decodeURIComponent(name)}
              </h2>

              {/* Rating & Location */}
              <div className="flex items-center gap-2 text-[15px] text-gray-600 mb-5">
                <div className="flex items-center gap-1 font-medium text-gray-700">
                  <span className="text-yellow-500">★</span> 4.8{" "}
                  <span className="text-gray-500">(28)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">1 Anzinger Court</span>
              </div>
            </div>

            {/* Host */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://chisfis-nextjs.vercel.app/_next/static/media/Image-1.c5212ae4.png"
                alt="host"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-[15px] text-gray-700">
                Contact Person <span className="font-semibold">Kumareshan</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-5 gap-4 text-[15px] text-gray-700">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Users size={22} />
                </div>{" "}
                6 guests
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Bed size={22} />
                </div>{" "}
                5 beds
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Bath size={22} />
                </div>{" "}
                3 baths
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Home size={22} />
                </div>{" "}
                10 bedrooms
              </div>
            </div>
          </div>

          {/* Stay Information */}
          <Stayinfosection />

          {/* Aminities */}
          <AmenitiesSection/>

          {/* Availability calender */}
          <AvailabilityCalendar/>
        </div>

        {/* RIGHT BOOKING FORM */}
        <div className="lg:col-span-1">
          <div className="booking-box">
            <Bookingform />
          </div>
        </div>
      </div>
    </div>
  );
}
