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
    colors: ["#1AA367"],
    chart: {
      type: "bar",
      height: 250,
      toolbar: { show: false },
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      offsetX: 15,
      style: {
        fontSize: "14px",
        fontFamily: "Raleway",
        fontWeight: 500,
        colors: ["#252B41"],
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: "50%",
        dataLabels: {
          position: "top",
          orientation: "horizontal",
        },
      },
    },

    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ["Harvesting", "Drying", "Milling", "Warehouse", "Shipment"],
      labels: {
        show: true,
        style: {
          fontSize: "14px",
          fontFamily: "Raleway",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
          colors: ["#252B4178"],
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontSize: "15px",
          fontFamily: "Raleway",
          fontWeight: 600,
          cssClass: "apexcharts-yaxis-label",
          colors: ["#252B4178"],
        },
      },
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: {
            width: "100%",
            height: 220,
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
          dataLabels: {
            offsetX: 11,
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <ReactApexChart options={options} series={series} type="bar" />
    </div>
  );
};

export default BarChart;
