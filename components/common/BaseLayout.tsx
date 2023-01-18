import React from "react";
import { WithChildren } from "../../types/common";
import Footer from "./Footer";
import ScrollUpArrow from "./ScrollUpArrow";
interface LayoutProps extends WithChildren {}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <main className="flex flex-col flex-1 min-h-screen overflow-auto relative">
        {children}
      </main>
      <Footer />
      <ScrollUpArrow />
    </div>
  );
};

export default BaseLayout;
