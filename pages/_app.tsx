import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, DM_Serif_Display } from "@next/font/google";
import clsx from "clsx";

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
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={clsx(raleway.variable, dm_serif.variable)}>
      <Component {...pageProps} />
    </div>
  );
}
