import { motion, useScroll } from "framer-motion";
import SupplyChainItem from "./SupplyChainItem";
import React, { useRef, useState, useEffect } from "react";
import Timeline from "./Timeline";
import { SupplyChainStep } from "../../../pages/try";

type Props = {
  steps: SupplyChainStep[];
  current: number;
};

export const SupplyChain = ({ steps, current }: Props) => {
  return (
    <div className="relative w-full">
      <motion.div className="w-full snap-center min-h-screen h-screen relative">
        {/* <div className="w-10 h-full absolute top-1 left-[55%] -translate-x-1/2"> */}
        {/* </div> */}
        {/* <div className="w-10 h-full absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 py-10">
          <Timeline current={current} total={steps.length} />
        </div> */}

        {steps.map((step: SupplyChainStep, index: number) => (
          <SupplyChainItem
            key={index}
            step={step}
            current={current}
            total={steps.length}
          />
        ))}
      </motion.div>
    </div>
  );
};
