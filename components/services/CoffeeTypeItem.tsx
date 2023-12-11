import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

type Props = {
  index: number;
  coffeeType: any;
};

const CoffeeTypeItem = ({ index, coffeeType }: Props) => {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2",
        index % 2 == 0
          ? "bg-secondary/20 text-primary"
          : "bg-primary flex-row-reverse w-full text-white"
      )}
    >
      <div
        className={clsx(
          "h-full relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]",
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        )}
      >
        <ImageWithSkeleton
          props={{
            fill: true,
            priority: true,
          }}
          src={`https://alphabettrading.s3.amazonaws.com${coffeeType.imgSrc}`}
          alt={coffeeType.name}
          className="h-full w-full object-cover "
        />
      </div>
      <div
        className={clsx(
          "relative flex items-center  px-6 sm:px-10 md:px-8 lg:px-14 xl:px-20 2k:px-28 4k:px-48 gap-x-1",
          index % 2 === 0 ? "md:order-2" : "md:order-1"
        )}
      >
        <div className="h-full w-10 text-center flex justify-center">
          <div className="w-full flex justify-center">
            <h1
              style={{ writingMode: "vertical-rl" }}
              // className="w-7 -rotate-90 h-full font-semibold text-2xl md:text-3xl 2k:text-[40px] 4k:text-6xl "
              className="text-center text-2xl md:text-3xl 2k:text-[40px] 4k:text-6xl rotate-180 font-DM_Serif capitalize"
            >
              {coffeeType.name}
            </h1>
          </div>
        </div>
        <div
          className={clsx(
            "flex items-center py-6 sm:py-10 md:py-8 lg:py-14 xl:py-20 2k:py-28 4k:py-48 gap-x-2 relative"
          )}
        >
          <div>
            <div
              className={clsx(
                "flex flex-col flex-1 items-start border-l-2 4k:border-l-4",
                index % 2 == 0 ? "border-primary" : "border-white"
              )}
            >
              <div className="flex flex-col items-start gap-y-4 2k:gap-y-6 p-2 md:pl-4 2k:pl-6 4k:pl-10 text-md 2xl:text-lg 2k:text-xl 4k:text-4xl">
                <p className="leading-6 2k:leading-snug 4k:leading-normal">
                  {coffeeType.description}
                </p>
                <Link
                  href="/our-coffee/offerings"
                  aria-label="see offerings"
                  className={clsx(
                    "flex items-center border hover:scale-105 transition duration-200 ease-in-out group relative overflow-hidden",
                    index % 2 == 0 ? "border-primary" : "border-white"
                  )}
                >
                  <p
                    className={clsx(
                      "p-2 px-3 2k:p-4 2k:px-5 font-semibold group-hover:text-white delay-75 duration-200 z-10",
                      index % 2 == 0
                        ? "group-hover:text-white"
                        : "group-hover:text-primary"
                    )}
                  >
                    See Offerings
                  </p>
                  <FaChevronRight
                    className={clsx(
                      "pr-2 group-hover:text-white delay-75 duration-200 z-10",
                      index % 2 == 0
                        ? "group-hover:text-white"
                        : "group-hover:text-primary"
                    )}
                  />
                  <div
                    className={clsx(
                      "min-w-full  group-hover:flex duration-500 min-h-full ease-in-out z-0 scale-x-[1.5] scale-y-150 -translate-x-[125%] group-hover:translate-x-[5%] translate-y-1/2 group-hover:-translate-y-0  transition-all rounded-full absolute inset-0 ",
                      index % 2 == 0
                        ? "group-hover:bg-primary"
                        : "group-hover:bg-white"
                    )}
                  ></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTypeItem;
