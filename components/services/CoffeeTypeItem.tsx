import clsx from "clsx";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  index: number;
  coffeeType: any;
};

const CoffeeTypeItem = ({ index, coffeeType }: Props) => {
  return (
    <div
      className={clsx(
        "flex",
        index % 2 == 0
          ? "bg-secondary/20 text-primary"
          : "bg-primary flex-row-reverse w-full text-white"
      )}
    >
      <div className="w-1/2">
        <img src={coffeeType.imgSrc} alt="" />
      </div>
      <div className="w-1/2 flex items-center p-24 gap-x-2">
        <div className="text-center">
          <h1
            style={{ writingMode: "vertical-rl" }}
            className="text-center text-3xl rotate-180 font-DM_Serif font-medium capitalize"
          >
            {coffeeType.name}
          </h1>
        </div>
        <div
          className={clsx(
            "flex flex-col flex-1 items-start border-l-2",
            index % 2 == 0 ? "border-primary" : "border-white"
          )}
        >
          <div className="flex flex-col items-start gap-y-4 p-2 px-4">
            <p>{coffeeType.description}</p>
            <div
              className={clsx(
                "flex items-center border",
                index % 2 == 0 ? "border-primary" : "border-white"
              )}
            >
              <button className="p-2 px-3 font-semibold">See Offerings</button>
              <FaChevronRight className="pr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTypeItem;
