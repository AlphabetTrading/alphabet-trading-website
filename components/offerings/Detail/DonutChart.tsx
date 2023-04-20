import React, { useState } from "react";
import styles from "../../../styles/DonutChart.module.css";

const DonutChart = () => {
  const [selected, setSelected] = useState<number>(1);

  type Detail = {
    id: number;
    label: string;
    image: any;
    value: string;
  };

  const details: Detail[] = [
    { id: 1, image: "/icons/altitude.svg", label: "Altitude", value: "2100m" },
    {
      id: 2,
      image: "/icons/rainfall.svg",
      label: "Annual Rainfall",
      value: "1750-2200mm",
    },
    {
      id: 3,
      image: "/icons/temperature.svg",
      label: "Average Temperature",
      value: "21°c",
    },
    { id: 4, image: "/icons/humidity.svg", label: "Humidity", value: "21%" },
    {
      id: 5,
      image: "/icons/pick_season.svg",
      label: "Pick Season",
      value: "Summber",
    },
    {
      id: 6,
      image: "/icons/process_method.svg",
      label: "Process Method",
      value: "Natural",
    },
    {
      id: 7,
      image: "/icons/varietal.svg",
      label: "Varietal",
      value: "Heirloom",
    },
    {
      id: 8,
      image: "/icons/flavor_profile.svg",
      label: "Flavor Profile",
      value: "Sweet, Strawberry & acidic",
    },
  ];

  return (
    <div className="w-full h-full relative flex flex-col justify-center items-center">
      <div className="m-4 p-3 bg-[#F2F7F7] rounded-full">
        <ul className={styles.donut}>
          {details.map((detail, index) => {
            return (
              <li
                key={index}
                className={styles.donut__item}
                onClick={() => {
                  setSelected(index + 1);
                }}
              >
                <div className={styles.donut__item__slice}></div>
                <div className={styles.donut__item__info}>
                  <img src={detail.image} />
                  <h1 className="border border-white">{detail.label}</h1>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
        <h1 className="uppercase text-secondary font-bold text-sm md:text-lg xl:text-xl">
          {details[selected - 1].label}
        </h1>
        <h1 className="text-md md:text-xl xl:text-2xl font-bold">
          {details[selected - 1].value}
        </h1>
      </div>
    </div>
  );
};
// import React from "react";
// import styles from "../../styles/DonutChart.module.css";
// import clsx from "clsx";

// const DonutChart = () => {
//   return (
//     <div className={styles.chart} id="chart">
//       <div className={clsx(styles.slice, styles.slice1)} id="slice1">
//         <img src="/icons/linkedin.svg" alt="Icon 1" />
//       </div>
//       <div className={clsx(styles.slice, styles.slice2)} id="slice2">
//         <img src="/icons/linkedin.svg" alt="/icons/linkedin.svg"/>
//       </div>
//       <div className={clsx(styles.slice, styles.slice3)} id="slice3">
//         <img src="/icons/linkedin.svg" alt="/icons/linkedin.svg"/>
//       </div>
//       <div className={clsx(styles.slice, styles.slice4)} id="slice4">
//         <img src="/icons/linkedin.svg" alt="/icons/linkedin.svg"/>
//       </div>
//       <div className={clsx(styles.slice, styles.slice5)} id="slice5">
//         <img src="/icons/linkedin.svg" alt="/icons/linkedin.svg"/>
//       </div>
//       <div className={clsx(styles.slice, styles.slice6)} id="slice6">
//         <img src="/icons/linkedin.svg" alt="/icons/linkedin.svg"/>
//       </div>
//       <div className={clsx(styles.slice, styles.slice7)} id="slice7">
//         <img src="/icons/linkedin.svg" alt="/icons/linkedin.svg"/>
//       </div>
//       <div className={clsx(styles.slice, styles.slice8)} id="slice8">
//         <img src="/icons/linkedin.svg" alt="/icons/linkedin.svg"/>
//       </div>
//     </div>
//   );
// };

// //   return (
// //     <ul className={styles.donut}>
// //       <li className={styles.donut__item}>
// //         <div
// //           className={styles.donut__item__slice}
// //           style={{ color: "#0091DA" }}
// //         ></div>

// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Lorem, ipsum.
// //         </div>
// //       </li><li className={styles.donut__item}>
// //         <div
// //           className={styles.donut__item__slice}
// //           style={{ color: "#0091DA" }}
// //         ></div>

// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Lorem, ipsum.
// //         </div>
// //       </li><li className={styles.donut__item}>
// //         <div
// //           className={styles.donut__item__slice}
// //           style={{ color: "#0091DA" }}
// //         ></div>

// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Lorem, ipsum.
// //         </div>
// //       </li><li className={styles.donut__item}>
// //         <div
// //           className={styles.donut__item__slice}
// //           style={{ color: "#0091DA" }}
// //         ></div>

// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Lorem, ipsum.
// //         </div>
// //       </li><li className={styles.donut__item}>
// //         <div
// //           className={styles.donut__item__slice}
// //           style={{ color: "#0091DA" }}
// //         ></div>

// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Lorem, ipsum.
// //         </div>
// //       </li>
// //       <li className={styles.donut__item} style={{ color: "#00A3A1" }}>
// //         <div className={styles.donut__item__slice}></div>
// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Animi
// //           <br />
// //           temporibus?
// //         </div>
// //       </li>
// //       <li className={styles.donut__item} style={{ color: "#483698" }}>
// //         <div className={styles.donut__item__slice}></div>
// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Porro, provident.
// //         </div>
// //       </li>
// //       <li className={styles.donut__item}>
// //         <div className={styles.donut__item__slice}></div>
// //         <div className={styles.donut__item__info}>
// //           <img
// //             src="https://www.svgrepo.com/show/379931/api-integration-connection.svg"
// //             alt=""
// //           />
// //           Raportowanie i usługi poświadczające
// //         </div>
// //       </li>
// //     </ul>
// //   );
// // };

export default DonutChart;
// // import dynamic from "next/dynamic";
// // import { useState } from "react";
// // import { ApexOptions } from "apexcharts";
// // import React from "react";

// // interface DonutChartProps {
// //   chartData: number[];
// // }

// // const DonutChart = ({ chartData }: DonutChartProps) => {
// //   const [activeSegmentIndex, setActiveSegmentIndex] = useState(-1);

// //   const handleDataPointHover = (event: any, chartContext: any, config: any) => {
// //     setActiveSegmentIndex(config.dataPointIndex);
// //   };

// //   const options: ApexOptions = {
// //     chart: {
// //       animations: {
// //         enabled: true,
// //         easing: "easeinout",
// //         speed: 500,
// //       },
// //     },
// //     plotOptions: {
// //         pie: {
// //             donut: {
// //                 size: '75%'
// //             },

// //         }
// //     }
// //     legend: {
// //       show: false,
// //     },
// //     dataLabels: {
// //       enabled: false,
// //     },
// //     stroke: {
// //       width: 10,
// //       colors: ["#fff"],
// //     },
// //     colors: ["#D0EBEB"],
// //     tooltip: {
// //       enabled: false,
// //     },
// //   };

// //   const chartStyles = {
// //     width: "600px",
// //     height: "600px",
// //   };

// //   const labelStyles = {
// //     position: "absolute",
// //     top: "50%",
// //     left: "50%",
// //     transform: "translate(-50%, -50%)",
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //   };

// //   const iconStyles = {
// //     width: "48px",
// //     height: "48px",
// //     borderRadius: "50%",
// //     backgroundColor: "#ff0000",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
// //   };

// //   const textStyles = {
// //     marginTop: "10px",
// //     fontSize: "16px",
// //     fontFamily: "Roboto, sans-serif",
// //     fontWeight: 500,
// //     color: "#2D3748",
// //   };

// //   const ReactApexChart = dynamic(() => import("react-apexcharts"), {
// //     ssr: false,
// //   });

// //   return (
// //     <div className="flex flex-col items-center justify-center w-full h-full">
// //       <div className="relative" style={chartStyles}>
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //           <h2 className="text-2xl font-bold text-center text-gray-700">
// //             {activeSegmentIndex >= 0 ? chartData[activeSegmentIndex] : ""}
// //           </h2>
// //         </div>
// //         <ReactApexChart
// //           options={options}
// //           series={chartData}
// //           type="donut"
// //           height="auto"
// //           width="100%"
// //           events={{
// //             dataPointMouseEnter: handleDataPointHover,
// //           }}
// //         />
// //         {chartData.map((_, index) => (
// //           <div
// //             key={index}
// //             className="absolute top-0 left-0 w-full h-full pointer-events-none"
// //           >
// //             <div
// //               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// //               style={{
// //                 opacity: index === activeSegmentIndex ? 1 : 0,
// //                 transition: "opacity 0.5s",
// //                 position: "absolute",
// //                 top: "50%",
// //                 left: "50%",
// //                 transform: "translate(-50%, -50%)",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //               }}
// //               //   style={{
// //               //     opacity: index === activeSegmentIndex ? 1 : 0,
// //               //     transition: "opacity 0.5s",
// //               //     ...labelStyles,
// //               //   }}
// //             >
// //               <div style={iconStyles}>
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   className="w-6 h-6 text-gray-700"
// //                 >
// //                   <path d="M12 1v22M5.2 8.8l6.3-6.3a3 3 0 014.2 0l6.3 6.3a3 3 0 010 4.2l-6.3 6.3a3 3 0 01-4.2 0l-6.3-6.3a3 3 0 010-4.2z" />
// //                 </svg>
// //               </div>
// //               <p style={textStyles}>Segment {index + 1}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DonutChart;
