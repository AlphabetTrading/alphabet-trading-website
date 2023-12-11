import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

type Props = {};

const CTA = (props: Props) => {
  const router = useRouter();
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-[url('/images/home_cta.webp')] bg-cover bg-center relative">
      <div className="w-full h-full absolute inset-0 bg-[#000000]/50 z-10"></div>
      <div className="w-5/6 lg:w-2/3 flex flex-col items-center text-white z-20 gap-y-8">
        <h1 className="text-xl lg:text-3xl">Want to join us?</h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          <span className="text-secondary">Quality</span> Beans. Competitive{" "}
          <span className="text-secondary">Prices</span>.<br /> On-Time
          <span className="text-secondary"> Delivery</span>.
        </h1>
        <div
          onClick={() => router.push("/our-coffee/offerings")}
          className="rounded-full p-2 lg:p-3 px-4 lg:px-6 border-2 hover:scale-105 transition-all duration-300 ease-in-out border-opacity-10 cursor-pointer group relative overflow-hidden"
        >
          <div
            className={clsx(
              "min-w-full  group-hover:flex duration-500 min-h-full ease-in-out z-0 scale-x-[1.5] scale-y-150 -translate-x-[125%] group-hover:translate-x-[5%] translate-y-1/2 group-hover:-translate-y-0  transition-all rounded-full absolute inset-0 ",
              "group-hover:bg-primary"
            )}
          ></div>
          <h1 className="text-lg lg:text-xl group-hover:text-white relative">
            Check Our Offerings
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CTA;
