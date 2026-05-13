// import React from 'react';
// // https://i.ibb.co/qMbpCHkv/IMG-73.png
// // https://i.ibb.co/1fZvnB9R/IMG-74.png
// // https://i.ibb.co/Q3j6sh6y/IMG-75.png
// // https://i.ibb.co/DfRjY10d/IMG-76.png
// // https://i.ibb.co/Kjpctmxz/IMG-77.png
// // https://i.ibb.co/PzfxwJpR/IMG-78.png
// const IndustrialSolutions = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default IndustrialSolutions;

// import React from "react";
// import {
//   FaBuilding,
//   FaBolt,
//   FaFireExtinguisher,
//   FaSnowflake,
//   FaIndustry,
//   FaHospital,
//   FaHotel,
//   FaPlane,
//   FaBuildingCircleArrowRight,
// } from "react-icons/fa6";
// import { FaUniversity, FaStore } from "react-icons/fa";

// const highlights = [
//   {
//     title: "BMS + IIOT Solutions",
//     desc: "Smart infrastructure with digital control, monitoring, and analytics.",
//     icon: <FaBuilding />,
//   },
//   {
//     title: "Modern Facility Control",
//     desc: "Integrated HVAC, lighting, fire safety, and access control systems.",
//     icon: <FaBolt />,
//   },
//   {
//     title: "Commercial Sectors",
//     desc: "Built for airports, hospitals, hotels, malls, offices, and more.",
//     icon: <FaIndustry />,
//   },
// ];

// const solutionGallery = [
//   {
//     title: "SCADA & BEMS Architecture",
//     image: "https://i.ibb.co/qMbpCHkv/IMG-73.png",
//   },
//   {
//     title: "Industrial Control Integration",
//     image: "https://i.ibb.co/1fZvnB9R/IMG-74.png",
//   },
//   {
//     title: "Energy Monitoring & Analytics",
//     image: "https://i.ibb.co/Q3j6sh6y/IMG-75.png",
//   },
//   {
//     title: "Solar / Power Dashboard",
//     image: "https://i.ibb.co/DfRjY10d/IMG-76.png",
//   },
//   {
//     title: "SCADA Operation Display",
//     image: "https://i.ibb.co/Kjpctmxz/IMG-77.png",
//   },
//   {
//     title: "Electrical Distribution Control",
//     image: "https://i.ibb.co/PzfxwJpR/IMG-78.png",
//   },
// ];

// const coreSystems = [
//   {
//     title: "Building Management System (BMS)",
//     desc: "HVAC | Lighting | Fire & Safety | Access Control | Energy Monitoring & Analytics",
//     icon: <FaBuilding />,
//   },
//   {
//     title: "DALI Control",
//     desc: "Smart lighting control and automation for commercial environments.",
//     icon: <FaBolt />,
//   },
//   {
//     title: "HVAC Control",
//     desc: "Efficient air conditioning, ventilation, and environmental control.",
//     icon: <FaSnowflake />,
//   },
//   {
//     title: "Fire & Safety Control",
//     desc: "Integrated fire alarm, emergency response, and protection control.",
//     icon: <FaFireExtinguisher />,
//   },
// ];

// const sectors = [
//   { title: "Airport", icon: <FaPlane /> },
//   { title: "University", icon: <FaUniversity /> },
//   { title: "Hospital", icon: <FaHospital /> },
//   { title: "Hotel", icon: <FaHotel /> },
//   { title: "Mall", icon: <FaStore /> },
//   { title: "Corporate Office", icon: <FaBuildingCircleArrowRight /> },
//   { title: "Industrial Park", icon: <FaIndustry /> },
//   { title: "Commercial Building", icon: <FaBuilding /> },
// ];

// const SolutionHeroSection = ({ highlights }) => {
//   return (
//     <section className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
//       <div className="absolute top-0 left-0 w-80 h-80 bg-[#df0707]/20 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#780909]/30 blur-3xl rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="inline-block px-4 py-2 rounded-full bg-[#df0707]/10 text-[#df0707] border border-[#df0707]/30 text-sm font-semibold mb-6">
//             Commercial Solutions
//           </p>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Smart Infrastructure
//             <span className="block text-[#df0707]">
//               for Modern Facilities.
//             </span>
//           </h1>

//           <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
//             We provide BMS and IIOT solutions for commercial buildings, ensuring
//             energy optimization, centralized monitoring, and intelligent digital
//             control for modern facilities.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
//             {highlights.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#df0707]/40 transition"
//               >
//                 <div className="text-[#df0707] text-2xl mb-3">{item.icon}</div>
//                 <h3 className="text-lg font-bold">{item.title}</h3>
//                 <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-[#df0707]/20 to-[#780909]/20 border border-[#df0707]/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
//           <div className="bg-[#140202] rounded-2xl p-8 border border-white/10">
//             <p className="text-[#df0707] font-semibold uppercase tracking-widest mb-3">
//               Solution Scope
//             </p>

//             <h3 className="text-3xl md:text-4xl font-bold leading-tight">
//               Building Management System
//             </h3>

//             <p className="text-gray-300 mt-5 text-lg leading-relaxed">
//               End-to-end smart building control solutions for operational
//               efficiency, safety, and real-time visibility.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4 mt-8">
//               {[
//                 "HVAC Control",
//                 "Lighting Control",
//                 "Fire & Safety",
//                 "Access Control",
//                 "Energy Monitoring",
//                 "Analytics Dashboard",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="rounded-2xl bg-[#df0707]/10 border border-[#df0707]/20 px-4 py-3 text-gray-200"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden">
//               <img
//                 src="https://i.ibb.co/qMbpCHkv/IMG-73.png"
//                 alt="Commercial solutions overview"
//                 className="w-full h-64 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const IndustrialSolutions = () => {
//   return (
//     <div className="bg-[#0b0000] text-white min-h-screen overflow-hidden">
//      {/* HERO SECTION */}
// <section className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
//   <div className="absolute top-0 left-0 w-80 h-80 bg-[#df0707]/20 blur-3xl rounded-full"></div>
//   <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#780909]/30 blur-3xl rounded-full"></div>

//   <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
//     {/* LEFT */}
//     <div>
//       <p className="inline-block px-4 py-2 rounded-full bg-[#df0707]/10 text-[#df0707] border border-[#df0707]/30 text-sm font-semibold mb-6">
//         Commercial Solutions
//       </p>

//       <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//         Smart Infrastructure
//         <span className="block text-[#df0707]">
//           for Modern Facilities.
//         </span>
//       </h1>

//       <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
//         We provide BMS and IIOT solutions for commercial buildings, ensuring
//         energy optimization, centralized monitoring, and intelligent digital
//         control for modern facilities.
//       </p>

//       {/* HIGHLIGHTS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
//         {highlights.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#df0707]/40 transition"
//           >
//             <div className="text-[#df0707] text-2xl mb-3">{item.icon}</div>
//             <h3 className="text-lg font-bold">{item.title}</h3>
//             <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* RIGHT CARD */}
//     <div className="bg-gradient-to-br from-[#df0707]/20 to-[#780909]/20 border border-[#df0707]/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
//       <div className="bg-[#140202] rounded-2xl p-8 border border-white/10">

//         <p className="text-[#df0707] font-semibold uppercase tracking-widest mb-3">
//           Solution Scope
//         </p>

//         <h3 className="text-3xl md:text-4xl font-bold">
//           Building Management System
//         </h3>

//         <p className="text-gray-300 mt-5 text-lg">
//           End-to-end smart building control solutions for operational efficiency and safety.
//         </p>

//         <div className="grid sm:grid-cols-2 gap-4 mt-8">
//           {[
//             "HVAC Control",
//             "Lighting Control",
//             "Fire & Safety",
//             "Access Control",
//             "Energy Monitoring",
//             "Analytics Dashboard",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="rounded-2xl bg-[#df0707]/10 border border-[#df0707]/20 px-4 py-3"
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden">
//           <img
//             src="https://i.ibb.co/qMbpCHkv/IMG-73.png"
//             alt="solution"
//             className="w-full h-64 object-cover"
//           />
//         </div>
//       </div>
//     </div>

//   </div>
// </section>
//       <section className="px-6 md:px-12 lg:px-20 py-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-14">
//             <p className="text-[#df0707] font-semibold uppercase tracking-widest">
//               Commercial Solutions
//             </p>
//             <h2 className="text-3xl md:text-5xl font-bold mt-3">
//               Building Management System (BMS)
//             </h2>
//             <p className="text-gray-300 max-w-4xl mx-auto mt-5 text-lg">
//               HVAC | Lighting | Fire & Safety | Access Control | Energy
//               Monitoring & Analytics
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {solutionGallery.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#140202] border border-white/10 rounded-2xl overflow-hidden hover:border-[#df0707]/40 transition"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#110101]">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {coreSystems.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#140202] p-6 rounded-2xl border border-white/10 hover:border-[#df0707]/40 transition"
//               >
//                 <div className="text-[#df0707] text-3xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold">{item.title}</h3>
//                 <p className="text-sm text-gray-400 mt-3">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="px-6 md:px-12 lg:px-20 py-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-14">
//             <p className="text-[#df0707] font-semibold uppercase tracking-widest">
//               Sectors Covered
//             </p>
//             <h2 className="text-3xl md:text-5xl font-bold mt-3">
//               Built for Diverse Commercial Environments
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {sectors.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#140202] rounded-2xl border border-white/10 p-6 flex items-center gap-4 hover:border-[#df0707]/40 transition"
//               >
//                 <div className="text-[#df0707] text-2xl">{item.icon}</div>
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default IndustrialSolutions;



import React from "react";
import {
  FaBuilding,
  FaBolt,
  FaFireExtinguisher,
  FaSnowflake,
  FaIndustry,
  FaHospital,
  FaHotel,
  FaPlane,
  FaBuildingCircleArrowRight,
  FaHouse,
} from "react-icons/fa6";
import { FaUniversity, FaStore } from "react-icons/fa";

import SolutionHeroSection from "./components/SolutionHeroSection";
import SolutionGallerySection from "./components/SolutionGallerySection";
import CoreSystemsSection from "./components/CoreSystemsSection";
import SectorsSection from "./components/SectorsSection";

const heroContent = {
  badge: "Commercial Solutions",
  title: "Smart Infrastructure",
  titleHighlight: "for Modern Facilities.",
  description:
    "We provide BMS and IIOT solutions for commercial buildings, ensuring energy optimization and digital control.",
  rightTitle: "Building Management System (BMS)",
  rightDescription:
    "End-to-end smart facility control solutions for operational efficiency, safety, centralized monitoring, and analytics.",
};

const highlights = [
  {
    title: "BMS + IIOT Solutions",
    desc: "Smart infrastructure with digital control, energy optimization, and analytics.",
    icon: <FaBuilding />,
  },
  {
    title: "Facility Control",
    desc: "Integrated HVAC, lighting, fire & safety, and access control systems.",
    icon: <FaBolt />,
  },
  {
    title: "Sector Coverage",
    desc: "Designed for airports, hospitals, hotels, offices, malls, and more.",
    icon: <FaIndustry />,
  },
];

const scopeItems = [
  "HVAC Control",
  "Lighting Control",
  "Fire & Safety",
  "Access Control",
  "Energy Monitoring",
  "Analytics Dashboard",
];

const gallerySectionContent = {
  badge: "Commercial Solutions",
  title: "Building Management System (BMS)",
  description:
    "HVAC | Lighting | Fire & Safety | Access Control | Energy Monitoring & Analytics",
};

const solutionGallery = [
  {
    title: "Commercial Solution Overview",
    image: "https://i.ibb.co/j92JtfRw/IMG-79.png",
  },
  {
    title: "BMS System Monitoring",
    image: "https://i.ibb.co/VF60TT8/IMG-80.png",
  },
  {
    title: "Energy Analytics Dashboard",
    image: "https://i.ibb.co/b5NcygGw/IMG-81.png",
  },
  {
    title: "Electrical Control Interface",
    image: "https://i.ibb.co/chm5RNrc/IMG-82.png",
  },
  {
    title: "Industrial Monitoring Screen",
    image: "https://i.ibb.co/LzPmyQ26/IMG-83.png",
  },
  {
    title: "SCADA / Automation Display",
    image: "https://i.ibb.co/Zpcjp2Ww/IMG-84.png",
  },
  {
    title: "Power Management Visualization",
    image: "https://i.ibb.co/GfQm9DGV/IMG-85.png",
  },
  {
    title: "Facility Operation Dashboard",
    image: "https://i.ibb.co/YF4tqGkp/IMG-86.png",
  },
  {
    title: "System Architecture Overview",
    image: "https://i.ibb.co/XxJ9YkTn/IMG-87.png",
  },
];

const coreSystems = [
  {
    title: "Building Management System (BMS)",
    desc: "HVAC | Lighting | Fire & Safety | Access Control | Energy Monitoring & Analytics",
    icon: <FaBuilding />,
  },
  {
    title: "DALI Control",
    desc: "Smart lighting control and automation for modern commercial facilities.",
    icon: <FaBolt />,
  },
  {
    title: "HVAC Control",
    desc: "Efficient air conditioning, ventilation, and environmental control.",
    icon: <FaSnowflake />,
  },
  {
    title: "Fire & Safety Control",
    desc: "Integrated fire alarm, emergency response, and facility protection control.",
    icon: <FaFireExtinguisher />,
  },
];

const sectorsSectionContent = {
  badge: "Sectors Covered",
  title: "Built for Diverse Commercial Environments",
};

const sectors = [
  { title: "Airport", icon: <FaPlane /> },
  { title: "University", icon: <FaUniversity /> },
  { title: "Hospital", icon: <FaHospital /> },
  { title: "Hotel", icon: <FaHotel /> },
  { title: "Mall", icon: <FaStore /> },
  { title: "Corporate Office", icon: <FaBuildingCircleArrowRight /> },
  { title: "Industrial Park", icon: <FaIndustry /> },
  { title: "Commercial Building", icon: <FaBuilding /> },
  { title: "Residential Solution", icon: <FaHouse /> },
];

const IndustrialSolutions = () => {
  return (
    <div className="bg-[#0b0000] text-white min-h-screen overflow-hidden">
      <SolutionHeroSection
        highlights={highlights}
        heroContent={heroContent}
        scopeItems={scopeItems}
        heroImage="https://i.ibb.co/j92JtfRw/IMG-79.png"
      />

      <SolutionGallerySection
        sectionContent={gallerySectionContent}
        solutionGallery={solutionGallery}
      />

      <CoreSystemsSection coreSystems={coreSystems} />

      <SectorsSection
        sectionContent={sectorsSectionContent}
        sectors={sectors}
      />
    </div>
  );
};

export default IndustrialSolutions;