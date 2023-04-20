import Head from "next/head";
import { Props } from "next/script";
import BaseLayout from "../../../components/common/BaseLayout";
import Navbar from "../../../components/common/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SourceExpandedItem from "../../../components/sources/SourceExpandedItem";
import SourceItem from "../../../components/sources/SourceItem";

export type Region = {
  id: number;
  name: string;
  description: string;
  src: string;
  expandedSrc: string;
  locations: string[];
};

const regions: Region[] = [
  {
    id: 0,
    name: "Guji",
    description: " 20 Regions | 7 Washing Stations",
    src: "/images/guji.svg",
    expandedSrc: "/images/expanded_guji.svg",
    locations: [
      "Kercha",
      "Layo Quni",
      "Michicha",
      "Blida",
      "Ela Farda",
      "Bukisa",
      "Guracho",
      "Bedessa",
      "Egu Abaya",
      "Inshe",
      "Birbirsa",
      "Edera Take",
      "Mazora",
      "Chebi",
      "Udotu",
      "Hambella Wamena",
      "Banti Nenka",
      "Buku Hambella",
      "Uraga",
      "Haro Lebetu",
      "Goro Muda",
    ],
  },
  {
    id: 1,
    name: "Yirgacheffe",
    description: "5 Regions | 8 Washing Stations",
    src: "/images/yirgacheffe.svg",
    expandedSrc: "/images/expanded_yirgacheffe.svg",
    locations: ["Gerse", "Halo Beriti", "Idido", "Konga"],
  },
  {
    id: 2,
    name: "Gedeb",
    description: "4 Regions | 3 Washing Stations",
    src: "/images/gedeb.svg",
    expandedSrc: "/images/expanded_gedeb.svg",
    locations: ["Chelchele", "Chelbesa", "Worka Sakaro", "Banko Gotiti"],
  },
  {
    id: 3,
    name: "Sidamo",
    description: "6 Regions | 5 Washing Stations",
    src: "/images/sidamo.svg",
    expandedSrc: "/images/expanded_sidamo.svg",
    locations: ["Arbigonna", "Benssa", "Chire", "Dale", "Dara", "Shebedino"],
  },
  {
    id: 4,
    name: "Limmu",
    description: "7 Regions | 8 Washing Stations",
    src: "/images/limmu.svg",
    expandedSrc: "/images/expanded_limmu.svg",
    locations: [
      "Gera",
      "Gomma",
      "Gummay",
      "Kersa",
      "Limmu Kossa",
      "Limmu Seka",
      "Seka Chekoressa",
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
        <div className="w-full h-full mt-32 bg-[#F3F7F7]">
          <div className="flex flex-col justify-center items-center my-8 mb-14">
            <div className="w-full flex flex-col justify-center items-center gap-y-3 p-4 py-4 md:py-10 md:px-6 lg:px-10 xl:px-20 2xl:px-36">
              <h1 className="text-4xl 2k:text-5xl 4k:text-6xl font-semibold">
                Our <span className="text-secondary">Coffee</span> Sources
              </h1>
              <p className="w-11/12 md:w-5/6 text-center font-semibold 2k:text-xl 4k:text-2xl text-[#606060]">
                Ethiopia is known as the birthplace of coffee and is considered
                by many to be the darling of the coffee world. The country’s
                unique climate and geography provide ideal growing conditions
                for coffee, and Ethiopian coffee is renowned for its complex
                flavor profiles and high quality. We are currently sourcing our
                specialty coffee from these five main regions: Yirgacheffe,
                Gedeb (even though Gedeb is situated in Yirgacheffe, it deserves
                its own mention since it has unique flavors), Guji, Limmu and
                Sidamo.
              </p>
              <p className="w-11/12 md:w-5/6  text-center font-semibold 2k:text-xl 4k:text-2xl text-[#606060]">
                Below you can take a look at each regions&apos; stations and the
                small kebeles the coffee is collected from.
              </p>
            </div>
            <motion.div className="w-3/4 grid grid-cols-1 md:grid-cols-2 items-center gap-10 gap-x-12">
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
                  {selectedId === 4 && (
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
      </div>
    </BaseLayout>
  );
};

export default Index;
