import React, { useState } from "react";
import {
  CheckCircle2,
  Star,
  Calendar,
  MessageSquare,
  Clock,
  Share2,
  SendHorizontal,
  Flag,
} from "lucide-react";
import { useParams } from "react-router-dom";

const reviewsData = [
    {
        id: 1,
        name: "Rishika M",
        date: "May 11, 2025",
        rating: 4,
        avatar: "https://i.pravatar.cc/40?img=30",
        message:
            "Excellent place. The host is super friendly, the room is clean and quiet.",
    },
    {
        id: 2,
        name: "Merlin Soundarya",
        date: "Aug 22, 2025",
        rating: 5,
        avatar: "https://i.pravatar.cc/40?img=47",
        message:
            "Very nice and friendly lady. Be pleasant to talk with her. The room looks better than in the pictures.",
    },
    {
        id: 3,
        name: "Gokum Karthik",
        date: "Jan 15, 2025",
        rating: 5,
        avatar: "https://i.pravatar.cc/40?img=65",
        message:
            "Amazing experience! The property exceeded all expectations. Highly recommend for a relaxing getaway.",
    },
];

export default function StayReview() {
    const { name } = useParams();
  const [reviews, setReviews] = useState(reviewsData);
  const [input, setInput] = useState("");

  const handleAddReview = () => {
    if (!input.trim()) return;
    const newReview = {
      id: Date.now(),
      name: "You",
      date: new Date().toDateString(),
      rating: 5,
      avatar: "https://i.pravatar.cc/40",
      message: input,
    };
    setReviews([newReview, ...reviews]);
    setInput("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-6">

      {/* LEFT CARD */}
      <div className="col-span-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        
        {/* Profile */}
        <div className="flex items-center gap-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
            className="w-16 h-16 rounded-full object-cover"
            alt="Host"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{decodeURIComponent(name)}</h2>

            <div className="flex items-center gap-1 mt-1 text-gray-700">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">4.8</span>
              <span className="text-gray-400 text-sm">(120)</span>
              <span className="mx-1">·</span>
              <span className="text-sm">15+ Room Types</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 mt-4 text-green-600 font-medium">
          <CheckCircle2 className="w-5 h-5" />
          <span>Hot Booking</span>
          <span className="mx-1 text-gray-400">·</span>
          <span className="text-gray-600">1 years old</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
          accommodation, an outdoor swimming pool, a bar, a shared lounge, a
          garden and barbecue facilities.
        </p>

        {/* Details */}
        <div className="mt-8 space-y-4 text-gray-700">

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gray-500 mt-1" />
            <p>Inclueded from March 2024</p>
          </div>

          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-gray-500 mt-1" />
            <p>Response rate – 95%</p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-500 mt-1" />
            <p>Fast response – within an hour</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50">
            See All Property
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Report */}
        <button className="flex items-center gap-2 mt-10 text-gray-600 hover:underline">
          <Flag className="w-4 h-4" />
          Report if any problem
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="col-span-2">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Reviews ({reviews.length} reviews)
        </h2>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center border border-gray-300 rounded-full px-6 py-3 mb-10">
          <input
            type="text"
            className="flex-1 outline-none text-gray-700"
            placeholder="Share your thoughts ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAddReview}
            className="bg-gray-900 text-white p-3 rounded-full hover:bg-black transition"
          >
            <SendHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Reviews List */}
        <div className="space-y-10">
          {reviews.map((review) => (
            <div key={review.id}>
              <div className="flex justify-between">
                {/* User Details */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={review.name}
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-gray-400 text-sm">{review.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-gray-600">{review.message}</p>

              <hr className="mt-6 border-gray-200" />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <button className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 hover:bg-gray-50">
            View more 20 reviews
          </button>
        </div>
      </div>
    </div>
  );
}
