import React from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {};

const provisions = [
  {
    id: 1,
    logo: "/icons/home/best_quality.svg",
    title: "Best Quality",
    description:
      "We source our organic and specialty grade coffees from the birthplace of Coffee - Ethiopia, which is known for its strong, bright flavor and distinctive berry aroma. Each crop is hand-selected with the utmost care and attention in order to bring out its unique characteristics.",
  },
  {
    id: 2,
    logo: "/icons/home/production.svg",
    title: "Meticulous Production",
    description:
      "Our specialists keep a watchful eye on all phases of production, from the choice of crops and processing to putting our beans into containers for shipment. This guarantees that only highest standards are implemented when it comes to quality assurance and freshness.",
  },
  {
    id: 3,
    logo: "/icons/home/satisfaction.svg",
    title: "Overall Satisfaction",
    description:
      "We proudly offer clients around the globe the finest, freshest coffee beans available. We strive to provide outstanding service and guarantee satisfaction by consistently going above and beyond to ensure all services meet or exceed customers' expectations.",
  },
];

const Provision = (props: Props) => {
  return (
    <div className="w-full flex justify-center bg-light_gray_gray py-12">
      <div className="w-5/6 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="w-full lg:w-[30%] flex flex-col gap-y-3">
          <h1 className="w-full lg:w-4/5 capitalize font-bold text-2xl lg:text-5xl">
            We <span className="text-secondary">provide you</span> with
          </h1>
          <p className="lg:text-lg">
            We meticulously source superior coffee beans, partnering directly
            with trusted farmers. Our commitment extends beyond sourcing,
            offering personalized service and support, ensuring premium quality
            and satisfaction for our clients.{" "}
          </p>
        </div>
        <div className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-between gap-6">
          {provisions.map((provision, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "h-[270px] lg:h-[360px] w-full p-6 rounded-2xl bg-white"
                  // index % 2 == 0 ? "bg-white" : "bg-secondary text-white"
                )}
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-10 h-10 relative object-center">
                    <Image
                      className="w-full h-full"
                      fill
                      src={provision.logo}
                      alt={provision.title}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-lg lg:text-xl font-bold">
                      {provision.title}
                    </h1>
                    <p className="text-xs lg:text-sm">
                      {provision.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Provision;
