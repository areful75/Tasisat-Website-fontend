
// import React, { useState } from "react";
// import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
// import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

// const ProjectImage = ({
//   src,
//   alt,
//   className,
//   loading = "lazy",
//   width,
//   height,
// }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="relative overflow-hidden bg-[#1a0505]">
//       {!loaded && (
//         <div className="absolute inset-0 animate-pulse bg-[#1a0505]" />
//       )}
//       <img
//         src={src}
//         alt={alt}
//         loading={loading}
//         decoding="async"
//         width={width}
//         height={height}
//         onLoad={() => setLoaded(true)}
//         className={`${className} transition-opacity duration-500 ${
//           loaded ? "opacity-100" : "opacity-0"
//         }`}
//       />
//     </div>
//   );
// };

// const ProjectPart1 = () => {
//   const projects = [
//     {
//       title: "Palletizing Machine System",
//       client: "Transcom Beverage Ltd",
//       meta1: "Bus Coupler With I/O : WAGO",
//       img1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
//       img2: "https://i.ibb.co/n86YcR08/IMG-05.png",
//       icon: <FaIndustry />,
//     },
//     {
//       title: "Tower Crane PLC System",
//       client: "BBS Steel",
//       meta1: "PLC : Siemens S7-300",
//       img1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
//       img2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
//       icon: <FaCogs />,
//     },
//     {
//       title: "High Mast Pole Lighting",
//       client: "GPH Ispat Ltd.",
//       meta1: "Device : High Mast Pole",
//       img1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
//       img2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
//       icon: <MdEngineering />,
//     },
//     {
//       title: "Automation & Drive Commissioning",
//       client: "Accuracy Engineering Ltd.",
//       meta1: "Brand : Yaskawa",
//       img1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
//       img2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
//       icon: <MdPrecisionManufacturing />,
//     },
//     {
//       title: "SCADA Installation & Monitoring",
//       client: "Unilever Bangladesh",
//       meta1: "SCADA : Siemens WinCC",
//       img1: "https://i.ibb.co/0zxdJvK/IMG-12.png",
//       img2: "https://i.ibb.co/mFDRcn2G/IMG-13.png",
//       icon: <FaProjectDiagram />,
//     },
//     {
//       title: "SCADA Troubleshooting System",
//       client: "Padma Oil Company Ltd.",
//       meta1: "PLC : Siemens",
//       img1: "https://i.ibb.co/yctxpSCY/IMG-14.png",
//       img2: "https://i.ibb.co/NgSSCjyr/IMG-15.png",
//       icon: <FaProjectDiagram />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0b0000] px-4 py-10">
//       <div className="mx-auto max-w-7xl rounded-xl border border-[#780909] bg-[#0b0000] p-5">
//         <div className="mb-6">
//           <h1 className="text-3xl font-extrabold text-[#780909] md:text-5xl">
//             Our Recent <br /> Accomplished Project
//           </h1>
//           <div className="mt-2 h-1 w-40 bg-[#df0707]"></div>
//         </div>

//         <div className="mb-8 border border-[#780909] bg-[#111] p-3">
//           <ProjectImage
//             src="https://i.ibb.co/DDxK21QK/IMG-01.png"
//             alt="Rail Mounted Gantry Crane Chattogram Port"
//             loading="eager"
//             width="1200"
//             height="420"
//             className="h-64 w-full object-cover md:h-[420px]"
//           />

//           <div className="relative z-10 -mt-12 bg-[#780909] px-4 py-2 text-xl font-bold text-black">
//             Rail Mounted Gantry Crane Chattogram Port
//           </div>

//           <div className="mt-3 space-y-1 text-gray-300">
//             <p>
//               <FaIndustry className="mr-2 inline text-[#df0707]" />
//               Client: Essential Trade Lines
//             </p>
//             <p>
//               <FaCogs className="mr-2 inline text-[#df0707]" />
//               Service: Full Automation System Programming & Commissioning
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           {projects.map((p, i) => (
//             <div
//               key={i}
//               className="bg-[#111] border border-[#780909] p-2 transition hover:shadow-lg hover:shadow-[#df0707]/20"
//             >
//               <div className="grid grid-cols-2">
//                 <ProjectImage
//                   src={p.img1}
//                   alt={p.title}
//                   width="600"
//                   height="300"
//                   className="h-44 w-full object-cover"
//                 />
//                 <ProjectImage
//                   src={p.img2}
//                   alt={p.title}
//                   width="600"
//                   height="300"
//                   className="h-44 w-full object-cover"
//                 />
//               </div>

//               <div className="relative z-10 -mt-10 bg-[#780909] px-2 py-1 text-sm font-semibold text-black">
//                 {p.title}
//               </div>

//               <div className="mt-3 space-y-1 p-2 text-sm text-gray-300">
//                 <p className="flex items-center gap-2">
//                   <span className="text-[#df0707]">{p.icon}</span>
//                   Client: {p.client}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <FaCogs className="text-[#df0707]" />
//                   {p.meta1}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectPart1;






import React, { useState } from "react";
import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

const ProjectImage = ({
  src,
  alt,
  className,
  loading = "lazy",
  width,
  height,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#101833]">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-[#101833]" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const ProjectPart1 = () => {
  const projects = [
    {
      title: "Palletizing Machine System",
      client: "Transcom Beverage Ltd",
      meta1: "Bus Coupler With I/O : WAGO",
      img1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
      img2: "https://i.ibb.co/n86YcR08/IMG-05.png",
      icon: <FaIndustry />,
    },
    {
      title: "Tower Crane PLC System",
      client: "BBS Steel",
      meta1: "PLC : Siemens S7-300",
      img1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
      img2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
      icon: <FaCogs />,
    },
    {
      title: "High Mast Pole Lighting",
      client: "GPH Ispat Ltd.",
      meta1: "Device : High Mast Pole",
      img1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
      img2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
      icon: <MdEngineering />,
    },
    {
      title: "Automation & Drive Commissioning",
      client: "Accuracy Engineering Ltd.",
      meta1: "Brand : Yaskawa",
      img1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
      img2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
      icon: <MdPrecisionManufacturing />,
    },
    {
      title: "SCADA Installation & Monitoring",
      client: "Unilever Bangladesh",
      meta1: "SCADA : Siemens WinCC",
      img1: "https://i.ibb.co/0zxdJvK/IMG-12.png",
      img2: "https://i.ibb.co/mFDRcn2G/IMG-13.png",
      icon: <FaProjectDiagram />,
    },
    {
      title: "SCADA Troubleshooting System",
      client: "Padma Oil Company Ltd.",
      meta1: "PLC : Siemens",
      img1: "https://i.ibb.co/yctxpSCY/IMG-14.png",
      img2: "https://i.ibb.co/NgSSCjyr/IMG-15.png",
      icon: <FaProjectDiagram />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1026] px-4 py-10">
      <div className="mx-auto max-w-7xl rounded-xl border border-[#0089A8] bg-[#0B1026] p-5">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-[#0089A8] md:text-5xl">
            Our Recent <br /> Accomplished Project
          </h1>
          <div className="mt-2 h-1 w-40 bg-[#00B4D8]"></div>
        </div>

        <div className="mb-8 border border-[#0089A8] bg-[#101833] p-3">
          <ProjectImage
            src="https://i.ibb.co/DDxK21QK/IMG-01.png"
            alt="Rail Mounted Gantry Crane Chattogram Port"
            loading="eager"
            width="1200"
            height="420"
            className="h-64 w-full object-cover md:h-[420px]"
          />

          <div className="relative z-10 -mt-12 bg-[#0089A8] px-4 py-2 text-xl font-bold text-black">
            Rail Mounted Gantry Crane Chattogram Port
          </div>

          <div className="mt-3 space-y-1 text-gray-300">
            <p>
              <FaIndustry className="mr-2 inline text-[#00B4D8]" />
              Client: Essential Trade Lines
            </p>
            <p>
              <FaCogs className="mr-2 inline text-[#00B4D8]" />
              Service: Full Automation System Programming & Commissioning
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#101833] border border-[#0089A8] p-2 transition hover:shadow-lg hover:shadow-[#00B4D8]/20"
            >
              <div className="grid grid-cols-2">
                <ProjectImage
                  src={p.img1}
                  alt={p.title}
                  width="600"
                  height="300"
                  className="h-44 w-full object-cover"
                />
                <ProjectImage
                  src={p.img2}
                  alt={p.title}
                  width="600"
                  height="300"
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="relative z-10 -mt-10 bg-[#0089A8] px-2 py-1 text-sm font-semibold text-black">
                {p.title}
              </div>

              <div className="mt-3 space-y-1 p-2 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="text-[#00B4D8]">{p.icon}</span>
                  Client: {p.client}
                </p>
                <p className="flex items-center gap-2">
                  <FaCogs className="text-[#00B4D8]" />
                  {p.meta1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPart1;