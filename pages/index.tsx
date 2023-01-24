import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/home/Welcome";
import Why from "../components/home/Why";
import Review from "../components/home/Review";
import Details from "../components/home/Details";
import BaseLayout from "../components/common/BaseLayout";
import CustomCheckbox from "../components/common/CustomCheckbox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BaseLayout>
      <Navbar white={false} />
      <video
        autoPlay
        loop
        muted
        className="min-h-[400px] aspect-video object-cover w-screen"
        width="100%"
      >
        <source src="/alphabet-coffee-v5.mp4" type="video/mp4" />
      </video>
      <Welcome />
      <Why />
      <Details />
      <Review />
    </BaseLayout>
  );
}
