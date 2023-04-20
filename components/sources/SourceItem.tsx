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
      className="last:w-full last:flex last:justify-center w-full h-96 p-2 rounded-2xl shadow-md bg-white"
      layoutId={region.id.toString()}
      onClick={() => setSelectedId(region.id)}
    >
      <motion.div
        style={{ backgroundImage: `url('${region.src}')` }}
        className="relative h-full bg-no-repeat bg-contain w-full bg-center"
      >
        <motion.div className="absolute bottom-8 left-8 flex flex-col justify-end">
          <motion.p>{region.description}</motion.p>
          <motion.div className="flex items-center gap-x-2">
            <motion.p className="font-DM_Serif text-5xl text-start text-secondary">
              {region.name}
            </motion.p>
            <motion.div>
              <FaChevronRight color="#086965" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SourceItem;
