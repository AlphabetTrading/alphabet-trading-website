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
    imageSrc: "/images/new_sustainability.jpg",
  },
  {
    title: "Transparency",
    descriptions: [
      "By tracking the farm's production, varieties, processing techniques, shipments, cupping scores and paperwork trail it ensures that our customers only receive the freshest and best coffee.",
      "The farmer begins the process by selecting red cherries from their farm, which is then converted into semi-washed parchment. This parchment is sent to a facility where it undergoes an additional cleaning process that eliminates all green or malformed beans. The parchment is then graded based on bean variant and size before finally being exported.",
    ],
    imageSrc: "/images/transparency.svg",
  },
  {
    title: "Traceability",
    descriptions: [
      "Every stage of our process is traceable, allowing us to identify the growers and confirm where each coffee was harvested, processed, and stored.",
      "We want our customers to know where every cup of coffee comes from and what every sip meant. Our traceability approach enables the coffee supply chain to appreciate the effort that each producer puts forward.",
    ],
    imageSrc: "/images/new_traceability.jpg",
  },
];

const Details = (props: Props) => {
  return (
    <div className="bg-[#086965]/10 py-14 md:py-20 flex flex-col gap-y-10">
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
  );
};

export default Details;
