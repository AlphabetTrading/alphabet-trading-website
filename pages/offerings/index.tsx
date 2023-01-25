import Head from "next/head";
import React from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import { OfferingsContextWrapper } from "../../context/OfferingsContext";
import OfferingsComponent from "../../components/offerings/Offerings";

type Props = {};

const Index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Offerings - Alphabet Trading PLC</title>
      </Head>
      <Navbar white={true} />
      <OfferingsContextWrapper>
        <OfferingsComponent />
      </OfferingsContextWrapper>
    </BaseLayout>
  );
};

export default Index;
