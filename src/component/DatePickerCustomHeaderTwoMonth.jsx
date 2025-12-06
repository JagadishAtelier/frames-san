import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const DatePickerCustomHeaderTwoMonth = ({
  monthDate,
  customHeaderCount,
  decreaseMonth,
  increaseMonth,
}) => {
  return (
    <div className="relative flex items-center justify-center py-2">
      {/* PREV BUTTON */}
      <button
        aria-label="Previous Month"
        className="absolute left-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        style={customHeaderCount === 1 ? { visibility: "hidden" } : {}}
        onClick={decreaseMonth}
        type="button"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* CURRENT MONTH */}
      <span className="text-base font-medium">
        {monthDate.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </span>

      {/* NEXT BUTTON */}
      <button
        aria-label="Next Month"
        className="absolute right-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        style={customHeaderCount === 0 ? { visibility: "hidden" } : {}}
        onClick={increaseMonth}
        type="button"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default DatePickerCustomHeaderTwoMonth;
