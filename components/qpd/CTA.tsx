import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="w-full h-[500px] flex justify-center bg-[url('/images/qpd/cta.svg')] bg-cover">
      <div className="w-11/12 sm:w-3/5 lg:w-1/2 h-full flex flex-col justify-center items-center gap-y-3 text-white">
        <h1 className="text-lg lg:text-xl">Are you ready to join us?</h1>
        <h1 className="font-bold text-2xl lg:text-5xl text-center">
          We&apos;re redefining the role of a coffee export company
        </h1>
        <Link href="/contact" target="">
          <div className="border rounded-3xl p-2 px-4 lg:px-8 text-sm lg:text-xl mt-4 hover:bg-primary hover:border-primary">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
