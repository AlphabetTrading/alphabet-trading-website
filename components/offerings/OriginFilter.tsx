import React, { useCallback, useEffect, useState } from "react";
import GetSVG from "../common/GetSVG";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const origins = [
  {
    id: "1",
    title: "Guji",
    items: [
      {
        id: "2",
        title: "Michicha",
      },
      {
        id: "3",
        title: "Bukisa",
      },
      {
        id: "4",
        title: "Guracho",
      },
      // { id: "5", title: "Bedessa" },
      {
        id: "6",
        title: "Blida",
      },
      {
        id: "7",
        title: "Egu Abaya",
      },
      {
        id: "8",
        title: "Inshe",
      },
      { id: "9", title: "Edera Take" },
      {
        id: "10",
        title: "Udotu",
      },
      {
        id: "11",
        title: "Banti Nenka",
      },
      {
        id: "12",
        title: "Buku Hambella",
      },
      // { id: "13", title: "Haro Lebetu" },

      // { id: "14", title: "Goro Muda" },
    ],
  },
  // {
  //   id: "2",
  //   title: "Sidamo",
  //   items: [
  //     {
  //       id: "2",
  //       title: "Oddo Shakiso",
  //     },
  //     {
  //       id: "3",
  //       title: "Addola Redi",
  //     },
  //     {
  //       id: "4",
  //       title: "Uraga",
  //     },
  //     { id: "5", title: "Kercha" },
  //   ],
  // },
  {
    id: "2",
    title: "Yirgacheffe",
    items: [
      {
        id: "2",
        title: "Idido",
      },
      {
        id: "3",
        title: "Halo Beriti",
      },
      {
        id: "4",
        title: "Konga",
      },
      { id: "5", title: "Gerse" },
    ],
  },
  {
    id: "3",
    title: "Gedeb",
    items: [
      {
        id: "2",
        title: "Chelchele",
      },
      {
        id: "3",
        title: "Chelbesa",
      },
      {
        id: "4",
        title: "Banko Gotiti",
      },
      { id: "5", title: "Worka Sakaro" },
    ],
  },
  // {
  //   id: "5",
  //   title: "Limmu",
  //   items: [
  //     {
  //       id: "2",
  //       title: "Oddo Shakiso",
  //     },
  //     {
  //       id: "3",
  //       title: "Addola Redi",
  //     },
  //     {
  //       id: "4",
  //       title: "Uraga",
  //     },
  //     { id: "5", title: "Kercha" },
  //   ],
  // },
];
type MenuItemProps = {
  title: string;
  options: { id: string; title: string }[];
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: Set<string>;
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      process?: string[];
      origin?: Set<string>;
    }>
  >;
};

const MenuItem = (props: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(
    new Set()
  );

  const [checkAll, setCheckAll] = useState(false);
  const handleCheckAll = () => {
    setCheckAll((prev) => {
      if (prev) {
        selectedOptions.clear();
      } else {
        props.options.forEach((op) => {
          selectedOptions.add(op.title);
        });
      }

      setSelectedOptions(selectedOptions);
      let other_regions = [...(props.filterBy.origin || [])]!.filter(
        (x) => !new Set(props.options.map((op) => op.title) || []).has(x)
      );
      console.log(selectedOptions, other_regions);

      props.setFilterBy((prev) => ({
        ...prev,
        origin: new Set([
          ...new Set(other_regions),
          ...new Set([...selectedOptions]),
        ]),
      }));

      return !prev;
    });
  };
  const handleSingleChecked = (title: string) => (e: any) => {
    if (selectedOptions.has(title)) {
      selectedOptions.delete(title);
    } else {
      selectedOptions.add(title);
    }

    setSelectedOptions(selectedOptions);
    let other_regions = [...(props.filterBy.origin || [])]!.filter(
      (x) => !new Set(props.options.map((op) => op.title) || []).has(x)
    );
    console.log(selectedOptions, other_regions);

    props.setFilterBy((prev) => ({
      ...prev,
      origin: new Set([
        ...new Set(other_regions),
        ...new Set([...selectedOptions]),
      ]),
    }));

    setCheckAll(props.options.length === selectedOptions.size);

    // setSelectedOptions(() => {
    //   const options = selectedOptions.map((option) => {
    //     if (option.title === title) {
    //       return { ...option, checked: !option.checked };
    //     } else {
    //       return option;
    //     }
    //   });
    //   setCheckAll(
    //     options.filter((item) => item.checked).length === options.length
    //   );
    // return options;
    // }
    // );
  };
  // const handleOriginFilter = useCallback(
  //   () => {
  //     // const checkedList = selectedOptions.filter((option) => option.checked);
  //     console.log("nati", selectedOptions)
  //     // const other_regions = props.filterBy.origin ? props.filterBy.origin.entries(or => !checkedList.includes(or)) : []
  //     let other_regions = new Set([...props.filterBy.origin || []]!.filter(x => !selectedOptions.has(x)));

  //     props.setFilterBy((prev) => ({
  //       ...prev,
  //       origin: new Set([...new Set(other_regions), ...new Set([...selectedOptions])])
  //     }));

  //   },
  //   [selectedOptions],
  // )

  // useEffect(() => {
  //   handleOriginFilter()
  // }, [handleOriginFilter]);

  return (
    <ul>
      <li className="px-2">
        {/* {JSON.stringify([...props.filterBy.origin || []])} */}
        <motion.header
          initial={false}
          animate={{ backgroundColor: isOpen ? "#08696510" : "" }}
          onClick={() => setIsOpen((prev) => !prev)}
          // onClick={() => setExpanded(isOpen ? false : i)}
          className={clsx(
            "flex w-full items-center justify-between cursor-pointer px-5 py-1 rounded-md hover:bg-secondary/20 mb-2 ",
            selectedOptions.size > props.options.length && "bg-secondary/20"
          )}
        >
          <h6>{props.title}</h6>
          <IoIosArrowForward
            className={clsx(
              "w-6 h-5 cursor-pointer transition-all duration-300 ease-in-out text-gray-600",
              isOpen ? "rotate-90" : "rotate-0"
            )}
          />
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className={clsx("flex flex-col gap-y-1 pl-2 ")}
            >
              <motion.li
                className={clsx(
                  "flex gap-x-2 items-center  px-5 py-1 rounded-md overflow-hidden relative cursor-pointer"
                )}
              >
                <input
                  type="checkbox"
                  checked={checkAll}
                  onChange={handleCheckAll}
                  className="appearance-none w-full h-full absolute z-20 peer/select inset-0"
                />
                <div className="w-full h-full peer-checked/select:bg-secondary/20 peer-hover/select:bg-secondary/5 absolute inset-0"></div>
                <GetSVG
                  name="check-mark"
                  className={clsx("hidden peer-checked/select:inline-flex")}
                />
                <p className="capitalize">All</p>
              </motion.li>

              {props.options.map((option) => {
                return (
                  <motion.li
                    key={option.id}
                    className={clsx(
                      "flex gap-x-2 items-center  px-5 py-1 rounded-md overflow-hidden relative cursor-pointer"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={
                        // !checkAll
                        //   ? (props.filterBy.origin ? props.filterBy.origin.includes(
                        //     option.title
                        //   ) : false)
                        //   : true
                        props.filterBy.origin
                          ? props.filterBy.origin.has(option.title)
                          : false
                      }
                      onChange={handleSingleChecked(option.title)}
                      className="appearance-none w-full h-full absolute z-20 peer/select inset-0"
                    />
                    <div className="w-full h-full peer-checked/select:bg-secondary/20 peer-hover/select:bg-secondary/5 absolute inset-0"></div>
                    <GetSVG
                      name="check-mark"
                      className={clsx("hidden peer-checked/select:inline-flex")}
                    />
                    <p className="capitalize">{option.title}</p>
                  </motion.li>

                  // <motion.li
                  //   key={option.id}
                  //   className={clsx(
                  //     "flex gap-x-2 items-center px-5 py-1 rounded-md hover:bg-secondary/20 cursor-pointer",
                  //     false
                  //       ? "text-secondary bg-secondary/20"
                  //       : "bg-secondary/5"
                  //   )}
                  // >
                  //   <GetSVG
                  //     name="check-mark"
                  //     className={clsx(false ? "inline-flex" : "hidden")}
                  //   />
                  //   <p>{option.title}</p>
                  // </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </ul>
  );
};

type Props = {
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    bagsRange?: [number, number];
    process?: string[];
    origin?: Set<string>;
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      bagsRange?: [number, number];
      process?: string[];
      origin?: Set<string>;
    }>
  >;
};

const OriginFilter = ({ filterBy, setFilterBy }: Props) => {
  return (
    <div>
      {origins.map((origin) => {
        return (
          <MenuItem
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            key={origin.id}
            title={origin.title}
            options={origin.items}
          />
        );
      })}
    </div>
  );
};

export default OriginFilter;
