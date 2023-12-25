import React from "react";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import clsx from "clsx";
import style from "./commitment.module.css";
import CommitmentItem from "./CommitmentItem";

type Props = {};

const Commitment = (props: Props) => {
  return (
    <div className="w-full h-fit flex flex-col items-center py-16 gap-y-6">
      <div className="w-5/6">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Our <span className="text-secondary">Commitment</span>
        </h1>
      </div>
      <div className={clsx(style.container, "w-5/6 h-full")}>
        <div className={clsx(style.first, "flex flex-col gap-y-6")}>
          <p>
            Helping the world to discover the finest quality isn’t just a
            one-time task for us, but rather a process. A process in which we
            diligently and consistently invest our time, effort, knowledge and
            insatiable interest in improving all parts of the coffee production
            and export process. We always work to coax and nurture the best out
            of the process. We bring new ideas and practice an inclusive
            approach that enables us to discover, develop and deliver quality
            coffee that benefits everyone from the grower to the consumer.
          </p>
          {/* <p>
            Our approach is rooted in the principles of sustainability,
            transparency, traceability and the collective economic health of a
            global community like no other.
          </p> */}
        </div>
        <div
          className={clsx(
            style.second,
            "relative aspect-4/5 lg:aspect-auto h-full overflow-hidden rounded-xl lg:rounded-3xl"
          )}
        >
          <ImageWithSkeleton
            props={{ fill: true }}
            className="w-full h-full object-cover bg-gray-200"
            src="https://alphabettrading.s3.amazonaws.com/images/whyalphabet1.webp"
            alt="why-alphabet-1"
          />
        </div>
        <div className={clsx(style.third)}>
          <CommitmentItem
            className="h-full bg-primary rounded-xl lg:rounded-3xl"
            header="about alphabet trading"
            headerColor="text-secondary"
            title="Commitment to Excellence"
            titleColor="text-white"
            descriptions={[
              "Embracing a sustainability approach means that we act hand in hand with the environment and the people we work with. We bear responsibility for the environment, the organization and the economic livelihood of the people around us.",
              "We have devised a model where we don’t degrade the contribution of others environmentally, economically and socially.",
            ]}
            descriptionColor="text-white"
          />
        </div>
        <div className={clsx(style.fourth, "")}>
          <CommitmentItem
            className="h-full bg-light_gray_gray rounded-xl lg:rounded-3xl"
            header="Delighting Customers"
            headerColor="text-primary"
            title="Customer Satisfaction"
            titleColor="text-dark_gray"
            descriptions={[
              "Your satisfaction is our priority, and we go the extra mile to ensure that your expectations are not only met but exceeded.",
            ]}
            descriptionColor="text-[#717171]"
          />
        </div>
        <div className={clsx(style.fifth)}>
          <CommitmentItem
            className="h-full bg-secondary rounded-xl lg:rounded-3xl"
            header="Dependable Quality"
            headerColor="text-dark_gray"
            title="Reliability and Consistency"
            titleColor="text-white"
            descriptions={[
              "From sourcing to shipment, we uphold unwavering standards, ensuring each delivery of premium green coffee beans meets your expectations. Trust us for steadfast excellence, every time.",
            ]}
            descriptionColor="text-white"
          />
        </div>
        <div
          className={clsx(
            style.sixth,
            "relative h-full overflow-hidden rounded-xl lg:rounded-3xl"
          )}
        >
          <ImageWithSkeleton
            props={{ fill: true }}
            className="w-full h-full object-cover bg-gray-800"
            src="https://alphabettrading.s3.amazonaws.com/images/whyalphabet2.webp"
            alt="why-alphabet-2"
          />
        </div>
        <div className={clsx(style.seventh)}>
          <CommitmentItem
            className="h-full bg-light_gray_gray rounded-xl lg:rounded-3xl"
            header="Nurturing Strong Bonds"
            headerColor="text-secondary"
            title="Building Lasting Relationships"
            titleColor="text-dark_gray"
            descriptions={[
              "We deeply care about the relationships we cultivate and the connections those create. Relationships are the key to any successful venture through our work with our esteemed partners and selected suppliers. It’s important for us to build the connection with the source and leverage that connection to provide the quality and standards while building long term and reliable relationships.",
            ]}
            descriptionColor="text-[#717171]"
          />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
