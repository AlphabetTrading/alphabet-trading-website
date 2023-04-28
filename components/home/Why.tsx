import Image from "next/image";
import React from "react";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import clsx from "clsx";

type Props = {};

const Why = (props: Props) => {
  const values = [
    {
      id: 1,
      title: "Best Quality Coffee",
      icon: "/icons/new_sustain.svg",
      descriptions:
        "We source our organic and specialty grade coffees from the birthplace of Coffee - Ethiopia, which is known for its strong, bright flavor and distinctive berry aroma. Each crop is hand-selected with the utmost care and attention in order to bring out its unique characteristics ",
    },
    {
      id: 2,
      title: "Meticulous Production",
      icon: "/icons/new_transparency.svg",
      descriptions:
        "Our specialists keep a watchful eye on all phases of production, from the choice of crops and processing to putting our beans into containers for shipment. This guarantees that only highest standards are implemented when it comes to quality assurance and freshness.",
    },
    {
      id: 3,
      title: "Overall Satisfaction",
      icon: "/icons/new_traceability.svg",
      descriptions:
        "Our specialists keep a watchful eye on all phases of production, from the choice of crops and processing to putting our beans into containers for shipment. This guarantees that only highest standards are implemented when it comes to quality assurance and freshness. ",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col mx-auto items-center gap-y-2 w-5/6 md:w-2/3 lg:w-3/5">
          <div className="">
            <h1 className="uppercase text-xs 2k:text-lg 4k:text-xl font-bold text-secondary">
              Alphabet Trading
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl 2k:text-5xl font-bold uppercase">
              We Provide you With
            </h1>
          </div>
          {/* <p className="text-center 2k:text-2xl 4k:text-4xl">
            Lorem ipsum dolor sit amet consectetur. Eu et mattis turpis porta
            pulvinar elementum et dui. Ut arcu morbi lacinia sagittis dui nunc
            ac. Aliquam ipsum egestas eu sagittis elit amet. Nec montes ut
            accumsan mollis nisi et.
          </p> */}
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <div className="w-11/12 sm:w-3/4 md:w-full lg:w-[96%] 2k:w-4/5 grid grid-cols-1 md:grid-cols-3 justify-center place-content-center items-center md:gap-x-8 xl:gap-x-10 px-[1rem] lg:px-24 xl:px-28 mb-16 gap-y-3 text-md font-medium">
            {values.map((value) => {
              return (
                <div
                  key={value.id}
                  className="relative cursor-pointer overflow-hidden w-full h-full flex flex-col justify-center  rounded-[20px] shadow-2xl transition-all duration-200 group "
                >
                  <div className="absolute z-0 bg-secondary/5 animate-animate_circle_out group-hover:animate-animate_circle_in"></div>
                  <div className="p-[1rem] md:p-[2rem] py-10 2k:py-14 4k:py-16  my-[2rem]  relative w-full flex flex-col gap-y-[1rem] items-center justify-center">
                    <img
                      alt={value.title.toLowerCase()}
                      className="w-16 h-16 2k:w-20 2k:h-20 4k:w-24 4k:h-2  animate-rotateY_full_reverse group-hover:animate-rotateY_full_forward"
                      src={value.icon}
                    />
                    <h1 className="text-lg xl:text-xl text-center 2k:text-2xl 4k:text-3xl font-semibold ">
                      {value.title}
                    </h1>
                    <p className="text-sm 2k:text-lg 4k:text-2xl font-normal text-[#565656]  text-center w-11/12 md:w-full h-full ">
                      {value.descriptions}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <h1 className="text-4xl 2k:text-5xl 4k:text-6xl font-bold my-4 2k:my-6">
        Why Alphabet
      </h1>
      <div className="flex flex-col bg-navy">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 2k:grid-cols-5 8k:grid-cols-7">
          <div className="order-2 md:order-1 col-span-2 2k:col-span-3 8k:col-span-4 flex flex-col gap-y-4 p-5  py-8 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-white leading-6">
            <h2 className="text-2xl md:text-3xl 2k:text-4xl 4k:text-5xl font-semibold">
              Our Approach
            </h2>
            <p className="text-sm lg:text-lg 2k:text-2xl 4k:text-3xl leading-5 lg:leading-6">
              Helping the world to discover the finest quality isn’t just a
              one-time task for us, but rather a process. A process in which we
              diligently and consistently invest our time, effort, knowledge and
              insatiable interest in improving all parts of the coffee
              production and export process. We always work to coax and nurture
              the best out of the process. We bring new ideas and practice an
              inclusive approach that enables us to discover, develop and
              deliver quality coffee that benefits everyone from the grower to
              the consumer.
            </p>
            <p className="text-sm lg:text-lg 2k:text-2xl  4k:text-3xl leading-5 lg:leading-6">
              Our approach is rooted in the principles of sustainability,
              transparency, traceability and the collective economic health of a
              global community like no other.
            </p>
            <p className="text-sm lg:text-lg 2k:text-2xl  4k:text-3xl leading-5 lg:leading-6">
              We deeply care about the relationships we cultivate and the
              connections those create. Relationships are the key to any
              successful venture through our work with our esteemed partners and
              selected suppliers. It’s important for us to build the connection
              with the source and leverage that connection to provide the
              quality and standards while building long term and reliable
              relationships.
            </p>
          </div>
          <div className="relative order-1 md:order-2 col-span-1 2k:col-span-2 8k:col-span-3 h-80 4k:h-[40rem] md:h-auto flex flex-col gap-y-2">
            <ImageWithSkeleton
              props={{ fill: true }}
              className="w-full h-full object-cover bg-gray-800"
              src={`https://alphabettrading.s3.amazonaws.com/images/whyalphabet1_flipped.webp`}
              alt="why-alphabet-1"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col bg-[#086965]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 2k:grid-cols-5 ">
          <div className="relative order-1 md:order-1 col-span-2 2k:col-span-3 h-80 md:h-full md:flex flex-col gap-y-2">
            <ImageWithSkeleton
              props={{ fill: true }}
              className="w-full h-full object-cover bg-navy/20"
              src={`https://alphabettrading.s3.amazonaws.com/images/whyalphabet2.webp`}
              alt="why-alphabet-2"
            />
          </div>
          <div className="flex order-1 md:order-2 2k:col-span-2 flex-col gap-y-4 p-5 py-8 sm:p-8 lg:p-12 xl:p-16 4k:p-24 text-white">
            <h2 className="text-2xl xl:text-3xl 2k:text-4xl 4k:text-5xl  font-semibold leading-8">
              Commitment to Excellence
            </h2>
            <p className="text-sm lg:text-lg 2k:text-2xl  4k:text-3xl leading-5 lg:leading-6">
              We strive for nothing less than best-in-class offerings, customer
              service, and convenience in all of our operations. From evaluating
              the quality of beans from our suppliers to ensuring that the
              coffee we ship arrives on time and in excellent condition, we make
              sure every step of the process is handled with utmost care and
              dedication.
            </p>
            <p className="text-sm lg:text-lg 2k:text-2xl  4k:text-3xl leading-5 lg:leading-6">
              Additionally, we are constantly looking for better ways to
              innovate our services and processes to provide the best possible
              experience for all involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
