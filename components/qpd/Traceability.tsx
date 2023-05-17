import clsx from "clsx";
import React from "react";
import Image from "next/image";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
type Props = {};

export type Process = {
  id: number;
  title: string;
  image: string;
  description: string;
  details: Map<string, string>;
};

const processes: Process[] = [
  {
    id: 1,
    title: "Harvesting",
    image:
      "https://alphabettrading.s3.amazonaws.com/images/qpd/harvesting.webp",
    description:
      "Coffee beans are typically harvested by hand-picking when they reach the desired level of ripeness (Red is the most desired color). At this step, most of the expense is related to labor. Skilled laborers are required to hand-pick the ripe coffee cherries",
    details: new Map([
      ["Location", "Farm in Gedeo Zone, Yirgacheffe"],
      ["Labor and Transportation Cost", "$0.34/lb"],
      ["Red Cherry Cost", "$0.54/lb"],
    ]),
  },
  {
    id: 2,
    title: "Sorting and Cleaning",
    image: "https://alphabettrading.s3.amazonaws.com/images/qpd/cleaning.webp",
    description:
      "It involves removing any debris, leaves, or unripe cherries, as well as sorting them by size and quality. This step helps to ensure uniformity in the final product. This process mostly involves manual labor and equipment. The costs can include labor wages, equipment maintenance, and infrastructure expenses.",
    details: new Map([
      ["Location", "Worka Station, Yirgacheffe, Gedeo"],
      ["Labor cost", "$0.45/lb"],
    ]),
  },

  {
    id: 3,
    title: "Processing",
    image: "https://alphabettrading.s3.amazonaws.com/images/qpd/washing.webp",
    description:
      "In the wet processing method, the cherries are pulped to remove the outer skin and fruit pulp, exposing the beans which are then fermented in water tanks to remove the remaining mucilage. After fermentation, the beans are thoroughly washed and dried. This process typically involves more machinery and water usage compared to dry processing. The costs include labor for pulping, fermentation, washing, and drying, as well as equipment and water resources.",
    details: new Map([
      ["Location", "Worka Station, Yirgacheffe, Gedeo"],
      ["Labor cost", "$0.45/lb"],
      ["Equipment cost", "$0.45/lb"],
    ]),
  },

  {
    id: 4,
    title: "Milling and Hulling",
    image: "https://alphabettrading.s3.amazonaws.com/images/qpd/milling.webp",
    description:
      "Milling and hulling are essential steps after the beans are fully dried. They involve removing the parchment layer and silver skin from the beans to enhance their quality. These processes further refine the beans' quality. The costs associated with milling and hulling include labor wages, equipment maintenance, and energy consumption. Specialized machinery is used for these processes.",
    details: new Map([
      ["Location", "Worka Station, Yirgacheffe, Gedeo"],
      ["Labor cost", "$0.05/lb"],
      ["Equipment Operation cost", "$0.45/lb"],
    ]),
  },
  {
    id: 5,
    title: "Sorting and Grading",
    image: "https://alphabettrading.s3.amazonaws.com/images/qpd/grading.webp",
    description:
      "The beans are sorted based on size, color, density, and quality. Specialized equipment is used to separate the beans into different grades. This ensures consistency. Sorting and grading involve labor wages for skilled workers and the use of specialized equipment. The costs can also vary depending on the number of grades and the thoroughness of the sorting process. Since this is a Grade 2 coffee, it requires more effort hence higher cost.",
    details: new Map([
      ["Location", "Worka Station, Yirgacheffe, Gedeo"],
      ["Labor cost", "$0.05/lb"],
      ["Equipment cost", "$0.45/lb"],
    ]),
  },
  {
    id: 6,
    title: "Quality Control",
    image: "https://alphabettrading.s3.amazonaws.com/images/qpd/quality.webp",
    description:
      "After samples are taken, various parameters, such as moisture content, bean defects, and cupping evaluations, are assessed to ensure the beans meet the desired standards. Quality control testing involves labor costs for the trained cuppers and quality control personnel. ",
    details: new Map([
      ["Location", "Bel Amor Building, Addis Ababa"],
      ["Labor cost", "$0.05/lb"],
    ]),
  },
  {
    id: 7,
    title: "Packaging",
    image: "https://alphabettrading.s3.amazonaws.com/images/qpd/packaging.webp",
    description:
      "Once the beans pass quality control, they are packaged in jute bags. The bag is designed to protect the beans from moisture, light, and other external factors that can affect their quality. As a result, the bags need to be durable and protective to maintain the quality of the beans during storage and transportation. Packaging costs include the price of the jute bags, as well as labor for packing the beans.",
    details: new Map([
      ["Location", "Bole, Addis Ababa, Ethiopia"],
      ["Labor cost", "$0.05/lb"],
      ["Packaging cost", "$0.45/lb"],
    ]),
  },
  {
    id: 8,
    title: "Storage and Shipping",
    image: "https://alphabettrading.s3.amazonaws.com/images/qpd/shipping.webp",
    description:
      "The packaged coffee beans are then stored in appropriate warehouses to maintain their freshness. When ready for shipment, the beans are loaded into shipping containers and transported. Costs related to storage and shipping include warehousing expenses, transportation costs, insurance, and documentation fees.",
    details: new Map([
      ["Location", "Bole, Addis Ababa, Ethiopia"],
      ["Storage cost", "$0.45/lb"],
      ["Transportation cost", "$0.45/lb"],
      ["Other costs", "$0.45/lb"],
    ]),
  },
];

const Traceability = (props: Props) => {
  return (
    <div className="w-11/12 min-h-screen h-full flex flex-col items-center py-6 lg:py-12">
      <div className="w-11/12 lg:w-full py-16 flex flex-col items-center text-center">
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-0.5 bg-[#2A93DF]"></div>
          <h1 className="font-semibold text-[#2A93DF] text-lg lg:text-2xl">
            The Coffee Journey
          </h1>
          <div className="w-8 h-0.5 bg-[#2A93DF]"></div>
        </div>
        <h1 className="font-bold text-3xl lg:text-4xl">
          From the Farmer to your Cup
        </h1>
        <h1 className="mt-4">
          Let&apos;s consider the case of a{" "}
          <span className="font-semibold">Washed G-2 Gedeb Chelchele</span>{" "}
          coffee and see all the steps it passes before it reaches you
        </h1>
      </div>
      <div className="hidden lg:flex w-3/4 lg:flex-col py-2">
        {processes.map((process, index) => {
          return (
            <div key={index} className="w-full grid grid-cols-2">
              <div
                className={clsx(
                  "w-full flex border-[#2A93DF]/60 relative",
                  index % 2 === 0 ? "order-1 border-r-4" : "order-2"
                )}
              >
                <div
                  className={clsx(
                    "w-4 h-4 absolute -top-2 -right-[10px] rounded-3xl",
                    index % 2 === 0 ? "block" : "hidden"
                  )}
                >
                  <div className="relative h-full w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2A93DF] rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 border-2 border-[#2A93DF]/80 rounded-full animate-pulse transform ease-in-out duration-150"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#2A93DF]/40 rounded-full animate-pulse transform ease-in-out duration-200"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border-2 border-[#2A93DF]/10 rounded-full animate-pulse transform ease-in-out duration-300"></div>
                  </div>
                </div>
                <div className="-mt-2.5 h-60 xl:h-64 w-full px-12 pb-12">
                  <ImageWithSkeleton
                    className="w-full h-full object-cover rounded-3xl"
                    src={process.image}
                    alt=""
                  />
                </div>
              </div>
              <div
                className={clsx(
                  "h-full flex items-start border-[#2A93DF]/60 relative",
                  index % 2 === 0 ? "order-2" : "order-1 border-r-4"
                )}
              >
                <div
                  className={clsx(
                    "w-4 h-4 absolute -top-2 -right-[10px]",
                    index % 2 !== 0 ? "block " : "hidden"
                  )}
                >
                  <div className="relative h-full w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2A93DF] rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 border-2 border-[#2A93DF]/80 rounded-full animate-pulse transform ease-in-out duration-150"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#2A93DF]/40 rounded-full animate-pulse transform ease-in-out duration-200"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border-2 border-[#2A93DF]/10 rounded-full animate-pulse transform ease-in-out duration-300"></div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "-mt-2.5 flex h-fit flex-col justify-between gap-y-3 px-12 pb-12",
                    index % 2 === 0 ? "text-left" : "text-right"
                  )}
                >
                  <div>
                    <h1 className="text-3xl font-bold -mt-2 mb-2">
                      {process.title}
                    </h1>
                    {[...process.details.entries()].map(
                      (keyvalue: [string, string], index: number) => {
                        return (
                          <h1 key={index}>
                            {keyvalue[0]}:{" "}
                            <span className="text-[#1E3B60]">
                              {keyvalue[1]}
                            </span>
                          </h1>
                        );
                      }
                    )}
                  </div>
                  <div
                    className={clsx(
                      "flex",
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    )}
                  >
                    <div className="w-2/3 h-0.5 bg-[#DFDFDF]"></div>
                  </div>
                  <div>
                    <p>{process.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col lg:hidden w-11/12 md:w-5/6 py-8">
        {processes.map((process, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full flex border-[#2A93DF]/60 relative border-l-4 mx-4">
                <div className="w-4 h-4 absolute -top-2 -left-[10px] rounded-3xl">
                  <div className="relative h-full w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2A93DF] rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 border-2 border-[#2A93DF]/80 rounded-full animate-pulse transform ease-in-out duration-150"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#2A93DF]/40 rounded-full animate-pulse transform ease-in-out duration-200"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border-2 border-[#2A93DF]/10 rounded-full animate-pulse transform ease-in-out duration-300"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start w-full h-full px-12 mb-16">
                  <h1 className="text-3xl font-bold -mt-4 mb-2">
                    {process.title}
                  </h1>
                  <img
                    className="w-full h-full max-h-60 my-1 object-cover rounded-3xl"
                    src={process.image}
                    alt=""
                  />
                  {[...process.details.entries()].map(
                    (keyvalue: [string, string], index: number) => {
                      return (
                        <h1 key={index}>
                          {keyvalue[0]}:{" "}
                          <strong className="text-[#1E3B60] font-semibold">
                            {keyvalue[1]}
                          </strong>
                        </h1>
                      );
                    }
                  )}
                  <div
                    className={clsx(
                      "flex",
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    )}
                  >
                    <div className="w-full h-0.5 bg-[#DFDFDF] my-4"></div>
                  </div>
                  <p>{process.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Traceability;
