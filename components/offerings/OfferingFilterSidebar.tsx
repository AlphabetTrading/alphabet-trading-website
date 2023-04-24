import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import OfferingsFilter from "./OfferingsFilter";
import clsx from "clsx";

type Props = {
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: string[];
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      process?: string[];
      origin?: string[];
    }>
  >;
};

const OfferingFilterSidebar = ({ filterBy, setFilterBy }: Props) => {
  return (
    <div
      className={clsx(
        "hidden md:flex w-1/5  overflow-hidden transition-all duration-500 ease-in-out"
      )}
    >
      {" "}
      <OfferingsFilter filterBy={filterBy} setFilterBy={setFilterBy} />
    </div>
  );
};

export default OfferingFilterSidebar;
