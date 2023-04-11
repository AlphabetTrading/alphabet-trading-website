import Head from "next/head";
import { Props } from "next/script";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import SourceItem from "../../components/sources/SourceItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SourceExpandedItem from "../../components/sources/SourceExpandedItem";
import { AiFillCloseCircle } from "react-icons/ai";

export type Region = {
  id: number;
  name: string;
  description: string;
  src: string;
  color: string;
  locations: string[];
};

const regions: Region[] = [
  {
    id: 0,
    name: "Guji",
    description: " 14 Regions | 7 Washing Stations",
    src: "/images/guji.svg",
    color: "#086965",
    locations: [
      "Layo",
      "Quni",
      "Michicha",
      "Bilida",
      "Ela Farda",
      "Gurachu",
      "Egu Abaya",
      "Birbirsa",
      "Oddo Shakiso",
      "Uraga",
      "Muda Tatesa",
      "Haro Lebetu",
      "Kercha",
      "Hambella Wamena",
    ],
  },
  {
    id: 1,
    name: "Yirgacheffe",
    description: "7 Regions | 8 Washing Stations",
    src: "/images/yirgacheffe.svg",
    color: "#2B48B2",
    locations: [
      "Bule",
      "Chelchele",
      "Chelbiesa",
      "Gedeb",
      "Gelana Abaya",
      "Kochere",
      "Yirgacheffe",
    ],
  },
  {
    id: 2,
    name: "Limmu",
    description: "8 Regions | 8 Washing Stations",
    src: "/images/limmu.svg",
    color: "#E86161",
    locations: [
      "Gera",
      "Gomma",
      "Gummay",
      "Kersa",
      "Limmu Kossa",
      "Limmu Seka",
      "Mena",
      "Seka Chekoressa",
    ],
  },
  {
    id: 3,
    name: "Sidamo",
    description: "13 Regions | 6 Washing Stations",
    src: "/images/Sidamo.svg",
    color: "#E69C2D",
    locations: [
      "Aleta Wendo",
      "Arbigonna",
      "Arroressa",
      "Benssa",
      "Chire",
      "Chuko",
      "Dale",
      "Dara",
      "Hadera Tunto",
      "Loko Abaya",
      "Shebedino",
      "Wensho",
    ],
  },
];

const Index = (props: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <BaseLayout>
      <Head>
        <title>Sourcing - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="From the birthplace of coffee to the conscious consumers, Alphabet engages in exporting Ethiopian specialty coffee. With a wide range of coffee types and quality processing, working in the sector has opened a door in the huge and ever growing world of coffee and we pride ourselves in taking the chance to move forward."
        />
      </Head>
      <div className="flex flex-col justify-center w-full">
        <Navbar white={true} />
        <div className="w-full h-full my-12 mt-32 flex justify-center">
          <motion.div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-12">
            {regions.map((region: Region, index: number) => (
              <SourceItem
                key={index}
                region={region}
                setSelectedId={setSelectedId}
              />
            ))}
            <AnimatePresence>
              <>
                {selectedId === 0 && (
                  <SourceExpandedItem
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    region={regions[selectedId]}
                  />
                )}
                {selectedId === 1 && (
                  <SourceExpandedItem
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    region={regions[selectedId]}
                  />
                )}
                {selectedId === 2 && (
                  <SourceExpandedItem
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    region={regions[selectedId]}
                  />
                )}
                {selectedId === 3 && (
                  <SourceExpandedItem
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    region={regions[selectedId]}
                  />
                )}
              </>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Index;
