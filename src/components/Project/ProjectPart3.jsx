

// import React, { useState, memo } from "react";
// import { FaIndustry, FaCogs } from "react-icons/fa";

// import img37 from "../../assets/projects/IMG 37.png";
// import img38 from "../../assets/projects/IMG 38.png";
// import img39 from "../../assets/projects/IMG 39.png";
// import img40 from "../../assets/projects/IMG 40.png";
// import img41 from "../../assets/projects/IMG 41.png";
// import img42 from "../../assets/projects/IMG 42.png";
// import img43 from "../../assets/projects/IMG 43.png";
// import img44 from "../../assets/projects/IMG 44.png";
// import img45 from "../../assets/projects/IMG 45.png";
// import img46 from "../../assets/projects/IMG 46.png";
// import img47 from "../../assets/projects/IMG 47.png";
// import img48 from "../../assets/projects/IMG 48.png";
// import img49 from "../../assets/projects/IMG 49.png";
// import img50 from "../../assets/projects/IMG 50.png";
// import img51 from "../../assets/projects/IMG 51.png";
// import img52 from "../../assets/projects/IMG 52.png";
// import img53 from "../../assets/projects/IMG 53.png";
// import img54 from "../../assets/projects/IMG 54.png";
// import img55 from "../../assets/projects/IMG 55.png";
// import img56 from "../../assets/projects/IMG 56.png";
// import img57 from "../../assets/projects/IMG 57.png";
// import img58 from "../../assets/projects/IMG 58.png";
// import img59 from "../../assets/projects/IMG 59.png";
// import img60 from "../../assets/projects/IMG 60.png";
// import img61 from "../../assets/projects/IMG 61.png";
// import img62 from "../../assets/projects/IMG 62.png";
// import img63 from "../../assets/projects/IMG 63.png";
// import img64 from "../../assets/projects/IMG 64.png";
// import img65 from "../../assets/projects/IMG 65.png";

// const LazyImage = memo(function LazyImage({
//   src,
//   alt,
//   className,
//   loading = "lazy",
//   width,
//   height,
// }) {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="relative overflow-hidden bg-[#140303]">
//       {!loaded && <div className="absolute inset-0 animate-pulse bg-[#1a0505]" />}
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
// });

// const ProjectPart3 = () => {
//   const projects = [
//     {
//       title: "LPG GAS",
//       client: "Tesla Power BD",
//       service: "LPG Gas Programming & Installation",
//       images: [img37, img38],
//     },
//     {
//       title: "Roto Packer Machine",
//       client: "Star Cement",
//       service: "Roto Packer Commissioning & Programming",
//       images: [img39, img40],
//     },
//     {
//       title: "Beta Fuel Dispenser",
//       client: "Padma Oil",
//       service: "Automation Programming & Commissioning",
//       extra: "PLC : IDEC",
//       images: [img41, img42],
//     },
//     {
//       title: "Auto Unloading System",
//       client: "MIDAS Safety",
//       service: "Automation",
//       images: [img43, img44, img45],
//     },
//     {
//       title: "Tea Bag Machine Automation",
//       client: "Trofima Refreshments Ltd",
//       service: "PLC & HMI (Delta)",
//       images: [img46, img47, img48],
//     },
//     {
//       title: "Packaging Machine Automation",
//       client: "Trofima Refreshments Ltd",
//       service: "PLC & HMI (Siemens)",
//       images: [img49, img50, img51],
//     },
//   ];

//   const foreignTop = [img52, img53, img54];
//   const foreignMid = [img55, img56, img57, img58, img59];
//   const foreignBottom = [img60, img61, img62, img63, img64, img65];

//   const getCols = (n) =>
//     n === 2 ? "grid-cols-2" : n === 3 ? "grid-cols-3" : "grid-cols-2";

//   return (
//     <div className="min-h-screen bg-[#0b0000] px-4 py-8">
//       <div className="mx-auto max-w-7xl rounded-xl border border-[#780909] p-5">
//         <h1 className="mb-6 text-3xl font-bold text-[#780909] md:text-5xl">
//           Our Recent <br /> Accomplished Project
//         </h1>

//         <div className="grid gap-6 md:grid-cols-2">
//           {projects.map((p, i) => (
//             <div key={i} className="border border-[#780909] bg-[#111]">
//               <div className={`grid ${getCols(p.images.length)} gap-[2px] bg-[#780909]`}>
//                 {p.images.map((img, idx) => (
//                   <LazyImage
//                     key={idx}
//                     src={img}
//                     alt={p.title}
//                     width="500"
//                     height="280"
//                     className="h-[140px] w-full object-cover"
//                   />
//                 ))}
//               </div>

//               <div className="relative z-10 -mt-8 bg-[#780909] px-2 py-1 text-sm font-semibold text-black">
//                 {p.title}
//               </div>

//               <div className="space-y-1 p-3 text-sm text-gray-300">
//                 <p className="flex items-center gap-2">
//                   <FaIndustry className="text-[#df0707]" />
//                   Client: {p.client}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <FaCogs className="text-[#df0707]" />
//                   {p.service}
//                 </p>
//                 {p.extra && <p className="text-xs">{p.extra}</p>}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 text-center">
//           <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
//             Our Foreign Project (KSA)
//           </h2>

//           <div className="border border-[#780909] p-3">
//             <div className="mb-2 grid grid-cols-3 gap-2">
//               {foreignTop.map((img, i) => (
//                 <LazyImage
//                   key={i}
//                   src={img}
//                   alt={`Foreign project top ${i + 1}`}
//                   width="400"
//                   height="220"
//                   className="h-[110px] w-full object-cover"
//                 />
//               ))}
//             </div>

//             <div className="mb-2 border-t border-dashed border-[#780909]"></div>

//             <div className="mb-2 grid grid-cols-5 gap-2">
//               {foreignMid.map((img, i) => (
//                 <LazyImage
//                   key={i}
//                   src={img}
//                   alt={`Foreign project middle ${i + 1}`}
//                   width="300"
//                   height="180"
//                   className="h-[90px] w-full object-cover"
//                 />
//               ))}
//             </div>

//             <div className="mb-2 border-t border-dashed border-[#780909]"></div>

//             <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
//               {foreignBottom.map((img, i) => (
//                 <LazyImage
//                   key={i}
//                   src={img}
//                   alt={`Foreign project bottom ${i + 1}`}
//                   width="300"
//                   height="180"
//                   className="h-[90px] w-full object-cover"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectPart3;



import React, { useState, memo } from "react";
import { FaIndustry, FaCogs } from "react-icons/fa";

import img37 from "../../assets/projects/IMG 37.png";
import img38 from "../../assets/projects/IMG 38.png";
import img39 from "../../assets/projects/IMG 39.png";
import img40 from "../../assets/projects/IMG 40.png";
import img41 from "../../assets/projects/IMG 41.png";
import img42 from "../../assets/projects/IMG 42.png";
import img43 from "../../assets/projects/IMG 43.png";
import img44 from "../../assets/projects/IMG 44.png";
import img45 from "../../assets/projects/IMG 45.png";
import img46 from "../../assets/projects/IMG 46.png";
import img47 from "../../assets/projects/IMG 47.png";
import img48 from "../../assets/projects/IMG 48.png";
import img49 from "../../assets/projects/IMG 49.png";
import img50 from "../../assets/projects/IMG 50.png";
import img51 from "../../assets/projects/IMG 51.png";
import img52 from "../../assets/projects/IMG 52.png";
import img53 from "../../assets/projects/IMG 53.png";
import img54 from "../../assets/projects/IMG 54.png";
import img55 from "../../assets/projects/IMG 55.png";
import img56 from "../../assets/projects/IMG 56.png";
import img57 from "../../assets/projects/IMG 57.png";
import img58 from "../../assets/projects/IMG 58.png";
import img59 from "../../assets/projects/IMG 59.png";
import img60 from "../../assets/projects/IMG 60.png";
import img61 from "../../assets/projects/IMG 61.png";
import img62 from "../../assets/projects/IMG 62.png";
import img63 from "../../assets/projects/IMG 63.png";
import img64 from "../../assets/projects/IMG 64.png";
import img65 from "../../assets/projects/IMG 65.png";

const LazyImage = memo(function LazyImage({
  src,
  alt,
  className,
  loading = "lazy",
  width,
  height,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#101833]">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-[#101833]" />}
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
});

const ProjectPart3 = () => {
  const projects = [
    {
      title: "LPG GAS",
      client: "Tesla Power BD",
      service: "LPG Gas Programming & Installation",
      images: [img37, img38],
    },
    {
      title: "Roto Packer Machine",
      client: "Star Cement",
      service: "Roto Packer Commissioning & Programming",
      images: [img39, img40],
    },
    {
      title: "Beta Fuel Dispenser",
      client: "Padma Oil",
      service: "Automation Programming & Commissioning",
      extra: "PLC : IDEC",
      images: [img41, img42],
    },
    {
      title: "Auto Unloading System",
      client: "MIDAS Safety",
      service: "Automation",
      images: [img43, img44, img45],
    },
    {
      title: "Tea Bag Machine Automation",
      client: "Trofima Refreshments Ltd",
      service: "PLC & HMI (Delta)",
      images: [img46, img47, img48],
    },
    {
      title: "Packaging Machine Automation",
      client: "Trofima Refreshments Ltd",
      service: "PLC & HMI (Siemens)",
      images: [img49, img50, img51],
    },
  ];

  const foreignTop = [img52, img53, img54];
  const foreignMid = [img55, img56, img57, img58, img59];
  const foreignBottom = [img60, img61, img62, img63, img64, img65];

  const getCols = (n) =>
    n === 2 ? "grid-cols-2" : n === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <div className="min-h-screen bg-[#0B1026] px-4 py-8">
      <div className="mx-auto max-w-7xl rounded-xl border border-[#0089A8] p-5">
        <h1 className="mb-6 text-3xl font-bold text-[#0089A8] md:text-5xl">
          Our Recent <br /> Accomplished Project
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="border border-[#0089A8] bg-[#101833]">
              <div className={`grid ${getCols(p.images.length)} gap-[2px] bg-[#0089A8]`}>
                {p.images.map((img, idx) => (
                  <LazyImage
                    key={idx}
                    src={img}
                    alt={p.title}
                    width="500"
                    height="280"
                    className="h-[140px] w-full object-cover"
                  />
                ))}
              </div>

              <div className="relative z-10 -mt-8 bg-[#0089A8] px-2 py-1 text-sm font-semibold text-black">
                {p.title}
              </div>

              <div className="space-y-1 p-3 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <FaIndustry className="text-[#00B4D8]" />
                  Client: {p.client}
                </p>
                <p className="flex items-center gap-2">
                  <FaCogs className="text-[#00B4D8]" />
                  {p.service}
                </p>
                {p.extra && <p className="text-xs">{p.extra}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
            Our Foreign Project (KSA)
          </h2>

          <div className="border border-[#0089A8] p-3">
            <div className="mb-2 grid grid-cols-3 gap-2">
              {foreignTop.map((img, i) => (
                <LazyImage
                  key={i}
                  src={img}
                  alt={`Foreign project top ${i + 1}`}
                  width="400"
                  height="220"
                  className="h-[110px] w-full object-cover"
                />
              ))}
            </div>

            <div className="mb-2 border-t border-dashed border-[#0089A8]"></div>

            <div className="mb-2 grid grid-cols-5 gap-2">
              {foreignMid.map((img, i) => (
                <LazyImage
                  key={i}
                  src={img}
                  alt={`Foreign project middle ${i + 1}`}
                  width="300"
                  height="180"
                  className="h-[90px] w-full object-cover"
                />
              ))}
            </div>

            <div className="mb-2 border-t border-dashed border-[#0089A8]"></div>

            <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
              {foreignBottom.map((img, i) => (
                <LazyImage
                  key={i}
                  src={img}
                  alt={`Foreign project bottom ${i + 1}`}
                  width="300"
                  height="180"
                  className="h-[90px] w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPart3;