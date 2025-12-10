import React from "react";
import LocationInput from "./LocationInput";
import GuestsInput from "./GuestsInput";
import StayDatesRangeInput from "./StayDatesRangeInput";

const StaySearchForm = () => {
  return (
    <form className="w-full mt-4 flex rounded-xl shadow-xl bg-white">
      {/* <LocationInput className="flex-[1.5]" />
      <div className="self-center border-r border-slate-200 h-8"></div> */}
      <StayDatesRangeInput className="flex-[1.5]" />
      <div className="self-center border-r border-slate-200 h-8"></div>
      <GuestsInput className="flex-[1.5]" />
    </form>
  );
};

export default StaySearchForm;
