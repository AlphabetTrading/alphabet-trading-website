import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type Review = {
  review: string;
  name: string;
  role: string;
  company: string;
};

type Props = {
  reviews: Review[];
};

const reviews: Review[] = [
  {
    name: "Tim Chapdelaine",
    role: "GM",
    company: "Trabocca USA",
    review:
      "Alphabet coffee has become a more reliable and professional partner we could have imagined for a new company. Their ability to produce and ship quality as specified, promptly and accurately surpasses many more experienced companies. We also have navigated challenges quickly and effectively. How impressive the success of this new company has been in navigating the challenges in Ethiopia and globally with such poise and success from 2020 to 2022 is hard to overstate.",
  },
  // {
  //   name: "Kaleb Mesfin",
  //   role: "Web Developer",
  //   company: "A2SV",
  //   review:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
];

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const onPrevReview = () => {
    const isFirst = currentReview === 0;
    const newIndex = isFirst ? reviews.length - 1 : currentReview - 1;
    setCurrentReview(newIndex);
  };

  const onNextReview = () => {
    const isLast = currentReview === reviews.length - 1;
    const newIndex = isLast ? 0 : currentReview + 1;
    setCurrentReview(newIndex);
  };

  return (
    <div className="bg-[#086965]/20 p-4 relative">
      <img
        className="absolute left-1 top-1 w-36 h-36"
        src="/images/review-quote.svg"
        alt=""
      />
      <h1 className="text-4xl text-center font-semibold my-4">
        Customer Reviews
      </h1>
      <div className="flex items-center justify-evenly px-20">
        <div
          onClick={onPrevReview}
          className="rounded-full bg-white p-2 cursor-pointer"
        >
          <FaChevronLeft size={28} color="red" />
        </div>
        <div className="flex flex-col gap-y-2 items-center bg-white p-12 m-6 px-20 mx-20 transform duration-500">
          <p className="text-center text-md italic">
            {reviews[currentReview].review}
          </p>
          <div className="flex flex-col items-center mt-6 text-center">
            <h1 className="font-bold text-lg">{reviews[currentReview].name}</h1>
            <h3>
              {reviews[currentReview].role}, {reviews[currentReview].company}
            </h3>
          </div>
        </div>
        <div
          onClick={onNextReview}
          className="rounded-full bg-white p-2 cursor-pointer"
        >
          <FaChevronRight size={28} color="red" />
        </div>
      </div>
    </div>
  );
};

export default Review;
