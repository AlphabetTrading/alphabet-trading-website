import React from "react";
import DetailItem from "./DetailItem";

type Props = {};

export type Detail = {
  id: number;
  label: string;
  image: any;
  value: string;
};

const growDetails: Detail[] = [
  {
    id: 1,
    image: "/icons/offerings/region.svg",
    label: "Region",
    value: "Yirgacheffe",
  },
  { id: 2, image: "/icons/offerings/town.svg", label: "Town", value: "Idido" },
  {
    id: 3,
    image: "/icons/offerings/washing_station.svg",
    label: "Washing Station",
    value: "Idido",
  },
  {
    id: 4,
    image: "/icons/offerings/farmer.svg",
    label: "Farmer's Name",
    value: "Gizaw Dori",
  },
];

const primaryDetails: Detail[] = [
  {
    id: 1,
    image: "/icons/offerings/altitude.svg",
    label: "Altitude",
    value: "1800-2100masl",
  },
  {
    id: 2,
    image: "/icons/offerings/rainfall.svg",
    label: "Annual Rainfall",
    value: "1750-2200mm",
  },
  {
    id: 3,
    image: "/icons/offerings/humidity.svg",
    label: "Humidity",
    value: "60-80%",
  },
  {
    id: 4,
    image: "/icons/offerings/temperature.svg",
    label: "Average Temperature",
    value: "14-26°c",
  },
];

const secondaryDetails = [
  {
    id: 1,
    image: "/icons/offerings/process_method.svg",
    label: "Process Method",
    value: "Natural",
  },
  {
    id: 2,
    image: "/icons/offerings/pick_season.svg",
    label: "Pick Season",
    value: "Jun - Nov",
  },
  {
    id: 3,
    image: "/icons/offerings/varietal.svg",
    label: "Varietal",
    value: "Heirloom",
  },
  {
    id: 4,
    image: "/icons/offerings/certification.svg",
    label: "Certifications",
    value: "Non-Certified",
  },
];

const DetailList = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col xl:flex-row justify-start items-center w-full">
        <div className="w-full xl:w-1/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
          {growDetails.map((detail: Detail, index: number) => {
            return <DetailItem key={index} detail={detail} />;
          })}
        </div>
        <div className="w-full xl:w-1/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
          {primaryDetails.map((detail: Detail, index: number) => {
            return <DetailItem key={index} detail={detail} />;
          })}
        </div>

        <div className="w-full xl:w-1/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
          {secondaryDetails.map((detail: Detail, index: number) => {
            return <DetailItem key={index} detail={detail} />;
          })}
        </div>
        {/* <div className="">
        <DonutChart />
      </div> */}
      </div>
      <DetailItem
        detail={{
          id: 5,
          image: "/icons/offerings/flavor_profile.svg",
          label: "Flavor Profile",
          value: "Sweet | Spicy | Citrus | Rue",
        }}
      />
    </div>
  );
};

export default DetailList;
