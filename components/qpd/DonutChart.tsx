import React from "react";
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DonutChartProps {
  data: number[];
  labels: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data, labels }) => {
  const series = data;

  const options: ApexCharts.ApexOptions = {
    labels,
    colors: ["#034C65", "#EF8C86", "#FCB677", "#685268", "#2F1F2B"],
    chart: {
      width: "100%",
    },

    legend: {
      position: "right",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Raleway",
      fontWeight: 400,
      formatter: function (seriesName, opts) {
        return `${seriesName} - ${opts.w.globals.series[opts.seriesIndex]}`;
      },
    },
    dataLabels: {
      style: {
        fontSize: "14px",
        fontFamily: "Raleway",
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      width: 7,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    responsive: [
      {
        breakpoint: 1280,
        options: {
          legend: {
            width: "100%",
            height: "100%",
            position: "top",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          legend: {
            width: "100%",
            height: "100%",
            position: "right",
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          legend: {
            width: "100%",
            height: "100%",
            position: "top",
            fontSize: "12px",
          },
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width="100%"
      />
    </div>
  );
};

export default DonutChart;
