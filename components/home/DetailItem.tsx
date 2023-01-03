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
          "flex flex-col items-center justify-center p-12 lg:gap-x-8",
          index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        <div className="bg-[#086965]/20 w-1/3 lg:w-1/4 h-96 rounded-lg relative mb-20">
          <div className="bg-white w-full h-96 rounded-lg absolute z-10 top-12 left-12">
            <img className="rounded-lg w-full h-full" src={imageSrc} alt="" />
          </div>
        </div>
        <div
          className={clsx(
            "lg:w-1/2 flex flex-col items-center mx-64 md:mx-12 gap-y-4",
            index % 2 == 0 ? "lg:items-start" : "lg:items-end"
          )}
        >
          <h1 className="text-3xl font-semibold">{title}</h1>
          {descriptions?.map((description: string, index2: number) => {
            return (
              <h3
                className={clsx("text-lg", index % 2 == 1 ? "text-end" : "")}
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
