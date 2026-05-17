// import React from "react";
// import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
// import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

// const SolarEnergy = () => {
//   const projects = [

//     //solar pv
//     {
//         title: "Installation, Testing & Commissioning of 3.15 MWp Solar PV at KSAU University & Hospitals",
//         client: "Tarshid",
//         details: "Ongoing",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation, Testing & Commissioning of 1.5 MW Solar PV On-Grid System at Islamic University of Madinah Al-Munawarah",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation, Testing & Commissioning of 1.4 MWp Solar PV System at Prince Nourah University, Riyadh",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation, Testing & Commissioning of 2.55 MWp Solar PV System at TVTC, Jeddah",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation of 540 kWp Solar PV System for SGS, Jeddah",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation, Testing of Complete Rooftop Solar On-Grid System for Taif University (Male & Female) 2.5 MWp",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation, Testing & Commissioning of Solar On-Grid System for 200 Schools (3000 kWp) in Madinah Al-Munawarah",
//         client: "Zamil Services",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation of Complete Solar PV On-Grid Rooftop System at Technical College (TC 385 kWp)",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//     //solar water heatting

//     {
//         title: "Grand mosque in king Salman park Installation of 3,000L Solar water heaters",
//         client: "Freyssinet",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation, testing and commissioning of centralized Solar water heating Systems 20,000L in Parcel 3.10 in KAFD",
//         client: "MOBCO",
//         details: "2022",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Installation, testing and commissioning of centralized Solar water heating Systems 30,000L in Parcel 1.08 in KAFD",
//         client: "Saudico",
//         details: "2019",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Supply, install solar water heating system for SPARK",
//         client: "Saudi Aramco",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Solar Water heating for C32 Project",
//         client: "Al-Kifah",
//         details: "2019",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Solar water heating systems for KFU",
//         client: "King Faissal university- Al-Hassa",
//         details: "2018",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       //Solar Pumping
//       {
//         title: "Solar pumping system for multi farms in Madinah region capacity reach 200HP",
//         client: "Private sector",
//         details: "2024-2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
  
//       {
//           title: "    Installation of Centralized Solar Water heating System for BES, and GES Schools in Jubail- Royal Commission",
//           client: "SRACO",
//           details: "2022",
//           image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//           image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//           icon: <FaIndustry />,
//         },

//         {
//             title: "Supply, installation of solar thermodynamic solar system for Conrad hotel in Riyadh",
//             client: "EDSCO",
//             details: "2025",
//             image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//             image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//             icon: <FaIndustry />,
//           },

//           //Electrical solar
          
//           {
//             title: "55 kW Solar Parking System for Schneider Building",
//             client: "Schneider- Dhahran Valley",
//             details: "2019",
//             image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//             image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//             icon: <FaIndustry />,
//           },

    
//   ];

//   return (
//     <div className="min-h-screen bg-[#0B1026] px-4 py-10">
//       <div className="mx-auto max-w-7xl rounded-xl border border-[#0089A8] bg-[#0B1026] p-5">
        
//         {/* Heading */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-extrabold text-[#0089A8] md:text-5xl">
//             Our Recent <br /> Accomplished Project #<span className="bg-gradient-to-r from-[#2E174F] to-[#0089A8] bg-clip-text text-transparent ">Solar Energy</span>
//           </h1>
//           <div className="mt-2 h-1 w-40 bg-[#00B4D8]"></div>
//         </div>

//         {/* Project Cards */}
//         <div className="grid gap-6 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="border border-[#0089A8] bg-[#101833] p-2"
//             >
//               <div className="grid grid-cols-2">
//                 <img
//                   src={project.image1}
//                   alt={project.title}
//                   className="h-44 w-full object-cover"
//                 />

//                 <img
//                   src={project.image2}
//                   alt={project.title}
//                   className="h-44 w-full object-cover"
//                 />
//               </div>

//               <div className="-mt-10 bg-[#0089A8] px-2 py-1 text-sm font-semibold text-black relative">
//                 {project.title}
//               </div>

//               <div className="mt-3 space-y-1 p-2 text-sm text-gray-300">
//                 <p className="flex items-center gap-2">
//                   <span className="text-[#00B4D8]">{project.icon}</span>
//                   Client: {project.client}
//                 </p>

//                 <p className="flex items-center gap-2">
//                   <FaCogs className="text-[#00B4D8]" />
//                   {project.details}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SolarEnergy;


// import React from "react";
// import { FaIndustry, FaCalendarAlt, FaUserTie } from "react-icons/fa";
// import img1 from "./TasisatProjectImage/WhatsApp Image 2026-05-15 at 5.55.00 PM.jpeg";
// import img2 from "./TasisatProjectImage/WhatsApp Image 2026-05-17 at 12.38.43.jpeg";
// import img3 from "./TasisatProjectImage/WhatsApp Image 2026-05-17 at 12.38.46.jpeg";
// import img4 from "./TasisatProjectImage/WhatsApp Image 2026-05-17 at 9.05.24 AM (1).jpeg"

// const SolarEnergy = () => {
//   const projects = [
//     {
//       title:
//         "Installation, Testing & Commissioning of 3.15 MWp Solar PV at KSAU University & Hospitals",
//       client: "Tarshid",
//       details: "Ongoing",
//     },
//     {
//       title:
//         "Installation, Testing & Commissioning of 1.5 MW Solar PV On-Grid System at Islamic University of Madinah Al-Munawarah",
//       client: "Tarshid",
//       details: "2025",
//     },
//     {
//       title:
//         "Installation, Testing & Commissioning of 1.4 MWp Solar PV System at Prince Nourah University, Riyadh",
//       client: "Tarshid",
//       details: "2025",
//     },
//     {
//       title:
//         "Installation, Testing & Commissioning of 2.55 MWp Solar PV System at TVTC, Jeddah",
//       client: "Tarshid",
//       details: "2025",
//     },
//     {
//       title: "Installation of 540 kWp Solar PV System for SGS, Jeddah",
//       client: "Tarshid",
//       details: "2025",
//     },
//     {
//       title:
//         "Installation, Testing of Complete Rooftop Solar On-Grid System for Taif University (Male & Female) 2.5 MWp",
//       client: "Tarshid",
//       details: "2025",
//     },
//     {
//       title:
//         "Installation, Testing & Commissioning of Solar On-Grid System for 200 Schools (3000 kWp) in Madinah Al-Munawarah",
//       client: "Zamil Services",
//       details: "2025",
//     },
//     {
//       title:
//         "Installation of Complete Solar PV On-Grid Rooftop System at Technical College (TC 385 kWp)",
//       client: "Tarshid",
//       details: "2025",
//     },
//     {
//       title:
//         "Grand mosque in king Salman park Installation of 3,000L Solar water heaters",
//       client: "Freyssinet",
//       details: "2025",
//     },
//     {
//       title:
//         "Installation, testing and commissioning of centralized Solar water heating Systems 20,000L in Parcel 3.10 in KAFD",
//       client: "MOBCO",
//       details: "2022",
//     },
//     {
//       title:
//         "Installation, testing and commissioning of centralized Solar water heating Systems 30,000L in Parcel 1.08 in KAFD",
//       client: "Saudico",
//       details: "2019",
//     },
//     {
//       title: "Supply, install solar water heating system for SPARK",
//       client: "Saudi Aramco",
//       details: "2025",
//     },
//     {
//       title: "Solar Water heating for C32 Project",
//       client: "Al-Kifah",
//       details: "2019",
//     },
//     {
//       title: "Solar water heating systems for KFU",
//       client: "King Faissal university- Al-Hassa",
//       details: "2018",
//     },
//     {
//       title:
//         "Solar pumping system for multi farms in Madinah region capacity reach 200HP",
//       client: "Private sector",
//       details: "2024-2025",
//     },
//     {
//       title:
//         "Installation of Centralized Solar Water heating System for BES, and GES Schools in Jubail- Royal Commission",
//       client: "SRACO",
//       details: "2022",
//     },
//     {
//       title:
//         "Supply, installation of solar thermodynamic solar system for Conrad hotel in Riyadh",
//       client: "EDSCO",
//       details: "2025",
//     },
//     {
//       title: "55 kW Solar Parking System for Schneider Building",
//       client: "Schneider- Dhahran Valley",
//       details: "2019",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0B1026] px-4 py-10">
        
//       <div className="mx-auto max-w-7xl rounded-2xl border border-[#0089A8]/60 bg-[#0B1026] p-5 md:p-8">
//         <div className="flex ">
//             {/* Heading */}
//         <div className="mb-10 text-center md:text-left">
//           <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-[#00B4D8]">
//             Projects Portfolio
//           </p>

//           <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
//             Our Recent Accomplished Project{" "}
//             <span className="bg-gradient-to-r from-[#00B4D8] to-[#0089A8] bg-clip-text text-transparent">
//               Solar Energy
//             </span>
//           </h1>

        

//           <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-[#00B4D8] md:mx-0"></div>
//         </div>
//         {/* image */}
//         <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">

// {/* First Image */}
// <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 col-span-2 lg:col-span-1 lg:row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//   <img
//     src={img1}
//     alt="About 1"
//     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//   />
// </div>

// {/* Second Image */}
// <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//   <img
//     src={img2}
//     alt="About 2"
//     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//   />
// </div>

// {/* Third Image */}
// <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//   <img
//     src={img3}
//     alt="About 3"
//     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//   />
// </div>

// {/* Fourth Image */}
// <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//   <img
//     src={img4}
//     alt="About 4"
//     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//   />
// </div>

// </div>

//         </div>

//         {/* Project Cards */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl border border-[#0089A8]/40 bg-[#101833] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00B4D8] hover:shadow-2xl"
//             >
//               {/* Top Number */}
//               <div className="mb-5 flex items-center justify-between">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] transition duration-300 group-hover:bg-[#00B4D8] group-hover:text-[#0B1026]">
//                   <FaIndustry size={22} />
//                 </div>

//                 <span className="rounded-full border border-[#0089A8]/50 px-3 py-1 text-xs font-semibold text-[#00B4D8]">
//                   #{String(index + 1).padStart(2, "0")}
//                 </span>
//               </div>

//               {/* Project Title */}
//               <h2 className="mb-5 min-h-[100px] text-lg font-bold leading-snug text-white transition duration-300 group-hover:text-[#00B4D8]">
//                 {project.title}
//               </h2>

//               {/* Info */}
//               <div className="space-y-3 border-t border-[#0089A8]/30 pt-4">
//                 <p className="flex items-center gap-3 text-sm text-gray-300">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8]">
//                     <FaUserTie />
//                   </span>
//                   <span>
//                     <span className="font-semibold text-white">Client:</span>{" "}
//                     {project.client}
//                   </span>
//                 </p>

//                 <p className="flex items-center gap-3 text-sm text-gray-300">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8]">
//                     <FaCalendarAlt />
//                   </span>
//                   <span>
//                     <span className="font-semibold text-white">Year:</span>{" "}
//                     {project.details}
//                   </span>
//                 </p>
//               </div>

//               {/* Hover Bottom Line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00B4D8] transition-all duration-300 group-hover:w-full"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolarEnergy;












import React from "react";
import { FaIndustry, FaCalendarAlt, FaUserTie } from "react-icons/fa";

import img1 from "./TasisatProjectImage/WhatsApp Image 2026-05-15 at 5.55.00 PM.jpeg";
import img2 from "./TasisatProjectImage/WhatsApp Image 2026-05-17 at 12.38.43.jpeg";
import img3 from "./TasisatProjectImage/WhatsApp Image 2026-05-17 at 12.38.46.jpeg";
import img4 from "./TasisatProjectImage/WhatsApp Image 2026-05-17 at 9.05.24 AM (1).jpeg";

const projects = [
  {
    title:
      "Installation, Testing & Commissioning of 3.15 MWp Solar PV at KSAU University & Hospitals",
    client: "Tarshid",
    details: "Ongoing",
  },
  {
    title:
      "Installation, Testing & Commissioning of 1.5 MW Solar PV On-Grid System at Islamic University of Madinah Al-Munawarah",
    client: "Tarshid",
    details: "2025",
  },
  {
    title:
      "Installation, Testing & Commissioning of 1.4 MWp Solar PV System at Prince Nourah University, Riyadh",
    client: "Tarshid",
    details: "2025",
  },
  {
    title:
      "Installation, Testing & Commissioning of 2.55 MWp Solar PV System at TVTC, Jeddah",
    client: "Tarshid",
    details: "2025",
  },
  {
    title: "Installation of 540 kWp Solar PV System for SGS, Jeddah",
    client: "Tarshid",
    details: "2025",
  },
  {
    title:
      "Installation, Testing of Complete Rooftop Solar On-Grid System for Taif University (Male & Female) 2.5 MWp",
    client: "Tarshid",
    details: "2025",
  },
  {
    title:
      "Installation, Testing & Commissioning of Solar On-Grid System for 200 Schools (3000 kWp) in Madinah Al-Munawarah",
    client: "Zamil Services",
    details: "2025",
  },
  {
    title:
      "Installation of Complete Solar PV On-Grid Rooftop System at Technical College (TC 385 kWp)",
    client: "Tarshid",
    details: "2025",
  },
  {
    title:
      "Grand mosque in king Salman park Installation of 3,000L Solar water heaters",
    client: "Freyssinet",
    details: "2025",
  },
  {
    title:
      "Installation, testing and commissioning of centralized Solar water heating Systems 20,000L in Parcel 3.10 in KAFD",
    client: "MOBCO",
    details: "2022",
  },
  {
    title:
      "Installation, testing and commissioning of centralized Solar water heating Systems 30,000L in Parcel 1.08 in KAFD",
    client: "Saudico",
    details: "2019",
  },
  {
    title: "Supply, install solar water heating system for SPARK",
    client: "Saudi Aramco",
    details: "2025",
  },
  {
    title: "Solar Water heating for C32 Project",
    client: "Al-Kifah",
    details: "2019",
  },
  {
    title: "Solar water heating systems for KFU",
    client: "King Faissal university- Al-Hassa",
    details: "2018",
  },
  {
    title:
      "Solar pumping system for multi farms in Madinah region capacity reach 200HP",
    client: "Private sector",
    details: "2024-2025",
  },
  {
    title:
      "Installation of Centralized Solar Water heating System for BES, and GES Schools in Jubail- Royal Commission",
    client: "SRACO",
    details: "2022",
  },
  {
    title:
      "Supply, installation of solar thermodynamic solar system for Conrad hotel in Riyadh",
    client: "EDSCO",
    details: "2025",
  },
  {
    title: "55 kW Solar Parking System for Schneider Building",
    client: "Schneider- Dhahran Valley",
    details: "2019",
  },
];

const SolarEnergy = () => {
  return (
    <div className="min-h-screen bg-[#0B1026] px-4 py-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#0089A8]/60 bg-[#0B1026] p-5 md:p-8">
        {/* Top Section */}
        <div className="mb-12 flex flex-col items-center gap-10 lg:flex-row">
          {/* Heading */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-[#00B4D8]">
              Projects Portfolio
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Our Recent Accomplished Project{" "}
              <span className="bg-gradient-to-r from-[#00B4D8] to-[#0089A8] bg-clip-text text-transparent">
                Solar Energy
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
              Explore our accomplished solar energy projects with project name,
              client information, and completion year.
            </p>

            <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-[#00B4D8] lg:mx-0"></div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            {/* First Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 col-span-2 lg:col-span-1 lg:row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={img1}
                alt="Solar Energy Project 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Second Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={img2}
                alt="Solar Energy Project 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Third Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={img3}
                alt="Solar Energy Project 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Fourth Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={img4}
                alt="Solar Energy Project 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#0089A8]/40 bg-[#101833] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00B4D8] hover:shadow-2xl"
            >
              {/* Top */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] transition duration-300 group-hover:bg-[#00B4D8] group-hover:text-[#0B1026]">
                  <FaIndustry size={22} />
                </div>

                <span className="rounded-full border border-[#0089A8]/50 px-3 py-1 text-xs font-semibold text-[#00B4D8]">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-5 min-h-[120px] text-lg font-bold leading-snug text-white transition duration-300 group-hover:text-[#00B4D8]">
                {project.title}
              </h2>

              {/* Info */}
              <div className="space-y-3 border-t border-[#0089A8]/30 pt-4">
                <p className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8]">
                    <FaUserTie />
                  </span>

                  <span>
                    <span className="font-semibold text-white">Client:</span>{" "}
                    {project.client}
                  </span>
                </p>

                <p className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8]">
                    <FaCalendarAlt />
                  </span>

                  <span>
                    <span className="font-semibold text-white">
                      Year / Status:
                    </span>{" "}
                    {project.details}
                  </span>
                </p>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00B4D8] transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarEnergy;