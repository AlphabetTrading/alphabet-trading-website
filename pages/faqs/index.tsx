import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import FaqItem from "../../components/faq/FaqItem";
import Searchbar from "../../components/faq/Searchbar";
import useDebounce from "../../hooks/useDebounce";
import { AnimatePresence } from "framer-motion";

type Props = {};
type FaqType = {
  title: string;
  description: string;
};
const faqs: FaqType[] = [
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

const FAQsPage = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState<FaqType[]>(faqs);
  const handleChange = (query: string) => {
    setSearchQuery(query);
  };
  const debouncedSearchText = useDebounce(searchQuery, 100);

  const filterFaqs = useCallback(() => {
    if (debouncedSearchText) {
      const filtered = faqs.filter((faq) => {
        return (
          faq.title
            .toLowerCase()
            .includes(debouncedSearchText.trim().toLowerCase()) ||
          faq.description
            .toLowerCase()
            .includes(debouncedSearchText.trim().toLowerCase())
        );
      });
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(faqs);
    }
  }, [searchQuery, debouncedSearchText]);

  useEffect(() => {
    filterFaqs();
  }, [filterFaqs]);

  return (
    <BaseLayout>
      <Head>
        <title>FAQs - Alphabet Trading PLC</title>
      </Head>
      <>
        <Navbar white />
        <div className="flex flex-col w-full h-full items-center justify-center mt-28 gap-y-6">
          <div className="relative flex items-center justify-center w-full h-56 md:h-60 lg:h-72">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold z-10">
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
              <p className="w-2/3 text-center text-base md:text-lg font-semibold">
                You can get in touch with us via email{" "}
                <span className="text-secondary">
                  Henock@alphabettrading.com
                </span>{" "}
                or contact us through the phone via{" "}
                <span className="text-secondary">+251 911 26 12 33</span>
              </p>
            </div>
          </div>
          <Searchbar onChange={handleChange} />
          <div className="flex flex-col w-11/12 md:w-3/4 lg:w-2/3 gap-y-5 mb-24 min-h-96">
            <AnimatePresence>
              {filteredFaqs.map((faq: FaqType, index: number) => {
                return (
                  <FaqItem
                    key={faq.title}
                    title={faq.title}
                    description={faq.description}
                    index={index}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </>
    </BaseLayout>
  );
};

export default FAQsPage;
