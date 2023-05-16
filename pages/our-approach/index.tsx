import React from "react";
import Head from "next/head";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import Traceability from "../../components/qpd/Traceability";
import LandingPage from "../../components/qpd/LandingPage";
import QPDDetail from "../../components/qpd/QPDDetail";
import StrategyGoal from "../../components/qpd/StrategyGoal";
import PriceBreakdown from "../../components/qpd/PriceBreakdown";
import CTA from "../../components/qpd/CTA";

const detail = [
  {
    id: 1,
    name: "Quality",
    description:
      "It encompasses several factors, including the origin, variety, altitude, processing method, and cupping score of the coffee beans. To ensure that our beans meet the exacting standards of our buyers and the specialty coffee market, we follow best practices at every stage of the production process, from growing and harvesting the beans to processing and storing them",
  },
  {
    id: 2,
    name: "Price",
    description:
      "Several factors can influence the price of coffee, such as the quality of the beans, production costs, and market conditions. We strive to provide fair and transparent pricing to our customers by disclosing the costs incurred at each phase of production.",
  },
  {
    id: 3,
    name: "Delivery",
    description:
      "It represents the reliable and timely delivery of coffee beans from Ethiopia to our customers' destinations. Our commitment to this involves effective logistics management, including arranging transportation, ensuring proper packaging and labeling, and complying with import and export regulations",
  },
];
const OurApproach = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Our Approach - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="Discover the key factors of QPD (Quality, Price, Delivery) in the world of coffee export. Uncover the secrets behind producing and delivering exceptional coffee beans that meet the highest quality standards. Elevate your coffee export business with our comprehensive QPD insights and stay ahead in the ever-evolving industry."
        />
      </Head>
      <>
        <Navbar white={false} />
        <div className="flex flex-col w-full h-full items-center justify-center">
          <LandingPage />
          <StrategyGoal />
          <QPDDetail details={detail} />
          <Traceability />
          <PriceBreakdown />
          <CTA />
        </div>
      </>
    </BaseLayout>
  );
};

export default OurApproach;
