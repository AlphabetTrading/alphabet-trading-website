import Head from "next/head";
import React from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Navbar from "../../components/common/Navbar";
import CoffeeTypeItem from "../../components/services/CoffeeTypeItem";

type Props = {};

const coffeeTypes = [
  {
    name: "Yirgacheffe",
    description:
      "Yirgacheffe coffee is considered one of the best coffees in the world. The small town in Gedeo zone is well known for growing a distinctively floral and fruit toned coffee varieties. The variety, terrain, and processing method creates an organic coffee with a fruit forward flavor that is sought by many coffee lovers. Alphabet stipulates Yirgacheffe coffee for the world of coffee enthusiasts. Our varieties include Kochere ,Idido, Shashmene, Aricha and Konga.",
    imgSrc: "/images/yirgacheffe.svg",
  },
  {
    name: "Guji",
    description:
      "Coffee has been the crucial product for Guji farmers for more than 500 years. This long tradition of coffee has led to Guji becoming one of the most sought after coffees in the world. The Guji coffee is an organically grown coffee that has flavors associated with dark chocolate, peaches, and nectarines. The organic flavour of Guji gives a structure and fullness that satisfies and converts coffee drinkers around the world. Our collection of Guji coffee includes, Hambela Wamena, Oda Shakiso, Dimtu, Ela farda, Bilbirsa, Kercha, Layu, Uraga, Dimtu",
    imgSrc: "/images/guji.svg",
  },
  {
    name: "Sidama",
    description:
      "Sidama Coffee is a name associated with spice and citrus notes, crisp acidity, and a rich body. It’s also the major source of grade 1 and grade 2 coffee of Ethiopia. Sidama coffee’s fame is a result the fertile highlands and lakes and the innovation of Sidama coffee growers. We purchase and process cherries in Bensa, Chire, Aroresa and Nensebo with an eye towards the finest quality for each grade.",
    imgSrc: "/images/sidama.svg",
  },
  {
    name: "Gedebe",
    description:
      "Coffee from Gedebe district is known and loved for its fragrant & floral aroma, sweet & balanced taste and smooth acidity. We curate Chelchele, Chelbesa, Worka Sakaro and Banko Gotiti",
    imgSrc: "/images/gedebe.svg",
  },
  {
    name: "Limu",
    description:
      "Limu is a high-quality wet-processed (washed) Ethiopian coffee that exhibits a relatively low yet sharp acidity and well-knit structure. Many specialty roasters consider washed Limu coffee from Ethiopia to be a premium gourmet coffee.",
    imgSrc: "/images/limu.svg",
  },
];

const index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>Services - Alphabet Trading PLC</title>
      </Head>
      <>
        <Navbar white={true} />
        <div className="flex w-full flex-col-reverse lg:flex-row justify-between my-28 lg:my-40  gap-y-3 ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 gap-y-4">
            <h1 className="text-4xl font-bold">
              Our <span className="text-secondary">Coffee</span> Export
            </h1>
            <p className="font-semibold text-md leading-5">
              From the birthplace of coffee to the conscious consumers, Alphabet
              engages in exporting Ethiopian specialty coffee. With a wide range
              of coffee types and quality processing, working in the sector has
              open a door in the huge and ever growing world of coffee and we
              pride ourselves in taking the chance to move forward.
            </p>
            <p className="leading-5 font-semibold text-md">
              The high consumer demand for Ethiopian coffee open us a door to
              that world of wonder, in which our floral, distinctive and winy
              flavors of coffee have displayed. Our main export destinations are
              USA and Europe.
            </p>
          </div>
          <img
            className="w-full lg:w-1/2 lg:rounded-l-full lg:border-[16px] border-r-0 lg:border-r-0 border-primary/10 object-cover"
            src="/images/services1.svg"
            alt=""
          />
        </div>
        <div>
          {coffeeTypes.map((coffeeType: any, index: number) => {
            return (
              <CoffeeTypeItem
                key={index}
                index={index}
                coffeeType={coffeeType}
              />
            );
          })}
        </div>
      </>
    </BaseLayout>
  );
};

export default index;
