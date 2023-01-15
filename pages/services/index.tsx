import Head from "next/head";
import React from "react";
import Footer from "../../components/common/Footer";
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
    <>
      <Head>
        <title>Services - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="Alphabet is a coffee export firm based in its place of origin. We specialize in discovering, developing and exporting the finest commercial grade coffee and spe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Navbar white={true} />
        <div className="grid grid-cols-12 my-40">
          <div className="col-span-6 flex flex-col justify-center mx-24 gap-y-3">
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
            className="col-span-6 rounded-l-full border-[18px] border-r-0 border-secondary/10"
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
        <Footer />
      </main>
    </>
  );
};

export default index;
