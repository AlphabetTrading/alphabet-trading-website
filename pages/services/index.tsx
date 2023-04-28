import Head from "next/head";
import React from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import CoffeeTypeItem from "../../components/services/CoffeeTypeItem";
import Image from "next/image";
import coffeeTypesData from "../../data/services.json";
import ImageWithSkeleton from "../../components/common/ImageWithSkeleton";

type Props = {};

const coffeeTypes = coffeeTypesData;

const index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Services - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="From the birthplace of coffee to the conscious consumers, Alphabet engages in exporting Ethiopian specialty coffee. With a wide range of coffee types and quality processing, working in the sector has opened a door in the huge and ever growing world of coffee and we pride ourselves in taking the chance to move forward."
        />
      </Head>
      <div className="flex flex-col justify-center w-full">
        <Navbar white={true} />
        <div className="flex w-full flex-col-reverse lg:flex-row justify-between mt-20 gap-y-3 min-h-[70vh]">
          <div className="w-full lg:w-1/2 xl:1/3 flex flex-col justify-center p-8 lg:px-16 2k:px-20 4k:px-28  gap-y-4">
            <h1 className="text-4xl 2k:text-5xl 4k:text-6xl font-bold">
              Our <span className="text-secondary">Coffee</span> Export
            </h1>
            <p className="font-medium text-md 2k:text-xl 4k:text-3xl leading-5">
              Alphabet is dedicated to providing the best specialty coffee from
              Ethiopia to conscious consumers across the world. From our
              production in the birthplace of coffee, we offer a vast selection
              of varieties and quality products that have allowed us to tap into
              the ever-expanding massive world of coffee. We are proud to be
              part of this great endeavor and look forward to continuing to
              provide quality products.
            </p>
            <p className="font-medium text-md 2k:text-xl 4k:text-3xl leading-5">
              The booming consumer demand for Ethiopian coffee has opened a
              doorway to the remarkable realm of its flavors: floral,
              distinctive and wine-like. Our primary export destinations are the
              United States and Europe.
            </p>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://alphabettrading.s3.amazonaws.com/images/about1.webp')",
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
            }}
            className="relative min-h-full overflow-hidden lg:w-1/2  border-secondary/10 bg-fixed object-cover bg-no-repeat"
          >
            {/* <ImageWithSkeleton
              className="w-full h-full object-cover aspect-square"
              src={`https://alphabettrading.s3.amazonaws.com/images/services1.webp`}
              // blurDataURL="data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg=="
              alt="services"
            // priority
            /> */}
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
      </div>
    </BaseLayout>
  );
};

export default index;
