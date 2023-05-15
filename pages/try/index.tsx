import React from "react";

type Props = {};

const index = (props: Props) => {
  return <div></div>;
};

export default index;

// import React, { useState } from "react";
// import BaseLayout from "../../components/common/BaseLayout";
// import Navbar from "../../components/common/Navbar";
// import Head from "next/head";
// import DetailList from "../../components/offerings/Detail/DetailList";
// import Title from "../../components/offerings/Detail/Title";
// import Second from "../../components/offerings/Detail/Second";
// import Image from "next/image";
// import { SupplyChain } from "../../components/offerings/Detail/SupplyChain";
// import LastRemarks from "../../components/offerings/Detail/LastRemarks";

// type Props = {};
// const steps: SupplyChainStep[] = [
//   {
//     id: 1,
//     title: "Pick the ripe cherries from the trees",
//     description: ["Farmers collect cherries from the vast Suqe Quto farm"],
//     image: "",
//   },
//   {
//     id: 2,
//     title: "Take the collected cherries to the washing station",
//     description: [
//       "At Suke Quto Washing Station cherries are pulped and ferment for 35-48 hours in large bins. Then, the parchment is dried on raised African drying beds for +/- 7 days.",
//     ],
//     image: "",
//   },
//   {
//     id: 3,
//     title: "Dry the cherries in the sunbeds",
//     description: [
//       " cherries are brought to the Suke Quto Drying Station. Tesfaye dries cherries for 9 - 15 days.",
//     ],
//     image: "",
//   },
//   {
//     id: 4,
//     title: "Trip to the Dry mills",
//     description: [
//       "The Suke Quto coffees are milled at Haile Gebre's Mordecofe PLC Drymill in Addis Ababa. Haile and Tesfaye go way back and still work together on a daily basis.",
//     ],
//     image: "",
//   },
//   {
//     id: 5,
//     title: "Export the cherries",
//     description: ["Tesfaye exports his coffee under the name Tade GG."],
//     image: "",
//   },
//   {
//     id: 6,
//     title: "Shipping Lines",
//     description: [
//       "We work directly (as opposed to via third parties) with ocean lines, transport providers, and warehouses to negotiate fair prices and timely service.",
//     ],
//     image: "",
//   },
//   {
//     id: 7,
//     title: "Warehouses",
//     description: [
//       "Trabocca has long-standing, proven relationships with over 15 warehouses globally. The Suke Quto coffee can be found in our USA and EU based warehouses.",
//     ],
//     image: "",
//   },
//   {
//     id: 8,
//     title: "You",
//     description: [
//       "And finally, the Suke Quto coffee arrives at your roasting facilities doorstep. Ready to be roasted and consumed by your audience.",
//     ],
//     image: "",
//   },
// ];

// const Index = (props: Props) => {
//   const [currentCheckpoint, setCurrentCheckpoint] = useState(0);

//   const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
//     const scrollPosition = event.currentTarget.scrollTop;
//     const elementHeight = event.currentTarget.clientHeight;
//     const totalHeight = event.currentTarget.scrollHeight;

//     const checkpoint = Math.min(
//       Math.floor(
//         (scrollPosition / (totalHeight - elementHeight)) * steps.length
//       ),
//       steps.length - 1
//     );

//     setCurrentCheckpoint(checkpoint);
//   };

//   return (
//     <BaseLayout>
//       <Head>
//         <title>Services - Alphabet Trading PLC</title>
//         <meta
//           name="description"
//           content="From the birthplace of coffee to the conscious consumers, Alphabet engages in exporting Ethiopian specialty coffee. With a wide range of coffee types and quality processing, working in the sector has opened a door in the huge and ever growing world of coffee and we pride ourselves in taking the chance to move forward."
//         />
//       </Head>
//       <div className="flex flex-col justify-center w-full bg-[#F3F7F7]">
//         <Navbar white={true} />
//         <div className="flex flex-col w-full h-full justify-center mt-28">
//           <Title />
//           <Second />
//           <div className="flex justify-center w-full my-12 md:my-16">
//             <div className="w-3/4 xl:w-4/5">
//               <h1 className="w-full mb-4 md:mb-8 text-[#363636] font-DM_Serif text-4xl xl:text-5xl text-center">
//                 Technical Information
//               </h1>
//               <DetailList />
//             </div>
//           </div>
//           <div className="w-full">
//             <img src="/images/map.svg" alt="" />
//           </div>
//           <div className="flex flex-col items-center justify-center w-full my-8 mt-18 lg:my-12 lg:mt-24">
//             <div className="">
//               <h1 className="uppercase text-xs 2k:text-lg 4k:text-xl font-bold text-secondary">
//                 Supply Chain
//               </h1>
//               <h1 className="text-2xl md:text-3xl lg:text-4xl 2k:text-5xl font-bold uppercase">
//                 Traceability
//               </h1>
//             </div>
//             <div
//               onScroll={handleScroll}
//               className="w-full flex flex-col justify-center no-scrollbar overflow-y-auto snap-y snap-mandatory"
//             >
//               <SupplyChain steps={steps} current={currentCheckpoint + 1} />
//             </div>
//           </div>
//           <LastRemarks />
//         </div>
//       </div>
//     </BaseLayout>
//   );
// };

// export default Index;

// // import Head from "next/head";
// // import React, { useState } from "react";
// // import BaseLayout from "../../components/common/BaseLayout";
// // import Navbar from "../../components/common/Navbar";
// // import { PieChart } from "react-minimal-pie-chart";
// // import { FaCoffee } from "react-icons/fa";

// // const data = [
// //   {
// //     title: "Flavor Profile",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// //   {
// //     title: "Varietal",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// //   {
// //     title: "Process Method",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// //   {
// //     title: "Pick Season",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// //   {
// //     title: "Humidity",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// //   {
// //     title: "Average Temperature",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// //   {
// //     title: "Annual Rainfall",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// //   {
// //     title: "Altitude",
// //     value: 1,
// //     icon: <FaCoffee size={20} />,
// //     color: "#D0EBEB",
// //     hover: "#0A1026",
// //   },
// // ];

// // const Index = () => {
// //   const [activeIndex, setActiveIndex] = useState<number | null>(null); // Add state for active slice index

// //   const handleMouseOver = (e: any, index: number) => {
// //     setActiveIndex(index); // Set the active slice index on hover
// //   };

// //   const handleMouseLeave = () => {
// //     setActiveIndex(null); // Reset the active slice index on mouse leave
// //   };
// //   return (
// //     <BaseLayout>
// //       <Head>
// //         <title>Services - Alphabet Trading PLC</title>
// //         <meta
// //           name="description"
// //           content="From the birthplace of coffee to the conscious consumers, Alphabet engages in exporting Ethiopian specialty coffee. With a wide range of coffee types and quality processing, working in the sector has opened a door in the huge and ever growing world of coffee and we pride ourselves in taking the chance to move forward."
// //         />
// //       </Head>
// //       <div className="flex flex-col justify-center w-full">
// //         <Navbar white={true} />
// //         <div className="flex w-full my-28 lg:my-40  gap-y-3 ">
// //           <div className="flex justify-center items-center w-[800px] h-[550px] my-0 mx-auto p-8 relative">
// //             <PieChart
// //               className="w-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// //               data={data}
// //               startAngle={270}
// //               lengthAngle={360}
// //               lineWidth={50}
// //               animate={true}
// //               labelPosition={0}
// //               label={({ dataEntry }) => {
// //                 return (
// //                   <div style={{ display: "flex", alignItems: "center" }}>
// //                     {dataEntry.icon}
// //                     {/* <span style={{ marginLeft: "10px" }}>{dataEntry.title}</span> */}
// //                   </div>
// //                 );
// //               }}
// //               segmentsShift={(index) => (index === activeIndex ? 1 : 0)}
// //               segmentsStyle={(index) => ({
// //                 // transition: "fill-opacity 200ms",
// //                 // fillOpacity:
// //                 //   activeIndex === null || activeIndex === index ? 1 : 0.6,
// //                 fill: "#000",
// //               })}
// //               labelStyle={{
// //                 fontSize: "2px",
// //                 fontFamily: "Arial",
// //                 fill: "#000",
// //               }}
// //               paddingAngle={3}
// //               onMouseOver={handleMouseOver} // Add event handlers for hover
// //               onMouseOut={handleMouseLeave}
// //             />
// //             {activeIndex !== null && ( // Conditionally render information for active slice
// //               <div className="flex flex-col justify-center items-center text-center w-60 h-40">
// //                 <p className=" font-bold text-[#333] text-md">
// //                   {data[activeIndex].title}
// //                 </p>
// //                 <p className="active-slice-value">{data[activeIndex].value}</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </BaseLayout>
// //   );
// // };

// // export default Index;
