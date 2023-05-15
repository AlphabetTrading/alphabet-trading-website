import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 flex flex-col items-center justify-center">
      <h1 className="font-light text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
        Your Coffee Journey Starts Here
      </h1>
      <div className="w-4/5 lg:w-5/12 text-center">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap">
          <span className="text-secondary">Quality</span> Beans. Competetive{" "}
          <span className="text-secondary">Price</span>.
        </h1>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap">
          On-time <span className="text-secondary">Delivery</span>.
        </h1>
      </div>
      <Link className="text-secondary" href="/our-approach">
        <div className="p-2 px-4 lg:px-6 rounded-xl border-2 border-secondary mt-8 font-medium">
          Discover More
        </div>
      </Link>
    </div>
  );
};

export default CTA;
