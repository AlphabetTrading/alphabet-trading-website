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
import clsx from "clsx";

type Props = {
  index: number;
  viewType: ViewTypeEnum;
  offering: IOfferingRequest;
  handleOfferingCheck: (offering: IOfferingRequest) => void;
};

const OfferingsItem = ({ offering, handleOfferingCheck, index }: Props) => {
  const [error, setError] = useState(false);
  return (
    <motion.li
      initial={{
        scale: 0,
        translateX: index % 2 == 0 ? "-100px" : "100px",
      }}
      animate={{ scale: 1, translateX: "0px" }}
      exit={{
        scale: 0,
        translateX: index % 2 == 1 ? "100px" : "-100px",
      }}
      layout
      className="list-none w-full flex flex-col items-center justify-center "
    >
      <div className="bg-white hidden lg:grid lg:grid-cols-12 w-full gap-x-1 px-2 items-center justify-start text-sm lg:text-md text-[#565656] font-semibold border-b-[1px]">
        <div className="col-span-2 flex justify-around items-center py-3 2k:py-6 4k:py-1 ">
          <CustomCheckbox
            isChecked={offering.isSelected}
            handleOfferingCheck={() => {
              if (offering.quantity === 0) {
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 2000);
              } else {
                handleOfferingCheck(offering);
              }
            }}
          />
          <img className="h-20" src="/images/offerings_coffee.png" alt="" />
        </div>
        <div className="col-span-3 2k:text-[18px] 4k:text-3xl">
          <div>
            <h1 className={clsx("text-secondary uppercase text-xs font-bold")}>
              Current Crop
            </h1>
            <h1 className={clsx("text-base")}>{offering.type}</h1>
          </div>
        </div>
        <div className="flex justify-center col-span-1 2k:text-[18px] 4k:text-3xl">
          {offering.grade}
        </div>
        <div className="flex justify-center col-span-2">
          <div
            className={clsx(
              "flex items-center justify-center w-1/2 rounded-3xl p-1",
              offering.quantity > 0 ? "bg-secondary/10" : "bg-[#515151]/20"
            )}
          >
            <h1
              className={clsx(
                "text-center",
                offering.quantity > 0 ? "text-secondary" : "text-[#515151]"
              )}
            >
              {offering.quantity} bags
            </h1>
          </div>
        </div>
        <div className="flex justify-center col-span-1 2k:text-[18px] 4k:text-3xl">
          AA
        </div>
        <div className="flex justify-center col-span-3 2k:text-[18px] 4k:text-3xl">
          {offering.location}
        </div>
      </div>

      <div className="block lg:hidden w-full">
        <div className="w-full flex p-2 py-4 gap-x-1 text-sm text-[#565656] rounded-lg font-semibold border-b-[1px]">
          <div className="w-5">
            <CustomCheckbox
              isChecked={offering.isSelected}
              handleOfferingCheck={() => {
                if (offering.quantity === 0) {
                  setError(true);
                  setTimeout(() => {
                    setError(false);
                  }, 2000);
                } else {
                  handleOfferingCheck(offering);
                }
              }}
            />
          </div>

          <img
            className="h-[75px] "
            src="/images/offerings_coffee_2.png"
            alt=""
          />

          <div className="w-full flex flex-col gap-y-1 -ml-3">
            <div>
              <h1
                className={clsx("text-secondary uppercase text-xs font-bold")}
              >
                Current Crop
              </h1>
              <h1 className={clsx("text-base font-semibold")}>
                {offering.type}
              </h1>
            </div>
            {/* <h1 className="font-semibold text-lg">{offering.type}</h1> */}
            <div className="flex justify-between">
              <div className="w-full">
                <h1 className="text-[#9D9D9D]">{offering.location}</h1>
                <h1 className="text-[#9D9D9D]">Spot - AA</h1>
                <h1 className="text-[#9D9D9D]">
                  Grade - {offering.grade.split("-")[1]}
                </h1>
              </div>
              <div
                className={clsx(
                  "w-24 flex justify-center self-center rounded-3xl p-1 px-2 text-xs font-medium",
                  offering.quantity > 0 ? "bg-secondary/10" : "bg-[#515151]/20"
                )}
              >
                <h1
                  className={
                    offering.quantity > 0 ? "text-secondary" : "text-[#515151]"
                  }
                >
                  {offering.quantity} bags
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {error && offering.quantity === 0 && (
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
            className="w-full md:w-5/6 2k:w-3/5 4k:w-1/2 p-2 items-center text-sm lg:text-md text-[#565656] font-semibold"
          >
            <h1 className="self-start text-red-500 2k:text-xl 4k:text-2xl">
              Item is currently not available
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default OfferingsItem;
