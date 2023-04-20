import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import {
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import Image from "next/image";
import { Region } from "../../pages/our-coffee/origins";

type Props = {
  region: Region;
  selectedId: number;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
};

const SourceExpandedItem = ({ region, selectedId, setSelectedId }: Props) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "visible";
    };
  }, []);
  return (
    <motion.div
      className="w-full h-fit md:min-h-screen flex items-center justify-center bg-secondary/10 fixed top-0 bottom-0 right-0 left-0 z-50"
      onClick={() => setSelectedId(null)}
      layoutId={selectedId.toString()}
    >
      <motion.div
        className="w-5/6 h-full max-h-screen overflow-y-scroll no-scrollbar bg-white relative rounded-3xl drop-shadow-2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col-reverse md:flex-row md:justify-center w-full h-full">
          <div className="flex flex-col w-full md:w-1/2 p-8 px-12 gap-y-8">
            <div>
              <p>{region.description}</p>
              <div className="flex items-center gap-x-1 text-secondary">
                <p className="font-DM_Serif text-5xl text-start">
                  {region.name}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              {region.locations &&
                region.locations.map((location: any, index: number) => {
                  return <h1 key={index}>{location}</h1>;
                })}
            </div>
          </div>
          <div className="flex items-center min-h-[500px] w-full h-full md:w-1/2 relative">
            <Image
              className="min-h-[400px] absolute inset-0 object-contain"
              fill
              src={region.expandedSrc}
              alt={region.name}
            />
          </div>
        </div>
        <AiOutlineClose
          size={28}
          color="#086965"
          className="absolute right-4 top-4 cursor-pointer bg-secondary/10 rounded-full p-1 hover:bg-secondary/20"
          onClick={() => setSelectedId(null)}
        />
      </motion.div>
    </motion.div>
  );
};

export default SourceExpandedItem;
