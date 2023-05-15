import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="relative w-full overflow-y-clip min-h-screen flex justify-center items-center bg-gradient-to-b from-[#1E3B60] to-[#0A1528]">
      <div className="absolute top-[30%] md:top-[20%] lg:top-[30%] xl:top-[25%] w-full flex flex-col items-center gap-y-4">
        <h1 className="text-[#AB9875] text-md md:text-3xl font-light text-center tracking-wider -mb-4 md:-mb-2 xl:-mb-8">
          A Coffee Trade Revolution
        </h1>
        <div className="w-4/5 sm:w-3/4 md:w-4/5 lg:w-2/3 xl:w-[85%] 2xl:w-5/6 h-12 sm:h-20 md:h-24 lg:h-28 xl:h-40 2xl:h-44 flex justify-between text-white font-DM_Serif text-[28px] sm:text-[56px] lg:text-[66px] xl:text-[110px] 2xl:text-[118px]">
          <h1>Quality</h1>
          <h1>.</h1>
          <h1 className="border-b-2 md:border-b-4 border-[#AB9875]">Price</h1>
          <h1>.</h1>
          <h1>Delivery</h1>
        </div>
        <div className="w-3/4 sm:w-2/3 md:w-3/4 lg:w-3/5 xl:w-2/3 text-white md:mt-6 text-center md:font-medium text-xs md:text-sm xl:text-md 2xl:text-lg">
          <h1>
            QPD concept emphasizes the importance of producing high-quality
            coffee beans at a competitive price and delivering them in a timely
            and efficient manner. By optimizing quality, price, and delivery, we
            hope to build strong relationships with buyers in the global market.
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0">
        <img
          className="w-full h-full"
          src="/images/qpd/qpd_landing.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;
