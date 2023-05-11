import React from "react";

type Props = {};

const LastRemarks = (props: Props) => {
  return (
    <div className="bg-[url('/images/last_remarks.svg')] flex w-full h-screen text-white p-24">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-y-6">
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
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-y-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nam ut
          iusto vero, quam numquam voluptas, deleniti id molestias quis rerum
          deserunt vel molestiae. Totam earum consequatur deleniti quidem ea
          molestias ut facere nemo unde debitis minima fugit, nihil nobis, animi
          neque! Quod soluta magni illum quaerat debitis deleniti inventore quam
          dignissimos minus accusantium repellendus impedit animi blanditiis
          mollitia corporis rerum, id suscipit, distinctio consectetur
          laudantium quae. Assumenda quam in reiciendis. Cum, ducimus. Autem
          exercitationem a iure! Perspiciatis quidem mollitia veniam provident
          odit atque est sint, qui fugit ipsa, deserunt ad delectus, nihil eius
          eum in autem odio quae perferendis!
        </p>
      </div>
    </div>
  );
};

export default LastRemarks;
