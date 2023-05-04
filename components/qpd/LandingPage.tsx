import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="relative w-full overflow-y-clip min-h-screen flex justify-center items-center bg-gradient-to-b from-[#1E3B60] to-[#0A1528]">
      <div className="absolute top-[20%] w-full flex flex-col items-center gap-y-4">
        <h1 className="text-[#AB9875] text-lg md:text-3xl font-light text-center tracking-wider">
          A Coffee Trade Revolution
        </h1>
        <div className="w-5/6 sm:w-3/4 xl:w-4/5 h-14 sm:h-16 md:h-20 xl:h-40 flex justify-between text-white font-DM_Serif text-[32px] sm:text-[56px] lg:text-6xl xl:text-[115px]">
          <h1>Quality</h1>
          <h1>.</h1>
          <h1 className="border-b-2 md:border-b-4 border-[#AB9875]">Price</h1>
          <h1>.</h1>
          <h1>Delivery</h1>
        </div>
        <div className="w-5/6 sm:w-4/5 md:w-3/4 xl:w-2/3 text-white mt-6 text-center font-medium text-lg">
          <h1>
            QPD concept emphasizes the importance of producing high-quality
            coffee beans at a competitive price and delivering them in a timely
            and efficient manner. By optimizing quality, price, and delivery, we
            hope to build strong relationships with buyers in the global market.
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0">
        <img className="w-full h-full" src="/images/qpd_landing.svg" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
