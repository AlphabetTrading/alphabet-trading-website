import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import {
  AiFillTwitterCircle,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
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
            <div className="flex items-center gap-x-3">
              <div className="flex justify-center">
                <img className="w-full h-full" src="/logo.svg" alt="" />
              </div>
              <h1 className="font-normal text-3xl sm:text-2xl md:text-3xl tracking-wide xl:my-2 items-center">
                <span className="font-DM_Serif ">Alphabet</span>
                <br></br>
                Trading
              </h1>
            </div>
            <div className="w-64 my-2">
              <p className="text-center text-sm text-[#AEAEAE]">
                Lorem ipsum dolor sit amet In quidem. Lorem ipsum dolor sit.
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
                  <Link href="/offerings">Offerings</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="text-sm hover:text-white hover:font-semibold transition duration-200">
                  <Link href="/faq">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-3 xl:col-span-2 items-center md:items-start flex-1 md:flex-auto h-full flex flex-col  gap-y-3 text-[#AEAEAE]">
            <h1 className="text-xl text-start text-white">Contact</h1>
            <div className="flex items-center sm:gap-x-2">
              <FaPhoneAlt />
              <div className="text-sm flex flex-col">
                <a href="tel:++251911261233">+251 911 261233</a>
                <a href="tel:+251118220469">+251 118220469</a>
              </div>
            </div>
            <div className="flex items-center sm:gap-x-2">
              <AiOutlineMail />
              <div>
                <a
                  className="text-base break-words"
                  href="mailto:henock@alphabettrading.com"
                >
                  henock@alphabettrading.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-10 md:col-span-10 lg:col-span-2 gap-y-2 py-2 flex flex-col justify-start items-center w-full h-full">
            <h1 className="text-xl text-center w-full">Follow Us</h1>
            <div className="flex gap-x-4 w-full justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  className="w-full h-full text-secondary"
                  viewBox="0 0 682.667 682.667"
                >
                  <g>
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" fill="currentColor"></path>
                      </clipPath>
                    </defs>
                    <path
                      d="M151 76H91v240h60z"
                      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeDasharray="none"
                      strokeOpacity=""
                      data-original="currentColor"
                    ></path>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                    >
                      <path
                        d="M0 0c0-16.569-13.432-30-30-30-16.568 0-30 13.431-30 30 0 16.569 13.432 30 30 30C-13.432 30 0 16.569 0 0Z"
                        transform="translate(151 406)"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeDasharray="none"
                        strokeOpacity=""
                      ></path>
                      <path
                        d="M0 0c0 24.853 20.147 45 45 45S90 24.853 90 0v-135h60V26.459a78.543 78.543 0 0 1-8.292 35.125c-26.581 53.161-99.571 55.553-134.712 20.412L0 75v30h-60v-240H0Z"
                        transform="translate(271 211)"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeDasharray="none"
                        strokeOpacity=""
                      ></path>
                      <path
                        d="M0 0h-360c-33.137 0-61 27.863-61 61v360c0 33.137 27.863 61 61 61H0c33.137 0 61-27.863 61-61V61C61 27.863 33.137 0 0 0Z"
                        transform="translate(436 15)"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeDasharray="none"
                        strokeOpacity=""
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <img
                src="/icons/twitter.svg"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 "
              />
              <img
                src="/icons/youtube.svg"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 "
              />
              <img
                src="/icons/facebook.svg"
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#086965] py-2 text-center">
        Copyright <span>© {getYear()}</span> Alphabet Trading PLC. All Rights
        Reserved
      </div>
    </footer>
  );
};
export default Footer;
