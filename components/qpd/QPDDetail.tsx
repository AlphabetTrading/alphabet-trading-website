import clsx from "clsx";
import React from "react";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

type Props = {
  details: any[];
};

const QPDDetail = ({ details }: Props) => {
  return (
    <div className="w-full h-fit flex justify-center items-center bg-gradient-to-b from-[#1E3B60]/90 to-[#1E3B60]">
      <div className="w-11/12 lg:w-1/2 h-full py-12 lg:py-0 flex flex-col gap-y-6 justify-center items-center">
        {details.map((detail: any, index: number) => {
          return (
            <div
              className={clsx(
                "w-11/12 lg:w-2/3 flex flex-col items-center justify-center text-white pb-8",
                index !== details.length - 1
                  ? "border-b-[0.5px] border-white/20"
                  : ""
              )}
              key={index}
            >
              <div className="flex items-start gap-x-3">
                <img src="/icons/qpd_tick.svg" alt="" />
                <div className="flex flex-col gap-y-2">
                  <h1 className="font-DM_Serif text-3xl">{detail.name}</h1>
                  <p className="text-sm">{detail.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block w-full lg:w-1/2 h-screen">
        <ImageWithSkeleton
          className="w-full h-full object-cover"
          src="https://alphabettrading.s3.amazonaws.com/images/qpd/details.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default QPDDetail;
