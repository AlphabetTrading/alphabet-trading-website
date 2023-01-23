import Image from "next/image";
import React from "react";

type Props = {};

const Why = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
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
