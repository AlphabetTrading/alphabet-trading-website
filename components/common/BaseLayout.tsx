import React from "react";
import { WithChildren } from "../../types/common";
import Footer from "./Footer";
import ScrollUpArrow from "./ScrollUpArrow";
interface LayoutProps extends WithChildren {}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full min-w-full flex justify-center overflow-x-hidden">
      <div className="min-h-screen  min-w-full max-w-[2048px] relative font-Raleway">
        <main className="flex justify-center min-w-full ">{children}</main>
        <Footer />
        <ScrollUpArrow />
      </div>
    </div>
  );
};

export default BaseLayout;
