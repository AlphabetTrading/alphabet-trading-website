import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 800 : -800,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },

  exit: (direction: number) => {
    return {
      x: direction > 0 ? -800 : 800,
      opacity: 0,
    };
  },
};

export type Review = {
  review: string;
  name: string;
  role: string;
  company: string;
};

const reviews: Review[] = [
  {
    name: "Tim Chapdelaine",
    role: "GM",
    company: "Trabocca USA",
    review:
      "Alphabet coffee has become a more reliable and professional partner we could have imagined for a new company. Their ability to produce and ship quality as specified, promptly and accurately surpasses many more experienced companies. We also have navigated challenges quickly and effectively. How impressive the success of this new company has been in navigating the challenges in Ethiopia and globally with such poise and success from 2020 to 2022 is hard to overstate.",
  },
  {
    name: "Kaleb Mesfin",
    role: "Web Developer",
    company: "A2SV",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === reviews.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(reviews.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-full px-2 md:px-4 flex justify-center items-center min-h-[24rem] md:min-h-[24rem] overflow-hidden">
        <button
          id="prev-button"
          aria-label="prev-button"
          type="button"
          onClick={prevStep}
          className="rounded-full bg-white p-2 cursor-pointer  drop-shadow-md shadow-lg"
        >
          <FaChevronLeft
            className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"
            color="#F2A40C"
          />
        </button>
        <div className="relative w-full lg:w-4/5 xl:w-3/4 4k:w-1/2 max-h-[500px] min-h-[450px] sm:max-h-[400px] mt-6 sm:min-h-[350px] overflow-hidden gap-x-1 sm:gap-x-2 flex justify-center items-center mx-2 sm:mx-5">
          <AnimatePresence>
            <motion.div
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              transition={{ duration: 1 }}
              key={reviews[index].name}
              custom={direction}
              className="absolute w-full h-full inset-0 flex flex-col gap-y-5 rounded-lg items-center justify-center bg-white p-7 md:p-12 md:px-20 shadow-t-2xl"
            >
              <p className="text-center text-sm md:text-md lg:text-lg 2k:text-xl 4k:text-2xl">
                {reviews[index].review}
              </p>
              <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-md md:text-lg 2k:text-2xl 4k:text-3xl">
                  {reviews[index].name}
                </h1>
                <h1 className="text-sm md:text-md lg:text-lg 2k:text-xl 4k:text-2xl">
                  {reviews[index].role}, {reviews[index].company}
                </h1>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          id="next-button"
          aria-label="next-button"
          onClick={nextStep}
          className="rounded-full bg-white p-2 cursor-pointer drop-shadow-md shadow-lg"
        >
          <FaChevronRight
            className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"
            color="#F2A40C"
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
