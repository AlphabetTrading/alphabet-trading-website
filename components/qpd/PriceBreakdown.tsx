import React from "react";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";

type Props = {};

const PriceBreakdown = (props: Props) => {
  return (
    <div className="w-3/4 my-5">
      <h1 className="font-bold text-4xl">Price Breakdown</h1>
      <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-10 my-2">
        <p className="text-lg w-full lg:w-1/2">
          Detailed breakdown of the costs and expenses associated with the
          coffee production offers transparency and clarity to customers,
          enabling them to understand the various components that contribute to
          the final price.
        </p>
        <p className="text-lg w-full lg:w-1/2">
          By breaking down the price into its constituents such as
          transportation, labor, equipments, overhead, and any additional
          charges, we empower customers to make informed purchasing decisions
          and fosters trust in the pricing structure.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 my-4">
        {/* <BarChart /> */}
        <div className="w-full md:w-7/12">
          <DonutChart
            data={[12, 23, 19, 4, 8]}
            labels={[
              "Harvesting",
              "Drying",
              "Milling",
              "Warehouse",
              "Shipment",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;
