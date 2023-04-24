import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Region } from "../../pages/our-coffee/origins";

type Props = {
  region: Region;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
};

const SourceItem = ({ region, setSelectedId }: Props) => {
  return (
    <motion.div
      className="w-full md:w-[45%] h-96 p-2 rounded-2xl shadow-md bg-white cursor-pointer"
      layoutId={region.id.toString()}
      onClick={() => setSelectedId(region.id)}
    >
      <motion.div className="flex flex-col w-full h-full gap-y-2 px-8 md:px-6 xl:px-8">
        <div className="w-full h-4/6">
          <img src={region.src} alt="" className="w-full h-full" />
        </div>
        <motion.div className="flex flex-col justify-end">
          <motion.p>{region.description}</motion.p>
          <motion.div className="flex items-center gap-x-2">
            <motion.p className="font-DM_Serif text-5xl md:text-4xl xl:text-5xl text-start text-secondary">
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
