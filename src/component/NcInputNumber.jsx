import React, { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

const NcInputNumber = ({
  className = "w-full",
  defaultValue = 0,
  min = 0,
  max,
  onChange,
  label,
  desc,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => setValue(defaultValue), [defaultValue]);

  const decrement = () => {
    if (value <= min) return;
    const newValue = value - 1;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const increment = () => {
    if (max && value >= max) return;
    const newValue = value + 1;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className={`flex justify-between items-center ${className}`}>
      {/* LABEL */}
      {label && (
        <div className="flex flex-col">
          <span className="font-medium">{label}</span>
          {desc && <span className="text-xs text-neutral-500">{desc}</span>}
        </div>
      )}

      {/* BUTTONS */}
      <div className="flex items-center w-28 justify-between">
        <button
          className="w-8 h-8 rounded-full border flex items-center justify-center hover:border-neutral-700 disabled:opacity-40"
          onClick={decrement}
          disabled={value <= min}
        >
          <MinusIcon className="w-4 h-4" />
        </button>

        <span>{value}</span>

        <button
          className="w-8 h-8 rounded-full border flex items-center justify-center hover:border-neutral-700 disabled:opacity-40"
          onClick={increment}
          disabled={max ? value >= max : false}
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NcInputNumber;
