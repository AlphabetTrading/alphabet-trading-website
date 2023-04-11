import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ProductAvailabilityChip, {
  AVAILABILITY,
} from "../common/AvailabilityChip";
import CustomCheckbox from "../common/CustomCheckbox";
import {
  IOfferingRequest,
  useOfferingsContext,
} from "../../context/OfferingsContext";
import { ViewTypeEnum } from "./Offerings";

type Props = {
  viewType: ViewTypeEnum;
  offering: IOfferingRequest;
  handleOfferingCheck: (offering: IOfferingRequest) => void;
};

const OfferingsItem = ({ offering, handleOfferingCheck }: Props) => {
  const [error, setError] = useState(false);
  return (
    <>
      <div className="hidden md:grid md:grid-cols-12 w-full md:w-5/6 2k:w-2/3 4k:w-1/2 gap-x-1 px-2 items-center bg-white text-sm lg:text-md text-[#565656] rounded-lg shadow-xl font-semibold">
        <div className="md:col-span-2 flex justify-around items-center py-3 2k:py-6 4k:py-10">
          <CustomCheckbox
            isChecked={offering.isSelected}
            handleOfferingCheck={() => {
              if (offering.availability !== AVAILABILITY.AVAILABLE) {
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 2000);
              } else {
                handleOfferingCheck(offering);
              }
            }}
          />
          <img
            className="w-10 h-10"
            src="/images/offerings_coffee.svg"
            alt=""
          />
        </div>
        <div className="col-span-3 2k:text-[18px] 4k:text-3xl">
          {offering.type}
        </div>
        <div className="col-span-2 2k:text-[18px] 4k:text-3xl">
          {offering.grade}
        </div>
        <div className="col-span-3 2k:text-[18px] 4k:text-3xl">
          {offering.location}
        </div>
        <div className="col-span-2">
          <ProductAvailabilityChip type={offering.availability} />
        </div>
      </div>
      <div className="block md:hidden w-full">
        <div className="w-full flex flex-col gap-y-2 p-6 pb-10 bg-white text-sm text-[#565656] rounded-lg shadow-xl font-semibold">
          <div className="w-full flex justify-between">
            <CustomCheckbox
              isChecked={offering.isSelected}
              handleOfferingCheck={() => {
                if (offering.availability !== AVAILABILITY.AVAILABLE) {
                  setError(true);
                  setTimeout(() => {
                    setError(false);
                  }, 2000);
                } else {
                  handleOfferingCheck(offering);
                }
              }}
            />
            <ProductAvailabilityChip type={offering.availability} />
          </div>
          <div className="flex gap-x-2">
            <img
              className="w-6 h-6"
              src="/images/offerings_coffee.svg"
              alt=""
            />
            <div>
              <h1 className="text-lg font-bold tracking-wide">
                {offering.type}
              </h1>
              <h1 className="text-[#8B8B8B] text-md font-bold">
                Grade: <span className="font-medium">{offering.grade}</span>
              </h1>
              <h1 className="text-[#8B8B8B] font-bold">
                Location:{" "}
                <span className="font-medium">{offering.location}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {error && offering.availability && (
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
            exit={{
              x: -100,
              opacity: 0,
              transition: { duration: 0.6 },
            }}
            className="w-full md:w-5/6 2k:w-3/5 4k:w-1/2 px-2 items-center text-sm lg:text-md text-[#565656] font-semibold"
          >
            <h1 className="self-start text-red-500 2k:text-xl 4k:text-2xl">
              Item is currently not available
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfferingsItem;
