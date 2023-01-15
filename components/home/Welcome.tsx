import React from "react";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 bg-[#086965]/20 py-20 relative">
      <img
        className="w-32 h-32 absolute top-4 left-4"
        src="/images/welcome-bean.svg"
        alt=""
      />
      <img
        className="w-32 h-32 absolute bottom-4 right-4"
        src="/images/welcome-hot-coffee.svg"
        alt=""
      />
      <h1 className="text-4xl font-semibold">Welcome to Alphabet Trading</h1>
      <p className="w-3/5 text-center text-lg leading-6">
        Alphabet Trading PLC was formally established in November 2019 by Mr
        Henock Fikru to engage mainly in the export of agricultural goods from
        Ethiopia. and has been focused on building relationships with coffee
        producers and suppliers from the Southern and Western parts of Ethiopia,
        in Sidama, Oromia and SNNP regions.{" "}
      </p>
    </div>
  );
};

export default Welcome;
