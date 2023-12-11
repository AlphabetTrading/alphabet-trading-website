"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import DetailItem from "./DetailItem";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
type Props = {};

const details = [
  {
    title: "Sustainability",
    descriptions: [
      "Embracing a sustainability approach means that we act hand in hand with the environment and the people we work with. We bear responsibility for the environment, the organization and the economic livelihood of the people around us.",
      "We have devised a model where we don’t degrade the contribution of others environmentally, economically and socially.",
    ],
    imageSrc: `https://alphabettrading.s3.amazonaws.com/images/sustainability.webp`,
  },
  {
    title: "Transparency",
    descriptions: [
      "By meticulously tracking the farm's production, various varieties, processing techniques, shipments, cupping scores, and maintaining a detailed paperwork trail, we ensure customers receive only the freshest, finest coffee. ",
      "The farmer picks red cherries, turns them into semi-washed parchment, cleanses them of imperfections, grades by size, then exports for global coffee enthusiasts.",
    ],
    imageSrc: `https://alphabettrading.s3.amazonaws.com/images/transparency.webp`,
  },
  {
    title: "Traceability",
    descriptions: [
      "Every stage of our process is traceable, allowing us to identify the growers and confirm where each coffee was harvested, processed, and stored.",
      "We want our customers to know where every cup of coffee comes from and what every sip meant. Our traceability approach enables the coffee supply chain to appreciate the effort that each producer puts forward.",
    ],
    imageSrc: `https://alphabettrading.s3.amazonaws.com/images/traceability.webp`,
  },
];

const DetailsLg = (props: Props) => {
  const maskRef = useRef<SVGRectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const createAnimation = () => {
    const sections = gsap.utils.toArray(".section");
    if (containerRef.current === null) return;
    if (wrapperRef.current === null) return;
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current!,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => "+=" + 3500,
        // invalidateOnRefresh: true,
        markers: true,
      },
    });

    // gsap.set(maskRef.current, { width: "0%" })
    // gsap.to(maskRef.current, {
    //     width: "100%",
    //     scrollTrigger: {
    //         trigger: containerRef.current!,
    //         start: "top left",
    //         end: () => "+=" + (containerRef.current!.offsetWidth) / 2,
    //         scrub: 1,
    //         // markers: true,
    //     }
    // });

    // whizz around the sections
    // sections.forEach((section: any) => {
    //     // grab the scoped text
    //     let text = section.querySelector(".title");

    //     // bump out if there's no items to animate
    //     if (text.length === 0) return

    //     // // do a little stagger
    //     // gsap.from(text, {
    //     //     y: -50,
    //     //     opacity: 0.5,
    //     //     duration: 2,
    //     //     ease: "elastic",
    //     //     stagger: 0.1,
    //     //     scrollTrigger: {
    //     //         trigger: section,
    //     //         containerAnimation: scrollTween,
    //     //         start: "left center",
    //     //         markers: true
    //     //     }
    //     // });

    //     // // animate the image
    //     // const img = section.querySelector("img");
    //     // gsap.from(img, {
    //     //     y: 100,
    //     //     opacity: 0,
    //     //     duration: 2,
    //     //     ease: "elastic",
    //     //     scrollTrigger: {
    //     //         trigger: section,
    //     //         containerAnimation: scrollTween,
    //     //         start: "left center",
    //     //         markers: true
    //     //     }
    //     // });
    // });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  return (
    <div className="relative">
      <div
        ref={wrapperRef}
        className="our-approach relative wrapper h-screen flex items-center bg-primary"
      >
        <div
          ref={containerRef}
          className={clsx(
            "flex min-w-[260vw] max-w-[260vw] h-[60vh] py-10 items-center  relative px-20 gap-x-[5vw] "
          )}
        >
          <div className="absolute w-[100vw] max-w-[100vw] -translate-y-full top-0 left-[2%] flex flex-col items-center gap-y-5 ">
            <h1 className="text-white  text-3xl lg:text-5xl font-bold self-start ">
              Our <span className="text-secondary">Ethical</span> Approach
            </h1>
            {/* <svg className='w-[80vw] ' viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#737272ae" />
                            <mask
                                id="mask0_0_1" style={{
                                    maskType: "alpha",
                                }} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
                                <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#737272ae" />
                            </mask>
                            <g mask="url(#mask0_0_1)">
                                <rect
                                    ref={maskRef}
                                    className="mask w-[0%]" y="-49" height="99" fill="white" />
                            </g>
                        </svg> */}
          </div>
          {details.map((detail, index) => (
            <section
              key={index}
              className={clsx(
                "h-[60vh] section my-5 min-w-[80vw] max-w-[80vw] drop-shadow-xl relative gap-x-10  flex flex-col lg:flex-row items-center"
              )}
            >
              <DetailItem
                descriptions={detail.descriptions}
                title={detail.title}
                imageSrc={detail.imageSrc}
                index={index}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const DetailsSm = (props: Props) => {
  return (
    <div className="flex justify-center items-center bg-navy py-12">
      <div className="flex flex-col w-5/6 md:py-20  py-14 gap-y-8 lg:gap-y-14">
        <h1 className="text-white text-3xl lg:text-5xl font-bold ">
          Our <span className="text-secondary">Ethical</span> Approach
        </h1>
        <div className=" flex flex-col gap-y-5 lg:gap-y-24">
          {details.map((detail: any, index: number) => {
            return (
              <DetailItem
                key={index}
                index={index}
                title={detail.title}
                descriptions={detail.descriptions}
                imageSrc={detail.imageSrc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Details = (props: Props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return <>{isMobile ? <DetailsSm /> : <DetailsLg />}</>;
};

export default DetailsSm;
