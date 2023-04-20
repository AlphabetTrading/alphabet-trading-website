import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Button from "../../components/common/Button";
import SendRequestModal from "../../components/modals/SendRequestModal";
import OfferingsItem from "../../components/offerings/OfferingsItem";
import {
  IOfferingRequest,
  useOfferingsContext,
} from "../../context/OfferingsContext";
import { AnimatePresence, motion } from "framer-motion";
import OfferingsFilter from "./OfferingsFilter";
import GetSVG from "../common/GetSVG";
import { IoIosArrowForward } from "react-icons/io";
import { useIsSmall } from "../../hooks/utils";
import OfferingsSearchbar from "./OfferingsSearchbar";

type Props = {};
export enum ViewTypeEnum {
  GRID = "GRID",
  LIST = "LIST",
}
const OfferingsComponent = () => {
  const {
    selectedOfferings,
    filterOfferings,
    filteredOfferingRequests,
    setFilteredOfferingRequests,
  } = useOfferingsContext();
  const [sortBy, setSortBy] = useState<{
    field: string;
    reverse: boolean;
    primer: Function;
  }>({
    field: "type",
    reverse: false,
    primer: (a: any | string) => a.toUpperCase(),
  });
  const handleOfferingCheck = (offering: IOfferingRequest) => {
    setFilteredOfferingRequests(
      filteredOfferingRequests.map((off) =>
        offering.id === off.id ? { ...off, isSelected: !off.isSelected } : off
      )
    );
  };

  const isSmall = useIsSmall();
  const [filterBy, setFilterBy] = useState<{
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: string[];
  }>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFilterOptionOpen, setIsFilterOptionOpen] = useState(!isSmall);
  const [viewType, setViewType] = useState(ViewTypeEnum.GRID);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    filterOfferings(sortBy, filterBy);
  }, [filterOfferings, filterBy, sortBy]);

  return (
    <>
      <AnimatePresence
      // initial={false}
      // onExitComplete={() => null}
      >
        {isModalOpen && (
          <SendRequestModal
            handleOfferingCheck={handleOfferingCheck}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
      <div
        className={clsx(
          "w-full flex flex-col justify-center items-center gap-y-3 mt-28 p-4 py-12 md:py-20 md:px-6 lg:px-10 xl:px-20 2xl:px-36",
          isModalOpen
            ? "bg-gray-900 bg-opacity-30 overflow-y-hidden"
            : "bg-secondary/10"
        )}
      >
        <h1 className="text-4xl 2k:text-5xl 4k:text-6xl font-semibold">
          <span className="text-secondary">Coffee</span> Export
        </h1>
        <p className="w-11/12 md:w-2/3 lg:w-7/12 xl:w-1/2 2k:w-2/5 4k:w-1/4 text-center font-semibold 2k:text-xl 4k:text-2xl">
          Yirgacheffe, Guji, Sidamo, Gedeb and Limmu are the five regions in
          Ethiopia that Alphabet Coffee sources its coffee from.
        </p>
        <label
          onClick={() => {
            setIsFilterOptionOpen((prev) => !prev);
          }}
          htmlFor="filter"
          className="flex  flex-col text-black cursor-pointer items-center gap-y-2 justify-between w-full max-w-xs  self-start"
        >
          <div className="flex  items-center w-full font-semibold">
            <div className="flex gap-x-3 ">
              <GetSVG name="filter" />
              <h4 className="font-medium">Filters</h4>
            </div>
            <div className="flex items-center">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                text="Reset All"
                classname={clsx(
                  "text-secondary ",
                  isFilterOptionOpen ? "hidden" : "inline-flex"
                )}
              ></Button>
              <IoIosArrowForward
                className={clsx(
                  "w-6 h-5 cursor-pointer transition-all duration-300 ease-in-out text-gray-600",
                  isFilterOptionOpen ? "-rotate-180" : "rotate-0"
                )}
              />
            </div>
          </div>
          <div className="h-0.5 w-full bg-secondary/10 max-w-xs mx-5"></div>
        </label>
        <div className="flex w-full gap-x-5">
          <div
            className={clsx(
              "w-1/6  overflow-hidden transition-all duration-500 ease-in-out",
              isFilterOptionOpen
                ? "w-11/12 flex-1 sm:w-1/6 sm:flex-auto sm:max-w-[250px] lg:max-w-xs"
                : "w-0 max-w-xs"
            )}
          >
            <OfferingsFilter
              setFilterBy={setFilterBy}
              filterBy={filterBy}
              setShowFilterOption={() => {}}
            />
          </div>
          <div
            className={clsx(
              "flex flex-col justify-start items-center sm:flex-1 gap-y-2",
              isFilterOptionOpen
                ? "w-0 sm:w-1/2 sm:flex sm:flex-auto lg:flex-1"
                : "flex flex-1 "
            )}
          >
            <div className="w-full md:w-11/12 flex justify-between">
              <div className="flex items-center flex-1 cursor-pointer">
                {/* {viewType === ViewTypeEnum.GRID ? (
                  <BsGrid
                    className="h-5 w-5 text-primary/90"
                    onClick={() => setViewType(ViewTypeEnum.LIST)}
                  />
                ) : (
                  <BsListUl
                    className="h-5 w-5 text-primary/90"
                    onClick={() => setViewType(ViewTypeEnum.GRID)}
                  />
                )} */}
                <OfferingsSearchbar
                  onChange={(query) =>
                    setFilterBy((prev) => ({ ...prev, query: query }))
                  }
                />
              </div>
              <Button
                classname={clsx(
                  "w-full text-white 2k:text-lg 4k:text-xl bg-secondary rounded-2xl",
                  selectedOfferings.length === 0 ? "bg-secondary/40" : ""
                )}
                disabled={selectedOfferings.length === 0}
                onClick={handleModalOpen}
                text={`Request Sample (${selectedOfferings.length})`}
              />
            </div>
            <div className="hidden w-full md:w-11/12 md:grid md:grid-cols-12 px-2 font-semibold">
              <div className="col-span-2"></div>
              <div className="col-span-3 flex items-center">
                <div className="w-full flex items-center gap-x-1">
                  <h2 className="text-sm">Coffee Type</h2>
                  <AiFillCaretUp
                    onClick={() => {
                      if (sortBy.field !== "type" || sortBy.reverse) {
                        setSortBy((prev) => ({
                          ...prev,
                          field: "type",
                          reverse: false,
                        }));
                      }
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "type" &&
                        !sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                  <AiFillCaretDown
                    onClick={() => {
                      if (sortBy.field !== "type" || !sortBy.reverse) {
                        setSortBy((prev) => ({
                          ...prev,
                          field: "type",
                          reverse: true,
                        }));
                      }
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "type" &&
                        sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1 items-center pr-4">
                <div className="w-full flex items-center gap-x-1">
                  <h2 className="text-sm">Grade</h2>
                  <AiFillCaretUp
                    onClick={() => {
                      console.log("sssssort");
                      setSortBy((prev) => ({
                        ...prev,
                        field: "grade",
                        reverse: false,
                      }));
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "grade" &&
                        !sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                  <AiFillCaretDown
                    onClick={() => {
                      console.log("sssssort     - reverse");
                      setSortBy((prev) => ({
                        ...prev,
                        field: "grade",
                        reverse: true,
                      }));
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "grade" &&
                        sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2 items-center">
                <div className="w-full flex justify-start items-center gap-x-1">
                  <h2 className="text-sm">Quantity</h2>
                  <AiFillCaretUp
                    onClick={() => {
                      setSortBy((prev) => ({
                        ...prev,
                        field: "quantity",
                        reverse: false,
                        primer: (a: number) => {
                          return a;
                        },
                      }));
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "quantity" &&
                        !sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                  <AiFillCaretDown
                    onClick={() => {
                      setSortBy((prev) => ({
                        ...prev,
                        field: "quantity",
                        reverse: true,
                        primer: (a: number) => {
                          return a;
                        },
                      }));
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "quantity" &&
                        sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                </div>
              </div>
              <div className="col-span-4 items-center">
                <div className="w-full flex items-center gap-x-1">
                  <h2 className="text-sm">Location</h2>
                  <AiFillCaretUp
                    onClick={() => {
                      setSortBy((prev) => ({
                        ...prev,
                        field: "location",
                        reverse: false,
                      }));
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "location" &&
                        !sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                  <AiFillCaretDown
                    onClick={() => {
                      setSortBy((prev) => ({
                        ...prev,
                        field: "location",
                        reverse: true,
                      }));
                    }}
                    className={clsx(
                      "-mr-2 cursor-pointer",
                      sortBy.field === "location" &&
                        sortBy.reverse &&
                        "text-amber-500"
                    )}
                  />
                </div>
              </div>
            </div>
            <motion.li
              className={clsx(
                "flex flex-col items-center justify-start gap-y-2 w-full"
              )}
            >
              <AnimatePresence>
                {filteredOfferingRequests.length > 0 ? (
                  filteredOfferingRequests.map(
                    (offering: IOfferingRequest, index: number) => {
                      return (
                        <OfferingsItem
                          index={index}
                          viewType={viewType}
                          handleOfferingCheck={handleOfferingCheck}
                          key={offering.id}
                          offering={offering}
                        />
                      );
                    }
                  )
                ) : (
                  <div className="my-5 font-semibold">No Result</div>
                )}
              </AnimatePresence>
            </motion.li>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferingsComponent;
