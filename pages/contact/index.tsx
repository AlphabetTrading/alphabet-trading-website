import Head from "next/head";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaMap, FaMapPin, FaPhone, FaPhoneAlt } from "react-icons/fa";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import ContactForm from "../../components/contact/ContactForm";
import ContactMap from "../../components/contact/ContactMap";

type Props = {};

const index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Contact Us - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="Regardless of your location, our team is always available to answer any questions that you may have regarding our products or orders. You can come straight to our office or Get in touch by telephone, email or use the contact form and we’ll be more than happy to help!"
        />
      </Head>
      <div className="flex flex-col w-full items-center xl:w-11/12">
        <Navbar white />
        <div className="w-full flex flex-col lg:flex-row items-center  lg:justify-center justify-evenly gap-y-3 p-5 lg:p-12 xl:px-16 mb-4 mt-20">
          <ContactForm />
          <ContactMap />
        </div>
        <div className="w-full md:w-5/6 lg:w-full xl:w-11/12 flex justify-center items-center py-2">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center place-content-center items-center md:gap-x-5 px-10 mb-16 gap-y-3 text-md font-medium">
            <div className="h-full w-full  gap-x-2 p-4 px-8 lg:py-6 rounded-[20px] shadow-2xl">
              <div className="flex items-start gap-x-2">
                <FaPhoneAlt className="mt-1" size={24} />
                <div className="flex flex-col items-start text-sm gap-y-1">
                  <h1 className="text-xl font-bold">Call Us</h1>
                  <div className="leading-5">
                    <h2>Mon - Fri 9:00 a.m - 5:30 p.m,</h2>
                    <h2>Sat 9:00 a.m - 12:00 p.m</h2>
                  </div>
                  <div className="text-secondary">
                    <h2>(+251) 911261233</h2>
                    <h2>(+251) 118220469</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full gap-x-2 p-4 px-8 lg:py-6 rounded-[20px] shadow-2xl">
              <div className="flex gap-x-2">
                <FaMapPin size={24} className="mt-1" />
                <div className="flex flex-col text-sm gap-y-1">
                  <h1 className="text-xl font-bold">Visit Us</h1>
                  <div className="leading-5">
                    <h2>Mon - Fri 9:00 a.m - 5:30 p.m,</h2>
                    <h2>Sat 9:00 a.m - 12:00 p.m</h2>
                  </div>
                  <div className="text-secondary">
                    <h2>Alphabet Trading PLC,</h2>
                    <h2>Bel Amour Bldg 5th Floor</h2>
                    <h2>Addis Ababa, Ethiopia.</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full gap-x-2 p-8 lg:py-6 rounded-[20px] shadow-2xl">
              <div className="flex gap-x-2">
                <AiOutlineMail size={24} className="mt-1" />
                <div className="flex flex-col text-sm gap-y-1">
                  <h1 className="text-xl font-bold">Mail Us</h1>
                  <div className="leading-5">
                    <h2>Mon - Fri 9:00 a.m - 5:30 p.m,</h2>
                    <h2>Sat 9:00 a.m - 12:00 p.m</h2>
                  </div>
                  <div className="text-secondary">
                    <h2>henock@alphabettrading.com</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default index;
