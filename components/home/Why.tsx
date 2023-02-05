import Image from "next/image";
import React from "react";

type Props = {};

const Why = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-24">
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
          <div className="w-11/12 sm:w-3/4 md:w-full lg:w-[96%] 2k:w-4/5 grid grid-cols-1 md:grid-cols-3 justify-center place-content-center items-center md:gap-x-8 xl:gap-x-10 px-10 lg:px-24 xl:px-28 mb-16 gap-y-3 text-md font-medium">
            <div className="w-full h-full p-8 py-10 2k:py-14 4k:py-16 flex flex-col my-2 rounded-[20px] shadow-2xl">
              <div className="w-full flex flex-col gap-y-2 2k:gap-y-4 items-center justify-center">
                <img
                  alt="sustainability"
                  className="w-16 h-16 2k:w-20 2k:h-20 4k:w-24 4k:h-24"
                  src="/icons/sustain.svg"
                />
                <h1 className="font-semibold text-center text-lg xl:text-xl 2k:text-2xl 4k:text-3xl">
                  Best Quality Coffee
                </h1>
                <p className="text-sm xl:text-md 2k:text-lg 4k:text-2xl font-normal text-[#565656] text-center w-11/12 md:w-full h-full">
                  We source our organic and specialty grade coffees from the
                  birthplace of Coffee - Ethiopia, which is known for its
                  strong, bright flavor and distinctive berry aroma. Each crop
                  is hand-selected with the utmost care and attention in order
                  to bring out its unique characteristics
                </p>
              </div>
            </div>
            <div className="w-full h-full p-8 py-10 2k:py-14 4k:py-16 flex flex-col my-2 rounded-[20px] shadow-2xl">
              <div className="w-full flex flex-col gap-y-2 2k:gap-y-4 items-center justify-center">
                <img
                  alt="transparency"
                  className="w-16 h-16 2k:w-20 2k:h-20 4k:w-24 4k:h-24"
                  src="/icons/transparency.svg"
                />
                <h1 className="text-lg xl:text-xl text-center 2k:text-2xl 4k:text-3xl font-semibold">
                  Meticulous Production
                </h1>
                <p className="text-sm xl:text-md 2k:text-lg 4k:text-2xl font-normal text-[#565656] text-center w-11/12 md:w-full h-full">
                  Our specialists keep a watchful eye on all phases of
                  production, from the choice of crops and processing to putting
                  our beans into containers for shipment. This guarantees that
                  only highest standards are implemented when it comes to
                  quality assurance and freshness.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-8 py-10 2k:py-14 4k:py-16 flex flex-col my-2 rounded-[20px] shadow-2xl">
              <div className="w-full flex flex-col gap-y-2 2k:gap-y-4 items-center justify-center">
                <img
                  alt="traceability"
                  className="w-16 h-16 2k:w-20 2k:h-20 4k:w-24 4k:h-24"
                  src="/icons/traceability.svg"
                />
                <h1 className="text-lg xl:text-xl 2k:text-2xl 4k:text-3xl text-center font-semibold">
                  Overall Satisfaction
                </h1>
                <p className="text-sm xl:text-md 2k:text-lg 4k:text-2xl font-normal text-[#565656] text-center w-11/12 md:w-full h-full">
                  We proudly offer clients around the globe the finest, freshest
                  coffee beans available. We strive to provide outstanding
                  service and guarantee satisfaction by consistently going above
                  and beyond to ensure all services meet or exceed
                  customers&apos; expectations.
                </p>
              </div>
            </div>
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
            <p className="text-sm md:text-lg 2k:text-2xl 4k:text-3xl leading-5 md:leading-6">
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
            <p className="text-sm md:text-lg 2k:text-2xl  4k:text-3xl leading-5 md:leading-6">
              Our approach is rooted in the principles of sustainability,
              transparency, traceability and the collective economic health of a
              global community like no other.
            </p>
            <p className="text-sm md:text-lg 2k:text-2xl  4k:text-3xl leading-5 md:leading-6">
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
            <Image
              className="w-full h-full object-cover"
              fill
              src="/images/new_whyalphabet1.jpg"
              alt="why-alphabet-1"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col bg-[#086965]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 2k:grid-cols-5">
          <div className="relative order-1 md:order-1 col-span-2 2k:col-span-3 h-80 xl:h-[35rem] 2xl:h-[40rem] 4k:h-[50rem] md:flex flex-col gap-y-2">
            <Image
              className="w-full h-full object-cover"
              fill
              src="/images/new_whyalphabet2.jpg"
              alt="why-alphabet-2"
            />
          </div>
          <div className="flex order-1 md:order-2 2k:col-span-2 flex-col gap-y-4 p-5 py-8 sm:p-8 lg:p-12 xl:p-16 4k:p-24 text-white">
            <h2 className="text-2xl md:text-3xl 2k:text-4xl 4k:text-5xl  font-semibold leading-8">
              Commitment to Excellence
            </h2>
            <p className="text-sm md:text-lg 2k:text-2xl  4k:text-3xl leading-5 md:leading-6">
              We strive for nothing less than best-in-class offerings, customer
              service, and convenience in all of our operations. From evaluating
              the quality of beans from our suppliers to ensuring that the
              coffee we ship arrives on time and in excellent condition, we make
              sure every step of the process is handled with utmost care and
              dedication.
            </p>
            <p className="text-sm md:text-lg 2k:text-2xl  4k:text-3xl leading-5 md:leading-6">
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
