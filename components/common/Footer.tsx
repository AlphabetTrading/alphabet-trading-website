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
    <div>
      <div className="flex items-center p-8 text-white bg-[#0A1026]">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4">
          <div className="flex items-center justify-center col-span-2 md:col-span-2 gap-x-4">
            <div className="flex justify-center">
              <img className="w-full h-full" src="/logo.svg" alt="" />
            </div>
            <h1 className="font-normal text-4xl tracking-wide flex md:flex-col items-center gap-x-1">
              <span className="font-DM_Serif text-5xl">Alphabet</span> Trading
            </h1>
          </div>
          <div className="col-span-1 flex flex-col gap-y-2">
            <h1 className="text-xl">Quick Links</h1>
            <div className="flex flex-col gap-y-2 text-[#AEAEAE]">
              <ul className="flex flex-col gap-y-2 cursor-pointer">
                <li className="text-sm">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-sm">
                  <Link href="/offerings">Offerings</Link>
                </li>
                <li className="text-sm">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="text-sm">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="text-sm">
                  <Link href="/faq">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-y-3 text-[#AEAEAE]">
            <h1 className="text-xl text-start text-white">Contact</h1>
            <div className="flex items-center gap-x-2">
              <FaPhoneAlt />
              <div className="text-sm">
                <h1>+251 911 261233</h1>
                <h1>+251 118220469</h1>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <AiOutlineMail />
              <div>
                <h1>henock@alphabettrading.com</h1>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-5 lg:col-span-1 py-2 flex justify-evenly items-start">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-xl text-center">Follow Us</h1>
              <div className="flex gap-x-4">
                <img src="/icons/linkedin.svg" alt="" />
                <img src="/icons/twitter.svg" alt="" />
                <img src="/icons/youtube.svg" alt="" />
                <img src="/icons/facebook.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-[#086965] py-2 text-center">
        Copyright <span>© {getYear()}</span> Alphabet Trading PLC. All Rights
        Reserved
      </div>
    </div>
  );
};
export default Footer;
