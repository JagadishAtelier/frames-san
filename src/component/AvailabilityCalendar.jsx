import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DatePickerCustomHeaderTwoMonth from "./DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "./DatePickerCustomDay";

export default function AvailabilityCalendar() {
  const [startDate, setStartDate] = useState(() => {
      const today = new Date();
      return today;
    });
  
    const [endDate, setEndDate] = useState(() => {
      const today = new Date();
      const fiveDaysLater = new Date();
      fiveDaysLater.setDate(today.getDate() + 5);
      return fiveDaysLater;
    });

  const onChangeDates = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const availableRooms = [
    "Deluxe Room – 2 Guests",
    "Family Suite – 4 Guests",
    "Private Villa – 6 Guests",
    "Standard Room – 2 Guests",
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-900">Availability</h2>
      <p className="text-gray-500 mt-1 mb-6">
        Prices may increase on weekends or holidays
      </p>

      <div className="w-full h-px bg-gray-200 mb-8"></div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Calendar */}
        <div className="lg:col-span-1">

          <DatePicker
            selected={startDate}
            onChange={onChangeDates}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            monthsShown={1}
            inline
            calendarClassName="!border-none !shadow-none"
            renderCustomHeader={(props) => (
              <DatePickerCustomHeaderTwoMonth {...props} />
            )}
            renderDayContents={(day, date) => (
              <DatePickerCustomDay dayOfMonth={day} date={date} />
            )}
          />

        </div>

        {/* Available Rooms */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Available Rooms
          </h3>

          {startDate && endDate ? (
            <ul className="space-y-3">
              {availableRooms.map((room, idx) => (
                <li
                  key={idx}
                  className="border border-gray-200 rounded-xl p-4 text-sm text-gray-700 shadow-sm"
                >
                  {room}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">
              Select a date range to view available rooms.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
