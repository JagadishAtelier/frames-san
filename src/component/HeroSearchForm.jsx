import React, { useState } from "react";
import StaySearchForm from "./StaySearchForm";

const HeroSearchForm = ({
  className = "",
  currentTab = "The Farm Retreat",
}) => {
  const tabs = ["The Farm Retreat", "Chetinadu Farms", "Safari Farms"];
  const [tabActive, setTabActive] = useState(currentTab);

  return (
    <div className={`w-full max-w-6xl py-5 lg:py-3 px-1 ${className}`}>
      <h2 className="text-white mb-3 font-bold text-2xl">Select Your Stay</h2>
      {/* TABS */}
      <ul className=" flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <>
              <li
                key={tab}
                onClick={() => setTabActive(tab)}
                className={`flex items-center cursor-pointer text-sm lg:text-base  ${
                  active
                    ? "text-[#eea159] font-bold bg-white px-3 py-2 rounded-full"
                    : "text-white hover:text-gray-100 animate-pulse font-medium"
                }`}
              >
                {active && (
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#eea159] mr-2" />
                )}
                {tab}
              </li>
            </>
          );
        })}
      </ul>

      {/* FORM CONTENT */}
      <div className="mt-0">
        {tabActive === "The Farm Retreat" && <StaySearchForm />}
        {tabActive === "Chetinadu Farms" && <StaySearchForm />}
        {tabActive === "Safari Farms" && <StaySearchForm />}
      </div>
    </div>
  );
};

export default HeroSearchForm;
