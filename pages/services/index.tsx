import Head from "next/head";
import React from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import CoffeeTypeItem from "../../components/services/CoffeeTypeItem";
import Image from "next/image";
import coffeeTypesData from "../../data/services.json";

type Props = {};

const coffeeTypes = coffeeTypesData;

const index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Services - Alphabet Trading PLC</title>
      </Head>
      <>
        <Navbar white={true} />
        <div className="flex w-full flex-col-reverse lg:flex-row justify-between my-28 lg:my-40  gap-y-3 ">
          <div className="w-full lg:w-1/2 xl:1/3 flex flex-col justify-center p-8 lg:px-16 2k:px-20 4k:px-28  gap-y-4">
            <h1 className="text-4xl 2k:text-5xl 4k:text-6xl font-bold">
              Our <span className="text-secondary">Coffee</span> Export
            </h1>
            <p className="font-semibold text-md 2k:text-xl 4k:text-3xl leading-5">
              From the birthplace of coffee to the conscious consumers, Alphabet
              engages in exporting Ethiopian specialty coffee. With a wide range
              of coffee types and quality processing, working in the sector has
              open a door in the huge and ever growing world of coffee and we
              pride ourselves in taking the chance to move forward.
            </p>
            <p className="font-semibold text-md 2k:text-xl 4k:text-3xl leading-5">
              The high consumer demand for Ethiopian coffee open us a door to
              that world of wonder, in which our floral, distinctive and winy
              flavors of coffee have displayed. Our main export destinations are
              USA and Europe.
            </p>
          </div>
          <div className="relative min-h-[450px] xl:h-[20rem] 2k:h-[25rem] 4k:h-[45rem] ml-4 overflow-hidden lg:w-1/2 rounded-l-full border-[16px] border-r-0 border-secondary/10">
            <Image
              fill
              className="w-full h-full object-cover aspect-square"
              src="/images/services1.svg"
              alt="services"
              priority
            />
          </div>
        </div>
        <div>
          {coffeeTypes.map((coffeeType: any, index: number) => {
            return (
              <CoffeeTypeItem
                key={index}
                index={index}
                coffeeType={coffeeType}
              />
            );
          })}
        </div>
      </>
    </BaseLayout>
  );
};

export default index;
