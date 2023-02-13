import clsx from "clsx";
import React, { lazy, useState } from "react";
import Image from "next/image";

interface Props {
  className: string;
  src: string;
  alt: string;
}

const ImageWithSkeleton = ({ className, src, alt }: Props) => {
  const [isloaded, setIsloaded] = useState(false);
  return (
    <>
      <div className={clsx(isloaded ? "relative" : "absolute", "min-h-full")}>
        <Image
          fill
          className={clsx("m-auto inset-0 object-cover", className)}
          src={src}
          alt={alt}
          onLoad={() => setIsloaded(true)}
        />
        {isloaded && (
          <div
            className={clsx(
              "flex animate-pulse flex-row items-center justify-center space-x-5",
              className
            )}
          >
            <div className="h-full w-full bg-secondary/10"></div>
          </div>
        )}
      </div>
      ;
    </>
  );
};

export default ImageWithSkeleton;
