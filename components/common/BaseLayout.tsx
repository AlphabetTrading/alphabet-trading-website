import React from "react";
import { WithChildren } from "../../types/common";
import Footer from "./Footer";
import ScrollUpArrow from "./ScrollUpArrow";
interface LayoutProps extends WithChildren {}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <div className=" min-h-screen max-w-screen  overflow-auto overflow-x-hidden relative max-w-screen-2k">
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
      <ScrollUpArrow />
    </div>
  );
};

export default BaseLayout;
