import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  white: boolean;
};

const Navbar = ({ white }: Props) => {
  return (
    <nav className="absolute top-0 left-0 w-full p-6">
      <div className="w-full flex items-center justify-between px-6 pl-10">
        <Link className="z-20" href="/">
          <div className="flex w-52 gap-x-2">
            <div className="flex justify-center">
              {white ? (
                <img className="w-full h-full" src="/logo.svg" alt="" />
              ) : (
                <img className="w-full h-full" src="/logo_white.svg" alt="" />
              )}
            </div>
            <h1
              className={clsx(
                "text-xl font-normal tracking-wide",
                white ? "" : "text-white"
              )}
            >
              <span className="text-2xl font-DM_Serif">Alphabet </span>Trading
            </h1>
          </div>
        </Link>
        <div
          className={clsx(
            "flex gap-x-8 text-md font-semibold z-20",
            white ? "" : "text-white"
          )}
        >
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4 cusror-pointer"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Services
          </Link>
          <Link
            href="/offerings"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Offerings
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Contact
          </Link>
          <Link href="/faq" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            FAQs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
