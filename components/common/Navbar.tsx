import clsx from "clsx";
import {
  useScroll,
  useSpring,
  useCycle,
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useDimensions } from "../../hooks/useDimensions";
import { RiArrowDropDownLine } from "react-icons/ri";

type Props = {
  white: boolean;
};
const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2, duration: 0.6 },
    display: "flex",
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1, duration: 0.6 },
    display: "none",
  },
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
    updateOpacity();
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
      title: "Our Coffee",
      href: "/our-coffee",
      options: [
        {
          id: 1,
          title: "Origins",
          href: "/our-coffee/origins",
        },
        {
          id: 2,
          title: "Offerings",
          href: "/our-coffee/offerings",
        },
      ],
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
  }, [navigationItems, router.asPath]);

  return (
    <div className="overflow-x-hidden">
      <motion.header
        className={clsx(
          "w-full top-0 left-0 fixed transition p-2 md:p-4 z-50 duration-500 ease-in-out",
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
              <div className="flex items-center gap-x-1 md:gap-x-2">
                <div className="flex h-14 items-center justify-center">
                  {!(scrolledYAmount > 50 || isOpen) &&
                  router.pathname !== "/" ? (
                    <img
                      className="w-full h-full "
                      src="/AlphabetLogoBlack.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full h-full "
                      src="/AlphabetLogoWhite.svg"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-between">
            <nav className="">
              <div className="w-full flex items-center justify-between px-6 pl-10 2k:px-14 2k:pl-18 4k:px-20 4k:pl-24">
                <div
                  className={clsx(
                    "flex gap-x-6 lg:gap-x-8 text-md 2k:text-xl 4k:text-2xl font-semibold z-20",
                    white ? "" : "text-white"
                  )}
                >
                  {navigationItems.map((navItem, index) => {
                    return (
                      <Link
                        key={navItem.id}
                        href={navItem.href}
                        className={clsx(
                          "block relative mt-6 lg:inline-block group lg:mt-0 lg:mr-4 cursor-pointer hover:scale-110 hover:font-bold transition duration-200 ease-in-out",
                          (
                            navItem.options?.length
                              ? router.pathname.includes(navItem.href)
                              : router.pathname === navItem.href
                          )
                            ? `after:content-[''] relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-secondary ${
                                prevIndex > index
                                  ? "after:animate-slide_right"
                                  : "after:animate-slide_left"
                              }`
                            : ""
                        )}
                      >
                        <span className="flex items-center">
                          {navItem.title}
                          {navItem.options && (
                            <RiArrowDropDownLine className="w-8 h-6" />
                          )}
                        </span>
                        {navItem.options && (
                          <div className="hidden absolute group-hover:flex flex-col items-center bg-white w-full text-primary/70 rounded-sm shadow-lg">
                            <ul className="my-3 w-full">
                              {navItem.options.map((option) => {
                                return (
                                  <li
                                    key={option.id}
                                    className="hover:scale-y-105 hover:text-secondary/60 py-1 text-sm text-start p-2 hover:text-white transition-all duration-200 ease-in-out "
                                  >
                                    <Link href={option.href}>
                                      {option.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
          <div className="flex w-full md:hidden ">
            <AnimatePresence>
              <motion.nav
                className="w-full flex flex-col items-end !text-white"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                exit={variants.exit}
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
                  exit={variants.exit}
                  className="min-w-full  flex flex-col p-5 px-10 gap-y-3 bg-[#0A1026] rounded-xl absolute top-20 right-0 left-0 z-50"
                >
                  {navigationItems.map((navItem) => (
                    <motion.li
                      key={navItem.id}
                      variants={variants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {navItem.options ? (
                        <div className="flex flex-col group">
                          <div className="flex items-center">
                            <span>{navItem.title}</span>
                            <span>
                              <RiArrowDropDownLine className="w-8 h-6" />
                            </span>
                          </div>
                          <div className="flex flex-col group-hover:h-auto h-0 overflow-hidden  pl-2 transition-all duration-500">
                            {navItem.options.map((option) => {
                              return (
                                <Link
                                  key={option.id}
                                  href={option.href}
                                  title={option.title}
                                  className="block font-normal text-gray-400 transition-all duration-200 hover:text-white hover:pl-0 pl-2"
                                >
                                  {navItem.title} {option.title}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={navItem.href}
                          title={navItem.title}
                          className=" font-normal text-gray-400 transition-all duration-200 hover:text-white"
                        >
                          {navItem.title}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Navbar;
