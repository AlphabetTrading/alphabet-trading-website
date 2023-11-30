import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import OfferingsFilter from "./OfferingsFilter";
import { IoIosClose } from "react-icons/io";

type Props = {
  isFilterOptionOpen: boolean;
  setIsFilterOptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: Set<string>;
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      process?: string[];
      origin?: Set<string>;
    }>
  >;
};

const OfferingsFilterMobile = ({
  filterBy,
  setFilterBy,
  isFilterOptionOpen,
  setIsFilterOptionOpen,
}: Props) => {
  return (
    <AnimatePresence>
      {isFilterOptionOpen && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed lg:hidden bg-white  shadow-xl drop-shadow-lg top-0 right-0 w-full max-w-sm h-screen px-5 py-1 z-[1000] overflow-y-auto"
          >
            <div className="py-5">
              <IoIosClose
                className="w-10 h-10"
                onClick={() => setIsFilterOptionOpen(false)}
              />
            </div>
            <OfferingsFilter filterBy={filterBy} setFilterBy={setFilterBy} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OfferingsFilterMobile;
