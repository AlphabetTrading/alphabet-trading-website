import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, DM_Serif_Display } from "@next/font/google";
import clsx from "clsx";
import { useEffect } from "react";
import Loader from "../components/common/Loader";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-raleway",
});
const dm_serif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

import { gsap, CSSPlugin, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin);
  }, []);

  return (
    <div className={clsx(raleway.variable, dm_serif.variable)}>
      <Loader />
      <Component {...pageProps} />
    </div>
  );
}
