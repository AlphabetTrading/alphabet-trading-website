import clsx from "clsx";
import React from "react";

type Props = {};

export type Process = {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string[];
};

const processes: Process[] = [
  {
    id: 1,
    title: "Harvesting",
    image: "/images/qpd_detail.svg",
    description:
      "During harvesting, there are lots of expenses and these include labor costs for hiring workers to harvest the cherries and deliver those cherries to the washing/drying stations",
    details: [
      "Location: Farm Name, Chelchele",
      "Labor and Transportation Cost: $0.45/lb",
      "Red Cherry Cost: $0.45/lb",
    ],
  },
  {
    id: 2,
    title: "Drying",
    image: "/images/qpd_detail.svg",
    description:
      "he fruit's organic material naturally begins fermenting as soon as the cherries are picked, and the fermentation is accelerated once the fruit is laid out under the hot sun. The fruit is susceptible to mold and other types of defects that can occur during this time so it requires constant attention by staff to rotate the cherries, and to continue to sort them as they dry. ",
    details: ["Location: Farm name, Chelchele", "Labor cost: $0.45/lb"],
  },

  {
    id: 3,
    title: "Milling",
    image: "/images/qpd_detail.svg",
    description:
      "After the fruit is dry, it is transferred to the dry mill where the coffee and its cherry will be run through a hulling machine which uses friction to remove its fruit and the parchment layer. The resulting green coffee is taken to a mill to be sorted by hand or by special equipment and it will also be polished at this stage.",
    details: ["Location: Farm name, Chelchele", "Labor cost: $0.45/lb"],
  },

  {
    id: 4,
    title: "Warehouse",
    image: "/images/qpd_detail.svg",
    description:
      "Then it will be placed in sacks and stored in a warehouse until it’s ready to be shipped.",
    details: ["Location: Farm Name, Chelchele", "Labor Cost: $0.45/lb"],
  },
  {
    id: 5,
    title: "Shipping",
    image: "/images/qpd_detail.svg",
    description:
      "The coffee beans must be carefully handled and stored during transit to ensure that they arrive at their destination in good condition.",
    details: [
      "Location: Farm Name, Chelchele",
      "Labor and Transportation Cost: $0.45/lb",
      "Red Cherry Cost: $0.45/lb",
    ],
  },
];

const Traceability = (props: Props) => {
  return (
    <div className="w-11/12 min-h-screen h-full flex flex-col items-center py-16">
      <div className="py-16 flex flex-col items-center">
        <h1 className="font-semibold text-[#AB9875] text-xl">
          The Coffee Journey
        </h1>
        <h1 className="font-bold text-4xl">From the Farmer to your Cup</h1>
      </div>
      <div className="w-4/5 flex flex-col py-8">
        {processes.map((process, index) => {
          return (
            <div key={index} className="w-full grid grid-cols-2">
              <div
                className={clsx(
                  "w-full h-72 flex border-[#2A93DF]/60 relative ",
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
                <div className="absolute -top-2 w-full h-full px-12">
                  <img
                    className="w-full h-full max-h-60 object-cover rounded-3xl"
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
                    "absolute -top-2 flex flex-col justify-between gap-y-2 px-12",
                    index % 2 === 0 ? "text-left" : "text-right"
                  )}
                >
                  <div>
                    <h1 className="text-3xl font-bold">{process.title}</h1>
                    {process.details.map((detail: string, index2: number) => {
                      return <h1 key={index2}>{detail}</h1>;
                    })}
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
    </div>
  );
};

export default Traceability;
