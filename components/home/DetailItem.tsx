"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

type Props = {
  index: number;
  title: string;
  descriptions: string[];
  imageSrc: string;
};

const DetailItem = ({ index, title, descriptions, imageSrc }: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-10 lg:flex-row items-center justify-center px-2"
      )}
    >
      <div className="bg-white w-11/12 lg:w-1/2 md:h-[24rem] rounded-[2rem]  z-20 relative aspect-4/3 lg:aspect-square">
        <ImageWithSkeleton
          props={{
            fill: true,
          }}
          className="object-cover rounded-[2rem] w-full h-full"
          src={imageSrc}
          alt="detail item"
        />
        <div className="bg-[#1C2131] w-full md:h-[24rem] rounded-[2rem] -z-20 absolute mb-[2rem] top-6 right-6 lg:top-12 lg:right-12 2k:right-16 2k:top-16 "></div>
      </div>

      <div
        className={clsx(
          " bg-[#1C2131] w-full lg:w-1/2 flex flex-col items-center z-30 gap-y-2 text-white rounded-[2rem] lg:-ml-14"
        )}
      >
        <div className="w-10/12 py-10">
          <h1 className="title strokeOpacity text-2xl text-start md:text-2xl xl:text-3xl 4k:text-5xl font-bold mb-[0.75rem]">
            {title}
          </h1>
          {descriptions?.map((description: string, index2: number) => {
            return (
              <h2
                className={clsx(
                  "text-sm md:text-base 2k:text-xl 4k:text-2xl w-full leading-5 md:leading-6 mb-[0.5rem] font-light text-start"
                )}
                key={index2}
              >
                {description}
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
