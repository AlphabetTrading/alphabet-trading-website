import React from "react";
import Image from "next/image";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="w-full flex justify-center py-12 lg:pt-24 bg-primary">
      <div className="w-5/6 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
        <div className="w-full lg:w-2/5 flex flex-col gap-y-4">
          <h1 className="w-full lg:w-4/5 text-3xl lg:text-5xl font-bold  text-white">
            Welcome to <span className="text-secondary">Alphabet Trading</span>
          </h1>
          <p className="lg:text-lg text-white">
            Alphabet Trading PLC was formally established in November 2019 by
            Henock Fikru. Our primary focus is on exporting premium agricultural
            goods from Ethiopia. We strongly emphasize on building relationships
            with coffee producers and suppliers in the Southern and Western
            parts of Ethiopia, including the SNNPR (Southern Nations,
            Nationalities, and Peoples&apos; Region), Sidama, and Oromia
            regions.
          </p>
        </div>
        <div className="w-full lg:w-2/5 bg-light_gray_gray/10 relative rounded-3xl lg:mr-12 aspect-3/2">
          <div className="w-full h-full absolute lg:left-12 lg:bottom-12 rounded-3xl overflow-hidden">
            <ImageWithSkeleton
              props={{ fill: true }}
              className="w-full h-full object-cover"
              src="https://alphabettrading.s3.amazonaws.com/images/guji.webp"
              alt="welcome"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
