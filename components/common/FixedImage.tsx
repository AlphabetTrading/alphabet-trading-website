import { useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";

interface FixedImageProps extends ImageProps {
  containerHeight: string;
  containerWidth: string;
  overlayColor: string;
}

export default function FixedImage({
  containerHeight,
  containerWidth,
  overlayColor,
  ...imageProps
}: FixedImageProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = container?.querySelector(".overlay") as HTMLDivElement;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container!;
      const scrollPercent = scrollTop / (scrollHeight - clientHeight);
      overlay.style.opacity = scrollPercent.toString();
    };

    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative h-[600px] w-full overflow-hidden"
      ref={containerRef}
    >
      <Image {...imageProps} fill />
      <div
        className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500"
        style={{ backgroundColor: overlayColor }}
      ></div>
    </div>
  );
}
