import React from "react";

export type Offering = {
  type: string;
  grade: string;
  location: string;
  availability: string;
  request?: string;
};

type Props = {
  offering: Offering;
};

const OfferingsItem = ({ offering }: Props) => {
  return (
    <>
      <div className="flex w-5/6 items-center bg-white text-sm lg:text-md text-[#565656] shadow-xl font-semibold">
        <div className="w-1/12 p-3 px-4">
          <img
            className="w-10 h-10"
            src="/images/offerings_coffee.svg"
            alt=""
          />
        </div>
        <div className="w-3/12">{offering.type}</div>
        <div className="w-1/12">{offering.grade}</div>
        <div className="w-3/12">{offering.location}</div>
        <div className="w-2/12">{offering.availability}</div>
        <div className="w-2/12">
          <button className="p-2 border border-secondary text-secondary font-medium">
            Send Request
          </button>
        </div>
      </div>
    </>
  );
};

export default OfferingsItem;
