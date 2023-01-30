import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/home/Welcome";
import Why from "../components/home/Why";
import Review from "../components/home/Review";
import Details from "../components/home/Details";
import BaseLayout from "../components/common/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

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
        <video
          autoPlay
          loop
          muted
          className="min-h-[400px] aspect-video object-cover w-screen bg-secondary"
          width="100%"
          preload="auto"
          poster="/images/hero_video_poster.jpg"
        >
          <source src="/alphabet-coffee-v5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Welcome />
        <Why />
        <Details />
        <Review />
      </div>
    </BaseLayout>
  );
}
