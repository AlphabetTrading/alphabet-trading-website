import clsx from "clsx";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export enum AVAILABILITY {
  AVAILABLE = "Available",
  NOT_AVAILABLE = "Not Available",
}

type Props = {
  type: string;
};

const ProductAvailabilityChip = ({ type }: Props) => {
  const getAvailability = () => {
    switch (type) {
      case AVAILABILITY.AVAILABLE:
        return (
          <span className="flex items-center gap-x-1">
            <GiCheckMark size={18} />
            <h1 className="text-md 2k:text-[18px] 4k:text-2xl tracking-wide font-normal">
              Available
            </h1>
          </span>
        );
      case AVAILABILITY.NOT_AVAILABLE:
        return (
          <span className="flex items-center gap-x-1">
            <IoMdClose size={18} />
            <h1 className="text-md 2k:text-[18px] 4k:text-2xl tracking-wide font-normal text-start">
              Not Available
            </h1>
          </span>
        );
    }
  };
  return (
    <span
      className={clsx(
        "py-1 leading-wide text-sm text-center",
        type === AVAILABILITY.AVAILABLE ? "text-secondary" : "",
        type === AVAILABILITY.NOT_AVAILABLE ? "text-[#A1A1A1]" : ""
      )}
    >
      {getAvailability()}
    </span>
  );
};

export default ProductAvailabilityChip;
