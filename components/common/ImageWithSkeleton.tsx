import clsx from "clsx";
import React, { lazy, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  className: string;
  src: string;
  alt: string;
  props?: any;
}

const ImageWithSkeleton = ({ className, src, alt, props }: Props) => {
  const [isloaded, setIsloaded] = useState(false);

  const rightClicker = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleContextMenu(e: Event) {
      e.preventDefault();
    }

    if (rightClicker && rightClicker.current) {
      rightClicker.current.addEventListener(
        "contextmenu",
        handleContextMenu,
        false
      );
      return function cleanup() {
        rightClicker.current?.removeEventListener(
          "contextmenu",
          handleContextMenu,
          false
        );
      };
    }
  }, []);

  return (
    <>
      <div ref={rightClicker} className={clsx("relative h-full min-h-full ")}>
        {!isloaded && (
          <div
            className={clsx(
              "flex animate-pulse bg-white ease-in-out flex-row items-center justify-center space-x-5 absolute inset-0 object-cover",
              className
            )}
          >
            <div
              className={clsx("h-full w-full bg-secondary/20", className)}
            ></div>
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
    </>
  );
};

export default ImageWithSkeleton;
