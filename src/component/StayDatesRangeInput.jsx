import React, { Fragment, useState } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DatePickerCustomHeaderTwoMonth from "./DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "./DatePickerCustomDay";

const StayDatesRangeInput = ({ className = "", fieldClassName = "" }) => {
  const [startDate, setStartDate] = useState(new Date("2023/02/06"));
  const [endDate, setEndDate] = useState(new Date("2023/02/23"));

  const onChangeDates = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Popover className={`relative flex ${className}`}>
      {() => (
        <>
          {/* BUTTON */}
          <PopoverButton
            className={`flex-1 flex items-center gap-3 px-8 py-3 cursor-pointer outline-0 ${fieldClassName}`}
          >
            <CalendarIcon className="w-6 h-6 text-neutral-500" />
            <div className="text-left">
              <div className="font-semibold">
                {startDate?.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })}
                {" - "}
                {endDate?.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })}
              </div>
              <div className="text-xs text-neutral-400">
                Check in – Check out
              </div>
            </div>
          </PopoverButton>

          {/* PANEL */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <PopoverPanel className="absolute z-20 left-1/2 top-full -translate-x-1/2 mt-3 w-screen max-w-xl px-4">
              <div className="rounded-3xl bg-white shadow-xl p-6">
                <DatePicker
                  selected={startDate}
                  onChange={onChangeDates}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  monthsShown={2}
                  inline
                  renderCustomHeader={(p) => (
                    <DatePickerCustomHeaderTwoMonth {...p} />
                  )}
                  renderDayContents={(day, date) => (
                    <DatePickerCustomDay dayOfMonth={day} date={date} />
                  )}
                />
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default StayDatesRangeInput;
