import React, { useRef } from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import { SupplyChainStep } from "../../../pages/try";
import Image from "next/image";

type Props = {
  step: SupplyChainStep;
  current: number;
  total: number;
};
const SupplyChainItem = ({ step, current, total }: Props) => {
  return (
    <motion.section className="w-full h-full flex justify-center items-center relative snap-center">
      <motion.div className="w-full h-full flex md:justify-between items-center relative max-h-screen md:max-h-screen overflow-hidden">
        <div className="relative w-1/2 min-h-full h-screen hidden md:block  rounded-r-2xl">
          <Image
            fill
            className="absolute w-full h-full object-cover"
            src={`https://alphabettrading.s3.amazonaws.com/images/guji.webp`}
            alt="A London skyscraper"
          />
        </div>
        <div className="flex items-center w-10 h-full relative py-10">
          <Timeline current={current} total={total} />
        </div>
        <motion.div className="flex flex-col w-2/5 gap-y-2 pr-8">
          <h1 className="text-4xl font-extrabold">{step.title}</h1>
          <div className="h-0.5 w-1/2 bg-primary/20"></div>
          <h1 className="mb-2 font-semibold">
            Location: <span className="text-[#F2A40C]">Ethiopian, Guji</span>
          </h1>
          {step.description.map((description: string, index: number) => {
            return <p key={index}>{description}</p>;
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SupplyChainItem;
