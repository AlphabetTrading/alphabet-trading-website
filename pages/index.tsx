import React from "react";
import Head from "next/head";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/home/Welcome";
import Why from "../components/home/Why";
import Review from "../components/home/Review";
import Details from "../components/home/Details";
import BaseLayout from "../components/common/BaseLayout";
import HeroVideo from "../components/home/HeroVideo";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>
          Alphabet Trading PLC | #1 Coffee Trading Company in Ethiopia -
          Alphabet Trading PLC
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
        <Why />
        <CTA />
        <Details />
        <Review />
      </div>
    </BaseLayout>
  );
}
