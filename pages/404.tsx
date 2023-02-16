import { useRouter } from "next/router";
import React from "react";
import Button from "../components/common/Button";
type Props = {};

const PageNotFound = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex md:flex-row flex-col-reverse h-screen items-center md:p-14 p-10">
      <div className="flex flex-col w-full md:w-5/12 gap-y-6 text-center items-center md:items-start md:text-left ">
        <p className="text-secondary font-bold text-3xl md:text-6xl ">
          Oh No! Page not found
        </p>
        <p>
          We&apos;re sorry, but the page you requested cannot be found. It may
          have been removed, had its name changed, or is temporarily
          unavailable.
        </p>
        <Button
          onClick={() => {
            router.push("/");
          }}
          classname="bg-secondary text-white font-medium "
          text="Go back to homepage"
        />
      </div>
      <div className="w-full md:w-7/12">
        <img className="w-full" src="/icons/404.svg" alt="404" />
      </div>
    </div>
  );
};

export default PageNotFound;
