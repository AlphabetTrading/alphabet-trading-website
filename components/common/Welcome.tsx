import React from "react";
import Image from "next/image";
import Skeleton from "./ImageWithSkeleton";
import ImageWithSkeleton from "./ImageWithSkeleton";
type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 bg-secondary text-white py-20 relative px-5 md:px-14 min-h-[400px] 2k:h-[40rem]">
      <div className="w-full h-full relative">
        {/* <Image
          fill
          className="w-80 h-80 absolute m-auto left-0 right-0 top-0 bottom-0"
          src="/images/welcome.svg"
          alt=""
          onLoad={<Skeleton/>}
        /> */}
        <ImageWithSkeleton
          className="w-80 h-80 absolute m-auto left-0 right-0 top-0 bottom-0"
          src="/images/welcome.svg"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col gap-y-2 justify-center items-center absolute top-0 right-0 left-0 bottom-0 z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl 2k:text-6xl font-semibold">
          Welcome to Alphabet Trading
        </h1>
        <p className="w-11/12 sm:w-3/4 md:w-2/3 2k:w-3/5 4k:w-1/2 text-center text-sm md:text-md lg:text-lg 2k:text-2xl 4k:text-4xl md:leading-6 py-4 md:py-6">
          Alphabet Trading PLC was formally established in November 2019 by Mr
          Henock Fikru to engage mainly in the export of agricultural goods from
          Ethiopia. and has been focused on building relationships with coffee
          producers and suppliers from the Southern and Western parts of
          Ethiopia, in Sidama, Oromia and SNNP regions.{" "}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
