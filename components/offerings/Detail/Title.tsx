import React from "react";
import Image from "next/image";

type Props = {};

const Title = (props: Props) => {
  return (
    <div className="w-full h-screen min-h-[600px]">
      <div className="w-3/4 h-full relative">
        <Image
          fill
          src={`https://alphabettrading.s3.amazonaws.com/images/yirgacheffe.webp`}
          alt=""
        />
        <div className="w-1/2 h-fit absolute top-1/2 -right-1/4 -translate-y-1/2 flex flex-col justify-center items-start gap-y-2 bg-secondary text-white p-10 py-14">
          <h1 className="text-start text-5xl font-DM_Serif">
            Washed Yirgacheffe - Idido
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            officiis aliquid, laboriosam voluptatum debitis magnam dolor labore
            et porro consequatur, totam voluptatibus provident tempora iure nam
            ut modi mollitia non vero quas quam? Eius incidunt minima molestiae
            officiis laborum, fugit nobis distinctio iste, nemo nisi non quidem
            repudiandae animi reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
