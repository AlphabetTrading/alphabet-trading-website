import clsx from "clsx";
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { AVAILABILITY } from "../../components/common/AvailabilityChip";
import BaseLayout from "../../components/common/BaseLayout";
import Button from "../../components/common/Button";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import SendRequestModal from "../../components/modals/SendRequestModal";
import OfferingsItem from "../../components/offerings/OfferingsItem";
import {
  IOfferingRequest,
  useOfferingsContext,
} from "../../context/OfferingsContext";
import { sort_by } from "../../utils/common";
import { AnimatePresence } from "framer-motion";

type Props = {};

const OfferingsComponent = (props: Props) => {
  const {
    selectedOfferings,
    offeringRequests,
    setOfferingRequests,
    filterOfferings,
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
    setOfferingRequests(
      offeringRequests.map((off) =>
        offering.id === off.id ? { ...off, isSelected: !off.isSelected } : off
      )
    );
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    filterOfferings(sortBy);
  }, [sortBy]);

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
      <div className="w-full flex flex-col justify-center items-center gap-y-3 mt-28 p-4 py-12 md:py-20 md:px-6 lg:px-10 xl:px-20 2xl:px-36 border border-green-400 bg-secondary/10">
        <h1 className="text-4xl 2k:text-5xl 4k:text-6xl font-semibold">
          Our <span className="text-secondary">Coffee</span> Export
        </h1>
        <p className="w-11/12 md:w-2/3 lg:w-7/12 xl:w-1/2 2k:w-2/5 4k:w-1/4 text-center font-semibold 2k:text-xl 4k:text-2xl">
          Yirgacheffe, Guji, Sidama, Gedebe and Limu are the five regions in
          Ethiopia that Alphabet Coffee sources its coffee from.
        </p>
        <div className="w-full md:w-5/6 2k:w-2/3 4k:w-1/2 flex justify-end">
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
        <div className="hidden md:grid md:grid-cols-12  md:w-5/6 2k:w-2/3 4k:w-1/2 gap-x-1 mt-8 text-xs md:text-sm lg:text-md 2k:text-[18px] 4k:text-2xl px-2 font-semibold">
          <div className="col-span-2"></div>
          <div className="col-span-3 flex items-center">
            <div className="w-full flex items-center gap-x-1">
              <h2>Coffee Type</h2>
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
                  sortBy.field === "type" && !sortBy.reverse && "text-amber-500"
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
                  sortBy.field === "type" && sortBy.reverse && "text-amber-500"
                )}
              />
            </div>
          </div>
          <div className="col-span-2 items-center">
            <div className="w-full flex items-center gap-x-1">
              <h2>Grade</h2>
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
                  sortBy.field === "grade" && sortBy.reverse && "text-amber-500"
                )}
              />
            </div>
          </div>
          <div className="col-span-3 items-center">
            <div className="w-full flex items-center gap-x-1">
              <h2>Location</h2>
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
          <div className="col-span-2 items-center">
            <div className="w-full flex items-center gap-x-1">
              <h2>Availability</h2>
              <AiFillCaretUp
                onClick={() => {
                  setSortBy((prev) => ({
                    ...prev,
                    field: "availability",
                    reverse: false,
                  }));
                }}
                className={clsx(
                  "-mr-2 cursor-pointer",
                  sortBy.field === "availability" &&
                    !sortBy.reverse &&
                    "text-amber-500"
                )}
              />
              <AiFillCaretDown
                onClick={() => {
                  setSortBy((prev) => ({
                    ...prev,
                    field: "availability",
                    reverse: true,
                  }));
                }}
                className={clsx(
                  "-mr-2 cursor-pointer",
                  sortBy.field === "availability" &&
                    sortBy.reverse &&
                    "text-amber-500"
                )}
              />
            </div>
          </div>
        </div>
        {offeringRequests.map((offering: IOfferingRequest, index: number) => {
          return (
            <OfferingsItem
              handleOfferingCheck={handleOfferingCheck}
              key={offering.id}
              offering={offering}
            />
          );
        })}
      </div>
    </>
  );
};

export default OfferingsComponent;
