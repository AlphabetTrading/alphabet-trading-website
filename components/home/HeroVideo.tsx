import React, { useEffect, useState } from "react";

type Props = {};

const HeroVideo = (props: Props) => {
  const [videoSrc, setvideoSrc] = useState(
    "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.mp4"
  );
  const [webmVideoSrc, setWebmVideoSrc] = useState(
    "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOER+VIDEO_480p.webm"
  );

  useEffect(() => {
    const networkInterface = (window.navigator as any).connection;
    const networkInterfaceChange = () => {
      if (networkInterface && !!networkInterface.effectiveType) {
        if (
          networkInterface.effectiveType == "4g" &&
          networkInterface.downlink > 40
        ) {
          console.log(networkInterface, "4g");
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+4K.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOERVIDEO+2K.webm"
          );
        } else if (
          networkInterface.effectiveType == "4g" &&
          networkInterface.downlink > 30
        ) {
          console.log(networkInterface, "4g");
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO+2K.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOERVIDEO+2K.webm"
          );
        } else if (
          networkInterface.effectiveType == "4g" &&
          networkInterface.downlink > 20
        ) {
          console.log(networkInterface, "4g");
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOERVIDEO.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOER+VIDEO.webm"
          );
        } else if (networkInterface.effectiveType == "4g") {
          console.log(networkInterface, "4g");
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_720p.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOER+VIDEO_720p.webm"
          );
        } else if (networkInterface.effectiveType == "3g") {
          setvideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE++COLOER+VIDEO_480p.mp4"
          );
          setWebmVideoSrc(
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOER+VIDEO_480p.webm"
          );
        } else if (networkInterface.effectiveType == "2g") {
          console.log("2g");
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
            "https://alphabettrading.s3.amazonaws.com/FINAL+COFFEE+COLOER+VIDEO_480p.webm"
          );
        }
      }
    };
    networkInterfaceChange();
    networkInterface.addEventListener("change", networkInterfaceChange);

    return () => {
      networkInterface.removeEventListener("change", networkInterfaceChange);
    };
  }, []);

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="min-h-[400px] aspect-video object-cover w-screen bg-secondary"
      width="100%"
      preload="auto"
      poster="https://alphabettrading.s3.amazonaws.com/images/hero_video_poster_min.webp"
      src={webmVideoSrc || videoSrc}
    >
      <source src={webmVideoSrc} type="video/webm" />
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
