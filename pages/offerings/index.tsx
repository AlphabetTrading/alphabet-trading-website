import Head from "next/head";
import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import OfferingsItem, {
  Offering,
} from "../../components/offerings/OfferingsItem";

type Props = {};

const offerings: Offering[] = [
  {
    type: "Washed Yirgacheeffee Idedo",
    grade: "G-1",
    location: "Southern Region, Ethiopia",
    availability: "Stock",
  },
  {
    type: "Washed Yirgacheeffee Idedo",
    grade: "G-2",
    location: "Southern Region, Ethiopia",
    availability: "Stock",
  },
];

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Offerings - Alphabet Trading PLC</title>
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
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Navbar white={true} />
        <div className="w-full flex flex-col justify-center items-center gap-y-3 mt-28 p-12 md:p-24 bg-secondary/10">
          <h1 className="text-4xl font-semibold">
            Our <span className="text-secondary">Coffee</span> Export
          </h1>
          <p className="w-full md:w-1/2 text-center font-semibold">
            Yirgacheffe, Guji, Sidama, Gedeb and Limu are the five regions in
            Ethiopia that Alphabet Coffee sources its coffee from.
          </p>
          <div className="flex w-full justify-start mt-8 text-xs md:text-sm lg:text-md font-semibold">
            <div className="w-1/12"></div>
            <div className="w-3/12 flex items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Coffee Type</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
            <div className="w-1/12 flex items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Grade</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
            <div className="w-3/12 flex items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Location</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
            <div className="w-2/12 flex items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Availability</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
            <div className="w-2/12">
              <h2>Request Sample</h2>
            </div>
          </div>
          {offerings.map((offering: Offering, index: number) => {
            return <OfferingsItem key={index} offering={offering} />;
          })}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default index;
