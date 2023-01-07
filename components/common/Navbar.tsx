import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="absolute top-0 left-0 w-screen p-6">
      <div className="w-full flex items-center justify-between px-6 pl-10">
        <Link className="z-20" href="/">
          <img src="/images/Component 2.png" />
        </Link>
        <div className="flex gap-x-8 text-md text-white font-bold z-20">
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
            href="/about-us"
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
