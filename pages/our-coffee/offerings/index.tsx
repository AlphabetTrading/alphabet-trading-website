import React from "react";
import Head from "next/head";
import BaseLayout from "../../../components/common/BaseLayout";
import Navbar from "../../../components/common/Navbar";
import { OfferingsContextWrapper } from "../../../context/OfferingsContext";
import OfferingsComponent from "../../../components/offerings/Offerings";

type Props = {};

const Index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Offerings - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="Explore the various types of beans that we offer! We provide world-class coffees sourced from five regions in Ethiopia with unique flavor profiles and delicious aromas. Our range of coffee focuses on quality, sustainability and customer satisfaction. Experience our selection yourself to find your perfect roast!"
        />
      </Head>
      <div className="flex flex-col justify-center w-full">
        <Navbar white={true} />
        <OfferingsContextWrapper>
          <OfferingsComponent />
        </OfferingsContextWrapper>
      </div>
    </BaseLayout>
  );
};

export default Index;
