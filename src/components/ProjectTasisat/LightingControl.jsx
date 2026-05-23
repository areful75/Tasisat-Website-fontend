// import React from "react";
// import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
// import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

// const LightingControl = () => {
//   const projects = [
//     {
//         title: "Installation of Façade Lighting for Emaar Tower in King Fahad Road",
//         client: "Emaar Al-Modon",
//         details: "Ongoing",
//         image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//         image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//         icon: <FaIndustry />,
//       },
//     {
//       title: "Installation of Façade Lighting for Emaar Tower in King Fahad Road",
//       client: "Emaar AlModon",
//       details: "2025",
//       image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//       image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//       icon: <FaIndustry />,
//     },
//     {
//       title: "Installation, testing and commissioning of Solar street lighting systems in sharma Neom",
//       client: "NEOM/SAMA",
//       details: "2024",
//       image1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
//       image2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
//       icon: <FaCogs />,
//     },
//     {
//       title: "Installation, testing and commissioning of Solar street lighting systems in Duba Neom",
//       client: "NEOM/Abyatona",
//       details: "2024",
//       image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
//       image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
//       icon: <MdEngineering />,
//     },
    
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

// export default LightingControl;


// import React from "react";
// import { FaIndustry, FaCalendarAlt, FaUserTie, FaLightbulb } from "react-icons/fa";
// import { MdEngineering } from "react-icons/md";
// import img1 from "../ProjectTasisat/TasisatProjectImage/Lighting/lighiting1.jpeg";
// import img2 from "../ProjectTasisat/TasisatProjectImage/Lighting/lighting2.jpeg";
// import img3 from "../ProjectTasisat/TasisatProjectImage/Lighting/lighting2.jpeg";
// import video from "../ProjectTasisat/TasisatProjectImage/Lighting/lighting3.mp4";

// const projects = [
//   {
//     title: "Installation of Façade Lighting for Emaar Tower in King Fahad Road",
//     client: "Emaar Al-Modon",
//     details: "Ongoing",
//   },
//   {
//     title: "Installation of Façade Lighting for Emaar Tower in King Fahad Road",
//     client: "Emaar AlModon",
//     details: "2025",
//   },
//   {
//     title:
//       "Installation, Testing and Commissioning of Solar Street Lighting Systems in Sharma NEOM",
//     client: "NEOM / SAMA",
//     details: "2024",
//   },
//   {
//     title:
//       "Installation, Testing and Commissioning of Solar Street Lighting Systems in Duba NEOM",
//     client: "NEOM / Abyatona",
//     details: "2024",
//   },
// ];

// const galleryImages = [
//   img1,
//   img2,
//   img3,
//   video,
// ];

// const LightingControl = () => {
//   return (
//     <div className="min-h-screen bg-[#0B1026] px-4 py-10">
//       <div className="mx-auto max-w-7xl rounded-2xl border border-[#0089A8]/60 bg-[#0B1026] p-5 md:p-8">
//         {/* Top Section */}
//         <div className="mb-12 flex flex-col items-center gap-10 lg:flex-row">
//           {/* Heading */}
//           <div className="w-full text-center lg:w-1/2 lg:text-left">
//             <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-[#00B4D8]">
//               Projects Portfolio
//             </p>

//             <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
//               Our Recent Accomplished Project{" "}
//               <span className="bg-gradient-to-r from-[#00B4D8] to-[#0089A8] bg-clip-text text-transparent">
//                 Lighting Control
//               </span>
//             </h1>

//             <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
//               Explore our accomplished lighting control projects including
//               façade lighting, solar street lighting, testing, installation, and
//               commissioning works.
//             </p>

//             <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-[#00B4D8] lg:mx-0"></div>
//           </div>

//           {/* Image Gallery */}
//           <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
//             {/* First Image */}
//             <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 col-span-2 lg:col-span-1 lg:row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//               <img
//                 src={galleryImages[0]}
//                 alt="Lighting Control Project 1"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>

//             {/* Second Image */}
//             <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//               <img
//                 src={galleryImages[1]}
//                 alt="Lighting Control Project 2"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>

//             {/* Third Image */}
//             <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//               <img
//                 src={galleryImages[2]}
//                 alt="Lighting Control Project 3"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>

//             {/* Fourth Image */}
//             <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
//               <img
//                 src={galleryImages[3]}
//                 alt="Lighting Control Project 4"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Project Cards */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl border border-[#0089A8]/40 bg-[#101833] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00B4D8] hover:shadow-2xl"
//             >
//               {/* Top */}
//               <div className="mb-5 flex items-center justify-between">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] transition duration-300 group-hover:bg-[#00B4D8] group-hover:text-[#0B1026]">
//                   {index % 2 === 0 ? (
//                     <FaLightbulb size={22} />
//                   ) : (
//                     <MdEngineering size={24} />
//                   )}
//                 </div>

//                 <span className="rounded-full border border-[#0089A8]/50 px-3 py-1 text-xs font-semibold text-[#00B4D8]">
//                   #{String(index + 1).padStart(2, "0")}
//                 </span>
//               </div>

//               {/* Title */}
//               <h2 className="mb-5 min-h-[120px] text-lg font-bold leading-snug text-white transition duration-300 group-hover:text-[#00B4D8]">
//                 {project.title}
//               </h2>

//               {/* Info */}
//               <div className="space-y-3 border-t border-[#0089A8]/30 pt-4">
//                 <p className="flex items-center gap-3 text-sm text-gray-300">
//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8]">
//                     <FaUserTie />
//                   </span>

//                   <span>
//                     <span className="font-semibold text-white">Client:</span>{" "}
//                     {project.client}
//                   </span>
//                 </p>

//                 <p className="flex items-center gap-3 text-sm text-gray-300">
//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8]">
//                     <FaCalendarAlt />
//                   </span>

//                   <span>
//                     <span className="font-semibold text-white">
//                       Year / Status:
//                     </span>{" "}
//                     {project.details}
//                   </span>
//                 </p>
//               </div>

//               {/* Hover Line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00B4D8] transition-all duration-300 group-hover:w-full"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LightingControl;

import React from "react";
import { FaCalendarAlt, FaUserTie, FaLightbulb } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

import video from "../ProjectTasisat/TasisatProjectImage/Lighting/lighting3.mp4";

const projects = [
  {
    title: "Installation of Façade Lighting for Emaar Tower in King Fahad Road",
    client: "Emaar Al-Modon",
    details: "Ongoing",
  },
  {
    title: "Installation of Façade Lighting for Emaar Tower in King Fahad Road",
    client: "Emaar AlModon",
    details: "2025",
  },
  {
    title:
      "Installation, Testing and Commissioning of Solar Street Lighting Systems in Sharma NEOM",
    client: "NEOM / SAMA",
    details: "2024",
  },
  {
    title:
      "Installation, Testing and Commissioning of Solar Street Lighting Systems in Duba NEOM",
    client: "NEOM / Abyatona",
    details: "2024",
  },
];

const LightingControl = () => {
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
                Lighting Control
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
              Explore our accomplished lighting control projects including
              façade lighting, solar street lighting, testing, installation, and
              commissioning works.
            </p>

            <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-[#00B4D8] lg:mx-0"></div>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="group relative overflow-hidden rounded-3xl border border-[#0089A8]/50 bg-[#101833] p-2 shadow-xl shadow-[#00B4D8]/10 transition-all duration-500 hover:-translate-y-1 hover:border-[#00B4D8] hover:shadow-2xl hover:shadow-[#00B4D8]/20">
              <div className="relative overflow-hidden rounded-2xl">
                <video
                  src={video}
                  className="h-[260px] w-full object-cover object-center sm:h-[340px] lg:h-[420px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                {/* Dark Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1026]/80 via-[#0B1026]/10 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute left-4 top-4 rounded-full border border-[#00B4D8]/50 bg-[#0B1026]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#00B4D8] backdrop-blur-md">
                  Lighting Project
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-4 left-4 right-4">
                  {/* <div className="rounded-2xl border border-[#0089A8]/40 bg-[#0B1026]/80 p-4 backdrop-blur-md">
                    <h3 className="text-lg font-bold text-white">
                      Façade & Solar Street Lighting Works
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-gray-300">
                      Professional installation, testing, and commissioning for
                      modern lighting control systems.
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00B4D8] transition-all duration-500 group-hover:w-full"></div>
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
                    <FaLightbulb size={22} />
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

export default LightingControl;