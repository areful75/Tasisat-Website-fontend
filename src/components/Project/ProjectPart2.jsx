


// import React, { useState } from "react";

// const ProjectImage = ({ src, alt, className, width, height }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="relative overflow-hidden bg-[#120404]">
//       {!loaded && <div className="absolute inset-0 animate-pulse bg-[#1a0505]" />}

//       <img
//         src={src}
//         alt={alt}
//         loading="lazy"
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

// const ProjectPart2 = () => {
//   const projects = [
//     {
//       title: "Complete Automation Project Installation, Testing & Commissioning.",
//       client: "Mostafa Hakim Cement",
//       line1: "PLC : Siemens",
//       images: [
//         "https://i.ibb.co/7xsh3CVC/IMG-16.png",
//         "https://i.ibb.co/RGGys5pk/IMG-17.png",
//       ],
//     },
//     {
//       title:
//         "Commissioning and Complete Autoamtion work of 5th Floor Cargo Lift for Product Transfer",
//       client: "Liz Fashion Industries Ltd.",
//       line1: "PLC : Mitsubishi",
//       line2: "HMI : Weinview",
//       images: [
//         "https://i.ibb.co/GQbd1pd8/IMG-18.png",
//         "https://i.ibb.co/rKkFLfn6/IMG-19.png",
//         "https://i.ibb.co/Gb6tTZv/IMG-20.png",
//         "https://i.ibb.co/NdXZSZDT/IMG-21.png",
//       ],
//     },
//     {
//       title:
//         "5th Floor Cargo Lift Automation along with fire system and Automatic door.",
//       client: "Liz Fashion Industries Ltd.",
//       line1: "Product : PLC-Mitsubushi, HMI-Weinview",
//       images: [
//         "https://i.ibb.co/3m73WnJ2/IMG-22.png",
//         "https://i.ibb.co/zhf6WzmP/IMG-23.png",
//       ],
//     },
//     {
//       title: "Weight Feeder Machine",
//       client: "Star Cement",
//       line1: "Service: Weight feeder programming, Commissioning and installation",
//       images: [
//         "https://i.ibb.co/Kx19CSBP/IMG-24.png",
//         "https://i.ibb.co/tthFCB6/IMG-25.png",
//         "https://i.ibb.co/b5vTqQHz/IMG-26.png",
//       ],
//     },
//     {
//       title: "Chemical Lab Door Control",
//       client: "ACME Group",
//       line1: "Product : Delta PLC, Delta HMI",
//       images: [
//         "https://i.ibb.co/nMN31vHR/IMG-27.png",
//         "https://i.ibb.co/qY2Lw7JW/IMG-28.png",
//       ],
//     },
//     {
//       title: "Cement Mill Pluse Jet Bag Filter Machine Automation.",
//       client: "Star Cement Industries Ltd",
//       images: [
//         "https://i.ibb.co/35CB8ZnL/IMG-29.png",
//         "https://i.ibb.co/s9qczfqF/IMG-30.png",
//       ],
//     },
//     {
//       title: "PLC. HMI Installation & Integration",
//       client: "Partex Group",
//       line1: "Device : PLC",
//       images: [
//         "https://i.ibb.co/Fb27D4db/IMG-31.png",
//         "https://i.ibb.co/Dgsc9Ccj/IMG-32.png",
//       ],
//     },
//     {
//       title: "Manufacturing Prepag Rolling Automatic Machine in BIAS Cutting Process",
//       client: "Mamiya OP (BD) LTD",
//       line1: "Services : Machine Designed,",
//       line2: "Manufactured, Comissioned, Installed",
//       images: [
//         "https://i.ibb.co/MkqgGsjJ/IMG-33.png",
//         "https://i.ibb.co/BHyR29Yx/IMG-34.png",
//         "https://i.ibb.co/8DrHMX8s/IMG-35.png",
//       ],
//     },
//   ];

//   const getGridCols = (count) => {
//     if (count === 2) return "grid-cols-2";
//     if (count === 3) return "grid-cols-3";
//     if (count === 4) return "grid-cols-4";
//     return "grid-cols-2";
//   };

//   const getImageHeight = (count) => {
//     if (count === 4) return "h-[120px] md:h-[135px]";
//     if (count === 3) return "h-[130px] md:h-[145px]";
//     return "h-[150px] md:h-[170px]";
//   };

//   return (
//     <div className="min-h-screen bg-[#0b0000] px-3 py-8 md:px-5">
//       <div className="mx-auto max-w-7xl rounded-2xl border border-[#780909] bg-[#0b0000] p-4 shadow-xl md:p-6">
//         <div className="mb-6">
//           <h1 className="text-[2rem] font-extrabold leading-[1.05] text-[#df0707] md:text-[3.3rem]">
//             Our Recent
//             <br />
//             Accomplished Project
//           </h1>
//           <div className="mt-2 h-1 w-[180px] bg-[#df0707] md:w-[310px]" />
//         </div>

//         <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-md border border-[#780909] bg-[#111111]"
//             >
//               <div className="relative">
//                 <div
//                   className={`grid ${getGridCols(
//                     project.images.length
//                   )} gap-[2px] bg-[#780909]`}
//                 >
//                   {project.images.map((img, i) => (
//                     <div key={i} className="overflow-hidden bg-black">
//                       <ProjectImage
//                         src={img}
//                         alt={project.title}
//                         width="400"
//                         height="220"
//                         className={`block w-full ${getImageHeight(
//                           project.images.length
//                         )} object-cover object-center`}
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-2 py-2 text-[12px] leading-tight text-white md:text-[15px]">
//                   {project.title}
//                 </div>
//               </div>

//               <div className="h-[4px] bg-[#df0707]" />

//               <div className="px-3 py-3 text-[14px] leading-tight text-gray-300 md:text-[17px]">
//                 <p>
//                   Client : <span className="text-[#df0707]">{project.client}</span>
//                 </p>
//                 {project.line1 && <p>{project.line1}</p>}
//                 {project.line2 && <p>{project.line2}</p>}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectPart2;




import React, { useState } from "react";

const ProjectImage = ({ src, alt, className, width, height }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#101833]">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-[#101833]" />}

      <img
        src={src}
        alt={alt}
        loading="lazy"
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

const ProjectPart2 = () => {
  const projects = [
    {
      title: "Complete Automation Project Installation, Testing & Commissioning.",
      client: "Mostafa Hakim Cement",
      line1: "PLC : Siemens",
      images: [
        "https://i.ibb.co/7xsh3CVC/IMG-16.png",
        "https://i.ibb.co/RGGys5pk/IMG-17.png",
      ],
    },
    {
      title:
        "Commissioning and Complete Autoamtion work of 5th Floor Cargo Lift for Product Transfer",
      client: "Liz Fashion Industries Ltd.",
      line1: "PLC : Mitsubishi",
      line2: "HMI : Weinview",
      images: [
        "https://i.ibb.co/GQbd1pd8/IMG-18.png",
        "https://i.ibb.co/rKkFLfn6/IMG-19.png",
        "https://i.ibb.co/Gb6tTZv/IMG-20.png",
        "https://i.ibb.co/NdXZSZDT/IMG-21.png",
      ],
    },
    {
      title:
        "5th Floor Cargo Lift Automation along with fire system and Automatic door.",
      client: "Liz Fashion Industries Ltd.",
      line1: "Product : PLC-Mitsubushi, HMI-Weinview",
      images: [
        "https://i.ibb.co/3m73WnJ2/IMG-22.png",
        "https://i.ibb.co/zhf6WzmP/IMG-23.png",
      ],
    },
    {
      title: "Weight Feeder Machine",
      client: "Star Cement",
      line1: "Service: Weight feeder programming, Commissioning and installation",
      images: [
        "https://i.ibb.co/Kx19CSBP/IMG-24.png",
        "https://i.ibb.co/tthFCB6/IMG-25.png",
        "https://i.ibb.co/b5vTqQHz/IMG-26.png",
      ],
    },
    {
      title: "Chemical Lab Door Control",
      client: "ACME Group",
      line1: "Product : Delta PLC, Delta HMI",
      images: [
        "https://i.ibb.co/nMN31vHR/IMG-27.png",
        "https://i.ibb.co/qY2Lw7JW/IMG-28.png",
      ],
    },
    {
      title: "Cement Mill Pluse Jet Bag Filter Machine Automation.",
      client: "Star Cement Industries Ltd",
      images: [
        "https://i.ibb.co/35CB8ZnL/IMG-29.png",
        "https://i.ibb.co/s9qczfqF/IMG-30.png",
      ],
    },
    {
      title: "PLC. HMI Installation & Integration",
      client: "Partex Group",
      line1: "Device : PLC",
      images: [
        "https://i.ibb.co/Fb27D4db/IMG-31.png",
        "https://i.ibb.co/Dgsc9Ccj/IMG-32.png",
      ],
    },
    {
      title: "Manufacturing Prepag Rolling Automatic Machine in BIAS Cutting Process",
      client: "Mamiya OP (BD) LTD",
      line1: "Services : Machine Designed,",
      line2: "Manufactured, Comissioned, Installed",
      images: [
        "https://i.ibb.co/MkqgGsjJ/IMG-33.png",
        "https://i.ibb.co/BHyR29Yx/IMG-34.png",
        "https://i.ibb.co/8DrHMX8s/IMG-35.png",
      ],
    },
  ];

  const getGridCols = (count) => {
    if (count === 2) return "grid-cols-2";
    if (count === 3) return "grid-cols-3";
    if (count === 4) return "grid-cols-4";
    return "grid-cols-2";
  };

  const getImageHeight = (count) => {
    if (count === 4) return "h-[120px] md:h-[135px]";
    if (count === 3) return "h-[130px] md:h-[145px]";
    return "h-[150px] md:h-[170px]";
  };

  return (
    <div className="min-h-screen bg-[#0B1026] px-3 py-8 md:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#0089A8] bg-[#0B1026] p-4 shadow-xl md:p-6">
        <div className="mb-6">
          <h1 className="text-[2rem] font-extrabold leading-[1.05] text-[#00B4D8] md:text-[3.3rem]">
            Our Recent
            <br />
            Accomplished Project
          </h1>
          <div className="mt-2 h-1 w-[180px] bg-[#00B4D8] md:w-[310px]" />
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md border border-[#0089A8] bg-[#101833]"
            >
              <div className="relative">
                <div
                  className={`grid ${getGridCols(
                    project.images.length
                  )} gap-[2px] bg-[#0089A8]`}
                >
                  {project.images.map((img, i) => (
                    <div key={i} className="overflow-hidden bg-[#101833]">
                      <ProjectImage
                        src={img}
                        alt={project.title}
                        width="400"
                        height="220"
                        className={`block w-full ${getImageHeight(
                          project.images.length
                        )} object-cover object-center`}
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#101833]/80 px-2 py-2 text-[12px] leading-tight text-white md:text-[15px]">
                  {project.title}
                </div>
              </div>

              <div className="h-[4px] bg-[#00B4D8]" />

              <div className="px-3 py-3 text-[14px] leading-tight text-gray-300 md:text-[17px]">
                <p>
                  Client : <span className="text-[#00B4D8]">{project.client}</span>
                </p>
                {project.line1 && <p>{project.line1}</p>}
                {project.line2 && <p>{project.line2}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPart2;