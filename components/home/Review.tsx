import React, { useState } from "react";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="bg-[#086965]/20 min-h-[400px] md:min-h-[500px] overflow-hidden relative py-8">
      <div className="absolute w-full h-full z-10">
        <img
          className="absolute left-1 top-1  w-36 h-36"
          src="/images/review-quote.svg"
          alt=""
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
        <h1 className="text-4xl text-center font-semibold my-4">
          Customer Reviews
        </h1>
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
