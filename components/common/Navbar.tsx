import clsx from "clsx";
import { useScroll, useSpring, useCycle, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useDimensions } from "../../hooks/useDimensions";
import { usePreviousRoute } from "../../hooks/usePreviousPathname";

type Props = {
  white: boolean;
};
const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2, duration: 0.6 },
    display: "flex",
  },
  // exit={{
  //   y: 100,
  //   opacity: 0,
  //   transition: { duration: 0.6 },
  // }}
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1, duration: 0.6 },
    display: "none",
  },
};

const Navbar = ({ white }: Props) => {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolledYAmount, setScrolledYAmount] = useState(0);

  useEffect(() => {
    function updateOpacity() {
      setScrolledYAmount(scrollY.get());
    }
    const unsubscribeX = scrollY.on("change", updateOpacity);
    return () => {
      unsubscribeX();
    };
  }, []);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    duration: 10,
  });

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  const navigationItems = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Services",
      href: "/services",
    },
    {
      id: 3,
      title: "Offerings",
      href: "/offerings",
    },
    {
      id: 4,
      title: "About Us",
      href: "/about",
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      title: "FAQs",
      href: "/faqs",
    },
  ];

  const router = useRouter();
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const path = localStorage.getItem("prevPath") || "/";
    // console.log(path);
    setPrevIndex(
      navigationItems.findIndex((prev) => {
        return prev.href === path;
      })
    );
    // if (path !== router.asPath) {
    localStorage.setItem("prevPath", router.asPath);
    // }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <motion.header
        className={clsx(
          "w-full top-0 left-0 fixed transition p-6  z-50 duration-500 ease-in-out",
          white ? "text-gray-700" : "text-white",

          scrolledYAmount > 50 || isOpen
            ? "bg-[#0A1026] drop-shadow-md text-white"
            : "bg-transparent"
        )}
      >
        <div
          className={clsx(
            "w-full flex justify-between items-center text-white",
            white ? "text-gray-700" : "text-white",
            (scrolledYAmount > 50 || isOpen) && "!text-white"
          )}
        >
          <div className="flex-shrink-0 ml-2 md:ml-4 lg:ml-6 xl:ml-8">
            <Link className="z-20" href="/">
              <div className="flex  gap-x-2">
                <div className="flex  justify-center">
                  {!(scrolledYAmount > 50 || isOpen) ? (
                    <img
                      className="w-full h-full aspect-square"
                      src="/logo.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full h-full aspect-square"
                      src="/logo_white.svg"
                      alt=""
                    />
                  )}
                </div>
                <h1
                  className={clsx(
                    "text-2xl font-normal tracking-wide",
                    white ? "" : "text-white"
                  )}
                >
                  <span className="font-DM_Serif">Alphabet </span>
                  <br></br>
                  Trading
                </h1>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-between">
            <nav className="">
              <div className="w-full flex items-center justify-between px-6 pl-10">
                <div
                  className={clsx(
                    "flex gap-x-6 lg:gap-x-8 text-md font-semibold z-20",
                    white ? "" : "text-white"
                  )}
                >
                  {navigationItems.map((navItem, index) => {
                    return (
                      <Link
                        key={navItem.id}
                        href={navItem.href}
                        className={clsx(
                          "block mt-6 lg:inline-block lg:mt-0 lg:mr-4 cursor-pointer hover:scale-110 hover:font-bold transition duration-200 ease-in-out",
                          router.pathname === navItem.href
                            ? `after:content-[''] relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-secondary ${
                                prevIndex > index
                                  ? "after:animate-slide_right"
                                  : "after:animate-slide_left"
                              }`
                            : ""
                        )}
                      >
                        {navItem.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
          <div className="flex w-full md:hidden ">
            <motion.nav
              className="w-full flex flex-col items-end !text-white"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
            >
              <button
                className={clsx(
                  white ? "text-gray-700" : "text-white",
                  (scrolledYAmount > 50 || isOpen) && "!text-white"
                )}
                onClick={() => toggleOpen()}
              >
                <svg
                  className="h-5 w-6 md:h-6 md:w-7 lg:h-8 lg:w-8"
                  viewBox="0 0 23 23"
                >
                  <Path
                    variants={{
                      closed: { d: "M 2 2.5 L 20 2.5" },
                      open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                  />
                  <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                  />
                  <Path
                    variants={{
                      closed: { d: "M 2 16.346 L 20 16.346" },
                      open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                  />
                </svg>
              </button>
              <motion.ul
                style={{
                  boxShadow: "0 10px 30px -15px var(--navy-shadow)",
                  borderRadius: "var(--border-radius)",
                  transition: "var(--transition)",
                }}
                variants={variants}
                className="min-w-full  flex flex-col p-5 px-10 gap-y-3 bg-[#0A1026] rounded-xl absolute top-24 md:top-20 right-0 left-0 z-50"
              >
                {navigationItems.map((navItem) => (
                  <motion.li
                    key={navItem.id}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={navItem.href}
                      title={navItem.title}
                      className=" font-normal text-gray-400 transition-all duration-200 hover:text-white"
                    >
                      {navItem.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Navbar;
