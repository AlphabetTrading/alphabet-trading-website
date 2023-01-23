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
        "grid grid-cols-1 md:grid-cols-2",
        index % 2 == 0
          ? "bg-secondary/20 text-primary"
          : "bg-primary flex-row-reverse w-full text-white"
      )}
    >
      <div
        className={clsx(
          "h-full",
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        )}
      >
        <img
          src={coffeeType.imgSrc}
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
      <div
        className={clsx(
          "flex  items-center p-6 sm:10 md:p-8 lg:14 xl:p-20 gap-x-2",
          index % 2 === 0 ? "md:order-2" : "md:order-1"
        )}
      >
        <div className="text-center">
          <h1
            style={{ writingMode: "vertical-rl" }}
            className="text-center  text-2xl md:text-3xl rotate-180 font-DM_Serif font-medium capitalize"
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
          <div className="flex flex-col items-start gap-y-4 p-2 md:px-4 leading-5 text-md font-semibold">
            <p>{coffeeType.description}</p>
            <button
              className={clsx(
                "flex items-center border hover:scale-105 transition duration-200 ease-in-out",
                index % 2 == 0 ? "border-primary" : "border-white"
              )}
            >
              <p className="p-2 px-3 font-semibold ">See Offerings</p>
              <FaChevronRight className="pr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTypeItem;
