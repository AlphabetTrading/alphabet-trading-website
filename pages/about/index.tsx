import Head from "next/head";
import React from "react";
import BaseLayout from "../../components/common/BaseLayout";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Image from "next/image";
import ImageWithSkeleton from "../../components/common/ImageWithSkeleton";
import CommitmentItem from "../../components/home/CommitmentItem";

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
        <div className="w-11/12 my-12 mt-32 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center gap-x-2 gap-y-6 md:flex-row py-6 md:py-4 lg:py-8 xl:py-12 lg:pb-8 items-center ">
            {/* <div className="w-11/12 flex flex-col justify-center gap-y-5 md:flex-row p-5 md:p-12 lg:px-28 lg:pb-32 items-center"> */}
            <div className="w-full lg:w-1/2  font-semibold">
              <h1 className="uppercase text-xs font-bold text-secondary">
                About Alphabet Trading
              </h1>
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
                all-encompassing service. We always deliver on our promises. How
                we do things is equally important to what we do, and that&apos;s
                why we always stick with our values and community. After all in
                coffee &apos;
                <span className="font-bold">we are because they are</span>
                &apos;.
              </p>
            </div>
          </div>
          <div className="w-full relative h-34 min-h-[350px] my-3">
            <ImageWithSkeleton
              props={{ fill: true }}
              src={`https://alphabettrading.s3.amazonaws.com/images/about1.webp`}
              alt="about_us_1"
              className="rounded-2xl"
            />
          </div>
          <div className="w-full grid md:grid-cols-2 grid-col-1 gap-3">
            <div>
              <CommitmentItem
                className="h-full bg-light_gray_gray rounded-xl lg:rounded-3xl my-3"
                header="Alphabet's Origins"
                headerColor="text-secondary"
                title="Who We Are"
                titleColor="text-dark_gray"
                descriptions={[
                  "Alphabet Trading PLC was formally established in November 2019 by Mr Henock Fikru Asfaw in partnership with his mother, to engage mainly in the export of agricultural goods from Ethiopia and has been focused on building relationships with coffee producers and suppliers from the Southern and Western parts of Ethiopia, in Sidama, Oromia and SNNP regions.",
                  "The company has its office on the 5th floor of Bel Amour Building in Woreda 03 of Bole Sub-city in Addis Ababa. The office is equipped with a modern coffee laboratory for green coffee sample roasting and evaluation. It has an arrangement in place with experienced coffee quality professionals for rapid turnaround of sample evaluation and reporting.",
                ]}
                descriptionColor="text-[#717171]"
              />
            </div>
            <div>
              <CommitmentItem
                className="h-full bg-secondary rounded-xl lg:rounded-3xl my-3"
                header="Alphabet's Journey"
                headerColor="text-primary"
                title="Our Story"
                titleColor="text-white"
                descriptions={[
                  "The story of Alphabet begins with Henock. While living in the US and working as a coffee agent, he witnessed the transparency gap which in the sector. His experience first inspired him to create Lucid Specialty Coffee in USA, a company that’s dedicated to establish a strong linkage between exports and international distribution of coffees from Ethiopia.",
                  "With the vision of sourcing coffee from the origin he then founded Alphabet coffee in 2019. Based in Addis Ababa Ethiopia, Alphabet is a platform that operates in an exemplary diligence, open communication and reasonable speed.",
                ]}
                descriptionColor="text-white"
              />
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3  my-3">
            <div>
              <div className="w-full relative h-44 min-h-[350px] my-3">
                <ImageWithSkeleton
                  props={{ fill: true }}
                  className="object-cover rounded-xl lg:rounded-3xl"
                  src={`https://alphabettrading.s3.amazonaws.com/images/about2.webp`}
                  alt="about_us_2"
                />
              </div>
              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3 ">
                <div className="flex flex-col gap-3  justify-between ">
                  <CommitmentItem
                    className=" bg-light_gray_gray rounded-xl lg:rounded-3xl "
                    header="Empowering Balance"
                    headerColor="text-secondary"
                    title="Work-Life Balance"
                    titleColor="text-dark_gray"
                    descriptions={[
                      "Our flexible work arrangements and supportive policies allow our team members to excel in their professional roles.",
                    ]}
                    descriptionColor="text-[#717171]"
                  />
                  <CommitmentItem
                    className=" bg-light_gray_gray rounded-xl lg:rounded-3xl "
                    header="Beyond Coffee"
                    headerColor="text-secondary"
                    title="Customer Satisfaction"
                    titleColor="text-dark_gray"
                    descriptions={[
                      "Your satisfaction is our priority, and we go the extra mile to ensure that your expectations are not only met but exceeded.",
                    ]}
                    descriptionColor="text-[#717171]"
                  />
                </div>
                <CommitmentItem
                  className="h-full bg-secondary rounded-xl lg:rounded-3xl "
                  header="Marking Moments"
                  headerColor="text-primary"
                  title="Celebrating Milestones"
                  titleColor="text-white"
                  descriptions={[
                    "From project achievements to work anniversaries, we take the time to acknowledge and appreciate the milestones that contribute to our shared success. We’re not just building a company; we’re shaping a community where every individual is empowered to thrive.",
                  ]}
                  descriptionColor="text-white"
                />
              </div>
            </div>

            <div>
              <div className="w-full grid md:grid-cols-2 grid-col-1 gap-3  md:my-3">
                <CommitmentItem
                  className="h-full bg-primary rounded-xl lg:rounded-3xl"
                  header="Creative Frontiers"
                  headerColor="text-secondary"
                  title="Innovation"
                  titleColor="text-white"
                  descriptions={[
                    "The future of coffee export is dynamic, and we are at the forefront of embracing technology. Our vision includes leveraging innovative logistics solutions, and data-driven insights to streamline the export process, ensuring efficiency and transparency for our partners and clients.",
                  ]}
                  descriptionColor="text-white"
                />
                <div className="flex flex-col gap-3">
                  <CommitmentItem
                    className=" bg-light_gray_gray rounded-xl lg:rounded-3xl"
                    header="Setting the Standard"
                    headerColor="text-secondary"
                    title="Industry Leadership"
                    titleColor="text-dark_gray"
                    descriptions={[
                      "In the future, we see ourselves as leaders in the coffee export industry, and shaping the coffee export landscape.",
                    ]}
                    descriptionColor="text-[#717171]"
                  />
                  <CommitmentItem
                    className=" bg-light_gray_gray rounded-xl lg:rounded-3xl "
                    header="Dreaming Big"
                    headerColor="text-secondary"
                    title="Global Coffee Ambassadors"
                    titleColor="text-dark_gray"
                    descriptions={[
                      "We aspire to be more than exporters; we aim to be ambassadors of the rich coffee heritage we represent.",
                    ]}
                    descriptionColor="text-[#717171]"
                  />
                </div>
              </div>
              <div className="w-full relative h-44 min-h-[350px] my-3">
                <ImageWithSkeleton
                  props={{ fill: true }}
                  className="w-full object-cover rounded-xl lg:rounded-3xl"
                  src={`https://alphabettrading.s3.amazonaws.com/images/about3.webp`}
                  alt="about_us_3"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </BaseLayout>
  );
};

export default index;
