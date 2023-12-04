import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
          className="rounded-full p-2 lg:p-4 px-4 lg:px-8 border cursor-pointer"
        >
          <h1 className="text-lg lg:text-2xl">Check Our Offerings</h1>
        </div>
      </div>
    </div>
  );
};

export default CTA;
