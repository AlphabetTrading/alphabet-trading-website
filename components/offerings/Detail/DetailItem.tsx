import React from "react";
import { Detail } from "./DetailList";

type Props = {
  detail: Detail;
};

const DetailItem = ({ detail }: Props) => {
  return (
    <div className="flex justify-start items-center gap-x-4 my-5 md:my-10">
      <div className="bg-[#D0EBEB] w-14 h-14 rounded-lg">
        <img
          className="w-full h-full p-3"
          src={detail.image}
          alt={detail.label}
        />
      </div>
      <div className="flex flex-col items-start p-0">
        <h1 className="uppercase font-light text-secondary text-md md:text-lg xl:text-xl">
          {detail.label}
        </h1>
        <h1 className="capitalize font-bold text-xl md:text-2xl xl:text-3xl">
          {detail.value}
        </h1>
      </div>
    </div>
  );
};

export default DetailItem;
