import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type Props = {};

const ScrollUpArrow = (props: Props) => {
  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <motion.button
          aria-label="scroll-top"
          onClick={goToTop}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
          exit={{
            y: 100,
            opacity: 0,
            transition: { duration: 0.6 },
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
          className="flex items-center justify-center fixed bottom-10 z-50 right-10 h-12 w-12 p-2 drop-shadow-xl shadow-xl shadow-black/50 backdrop-brightness-95 text-white rounded-full bg-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0"
            y="0"
            viewBox="0 0 32 32"
          >
            <g>
              <g id="_24_Up" data-name="24 Up">
                <path
                  d="m3.9453 20.0264 11.25-15.24a1.0367 1.0367 0 0 1 1.6094 0l11.25 15.24q.5068 1.3738-.772 1.5863l-10.478-14.1967a1.0367 1.0367 0 0 0 -1.6094 0l-10.4736 14.1908a1.0083 1.0083 0 0 1 -.7764-1.5804zm24.1084 5.999-2.7512-3.7275-1.6679-2.2593h.0005l-6.8305-9.2546a1 1 0 0 0 -1.6092 0l-6.8306 9.2548h.0005l-1.6679 2.2591-2.7511 3.7275-.0013.0012a1.0076 1.0076 0 0 0 1.2279 1.5l10.8271-5.053 10.8271 5.0527a.9972.9972 0 0 0 .4229.0938 1.0088 1.0088 0 0 0 .805-1.5936z"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollUpArrow;
