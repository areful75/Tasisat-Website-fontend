// import React from "react";
// import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
// import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

// const MEPSection = () => {
//   const projects = [
//     //MEP
//     {
//         title: "Replacement of Lighting, Control, PACU's and Splits in the GDMS- Riyadh",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//       {
//         title: "Replacement of HVAC, Lighting, and Control system in IMSU",
//         client: "Tarshid",
//         details: "2025",
//         image1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
//         image2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
//         icon: <FaCogs />,
//       },
//       {
//         title: "EPC of centralized Solar Water heating system in Ras Alkheir",
//         client: "Royal commission/Jubail",
//         details: "2024",
//         image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
//         image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
//         icon: <MdEngineering />,
//       },
  
//       {
//           title: "Replacement of Split units, Lighting and Lighting control in Yanbu Male Colleges and Female Colleges",
//           client: "Arabian Qudra",
//           details: "2024",
//           image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
//           image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
//           icon: <MdEngineering />,
//         },
  
//         {
//           title: "Installation of indoor Lighting in KSU-Boys section",
//           client: "ELEMAC-Honeywell",
//           details: "2020",
//           image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
//           image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
//           icon: <MdEngineering />,
//         },
//         //HVAC

//         {
//             title: "KAFD- Parcel 4.06, Ducting work, AHU connection, and cladding",
//             client: "Al-Bawani",
//             details: "2022",
//             image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//             image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//             icon: <FaIndustry />,
//           },
//           {
//             title: "KAFD- Parcel 4.06, Ducting work for 6 floors and AHU connection and cladding",
//             client: "Al-Bawani",
//             details: "2022",
//             image1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
//             image2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
//             icon: <FaCogs />,
//           },
//           {
//             title: "Replacement of 12 PACU's units and 120 AC's replacement in Emaar of Baha",
//             client: "Site Technology",
//             details: "2024",
//             image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
//             image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
//             icon: <MdEngineering />,
//           },
//           {
//             title: "Operation and maintenance in KAFD-P1.12",
//             client: "Thabat",
//             details: "2023",
//             image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//             image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//             icon: <MdPrecisionManufacturing />,
//           },
//     //Plumbing      
//     {
//         title: "Plumbing and Sanitary fixing for Parcel 4.03",
//         client: "Al-Bawani",
//         details: "2020",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },
//       //mecanical
//       {
//         title: "eplacement of Air Conditioning, lighting and control in MOH-Qassim",
//         client: "Tarshid",
//         details: "Ongoing",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },
//       {
//         title: "Fabrication, installation of Alumnim Cladding for CHW pipes and Duct works in Parcel 1.12 KAFD",
//         client: "Thabat",
//         details: "2030",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },
//       {
//         title: "Installation of AHU Motor in the MONG",
//         client: "Engie Solution Co",
//         details: "2022",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },
//       {
//         title: "Replacement of AHU Motors in MONG",
//         client: "Tarshid- Engie",
//         details: "2022",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },
//       {
//         title: "Installation of AC- Split mounted for 50 Villas in Northern of Riyadh",
//         client: "Emaar",
//         details: "2021",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },
//       //HvAc and Electrical
//       {
//         title: "Installation of VRF Split system including step-up transformer modification in Tunis Embassy in Riyadh",
//         client: "Johnson Controls",
//         details: "2024",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },
//       //Piping and landscape
//       {
//         title: "Construction of Water Tanks and Irrigation System",
//         client: "Municipality of Mahd",
//         details: "2019",
//         image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//         image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//         icon: <MdPrecisionManufacturing />,
//       },

  
//   ];

//   return (
//     <div className="min-h-screen bg-[#0B1026] px-4 py-10">
//       <div className="mx-auto max-w-7xl rounded-xl border border-[#0089A8] bg-[#0B1026] p-5">
        
//         {/* Heading */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-extrabold text-[#0089A8] md:text-5xl">
//             Our Recent <br /> Accomplished Project #<span className="bg-gradient-to-r from-[#2E174F] to-[#0089A8] bg-clip-text text-transparent ">Lighting Control</span>
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

// export default MEPSection;




import React from "react";
import { FaIndustry, FaCalendarAlt, FaUserTie } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import image1 from "../ProjectTasisat/TasisatProjectImage/MEP/mep1.jpeg";
import image2 from "../ProjectTasisat/TasisatProjectImage/MEP/mep2.jpeg";
import image3 from "../ProjectTasisat/TasisatProjectImage/MEP/mep3.jpeg";
import image4 from "../ProjectTasisat/TasisatProjectImage/MEP/mep4.jpeg";
import image5 from "../ProjectTasisat/TasisatProjectImage/MEP/mep5.jpeg";
import image6 from "../ProjectTasisat/TasisatProjectImage/MEP/mep6.jpeg";

const projects = [
  {
    title:
      "Replacement of Lighting, Control, PACU's and Splits in the GDMS - Riyadh",
    client: "Tarshid",
    details: "2025",
  },
  {
    title: "Replacement of HVAC, Lighting, and Control System in IMSU",
    client: "Tarshid",
    details: "2025",
  },
  {
    title: "EPC of Centralized Solar Water Heating System in Ras Alkheir",
    client: "Royal Commission / Jubail",
    details: "2024",
  },
  {
    title:
      "Replacement of Split Units, Lighting and Lighting Control in Yanbu Male Colleges and Female Colleges",
    client: "Arabian Qudra",
    details: "2024",
  },
  {
    title: "Installation of Indoor Lighting in KSU - Boys Section",
    client: "ELEMAC - Honeywell",
    details: "2020",
  },
  {
    title: "KAFD - Parcel 4.06, Ducting Work, AHU Connection, and Cladding",
    client: "Al-Bawani",
    details: "2022",
  },
  {
    title:
      "KAFD - Parcel 4.06, Ducting Work for 6 Floors and AHU Connection and Cladding",
    client: "Al-Bawani",
    details: "2022",
  },
  {
    title:
      "Replacement of 12 PACU's Units and 120 AC's Replacement in Emaar of Baha",
    client: "Site Technology",
    details: "2024",
  },
  {
    title: "Operation and Maintenance in KAFD - P1.12",
    client: "Thabat",
    details: "2023",
  },
  {
    title: "Plumbing and Sanitary Fixing for Parcel 4.03",
    client: "Al-Bawani",
    details: "2020",
  },
  {
    title: "Replacement of Air Conditioning, Lighting and Control in MOH - Qassim",
    client: "Tarshid",
    details: "Ongoing",
  },
  {
    title:
      "Fabrication, Installation of Aluminum Cladding for CHW Pipes and Duct Works in Parcel 1.12 KAFD",
    client: "Thabat",
    details: "2030",
  },
  {
    title: "Installation of AHU Motor in the MONG",
    client: "Engie Solution Co",
    details: "2022",
  },
  {
    title: "Replacement of AHU Motors in MONG",
    client: "Tarshid - Engie",
    details: "2022",
  },
  {
    title: "Installation of AC Split Mounted for 50 Villas in Northern Riyadh",
    client: "Emaar",
    details: "2021",
  },
  {
    title:
      "Installation of VRF Split System Including Step-Up Transformer Modification in Tunis Embassy in Riyadh",
    client: "Johnson Controls",
    details: "2024",
  },
  {
    title: "Construction of Water Tanks and Irrigation System",
    client: "Municipality of Mahd",
    details: "2019",
  },
];

const galleryImages = [image5, image6, image3, image4];

const MEPSection = () => {
  const imageBoxClass =
    "relative overflow-hidden rounded-3xl bg-[#101833] shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1";

  const imageClass =
    "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110";

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
                MEP
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
              Explore our accomplished MEP projects including HVAC, plumbing,
              mechanical, lighting, ducting, control systems, and related
              engineering works.
            </p>

            <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-[#00B4D8] lg:mx-0"></div>
          </div>

          {/* Perfect Responsive Image Gallery */}
          <div className="grid w-full grid-cols-2 gap-3 auto-rows-[135px] sm:gap-4 sm:auto-rows-[170px] md:auto-rows-[210px] lg:w-1/2 lg:auto-rows-[190px] xl:auto-rows-[220px]">
            {/* First Image */}
            <div
              className={`${imageBoxClass} col-span-2 row-span-2 lg:col-span-1 lg:row-span-2`}
            >
              <img
                src={galleryImages[0]}
                alt="MEP Project 1"
                className={imageClass}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Image */}
            <div className={imageBoxClass}>
              <img
                src={galleryImages[1]}
                alt="MEP Project 2"
                className={imageClass}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Third Image */}
            <div className={`${imageBoxClass} row-span-2`}>
              <img
                src={galleryImages[2]}
                alt="MEP Project 3"
                className={imageClass}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Fourth Image */}
            <div className={imageBoxClass}>
              <img
                src={galleryImages[3]}
                alt="MEP Project 4"
                className={imageClass}
                loading="lazy"
                decoding="async"
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
                  {index % 2 === 0 ? (
                    <FaIndustry size={22} />
                  ) : (
                    <MdEngineering size={24} />
                  )}
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

export default MEPSection;