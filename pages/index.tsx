import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/home/Welcome";
import Why from "../components/home/Why";
import Review from "../components/home/Review";
import Footer from "../components/common/Footer";
import Details from "../components/home/Details";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta
          name="description"
          content="Alphabet is a coffee export firm based in its place of origin. We specialize in discovering, developing and exporting the finest commercial grade coffee and spe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="relative">
        <Navbar white={false} />
        <video autoPlay loop muted className="w-screen" width="100%">
          <source src="/alphabet-coffee-v5.mp4" type="video/mp4" />
        </video>
        <Welcome />
        <Why />
        <Details />
        <Review />
        <Footer />
      </main>
    </>
  );
}
