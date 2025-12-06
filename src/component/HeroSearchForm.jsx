import React, { useState } from "react";
import StaySearchForm from "./StaySearchForm";

const HeroSearchForm = ({ className = "", currentTab = "The Farm Retreat" }) => {
  const tabs = ["The Farm Retreat", "Chetinadu Farms", "Safari Farms"];
  const [tabActive, setTabActive] = useState(currentTab);

  return (
    <div className={`w-full max-w-6xl py-5 lg:py-1 ${className}`}>
      {/* TABS */}
      <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              key={tab}
              onClick={() => setTabActive(tab)}
              className={`flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                active
                  ? "text-gray-100"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {active && (
                <span className="block w-2.5 h-2.5 rounded-full bg-white mr-2" />
              )}
              {tab}
            </li>
          );
        })}
      </ul>

      {/* FORM CONTENT */}
      <div className="mt-2">
        {tabActive === "The Farm Retreat" && <StaySearchForm />}
        {tabActive === "Chetinadu Farms" && <StaySearchForm />}
        {tabActive === "Safari Farms" && <StaySearchForm />}
      </div>
    </div>
  );
};

export default HeroSearchForm;
