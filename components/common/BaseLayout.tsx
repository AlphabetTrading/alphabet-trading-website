import React from "react";
import { WithChildren } from "../../types/common";
import Footer from "./Footer";
import ScrollUpArrow from "./ScrollUpArrow";
interface LayoutProps extends WithChildren {}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="max-w-[2048px] w-full overflow-hidden relative ">
        <main className="flex justify-center min-w-full ">{children}</main>
        <Footer />
        <ScrollUpArrow />
      </div>
    </div>
  );
};

export default BaseLayout;
