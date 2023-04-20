import { useState, useEffect } from "react";
import { useTransform, useMotionValue } from "framer-motion";

export function useScroll(): number {
  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(
        window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useTransform(scrollY, (value) => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    setScrollHeight(value * height);
  });

  return scrollHeight;
}
