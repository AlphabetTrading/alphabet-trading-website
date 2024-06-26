import React from "react";
import DetailItem from "./DetailItem";

type Props = {};

const details = [
  {
    title: "Sustainability",
    descriptions: [
      "Embracing a sustainability approach means that we act hand in hand with the environment and the people we work with. We bear responsibility for the environment, the organization and the economic livelihood of the people around us.",
      "We have devised a model where we don’t degrade the contribution of others environmentally, economically and socially.",
    ],
    imageSrc: `https://alphabettrading.s3.amazonaws.com/images/sustainability.webp`,
  },
  {
    title: "Transparency",
    descriptions: [
      "By tracking the farm's production, varieties, processing techniques, shipments, cupping scores and paperwork trail it ensures that our customers only receive the freshest and best coffee.",
      "The farmer begins the process by selecting red cherries from their farm, which is then converted into semi-washed parchment. This parchment is sent to a facility where it undergoes an additional cleaning process that eliminates all green or malformed beans. The parchment is then graded based on bean variant and size before finally being exported.",
    ],
    imageSrc: `https://alphabettrading.s3.amazonaws.com/images/transparency.webp`,
  },
  {
    title: "Traceability",
    descriptions: [
      "Every stage of our process is traceable, allowing us to identify the growers and confirm where each coffee was harvested, processed, and stored.",
      "We want our customers to know where every cup of coffee comes from and what every sip meant. Our traceability approach enables the coffee supply chain to appreciate the effort that each producer puts forward.",
    ],
    imageSrc: `https://alphabettrading.s3.amazonaws.com/images/traceability.webp`,
  },
];

const Details = (props: Props) => {
  return (
    <div className="flex justify-center items-center bg-navy py-12">
      <div className="flex flex-col w-5/6 md:py-20  py-14 gap-y-8 lg:gap-y-14">
        <h1 className="text-white text-3xl lg:text-5xl font-bold ">
          Our <span className="text-secondary">Ethical</span> Approach
        </h1>
        <div className=" flex flex-col gap-y-5 lg:gap-y-24">
          {details.map((detail: any, index: number) => {
            return (
              <DetailItem
                key={index}
                index={index}
                title={detail.title}
                descriptions={detail.descriptions}
                imageSrc={detail.imageSrc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
