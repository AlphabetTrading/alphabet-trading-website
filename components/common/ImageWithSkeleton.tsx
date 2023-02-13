import clsx from "clsx";
import React, { lazy, useState } from "react";
import Image from "next/image";

interface Props {
  className: string;
  src: string;
  alt: string;
  props?: any;
}

const ImageWithSkeleton = ({ className, src, alt, props }: Props) => {
  const [isloaded, setIsloaded] = useState(false);
  return (
    <>
      <div className={clsx("relative h-full min-h-full ")}>
        {!isloaded && (
          <div
            className={clsx(
              "flex animate-pulse ease-in-out flex-row items-center justify-center space-x-5 absolute inset-0 object-cover",
              className
            )}
          >
            <div className="h-full w-full bg-secondary/20"></div>
          </div>
        )}
        <Image
          fill
          className={clsx("absolute inset-0 object-cover", className)}
          src={src}
          alt={alt}
          {...props}
          onLoadingComplete={() => {
            setIsloaded(true);
          }}
        />
      </div>
      ;
    </>
  );
};

export default ImageWithSkeleton;
