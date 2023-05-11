import React from "react";

type Props = {};

const StrategyGoal = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-[#2A93DF]/10">
      <div className="w-full md:w-1/2 h-full flex items-start gap-x-4 p-6 px-8 md:p-20 md:px-28">
        <img src="/icons/strategy.svg" alt="" />
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[#2A93DF] text-3xl font-semibold mt-2">
            Our Strategy
          </h1>
          <p className="text-[#454545]">
            In a relatively short period of time, we have made significant
            strides and achieved remarkable success as newcomers to the industry
            and this is in part thanks to QPD. We are proud to say that we were
            the first to introduce the concept of Quality Price Delivery (QPD)
            to the coffee market. We recognized early on that simply delivering
            high-quality coffee beans was not enough; it was also essential to
            ensure that our customers were getting fair pricing and reliable
            delivery.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-start gap-x-4 p-6 md:p-20 md:px-28">
        <img src="/icons/goal.svg" alt="" />
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[#2A93DF] text-3xl font-semibold mt-2">
            Our Goal
          </h1>
          <p className="text-[#454545]">
            By pioneering the QPD concept, we were able to produce specialty and
            high grade coffee beans that met the exacting standards of our
            customers while also delivering fair & adequate pricing and highly
            reliable delivery time. Today, our brand is synonymous with quality,
            transparency, and sustainability, and we continue to innovate and
            improve our processes to cement our position as a leader in the
            coffee export market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategyGoal;
