import React from "react";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";

type Props = {};

const PriceBreakdown = (props: Props) => {
  return (
    <div className="w-3/4 flex flex-col lg:flex-row items-center justify-center gap-4">
      <BarChart />
      <DonutChart
        data={[12, 23, 19, 4, 8]}
        labels={["Harvesting", "Drying", "Milling", "Warehouse", "Shipment"]}
      />
    </div>
  );
};

export default PriceBreakdown;
