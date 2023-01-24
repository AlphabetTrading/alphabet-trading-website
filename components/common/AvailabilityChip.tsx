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
          <span className="flex  items-center gap-x-1">
            <GiCheckMark />
            <h1 className="text-md tracking-wide font-normal">Available</h1>
          </span>
        );
      case AVAILABILITY.NOT_AVAILABLE:
        return (
          <span className="flex items-center gap-x-1">
            <IoMdClose />
            <h1 className="text-md tracking-wide font-normal text-start">
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
