import Head from "next/head";
import React from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Image from "next/image";
import ImageWithSkeleton from "../../components/common/ImageWithSkeleton";

type Props = {};

const index = (props: Props) => {
  return (
    <BaseLayout>
      <Head>
        <title>About Us - Alphabet Trading PLC</title>
        <meta
          name="description"
          content="Driven by passion, fueled with professionalism and inspired by excellence, team Alphabet is devoted to providing an all-encompassing service. We always deliver on our promises. How we do things is equally important to what we do, and that's why we always stick with our values and community. After all in coffee 'we are because they are'."
        />
      </Head>
      <>
        <Navbar white />
        <div className="w-full my-12 mt-32 flex justify-center">
          <div className="">
            <div className="flex flex-col justify-center gap-y-5 gap-x-2 md:flex-row p-8 md:p-12 lg:px-20 xl:px-28  lg:pb-16 items-center">
              {/* <div className="w-11/12 flex flex-col justify-center gap-y-5 md:flex-row p-5 md:p-12 lg:px-28 lg:pb-32 items-center"> */}
              <div className="w-full lg:w-1/2  font-semibold">
                <h4 className="uppercase text-xs font-bold text-secondary">
                  About Alphabet Trading
                </h4>
                <div className="w-full lg:w-4/5 2xl:w-2/3">
                  <h1 className="text-5xl font-bold">
                    We <span className="text-secondary">always</span> deliver on
                    our promises
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-1/2 ">
                <p className="text-md font-medium">
                  Driven by passion, fueled with professionalism and inspired by
                  excellence, team Alphabet is devoted to providing an
                  all-encompassing service. We always deliver on our promises.
                  How we do things is equally important to what we do, and
                  that&apos;s why we always stick with our values and community.
                  After all in coffee &apos;
                  <span className="font-bold">we are because they are</span>
                  &apos;.
                </p>
              </div>
            </div>
            <div className="relative min-h-[350px] ">
              <ImageWithSkeleton
                props={{ fill: true }}
                src={`https://alphabettrading.s3.amazonaws.com/images/about1.webp`}
                alt="about_us_1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center p-8 md:p-12 gap-y-5 md:gap-x-[4rem] lg:px-20 xl:px-28  mt-16">
              <div className="flex flex-col w-full lg:w-1/2 lg:justify-between font-semibold gap-y-6">
                <div>
                  <h4 className="uppercase text-xs  font-bold text-secondary">
                    why we started it
                  </h4>
                  <h1 className="text-5xl font-bold">Our Story</h1>
                </div>
                <p className="text-md font-medium leading-5">
                  The story of Alphabet begins with Henock. While living in the
                  US and working as a coffee agent, he witnessed the
                  transparency gap which in the sector. His experience first
                  inspired him to create Lucid Specialty Coffee in USA, a
                  company that’s dedicated to establish a strong linkage between
                  exports and international distribution of coffees from
                  Ethiopia.
                </p>
                <p className="text-md font-medium leading-5">
                  With the vision of sourcing coffee from the origin he then
                  founded Alphabet coffee in 2019. Based in Addis Ababa
                  Ethiopia, Alphabet is a platform that operates in an exemplary
                  diligence, open communication and reasonable speed.
                </p>
              </div>
              <div className="w-full lg:w-1/2 lg:flex font-semibold h-full ">
                <div className="relative min-h-[300px] lg:min-h-[320px] xl:min-h-[340px] h-full w-full lg:border-[18px] lg:border-secondary/20 lg:rotate-[8deg] py-6 lg:py-4 rounded-[72px]">
                  <ImageWithSkeleton
                    props={{ fill: true }}
                    className="absolute inset-0 lg:-rotate-[8deg] w-full h-full object-cover lg:shadow-t-2xl rounded-[48px]"
                    src={`https://alphabettrading.s3.amazonaws.com/images/about2.webp`}
                    alt="about_us_2"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center p-8 gap-y-5 md:gap-x-[4rem] md:p-12 lg:px-20 xl:px-28  gap-x-8">
              <div className="flex flex-col w-full lg:w-1/2 font-semibold gap-y-6">
                <div>
                  <h4 className="uppercase text-xs  font-bold text-secondary">
                    Why we started it
                  </h4>
                  <h1 className="text-5xl font-bold">Who We Are</h1>
                </div>
                <p className="text-md font-medium leading-5">
                  Alphabet Trading PLC was formally established in November 2019
                  by Mr Henock Fikru Asfaw along with his mother, to engage
                  mainly in the export of agricultural goods from Ethiopia and
                  has been focused on building relationships with coffee
                  producers and suppliers from the Southern and Western parts of
                  Ethiopia, in Sidama, Oromia and SNNP regions.
                </p>
                <p className="text-md font-medium leading-5">
                  The company has its office on the 5th floor of Bel Amour
                  Building in Woreda 03 of Bole Sub-city in Addis Ababa. The
                  office is equipped with a modern coffee laboratory for green
                  coffee sample roasting and evaluation. It has an arrangement
                  in place with experienced coffee quality professionals for
                  rapid turnaround of sample evaluation and reporting.
                </p>
              </div>
              <div className="w-full lg:w-1/2 lg:flex font-semibold h-full ">
                <div className="relative min-h-[300px] lg:min-h-[320px] xl:min-h-[340px] h-full w-full lg:border-[18px] lg:border-secondary/20 lg:rotate-[8deg] py-6 lg:py-4 rounded-[72px]">
                  <ImageWithSkeleton
                    props={{ fill: true }}
                    className="absolute inset-0 lg:-rotate-[8deg] w-full h-full object-cover lg:shadow-t-2xl rounded-[48px]"
                    src={`https://alphabettrading.s3.amazonaws.com/images/about3.webp`}
                    alt="about_us_3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </BaseLayout>
  );
};

export default index;
