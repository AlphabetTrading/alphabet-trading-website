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
      <div className="flex flex-col">
        <Navbar white />
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-y-3 p-5 lg:p-12 xl:px-20 mb-4 mt-20">
          <ContactForm />
          <ContactMap />
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center place-content-center items-center md:gap-x-5 px-10 lg:px-24 mb-16 gap-y-3 text-md font-medium">
            <div className="h-full w-full  gap-x-2 p-4 px-8 lg:py-6 rounded-[20px] shadow-2xl">
              <div className="flex items-start gap-x-2">
                <FaPhoneAlt className="mt-1" size={24} />
                <div className="flex flex-col items-start text-sm gap-y-1">
                  <h1 className="text-xl font-bold">Call Us</h1>
                  <div className="leading-5">
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
            <div className="h-full w-full gap-x-2 p-4 px-8 lg:py-6 rounded-[20px] shadow-2xl">
              <div className="flex gap-x-2">
                <FaMapPin size={24} className="mt-1" />
                <div className="flex flex-col text-sm gap-y-1">
                  <h1 className="text-xl font-bold">Visit Us</h1>
                  <div className="leading-5">
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
            <div className="h-full w-full gap-x-2 p-8 lg:py-6 rounded-[20px] shadow-2xl">
              <div className="flex gap-x-2">
                <AiOutlineMail size={24} className="mt-1" />
                <div className="flex flex-col text-sm gap-y-1">
                  <h1 className="text-xl font-bold">Mail Us</h1>
                  <div className="leading-5">
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
        </div>
      </div>
    </BaseLayout>
  );
};

export default index;
