import clsx from "clsx";
import Image from "next/image";
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
          "flex flex-col items-center justify-center p-2 sm:p-8 md:p-12 gap-8 ",
          index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        <div className="bg-[#086965]/20 w-3/5 md:w-2/5 lg:w-[30%] xl:w-1/4 2k:w-1/5 4k:w-1/6 h-[20rem] lg:h-96 2xl:h-[420px] 2k:h-[480px] 4k:h-[760px] rounded-lg relative mb-1 lg:mb-5 aspect-4/3 lg:aspect-square">
          <div className="bg-white w-full h-[20rem] lg:h-96 xl:h-[400px] 2xl:h-[420px] 2k:h-[480px] 4k:h-[760px] rounded-lg absolute z-10 top-0 left-0 lg:top-12 lg:left-12">
            <Image
              fill
              className="object-cover rounded-lg w-full h-full"
              src={imageSrc}
              alt="detail item"
            />
          </div>
        </div>
        <div
          className={clsx(
            "w-full lg:w-1/2 flex flex-col items-center md:mx-12 gap-y-2",
            index % 2 == 0 ? "lg:items-start" : "lg:items-end"
          )}
        >
          <h1 className="strokeOpacity">{title}</h1>
          {descriptions?.map((description: string, index2: number) => {
            return (
              <h2
                className={clsx(
                  "text-sm md:text-lg 2k:text-xl 4k:text-2xl w-4/5 2k:w-3/4 4k:w-2/3 leading-5 md:leading-6 font-medium text-center",
                  index % 2 == 1 ? "lg:text-end" : " lg:text-start"
                )}
                key={index2}
              >
                {description}
              </h2>
            );
          })}
          {/* <div className="flex items-center mt-4 text-secondary gap-x-2">
            <button className="text-lg ">Read More</button>
            <FaChevronRight />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
