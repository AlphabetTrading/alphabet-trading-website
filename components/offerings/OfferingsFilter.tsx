import React, { useEffect, useState } from "react";
import clsx from "clsx";
import GetSVG from "../common/GetSVG";
import MultiRangeSlider from "./MultiRangeSlider";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import GradeFilter from "./GradeFilter";
import ProcessFilter from "./ProcessFilter";
import Button from "../common/Button";
import OriginFilter from "./OriginFilter";
import OfferingsSearchbar from "./OfferingsSearchbar";

type Props = {
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    bagsRange?: [number, number];
    process?: string[];
    origin?: Set<string>;
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      bagsRange?: [number, number];
      process?: string[];
      origin?: Set<string>;
    }>
  >;
};

// const CheckboxItem = () => {
//   const [isChecked, setIsChecked] = useState(false);
// };

const OfferingsFilter = ({ setFilterBy, filterBy }: Props) => {
  return (
    <aside className="flex flex-col px-2 gap-y-4 w-full">
      <div className="md:hidden w-full">
        <OfferingsSearchbar
          onChange={(query) =>
            setFilterBy((prev) => ({ ...prev, query: query }))
          }
        />
      </div>
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-medium">Filters</h3>
        <Button
          onClick={() => {
            setFilterBy({});
          }}
          text="Reset All"
          classname="text-secondary font-semibold"
        ></Button>
      </div>
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm">GRADE</h6>
        <GradeFilter setFilterBy={setFilterBy} filterBy={filterBy} />
      </div>
      {/* <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm">PRICE RANGE</h6>
        <MultiRangeSlider
          max={6}
          min={0}
          step={0.25}
          onChange={setValues}
          unit="lbs"
          // values={values}
        />
      </div> */}
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm uppercase">
          Process
        </h6>
        <ProcessFilter setFilterBy={setFilterBy} filterBy={filterBy} />
      </div>
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm uppercase">
          quantity
        </h6>
        <MultiRangeSlider
          max={980}
          min={0}
          step={1}
          setFilterBy={setFilterBy}
          filterBy={filterBy}
          // step={0.05}
          // onChange={(min: number, max: number) => {
          //   setFilterBy((prev) => ({ ...prev, bagsRange: [min, max] }));
          // }}
          unit="bags"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm uppercase">origin</h6>
        <OriginFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>
    </aside>
  );
};

export default OfferingsFilter;
