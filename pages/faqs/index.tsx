import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import FaqItem from "../../components/faq/FaqItem";
import Searchbar from "../../components/faq/Searchbar";
import useDebounce from "../../hooks/useDebounce";
import { AnimatePresence } from "framer-motion";
import faqsData from "../../data/faqs.json";
import Image from "next/image";
type Props = {};
type FaqType = {
  title: string;
  description: string;
};
const faqs: FaqType[] = faqsData;

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
        <meta
          name="description"
          content="You will find answers to some of our most frequently asked questions about Alphabet Trading PLC."
        />
      </Head>
      <>
        <Navbar white />
        <div className="flex flex-col w-full h-full items-center justify-center mt-28 gap-y-6">
          <div className="relative flex items-center justify-center w-full h-56 md:h-60 lg:h-72">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center">
              Frequently <span className="text-secondary">Asked Questions</span>
            </h1>

            <Image
              fill
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
          <div className="flex flex-col w-11/12 md:w-3/4 lg:w-2/3 xl:w-3/5 2k:w-1/2 4k:w-1/3 gap-y-5 mb-24 min-h-96">
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
