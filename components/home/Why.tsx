import Image from "next/image";
import React from "react";

type Props = {};

const Why = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl font-bold my-4">Why Alphabet</h1>
      <div className="flex flex-col bg-[#0A1026]">
        <div className="flex">
          <div className="flex flex-col gap-y-4 w-2/3 p-24 text-white leading-6">
            <h1 className="text-3xl font-semibold">Our Approach</h1>
            <p className="text-lg leading-6">
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
            <p className="text-lg leading-6">
              Our approach is rooted in the principles of sustainability,
              transparency, traceability and the collective economic health of a
              global community like no other.
            </p>
            <p className="text-lg leading-6">
              We deeply care about the relationships we cultivate and the
              connections those create. Relationships are the key to any
              successful venture through our work with our esteemed partners and
              selected suppliers. It’s important for us to build the connection
              with the source and leverage that connection to provide the
              quality and standards while building long term and reliable
              relationships.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-y-2">
            <img
              className="w-full h-full object-cover"
              src="/images/whyalphabet1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#086965]">
        <div className="flex">
          <div className="w-2/3 flex flex-col gap-y-2">
            <img
              className="w-full h-full object-cover"
              src="/images/whyalphabet2.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-4 w-1/3 p-16 text-white">
            <h1 className="text-3xl font-semibold leading-8">
              Commitment to Excellence
            </h1>
            <p className="text-lg leading-6">
              Embracing a sustainability approach means that we act hand in hand
              with the environment and the people we work with. We bear
              responsibility for the environment, the organization and the
              economic livelihood of the people around us.
            </p>
            <p className="text-lg leading-6">
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
