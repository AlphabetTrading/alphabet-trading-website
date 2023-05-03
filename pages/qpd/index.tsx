import React from "react";
import LandingPage from "../../components/qpd/LandingPage";
import QPDDetail from "../../components/qpd/QPDDetail";
import StrategyGoal from "../../components/qpd/StrategyGoal";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import Head from "next/head";

type Props = {};

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
const index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>FAQs - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="You will find answers to some of our most frequently asked questions about Alphabet Trading PLC."
        />
      </Head>
      <>
        <Navbar white />
        <div className="flex flex-col w-full h-full items-center justify-center">
          <LandingPage />
          <StrategyGoal />
          <QPDDetail details={detail} />
        </div>
      </>
    </BaseLayout>
  );
};

export default index;
