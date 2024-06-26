import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
type Props = {
  expanded: false | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
  title: string;
  descriptions: string[];
  index: number;
};

const FaqItem = ({
  title,
  expanded,
  setExpanded,
  descriptions,
  index,
}: Props) => {
  const isOpen = index === expanded;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="flex flex-col w-full shadow-lg"
    >
      <button
        aria-label={`faq-${index + 1}`}
        className="focus:outline-none"
        onClick={() => setExpanded(isOpen ? false : index)}
      >
        <div className="flex flex-row justify-between items-center gap-2 text-xl font-semibold text-[#3D3D3D] hover:bg-[#F6F6FC] p-6  text-start">
          <h1>{title}</h1>
          <svg
            className={clsx("h-8 w-8", isOpen ? "rotate-180" : "")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={clsx(
            "max-h-0 overflow-hidden duration-300",
            isOpen ? "max-h-fit p-4 px-10 shadow-md" : ""
          )}
        >
          <div className="bg-white flex flex-col w-full h-fit border-l-4 border-secondary p-4 gap-y-4">
            {descriptions.map((desc, index) => {
              return (
                <h1
                  key={index}
                  className="text-start text-sm md:text-md font-semibold tracking-wide text-black/70"
                >
                  {desc}
                </h1>
              );
            })}
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default FaqItem;
