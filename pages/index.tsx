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
