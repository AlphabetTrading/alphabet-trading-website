import clsx from "clsx";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  index: number;
  title: string;
  descriptions: string[];
  imageSrc: string;
};

const DetailItem = ({ index, title, descriptions, imageSrc }: Props) => {
  return (
    <div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center p-2 sm:p-8 md:p-12 lg:gap-x-8",
          index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        <div className="bg-[#086965]/20 w-4/5 h-64  md:w-1/3 lg:w-1/4 md:h-96 rounded-lg relative mb-20">
          <div className="bg-white w-full h-64 md:h-96 rounded-lg absolute z-10 top-3 left-3 sm:top-8 sm:left-8 md:top-12 md:left-12">
            <img
              className="object-cover rounded-lg w-full h-full"
              src={imageSrc}
              alt=""
            />
          </div>
        </div>
        <div
          className={clsx(
            "w-full lg:w-1/2 flex flex-col items-center md:mx-12 gap-y-4",
            index % 2 == 0 ? "lg:items-start" : "lg:items-end"
          )}
        >
          <h1 className="text-2xl text-center md:text-3xl font-semibold">
            {title}
          </h1>
          {descriptions?.map((description: string, index2: number) => {
            return (
              <h3
                className={clsx(
                  "text-sm md:text-lg leading-5 md:leading-6 font-medium text-center",
                  index % 2 == 1 ? "md:text-end" : " md:text-start"
                )}
                key={index2}
              >
                {description}
              </h3>
            );
          })}
          <div className="flex items-center mt-5 text-secondary gap-x-2">
            <button className="text-lg ">Read More</button>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
