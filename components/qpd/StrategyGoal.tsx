import React from "react";

type Props = {};

const StrategyGoal = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 bg-[#2A93DF]/10">
      <div className="w-11/12 lg:w-1/2 h-full flex items-start gap-x-4 p-8 md:p-10 lg:p-14 px-8 md:px-16 lg:px-20">
        <img
          className="w-10 h-10 lg:w-12 lg:h-12"
          src="/icons/strategy.svg"
          alt=""
        />
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[#2A93DF] text-3xl font-semibold mt-2">
            Our Strategy
          </h1>
          <p className="text-[#454545]">
            In a relatively short period of time, we have made significant
            strides and achieved remarkable success as newcomers to the industry
            and this is in part thanks to QPD. We recognized early on that
            simply delivering high-quality coffee beans was not enough; it was
            also essential to ensure that our customers were getting fair
            pricing and reliable delivery.
          </p>
        </div>
      </div>
      <div className="w-11/12 lg:w-1/2 h-full flex items-start gap-x-4 p-8 md:p-10 lg:p-14 px-8 md:px-16 lg:px-20">
        <img
          className="w-10 h-10 lg:w-12 lg:h-12"
          src="/icons/goal.svg"
          alt=""
        />
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[#2A93DF] text-3xl font-semibold mt-2">
            Our Goal
          </h1>
          <p className="text-[#454545]">
            With QPD as our guiding principles, our brand has achieved
            remarkable heights in the coffee export market. Renowned for our
            unwavering commitment to superior quality, transparent operations,
            and sustainable practices, we constantly strive to innovate and
            refine our processes, to firmly establish ourselves as an industry
            frontrunner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategyGoal;
