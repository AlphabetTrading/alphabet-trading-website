"use client";

import React, { useEffect, useRef } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";

type Props = {};

const Loader = (props: Props) => {
  const tl = useRef<gsap.core.Timeline>(gsap.timeline()).current;
  const [showLoader, setShowLoader] = React.useState(true);
  const loaderContainerRef = useRef<HTMLDivElement>(null);

  const createAnimation = () => {
    tl.to(
      ".loading__text span",
      {
        opacity: 0.2,
        stagger: 0.1,
        ease: Expo.easeInOut,
        duration: 0.5,
        repeat: -1,
      },
      0
    )
      .to(
        ".loading__text",
        {
          delay: 3,
          ease: "power2.inOut",
          opacity: 0,
        },
        0
      )
      .to(
        ".loader__bar__inner",
        {
          duration: 3,
          width: "100%",
          ease: "power2.inOut",
        },
        0
      );
    tl.to("loader__bar", {
      duration: 0.5,
      ease: "power2.inOut",
      width: "100%",
    })
      .to(".loader__bar", {
        width: "100%",
        ease: "power2.inOut",
        duration: 0.5,
      })
      .to(
        ".loader__bar",
        {
          duration: 0.5,
          opacity: 0,
          ease: "power2.inOut",
        },
        4
      )
      .fromTo(
        ".preloader-1",
        {
          translateY: "-50%",
        },
        {
          duration: 1.5,
          ease: "power2.inOut",
          translateY: "-100%",
        },
        4
      )
      .fromTo(
        ".preloader-2",
        {
          translateY: "49%",
        },
        {
          duration: 1.5,
          ease: "power2.inOut",
          translateY: "100%",
        },
        4
      )
      .to(".loading-page", {
        display: "none",
      });
  };

  useEffect(() => {
    gsap.registerPlugin(CSSPlugin);

    createAnimation();
  }, []);

  return (
    <div
      ref={loaderContainerRef}
      className="loading-page fixed min-h-full w-full inset-0 flex items-center justify-center z-[1000]"
    >
      <div className="preloader-1 min-h-screen bg-primary absolute outline-none border-none appearance-none inset-0 z-10"></div>
      <div className="preloader-2 min-h-screen bg-primary absolute outline-none border-none appearance-none inset-0 z-20"></div>
      <div className="loader relative w-full flex justify-center items-center outline-none border-none appearance-none min-h-full flex-col gap-y-4 inset-0 z-20">
        <div className="loading__text text-white text-2xl uppercase font-barlowCondensed font-bold -mt-10">
          <span>A</span>
          <span>L</span>
          <span>P</span>
          <span>H</span>
          <span>A</span>
          <span>B</span>
          <span>E</span>
          <span>T</span>
          <span> </span>
          <span>P</span>
          <span>L</span>
          <span>C</span>
        </div>
        <div className="loader__bar h-0.5 w-4/5 lg:w-1/3 xl:w-1/4  bg-white/10 ">
          <div className="loader__bar__inner h-0.5 w-0 bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
