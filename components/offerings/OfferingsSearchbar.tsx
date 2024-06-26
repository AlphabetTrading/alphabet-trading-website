import React from "react";

type Props = {
  onChange: (val: string) => void;
};

const OfferingsSearchbar = (props: Props) => {
  return (
    <form className="max-w-xl min-w-sm xl:w-1/3">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary/50 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="Search"
          className="w-full py-2 pl-12 pr-4 placeholder:text-primary/50 text-primary/70 border-2 rounded-md outline-none bg-secondary/10 lg:bg-white focus:bg-secondary/10 focus:border-secondary/50"
        />
      </div>
    </form>
  );
};

export default OfferingsSearchbar;
