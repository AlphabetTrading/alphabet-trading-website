import clsx from "clsx";
import { useScroll, useSpring, useCycle, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDimensions } from "../../hooks/useDimensions";

type Props = {
  white: boolean;
};
const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    display: "flex",
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
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
  return (
    <div className="overflow-x-hidden">
      <motion.header
        className={clsx(
          "w-full top-0 left-0 fixed transition-all p-6 z-50 duration-500 ease-in-out",
          white ? "text-gray-700" : "text-white",
          scrolledYAmount > 50 || isOpen
            ? "bg-[#0A1026] drop-shadow-md text-white"
            : "bg-transparent"
        )}
      >
        <div
          className={clsx(
            "w-full flex justify-between items-center text-white ",
            white ? "text-gray-700" : "text-white",
            (scrolledYAmount > 50 || isOpen) && "!text-white"
          )}
        >
          <div className="flex-shrink-0">
            <Link className="z-20" href="/">
              <div className="flex w-52 gap-x-2">
                <div className="flex justify-center">
                  {!(scrolledYAmount > 50 || isOpen) ? (
                    <img className="w-full h-full" src="/logo.svg" alt="" />
                  ) : (
                    <img
                      className="w-full h-full"
                      src="/logo_white.svg"
                      alt=""
                    />
                  )}
                </div>
                <h1
                  className={clsx(
                    "text-xl font-normal tracking-wide",
                    white ? "" : "text-white"
                  )}
                >
                  <span className="text-2xl font-DM_Serif">Alphabet </span>
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
                  {navigationItems.map((navItem) => {
                    return (
                      <Link
                        key={navItem.id}
                        href={navItem.href}
                        className="block mt-4 lg:inline-block lg:mt-0 lg:mr-4 cusror-pointer"
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
                <svg width="23" height="23" viewBox="0 0 23 23">
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
                className="min-w-full  flex flex-col p-5 px-10 gap-y-3 bg-[#0A1026] rounded-xl absolute top-20 right-0 left-0 z-50"
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
