import Head from "next/head";
import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import FaqItem from "../../components/faq/FaqItem";
import Searchbar from "../../components/faq/Searchbar";

type Props = {};

const faqs = [
  {
    title: "Where do you get your coffees from?",
    description:
      "Yirgachefe, Guji, Sidama, Gedeb and Limu are the five region in Ethiopia that we source our coffee from",
  },
  {
    title: "Are your coffees traceable?",
    description:
      "Every stage of our process is traceable, allowing us to identify the growers and confirm where each coffee was harvested, processed, and stored. Our traceability approach enables the coffee supply chain to appreciate the effort that each producer puts forward.",
  },
  {
    title: "What do you do differently?",
    description:
      "We deliver what we promise to deliver. We value open communication and we are dedicated to provide exceptional service and unwavering quality.",
  },
  {
    title: "What did buyers say about Alphabet?",
    description:
      "Alphabet coffee has become a more reliable and professional partner we could have imagined for a new company. Their ability to produce and ship quality as specified, promptly and accurately surpasses many more experienced companies. We also have navigated challenges quickly and effectively. How impressive the success of this new company has been in navigating the challenges in Ethiopia and globally with such poise and success from 2020 to 2022 is hard to overstate.",
  },
  {
    title: "Do you ship everywhere?",
    description:
      "Until now, we have been able to export our coffees to USA, Korea, Germen, Belgium, Australia and Japan, with the goal of expanding our destinations.",
  },
  {
    title: "How can I get in touch with you?",
    description:
      "You can get in touch with us via email- Henock@alphabettrading.com or contact us through the phone via +251 911 26 12 33.",
  },
];
const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>FAQs - Alphabet Trading PLC</title>
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
        <Navbar white />
        <div className="flex flex-col w-full h-full items-center justify-center mt-28 gap-y-6">
          <div className="relative flex items-center justify-center w-full h-72">
            <h1 className="text-6xl font-bold z-10">
              Frequently <span className="text-secondary">Asked Questions</span>
            </h1>

            <img
              className="absolute m-auto left-0 right-0 top-0 bottom-0 opacity-25 z-[5]"
              src="/images/question_mark.svg"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col gap-y-2 justify-center items-center text-[#555555]">
              <h1 className="text-3xl font-bold">Help Center</h1>
              <p className="w-2/3 text-center text-lg font-semibold">
                You can get in touch with us via email{" "}
                <span className="text-secondary">
                  Henock@alphabettrading.com
                </span>{" "}
                or contact us through the phone via{" "}
                <span className="text-secondary">+251 911 26 12 33</span>
              </p>
            </div>
          </div>
          <Searchbar />
          <div className="flex flex-col w-2/3 gap-y-5 mb-24">
            {faqs.map((faq: any, index: number) => {
              return (
                <FaqItem
                  key={index}
                  title={faq.title}
                  description={faq.description}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default index;
