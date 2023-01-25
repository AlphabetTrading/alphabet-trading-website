import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  onChange: (val: string) => void;
};

const Searchbar = (props: Props) => {
  return (
    <form className="max-w-xl w-2/3 md:w-1/3 lg:w-1/4 px-4">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
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
          autoFocus
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="Search"
          className="w-full py-2 pl-12 pr-4 placeholder:text-[#808080] text-black/80 border rounded-md outline-none bg-secondary/20 focus:bg-secondary/10 focus:border-secondary"
        />
      </div>
    </form>
  );
};

export default Searchbar;
