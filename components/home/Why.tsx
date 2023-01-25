import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaMapPin } from "react-icons/fa";

type Props = {};

const Why = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-24">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col mx-auto items-center w-5/6 md:w-2/3 lg:w-3/5">
          <div className="">
            <h4 className="uppercase text-xs font-bold text-secondary">
              Lorem Ipsum
            </h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Lorem ipsum dolor
            </h1>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Eu et mattis turpis porta
            pulvinar elementum et dui. Ut arcu morbi lacinia sagittis dui nunc
            ac. Aliquam ipsum egestas eu sagittis elit amet. Nec montes ut
            accumsan mollis nisi et.
          </p>
        </div>
        <div className="w-full flex justify-center items-center py-2">
          <div className="w-3/4 md:w-full grid grid-cols-1 md:grid-cols-3 justify-center place-content-center items-center md:gap-x-5 px-10 lg:px-24 xl:px-36 mb-16 gap-y-3 text-md font-medium">
            <div className="w-full h-full p-8 py-12 lg:py-20 my-2 rounded-[20px] shadow-xl">
              <div className="w-full flex flex-col gap-y-2 items-center justify-end">
                <img className="w-16 h-16" src="/icons/sustain.svg" />
                <h1 className="text-lg font-medium">Sustainability</h1>
                <p className="text-sm font-light text-center w-11/12 md:w-5/6 lg:w-2/3">
                  Lorem ipsum dolor sit amet consectetur. Dui vivamus eget
                  porttitor nulla quam eget egestas.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-8 py-12 lg:py-20 my-2 rounded-[20px] shadow-xl">
              <div className="w-full flex flex-col gap-y-2 items-center justify-center">
                <img className="w-16 h-16" src="/icons/transparency.svg" />
                <h1 className="text-lg font-medium">Transparency</h1>
                <p className="text-sm font-light text-center w-11/12 md:w-5/6 lg:w-2/3">
                  Lorem ipsum dolor sit amet consectetur. Dui vivamus eget
                  porttitor nulla quam eget egestas.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-8 py-12 lg:py-20 my-2 rounded-[20px] shadow-xl">
              <div className="w-full flex flex-col gap-y-2 items-center justify-center">
                <img className="w-16 h-16" src="/icons/traceability.svg" />
                <h1 className="text-lg font-medium">Traceability</h1>
                <p className="text-sm font-light text-center w-11/12 md:w-5/6 lg:w-2/3">
                  Lorem ipsum dolor sit amet consectetur. Dui vivamus eget
                  porttitor nulla quam eget egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold my-4">Why Alphabet</h1>
      <div className="flex flex-col bg-navy">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="order-2 md:order-1 col-span-2  flex flex-col gap-y-4 p-5  py-8 sm:p-8 md:p-12 lg:p-16 xl:24 text-white leading-6">
            <h1 className="text-2xl md:text-3xl font-semibold">Our Approach</h1>
            <p className="text-sm md:text-lg leading-5 md:leading-6">
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
            <p className="text-sm md:text-lg leading-5 md:leading-6">
              Our approach is rooted in the principles of sustainability,
              transparency, traceability and the collective economic health of a
              global community like no other.
            </p>
            <p className="text-sm md:text-lg leading-5 md:leading-6">
              We deeply care about the relationships we cultivate and the
              connections those create. Relationships are the key to any
              successful venture through our work with our esteemed partners and
              selected suppliers. It’s important for us to build the connection
              with the source and leverage that connection to provide the
              quality and standards while building long term and reliable
              relationships.
            </p>
          </div>
          <div className="relative order-1 md:order-2 col-span-1 h-80 md:h-auto flex flex-col gap-y-2">
            <Image
              className="w-full h-full object-cover"
              fill
              src="/images/whyalphabet1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col bg-[#086965]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="relative order-1 md:order-1 col-span-2 md:flex flex-col gap-y-2">
            <img
              className="w-full h-full object-cover"
              // fill
              src="/images/whyalphabet2.svg"
              alt=""
            />
          </div>
          <div className="flex order-1 md:order-2 flex-col gap-y-4 p-5 py-8 sm:p-8 lg:p-12 xl:p-16 text-white">
            <h1 className="text-2xl md:text-3xl font-semibold leading-8">
              Commitment to Excellence
            </h1>
            <p className="text-sm md:text-lg leading-5 md:leading-6">
              Embracing a sustainability approach means that we act hand in hand
              with the environment and the people we work with. We bear
              responsibility for the environment, the organization and the
              economic livelihood of the people around us.
            </p>
            <p className="text-sm md:text-lg leading-5 md:leading-6">
              We have devised a model where we don’t degrade the contribution of
              others environmentally, economically and socially.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
