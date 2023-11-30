import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  handleOfferingCheck: () => void;
  isChecked: boolean;
};

const CustomCheckbox = ({ handleOfferingCheck, isChecked }: Props) => {
  return (
    <div
      className={clsx(
        "relative w-4 h-4 2k:w-6 2k:h-6 4k:w-8 4k:h-8 p-[2px] 4k:p-[3px] rounded-[4px] border",
        isChecked ? "border-[#F2A40C]" : "border-[#C9C9C9]"
      )}
    >
      <label className="flex justify-center items-center rounded-sm cursor-pointer">
        <input
          type="checkbox"
          className="invisible absolute whitespace-nowrap overflow-hidden"
          onChange={handleOfferingCheck}
        />
        <svg
          className={clsx(
            "h-full w-full rounded-sm",
            isChecked ? "bg-[#F2A40C] border border-[#F2A40C]" : "bg-white"
          )}
          aria-hidden
          viewBox="-2-3 12 12"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33441 0C5.22016 1.17456 3.07991 4.51575 3.07991 4.51575L1.14858 2.32319L0 3.41944L2.79269 6.89087L3.81066 6.85175C5.11584 2.93628 8 0.313234 8 0.313234L7.33441 0Z"
            strokeWidth={0.5}
            stroke={isChecked ? "#fff" : "none"}
          />
        </svg>

        {/* <svg
        className={clsx(
          "inline-block h-5 w-5 border-2 mr-2 rounded-full",
          isChecked
            ? "bg-green-500 border-green-200"
            : "bg-white border-gray-200 "
        )}
        aria-hidden
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth={2}
          stroke={isChecked ? "fff" : "none"}
        />
      </svg> */}
        {/* <span
        className={clsx(
          "inline-block h-5 w-5 border-2 mr-2 rounded-full",
          isChecked
            ? "bg-green-500 border-green-200"
            : "bg-white border-gray-200 "
        )}
        aria-hidden
      ></span> */}
      </label>
    </div>
  );
};

export default CustomCheckbox;
