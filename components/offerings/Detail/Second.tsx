import React from "react";

type Props = {};

const Second = (props: Props) => {
  return (
    <div className="bg-navy w-full h-screen text-white p-24">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-y-6">
        <div className="">
          <h1 className="uppercase text-xs 2k:text-lg 4k:text-xl font-bold text-secondary">
            Lorem Ipsum
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl 2k:text-5xl font-bold uppercase">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </h1>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A error,
          voluptas ducimus quam exercitationem nam fuga quas officia mollitia
          voluptatem est veniam corrupti aspernatur inventore iusto ab!
          Repellendus, ab dolores.
        </p>
      </div>
    </div>
  );
};

export default Second;
