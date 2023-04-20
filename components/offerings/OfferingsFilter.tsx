import React, { useEffect, useState } from "react";
import clsx from "clsx";
import GetSVG from "../common/GetSVG";
import MultiRangeSlider from "./MultiRangeSlider";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import GradeFilter from "./GradeFilter";
import ProcessFilter from "./ProcessFilter";

type Props = {
  setShowFilterOption: React.Dispatch<React.SetStateAction<boolean>>;
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: string[];
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      process?: string[];
      origin?: string[];
    }>
  >;
};

type MenuItemProps = {
  title: string;
  options: { id: string; title: string }[];
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: string[];
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      process?: string[];
      origin?: string[];
    }>
  >;
};

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
      { id: "5", title: "Bedessa" },
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
      { id: "13", title: "Haro Lebetu" },

      { id: "14", title: "Goro Muda" },
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

const MenuItem = (props: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    props.options.map((option) => ({ checked: false, ...option }))
  );
  const [checkAll, setCheckAll] = useState(false);
  const handleCheckAll = () => {
    setCheckAll((prev) => {
      setSelectedOptions(
        selectedOptions.map((option) => ({ ...option, checked: !prev }))
      );
      return !prev;
    });
  };
  const handleSingleChecked = (title: string) => (e: any) => {
    setSelectedOptions(() => {
      const options = selectedOptions.map((option) => {
        if (option.title === title) {
          return { ...option, checked: !option.checked };
        } else {
          return option;
        }
      });
      setCheckAll(
        options.filter((item) => item.checked).length === options.length
      );
      return options;
    });
  };
  useEffect(() => {
    const checkedList = selectedOptions.filter((option) => option.checked);
    console.log(checkedList.map((val) => val.title));
    props.setFilterBy((prev) => ({
      ...prev,
    }));
  }, []);
  const isAllChecked = () =>
    selectedOptions.filter((item) => item.checked).length ===
    selectedOptions.length;

  return (
    <ul>
      <li className="px-2">
        <motion.header
          initial={false}
          animate={{ backgroundColor: isOpen ? "#08696510" : "" }}
          onClick={() => setIsOpen((prev) => !prev)}
          // onClick={() => setExpanded(isOpen ? false : i)}
          className={clsx(
            "flex w-full items-center justify-between cursor-pointer px-5 py-1 rounded-md hover:bg-secondary/20 mb-2 ",
            selectedOptions.find(
              (option) => option.title.toLowerCase() === "all"
            )?.checked && "bg-secondary/20"
          )}
        >
          <h6>{props.title}</h6>
          <IoIosArrowForward
            onClick={() => setIsOpen((prev) => !prev)}
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
                        !checkAll
                          ? selectedOptions.find(
                              (op) => op.title === option.title
                            )?.checked
                          : true
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

const CheckboxItem = () => {
  const [isChecked, setIsChecked] = useState(false);
};

const OfferingsFilter = (props: Props) => {
  const [values, setValues] = useState<[number, number]>([0, 1000]);

  return (
    <aside className="flex flex-col px-2 gap-y-4">
      <div className="flex justify-between items-center ">
        {/* <label
          onClick={() => props.setShowFilterOption((prev) => !prev)}
          htmlFor="filter"
          className="flex gap-x-2 text-black"
        >
          <GetSVG name="filter" />
          <h4 className="font-medium">Filters</h4>
        </label> */}
        {/* <Button
          onClick={() => {}}
          text="Reset All"
          classname="text-secondary font-semibold"
        ></Button> */}
      </div>
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm">GRADE</h6>
        <GradeFilter
          setFilterBy={props.setFilterBy}
          filterBy={props.filterBy}
        />
      </div>
      {/* <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm">PRICE RANGE</h6>
        <MultiRangeSlider
          max={6}
          min={0}
          step={0.25}
          onChange={setValues}
          unit="lbs"
          // values={values}
        />
      </div> */}
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm uppercase">
          Process
        </h6>
        <ProcessFilter
          setFilterBy={props.setFilterBy}
          filterBy={props.filterBy}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm uppercase">
          quantity
        </h6>
        <MultiRangeSlider
          max={980}
          min={80}
          step={0.05}
          onChange={setValues}
          unit="bags"
          // values={values}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <h6 className="font-medium text-slate-500 text-sm uppercase">origin</h6>
        {origins.map((origin) => {
          return (
            <MenuItem
              filterBy={props.filterBy}
              setFilterBy={props.setFilterBy}
              key={origin.id}
              title={origin.title}
              options={origin.items}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default OfferingsFilter;
