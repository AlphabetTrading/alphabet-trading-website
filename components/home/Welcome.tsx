import React from "react";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 bg-[#086965]/20 py-20 relative px-5 md:px-14 min-h-[400px]">
      <div className="w-full h-full py-14 relative">
        <img
          className="w-32 h-32 absolute top-10 left-10"
          src="/images/welcome-bean.svg"
          alt=""
        />
        <img
          className="w-32 h-32 absolute bottom-10 right-10"
          src="/images/welcome-hot-coffee.svg"
          alt=""
        />
      </div>
      <div className="w-full  sm:w-11/12 flex flex-col gap-y-2 justify-center items-center absolute top-0 right-0 left-0 bottom-0 z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          Welcome to Alphabet Trading
        </h1>
        <p className="w-11/12 sm:w-3/4 md:w-3/5 text-center text-sm md:text-md lg:text-lg md:leading-6 py-10">
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
