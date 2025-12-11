import React from "react";
import StayHeaderGallery from "../component/StayHeaderGallery";
import Navigation from "../component/Navigation";
import BookingPage from "../component/BookingPage";
import StayReview from "../component/StayReview";

export default function StaylistPage() {
  return (
    <div className="px-5">
      {/* <Navigation /> */}
      <StayHeaderGallery />
      <BookingPage/>
      <StayReview/>
    </div>
  );
}
