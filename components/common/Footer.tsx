import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const getYear = () => {
  return new Date().getFullYear().toString();
};

const Footer = (props: Props) => {
  return (
    <footer className=" bg-[#0A1026]">
      <div className="flex items-center p-5 sm:p-8 text-white py-14">
        <div className="w-full flex flex-col items-center justify-start md:grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
          <div className="flex flex-col items-center justify-center col-span-2 md:col-span-3 gap-x-4 h-full">
            <div className="flex items-center justify-center gap-x-3">
              <img
                className="w-2/3"
                src="/Alphabet_Logo_White.svg"
                alt="alphabet logo"
              />
            </div>
            <div className="w-64 my-2">
              <p className="text-center text-sm text-[#AEAEAE]">
                The Finest Selection of Coffee Beans from the Birth Place
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-2 flex flex-col items-start justify-start gap-y-2 h-full">
            <h1 className="text-xl">Quick Links</h1>
            <div className="flex flex-col gap-y-2 text-[#AEAEAE] items-center md:items-start w-full">
              <ul className="flex gap-x-3 flex-col text-center md:text-start gap-y-2 cursor-pointer">
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/our-coffee/origins">Origins</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/our-coffee/offerings">Offerings</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/faqs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-3 xl:col-span-2 items-center md:items-start flex-1 md:flex-auto h-full flex flex-col  gap-y-3 text-[#AEAEAE]">
            <h1 className="text-xl text-start text-white">Contact</h1>
            <div className="flex items-center sm:gap-x-2">
              <FaPhoneAlt />
              <div className="text-sm flex flex-col">
                <a
                  href="tel:+251911261233"
                  className="text-sm hover:text-white hover:font-semibold transition duration-200"
                >
                  +251 911 261233
                </a>
                <a
                  href="tel:+251118220469"
                  className="text-sm hover:text-white hover:font-semibold transition duration-200"
                >
                  +251 118220469
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-1 sm:gap-x-2">
              <AiOutlineMail />
              <div className="text-sm flex flex-col">
                <a
                  className="text-base break-words hover:text-white hover:font-semibold transition duration-200"
                  href="mailto:henock@alphabettrading.com"
                >
                  henock@alphabettrading.com
                </a>
                <a
                  className="text-base break-words hover:text-white hover:font-semibold transition duration-200"
                  href="mailto:info@alphabettrading.com "
                >
                  info@alphabettrading.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-10 md:col-span-10 lg:col-span-2 gap-y-2 py-2 flex flex-col justify-start items-center w-full h-full">
            <h1 className="text-xl text-center w-full">Follow Us</h1>
            <div className="flex gap-x-4 w-full justify-center">
              <Link
                href="https://www.linkedin.com/company/alphabet-trading"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  className="w-8 h-8 md:w-10 md:h-10 hover:scale-105 transition-all duration-200 ease-in-out"
                />
              </Link>
              <Link
                href="https://twitter.com/AlphabeTrading"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="/icons/twitter.svg"
                  alt="twitter"
                  className="w-8 h-8 md:w-10 md:h-10 hover:scale-105 transition-all duration-200 ease-in-out"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@AlphabetTrading"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="/icons/youtube.svg"
                  alt="youtube"
                  className="w-8 h-8 md:w-10 md:h-10 hover:scale-105 transition-all duration-200 ease-in-out"
                />
              </Link>
              <Link
                href="https://www.instagram.com/alphabettradingplc/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="/icons/instagram.svg"
                  alt=""
                  className="w-8 h-8 md:w-10 md:h-10 hover:scale-105 transition-all duration-200 ease-in-out"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#086965] py-2 text-center contrast-100 text-gray-200">
        Copyright <span className="contrast-100">© {getYear()}</span> Alphabet
        Trading PLC. All Rights Reserved
      </div>
    </footer>
  );
};
export default Footer;
