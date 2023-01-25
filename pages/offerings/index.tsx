import clsx from "clsx";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { AVAILABILITY } from "../../components/common/AvailabilityChip";
import BaseLayout from "../../components/common/BaseLayout";
import Button from "../../components/common/Button";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import SendRequestModal from "../../components/modals/SendRequestModal";
import OfferingsItem, {
  Offering,
} from "../../components/offerings/OfferingsItem";

type Props = {};

const offerings: Offering[] = [
  {
    id: 1,
    type: "Washed Yirgacheeffee Idedo",
    grade: "G-1",
    location: "Southern Region, Ethiopia",
    availability: "Available",
  },
  {
    id: 2,
    type: "Washed Yirgacheeffee Idedo",
    grade: "G-2",
    location: "Southern Region, Ethiopia",
    availability: "Not Available",
  },
  {
    id: 3,
    type: "Washed yirgacheeffee Aricha",
    grade: "G-1",
    location: "Southern Region, Ethiopia",
    availability: "Available",
  },
];

const Index = (props: Props) => {
  const [selectedOffering, setSelectedOffering] = useState<Array<Offering>>([]);
  const [selectedOfferingCount, setSelectedOfferingCount] = useState(0);

  const handleOfferingCheck = (offering: Offering) => {
    const index = selectedOffering.findIndex((prev) => {
      return prev.id === offering.id;
    });
    if (index === -1) {
      setSelectedOffering([...selectedOffering, offering]);
    } else {
      setSelectedOffering((prev) => {
        return prev.filter((p) => p.id !== offering.id);
      });
    }
  };

  useEffect(() => {
    setSelectedOfferingCount(selectedOffering.length);
  }, [selectedOffering.length]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <BaseLayout>
      <Head>
        <title>Offerings - Alphabet Trading PLC</title>
      </Head>
      <>
        <Navbar white={true} />
        {isModalOpen && (
          <SendRequestModal
            selectedProducts={selectedOffering}
            handleOfferingCheck={handleOfferingCheck}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        <div className="w-full flex flex-col justify-center items-center gap-y-3 mt-28 p-4 py-12 md:py-20 md:px-6 lg:px-10 xl:px-20 2xl:px-36 border border-green-400 bg-secondary/10">
          <h1 className="text-4xl font-semibold">
            Our <span className="text-secondary">Coffee</span> Export
          </h1>
          <p className="w-11/12 md:w-2/3 lg:w-7/12 xl:w-1/2 text-center font-semibold">
            Yirgacheffe, Guji, Sidama, Gedebe and Limu are the five regions in
            Ethiopia that Alphabet Coffee sources its coffee from.
          </p>
          <div className="w-full md:w-5/6 flex justify-end">
            <Button
              classname={clsx(
                "w-full text-white bg-secondary rounded-2xl",
                selectedOffering.length === 0 ? "bg-secondary/40" : ""
              )}
              disabled={selectedOffering.length === 0}
              onClick={handleModalOpen}
              text={`Request Sample (${selectedOfferingCount})`}
            />
          </div>
          <div className="hidden md:grid md:grid-cols-12 w-5/6 gap-x-1 mt-8 text-xs md:text-sm lg:text-md px-2 font-semibold">
            <div className="col-span-2"></div>
            <div className="col-span-3 flex items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Coffee Type</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
            <div className="col-span-2 items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Grade</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
            <div className="col-span-3 items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Location</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
            <div className="col-span-2 items-center">
              <div className="w-full flex items-center gap-x-1">
                <h2>Availability</h2>
                <AiFillCaretUp className="-mr-2" />
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          {offerings.map((offering: Offering, index: number) => {
            return (
              <OfferingsItem
                handleOfferingCheck={handleOfferingCheck}
                key={index}
                offering={offering}
              />
            );
          })}
        </div>
      </>
    </BaseLayout>
  );
};

export default Index;
