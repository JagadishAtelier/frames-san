import React, { useState, Fragment } from "react";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { UserPlusIcon } from "@heroicons/react/24/outline";

export default function GuestsInput({ className }) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);

  const total = adults + children + infants;

  return (
    <Popover className={`relative self-end flex ${className}`}>
      {({ open }) => (
        <>
          <PopoverButton
            className={`flex-1 flex items-center px-6 py-4 space-x-3 outline-0 ${
              open ? "ring-2 ring-black/40" : ""
            }`}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
                <UserPlusIcon className="w-5 h-5 lg:w-7 lg:h-7" />
              </div>
            <div>
              <div className="font-semibold">{total} Guests</div>
              <span className="text-neutral-400 text-xs">Add guests</span>
            </div>
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
          >
            <PopoverPanel className="absolute right-0 top-full mt-2 bg-white shadow-xl rounded-xl p-4 w-64 z-50">
              {[
                ["Adults", adults, setAdults],
                ["Children", children, setChildren],
                ["Infants", infants, setInfants],
              ].map(([label, val, setVal]) => (
                <div key={label} className="flex justify-between items-center py-3">
                  <span>{label}</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setVal(Math.max(0, val - 1))}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{val}</span>
                    <button
                      onClick={() => setVal(val + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
