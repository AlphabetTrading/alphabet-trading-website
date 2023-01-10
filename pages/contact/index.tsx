import Head from "next/head";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaMap, FaMapPin, FaPhone, FaPhoneAlt } from "react-icons/fa";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import ContactForm from "../../components/contact/ContactForm";
import ContactMap from "../../components/contact/ContactMap";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Contact Us - Alphabet Trading PLC</title>
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
      <main>
        <Navbar white />
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-y-3 p-12 px-24 my-12 mt-20">
          <ContactForm />
          <ContactMap />
        </div>
        <div className="grid grid-cols-12 justify-center md:justify-between items-start md:gap-x-3 px-24 md:px-36 mb-16 gap-y-3 text-md font-medium">
          <div className="col-span-12 md:col-span-4 md:row-span-2 gap-x-2 border border-gray-200 p-4 rounded-lg shadow-xl">
            <div className="flex items-start gap-x-2">
              <FaPhoneAlt />
              <div className="flex flex-col items-start gap-y-1">
                <h1 className="text-lg font-semibold">Call Us</h1>
                <div>
                  <h3>Mon - Fri 9:00 a.m - 5:30 p.m,</h3>
                  <h3>Sat 9:00 a.m - 12:00 p.m</h3>
                </div>
                <div className="text-secondary">
                  <h4>(+251) 911261233</h4>
                  <h4>(+251) 118220469</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 gap-x-2 border border-gray-200 p-4 rounded-md shadow-xl">
            <div className="flex gap-x-2">
              <FaMapPin />
              <div className="flex flex-col gap-y-1">
                <h1 className="text-lg font-semibold">Visit Us</h1>
                <div>
                  <h3>Mon - Fri 9:00 a.m - 5:30 p.m,</h3>
                  <h3>Sat 9:00 a.m - 12:00 p.m</h3>
                </div>
                <div className="text-secondary">
                  <h4>Alphabet Trading PLC,</h4>
                  <h4>Bel Amour Bldg 5th Floor</h4>
                  <h4>Addis Ababa, Ethiopia.</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 gap-x-2 border border-gray-200 p-4 rounded-lg shadow-xl">
            <div className="flex gap-x-2">
              <AiOutlineMail />
              <div className="flex flex-col gap-y-1">
                <h1 className="text-lg font-semibold">Mail Us</h1>
                <div>
                  <h3>Mon - Fri 9:00 a.m - 5:30 p.m,</h3>
                  <h3>Sat 9:00 a.m - 12:00 p.m</h3>
                </div>
                <div className="text-secondary">
                  <h4>henock@alphabettrading.com</h4>
                  <h4>orders@alphabetrading.com </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default index;
