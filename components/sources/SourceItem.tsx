import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Region } from "../../pages/our-coffee/origins";

type Props = {
  region: Region;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
};

const SourceItem = ({ region, setSelectedId }: Props) => {
  return (
    <motion.div
      className="w-full h-96 border p-4 rounded-2xl shadow-md"
      layoutId={region.id.toString()}
      onClick={() => setSelectedId(region.id)}
    >
      <motion.div className="relative h-full">
        <Image
          fill
          src={region.src}
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <motion.div className="absolute bottom-8 left-8 flex flex-col justify-end">
          <motion.p>{region.description}</motion.p>
          <motion.div className="flex items-center gap-x-1">
            <motion.p className="font-DM_Serif text-5xl text-start text-secondary">
              {region.name}
            </motion.p>
            <motion.div>
              <FaChevronRight size={28} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SourceItem;
