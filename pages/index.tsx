import React from "react";
import Head from "next/head";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/home/Welcome";
import Why from "../components/home/Why";
import Review from "../components/home/Review";
import Details from "../components/home/Details";
import BaseLayout from "../components/common/BaseLayout";
import HeroVideo from "../components/home/HeroVideo";
import Provision from "../components/home/Provision";
import Commitment from "../components/home/Commitment";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>
          Alphabet Trading PLC | The Finest Selection of Coffee Beans from the
          Birth Place - Alphabet Trading PLC
        </title>
        <meta
          name="description"
          content="Alphabet is a coffee export firm based in its place of origin. We specialize in discovering, developing and exporting the finest commercial grade coffee and species"
        />
      </Head>
      <Navbar white={false} />
      <div className="flex flex-col justify-center w-full">
        <HeroVideo />
        <Welcome />
        <Provision />
        <Details />
        <CTA />
        <Commitment />
        <Review />
      </div>
    </BaseLayout>
  );
}
