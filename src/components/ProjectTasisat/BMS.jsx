// import React from "react";
// import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
// import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

// const BMS = () => {
//   const projects = [
//     {
//       title: "Installation of Energy meters and BMS-DDC panels in Sattam university in Kharj",
//       client: "ENGIE",
//       details: "2022",
//       image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//       image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//       icon: <FaIndustry />,
//     },
//     {
//       title: "Installation of Energy meters and BMS-DDC panels in Sattam university in Kharj",
//       client: "Engie Solution Co",
//       details: "2022",
//       image1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
//       image2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
//       icon: <FaCogs />,
//     },
    
    
//   ];

//   return (
//     <div className="min-h-screen bg-[#0B1026] px-4 py-10">
//       <div className="mx-auto max-w-7xl rounded-xl border border-[#0089A8] bg-[#0B1026] p-5">
        
//         {/* Heading */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-extrabold text-[#0089A8] md:text-5xl">
//             Our Recent <br /> Accomplished Project #<span className="bg-gradient-to-r from-[#2E174F] to-[#0089A8] bg-clip-text text-transparent ">BMS</span>
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

// export default BMS;


import React from "react";
import {
  FaCalendarAlt,
  FaUserTie,
  FaIndustry,
  FaMicrochip,
} from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const projects = [
  {
    title:
      "Installation of Energy Meters and BMS-DDC Panels in Sattam University in Kharj",
    client: "ENGIE",
    details: "2022",
  },
  {
    title:
      "Installation of Energy Meters and BMS-DDC Panels in Sattam University in Kharj",
    client: "Engie Solution Co",
    details: "2022",
  },
  {
    title: "Palletizing Machine System",
    client: "Transcom Beverage Ltd",
  },
  {
    title: "Tower Crane PLC System",
    client: "BBS Steel",
  },
  {
    title: "High Mast Pole Lighting",
    client: "GPH Ispat Ltd.",
  },
  {
    title: "Automation & Drive Commissioning",
    client: "Accuracy Engineering Ltd.",
  },
  {
    title: "SCADA Installation & Monitoring",
    client: "Unilever Bangladesh",
  },
  {
    title: "SCADA Troubleshooting System",
    client: "Padma Oil Company Ltd.",
  },
  {
    title: "Complete Automation Project Installation, Testing & Commissioning.",
    client: "Mostafa Hakim Cement"
  },
  {
    title: "Commissioning and Complete Autoamtion work of 5th Floor Cargo Lift for Product Transfer",
    client: "Liz Fashion Industries Ltd."
  },
  {
    title: "5th Floor Cargo Lift Automation along with fire system and Automatic door.",
    client: "Liz Fashion Industries Ltd."
  },
  {
    title: "Weight Feeder Machine",
    client: "Star Cement"
  },
  {
    title: "Chemical Lab Door Control",
    client: "ACME Group"
  },
  {
    title: "Cement Mill Pluse Jet Bag Filter Machine Automation.",
    client: "Star Cement Industries Ltd"
  },
  {
    title: "PLC. HMI Installation & Integration",
    client: "Partex Group"
  },
  {
    title: "Manufacturing Prepag Rolling Automatic Machine in BIAS Cutting Process",
    client: "Mamiya OP (BD) LTD"
  },
  {
    title: "LPG GAS",
    client: "Tesla Power BD",
  },
  {
    title: "Roto Packer Machine",
    client: "Star Cement",
  },
  {
    title: "Beta Fuel Dispenser",
    client: "Padma Oil",
    extra: "PLC : IDEC",
  },
  {
    title: "Auto Unloading System",
    client: "MIDAS Safety",
  },
  {
    title: "Tea Bag Machine Automation",
    client: "Trofima Refreshments Ltd",
  },
  {
    title: "Packaging Machine Automation",
    client: "Trofima Refreshments Ltd",
  },
];

const galleryImages = [
  "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
  "https://i.ibb.co/n86YcR08/IMG-05.png",
  "https://i.ibb.co/B24D8pD6/IMG-06.png",
  "https://i.ibb.co/WW8mmWCh/IMG-07.png",
];

const BMS = () => {
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
                Automation
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
              Explore our accomplished Building Management System projects
              including energy meters, BMS-DDC panels, installation, and
              engineering works.
            </p>

            <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-[#00B4D8] lg:mx-0"></div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            {/* First Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 col-span-2 lg:col-span-1 lg:row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={galleryImages[0]}
                alt="BMS Project 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Second Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={galleryImages[1]}
                alt="BMS Project 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Third Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={galleryImages[2]}
                alt="BMS Project 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Fourth Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={galleryImages[3]}
                alt="BMS Project 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#0089A8]/40 bg-[#101833] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00B4D8] hover:shadow-2xl"
            >
              {/* Top */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] transition duration-300 group-hover:bg-[#00B4D8] group-hover:text-[#0B1026]">
                  {index % 2 === 0 ? (
                    <FaMicrochip size={22} />
                  ) : (
                    <MdEngineering size={24} />
                  )}
                </div>

                <span className="rounded-full border border-[#0089A8]/50 px-3 py-1 text-xs font-semibold text-[#00B4D8]">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-5 min-h-[90px] text-lg font-bold leading-snug text-white transition duration-300 group-hover:text-[#00B4D8]">
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

                {/* <p className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8]">
                    <FaCalendarAlt />
                  </span>

                  <span>
                    <span className="font-semibold text-white">
                      Year / Status:
                    </span>{" "}
                    {project.details}
                  </span>
                </p> */}
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

export default BMS;