import React from "react";
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart = () => {
  const series = [
    {
      data: [400, 470, 430, 348, 240],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Harvesting", "Drying", "Milling", "Warehouse", "Shipment"],
    },
  };

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
