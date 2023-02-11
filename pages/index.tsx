import Head from "next/head";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/home/Welcome";
import Why from "../components/home/Why";
import React, { useState, useEffect } from "react";
import Review from "../components/home/Review";
import Details from "../components/home/Details";
import BaseLayout from "../components/common/BaseLayout";
import HeroVideo from "../components/home/HeroVideo";

export default function Home() {
  return (
    <BaseLayout>
      <Navbar white={false} />
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
      <div className="flex flex-col justify-center w-full">
        <HeroVideo />
        <Welcome />
        <Why />
        <Details />
        <Review />
      </div>
    </BaseLayout>
  );
}
