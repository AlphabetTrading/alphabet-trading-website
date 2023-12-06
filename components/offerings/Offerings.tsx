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
import GetSVG from "../common/GetSVG";
import { useIsSmall } from "../../hooks/utils";
import OfferingsSearchbar from "./OfferingsSearchbar";
import OfferingFilterSidebar from "./OfferingFilterSidebar";
import OfferingsFilterMobile from "./OfferingFilterPopup";

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
    origin?: Set<string>;
  }>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFilterOptionOpen, setIsFilterOptionOpen] = useState(false);
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
          "w-full flex flex-col justify-center items-center gap-y-3 mt-20 p-4 py-12 md:py-20 md:px-6 lg:px-10 xl:px-20",
          isModalOpen
            ? "bg-gray-900 bg-opacity-30 overflow-y-hidden"
            : "bg-white"
        )}
      >
        <h1 className="text-4xl 2k:text-5xl 4k:text-6xl font-bold">
          Our <span className="text-secondary">Coffee </span>Export
        </h1>
        <p className="w-11/12 md:w-2/3 lg:w-7/12 xl:w-1/2 2k:w-2/5 4k:w-1/4 text-center font-semibold 2k:text-xl 4k:text-2xl pb-12">
          Yirgacheffe, Guji, Sidamo, Gedeb and Limmu are the five regions in
          Ethiopia that Alphabet Coffee sources its coffee from.
        </p>
        <div className="flex w-full">
          <OfferingsFilterMobile
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            isFilterOptionOpen={isFilterOptionOpen}
            setIsFilterOptionOpen={setIsFilterOptionOpen}
          />
          <OfferingFilterSidebar
            filterBy={filterBy}
            setFilterBy={setFilterBy}
          />
          <div
            className={clsx(
              "flex flex-col justify-start items-center sm:flex-1 gap-y-2",
              "w-full flex sm:w-1/2 sm:flex sm:flex-auto lg:flex-1"
            )}
          >
            <div className="w-full lg:w-11/12 flex flex-row gap-y-3 justify-between py-4 md:py-8">
              <div className="flex items-center justify-between flex-1 cursor-pointer">
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
                <div className="lg:hidden max-w-[7rem] overflow-hidden flex justify-end items-center px-4">
                  <button
                    onClick={() => setIsFilterOptionOpen((prev) => !prev)}
                    className="flex gap-x-2 text-black"
                  >
                    <GetSVG name="filter" />
                    <h4 className="font-medium">Filter</h4>
                  </button>
                </div>
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
            <div className="w-full lg:w-11/12 md:shadow-t-lg rounded-xl overflow-hidden">
              <div className="hidden lg:flex justify-center py-5">
                <div className="w-[95%] flex justify-between items-center">
                  <h1 className="font-bold text-lg">Our Offerings</h1>
                  <OfferingsSearchbar
                    onChange={(query) =>
                      setFilterBy((prev) => ({ ...prev, query: query }))
                    }
                  />
                </div>
              </div>
              <div className="hidden lg:grid lg:grid-cols-12 p-2 py-4 font-semibold bg-[#F4F4F4]">
                <div className="col-span-1"></div>
                <div className="col-span-4 flex items-center">
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
                  <div className="w-full flex justify-center items-center gap-x-1">
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
                  <div className="w-full flex justify-center items-center gap-x-1">
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

                <div className="col-span-1 items-center">
                  <div className="w-full flex justify-center items-center gap-x-1">
                    <h2 className="text-sm">Spot</h2>
                    <AiFillCaretUp
                      onClick={() => {
                        // setSortBy((prev) => ({
                        //   ...prev,
                        //   field: "spot",
                        //   reverse: false,
                        // }));
                      }}
                      className={clsx(
                        "-mr-2 cursor-pointer"
                        // sortBy.field === "spot" &&
                        //   !sortBy.reverse &&
                        //   "text-amber-500"
                      )}
                    />
                    <AiFillCaretDown
                      onClick={() => {
                        // setSortBy((prev) => ({
                        //   ...prev,
                        //   field: "spot",
                        //   reverse: true,
                        // }));
                      }}
                      className={clsx(
                        "-mr-2 cursor-pointer"
                        // sortBy.field === "spot" &&
                        //   sortBy.reverse &&
                        //   "text-amber-500"
                      )}
                    />
                  </div>
                </div>

                <div className="col-span-3 items-center">
                  <div className="w-full flex justify-center items-center gap-x-1">
                    <h2 className="text-sm">Origin</h2>
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
              <motion.ul
                className={clsx(
                  "flex flex-col items-center justify-start w-full"
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
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferingsComponent;
