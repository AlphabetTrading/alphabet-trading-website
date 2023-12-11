import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./HeroVideo.module.css";
import clsx from "clsx";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

type Props = {};

const getVideoSrcs = (width: number) => {
  if (width >= 1440)
    return [
      "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+2K.webm",
      "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+2K.mp4",
    ];

  if (width >= 1080)
    return [
      "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO.webm",
      "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO.mp4",
    ];
  if (width >= 720)
    return [
      "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_720p.webm",
      "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_720p.mp4",
    ];
  return [
    "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.webm",
    "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.mp4",
  ];
};

const HeroVideo = (props: Props) => {
  const [videoSrc, setvideoSrc] = useState(
    "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.mp4"
  );
  const [webmVideoSrc, setWebmVideoSrc] = useState(
    "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.webm"
  );

  useEffect(() => {
    const networkInterface = (window.navigator as any).connection;
    const networkInterfaceChange = () => {
      if (networkInterface && !!networkInterface.effectiveType) {
        if (
          networkInterface.effectiveType == "4g" &&
          networkInterface.downlink > 40
        ) {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+4K.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+4K.webm"
          );
        } else if (
          networkInterface.effectiveType == "4g" &&
          networkInterface.downlink > 30
        ) {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+2K.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+2K.webm"
          );
        } else if (
          networkInterface.effectiveType == "4g" &&
          networkInterface.downlink > 20
        ) {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO.webm"
          );
        } else if (networkInterface.effectiveType == "4g") {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_720p.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_720p.webm"
          );
        } else if (networkInterface.effectiveType == "3g") {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.webm"
          );
        } else if (networkInterface.effectiveType == "2g") {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOR+VIDEO_360p.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOR+VIDEO_360p.webm"
          );
        } else {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.webm"
          );
        }
      }
    };
    if (networkInterface && !!networkInterface.effectiveType) {
      networkInterfaceChange();
      networkInterface.addEventListener("change", networkInterfaceChange);
    } else {
      const [webmSrc, mp4Src] = getVideoSrcs(window.innerWidth || 500);
      setWebmVideoSrc(webmSrc);
      setWebmVideoSrc(mp4Src);
    }
    return () => {
      if (networkInterface && !!networkInterface.effectiveType) {
        networkInterface.removeEventListener("change", networkInterfaceChange);
      }
    };
  }, []);

  const scrollButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleScroll = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#welcome",
      overwrite: "auto",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    if (scrollButtonRef.current) {
      scrollButtonRef.current.addEventListener("click", handleScroll);
    }
    // clean up both gsap context, scroll trigger, and event listener
    return () => {
      if (scrollButtonRef.current)
        scrollButtonRef.current.removeEventListener("click", handleScroll);
    };
  }, []);

  return (
    <header className="min-h-[400px] max-h-screen w-screen relative">
      <div
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.001) 0%, rgba(0,0,0,0.5) 85%)",
        }}
        className="absolute inset-0 z-20"
      ></div>
      <video
        loop
        muted
        playsInline
        className="relative z-10 h-full aspect-video object-cover w-screen bg-secondary "
        width="100%"
        preload="auto"
        poster="https://alphabettrading.s3.amazonaws.com/images/hero_video_poster_min.webp"
        autoPlay
        src={
          webmVideoSrc ||
          videoSrc ||
          "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.webm"
        }
      >
        <source src={webmVideoSrc} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        ref={(el: any) => {
          scrollButtonRef.current = el;
        }}
        id="scrollDownBtn"
        className={clsx(styles.scrollDownBtn)}
      >
        .
      </button>
    </header>
  );
};

export default HeroVideo;
