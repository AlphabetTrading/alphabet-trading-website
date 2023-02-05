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
          "flex flex-col items-center justify-center",
          index % 2 == 0
            ? "lg:flex-row gap-[4.5rem]"
            : "lg:flex-row-reverse gap-[3rem]"
        )}
      >
        <div className="bg-[#086965]/20 w-3/5 md:w-[45%] lg:w-[30%] xl:w-1/4 2k:w-1/5 4k:w-1/6 h-[20rem] lg:h-96 xl:h-[440px] 2xl:h-[500px] 2k:h-[580px] 4k:h-[700px] rounded-[2rem] relative mb-[2rem] aspect-4/3 lg:aspect-square">
          <div className="bg-white w-full h-[24rem] lg:h-96 xl:h-[440px] 2xl:h-[500px] 2k:h-[580px] 4k:h-[700px] rounded-[2rem] absolute z-10 top-0 left-0 lg:top-12 lg:left-12 2k:left-16 2k:top-16">
            <Image
              fill
              className="object-cover rounded-[2rem] w-full h-full"
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
          <h1 className="strokeOpacity text-2xl text-center md:text-3xl xl:text-[40px] 4k:text-5xl font-bold mb-[0.75rem]">
            {title}
          </h1>
          {descriptions?.map((description: string, index2: number) => {
            return (
              <h2
                className={clsx(
                  "text-sm md:text-lg 2k:text-xl 4k:text-2xl w-4/5 2k:w-3/4 4k:w-2/3 leading-5 md:leading-6 mb-[0.5rem] font-medium text-center",
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
