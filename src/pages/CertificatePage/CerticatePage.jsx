// // import React from "react";

// // import ISO from "./Image/ISO.jpeg";
// // import NSDA from "./Image/NSDA.jpeg";
// // import UlteriorLogo from "./Image/UlteriorLogoWhite.png";
// // import MapBanner from "./Image/map-banner.jpg";

// // const CertificatePage = () => {
// //   return (
// //     <div className="bg-[#0b0000] min-h-screen py-6 px-3">
// //       <div className="max-w-7xl mx-auto bg-[#0b0000] border border-[#780909] rounded-xl p-4 md:p-6">

// //         {/* Top banner */}
// //         <div className="flex justify-center mb-6">
// //           <div className="bg-black text-white font-semibold text-sm md:text-lg px-4 py-2 flex items-center">
// //             <span className="w-2 h-6 bg-[#df0707] mr-2"></span>
// //             Ulterior Engineering & Professional Training Institute
// //           </div>
// //         </div>

// //         {/* Three top boxes */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6">

// //           <div className="border border-[#780909] rounded-md bg-[#111] py-4 px-3 text-center">
// //             <p className="text-sm md:text-base text-gray-300 leading-snug">
// //               Number 1 Professional <br />
// //               Technical Training Institute <br />
// //               in Bangladesh
// //             </p>
// //           </div>

// //           <div className="border border-[#780909] rounded-md bg-[#111] py-4 flex items-center justify-center">
// //             <img
// //               src={UlteriorLogo}
// //               alt="Logo"
// //               className="h-12 md:h-16 object-contain"
// //             />
// //           </div>

// //           <div className="border border-[#780909] rounded-md bg-[#111] py-4 px-3 text-center">
// //             <p className="text-sm md:text-base text-gray-300 leading-snug">
// //               All Companies first choice <br />
// //               for Technical Corporate <br />
// //               Training
// //             </p>
// //           </div>

// //         </div>

// //         {/* Certificates */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-6">

// //           <div className="text-center">
// //             <div className="border border-[#780909] p-2 bg-black">
// //               <img
// //                 src={ISO}
// //                 alt="ISO"
// //                 className="w-[240px] md:w-[300px] h-[320px] md:h-[400px] object-cover bg-white"
// //               />
// //             </div>
// //             <p className="mt-2 text-sm md:text-base text-[#df0707]">
// //               ISO 21001:2018 Certified
// //             </p>
// //           </div>

// //           <div className="text-center">
// //             <div className="border border-[#780909] p-2 bg-black">
// //               <img
// //                 src={NSDA}
// //                 alt="NSDA"
// //                 className="w-[240px] md:w-[300px] h-[320px] md:h-[400px] object-cover bg-white"
// //               />
// //             </div>
// //             <p className="mt-2 text-sm md:text-base text-[#df0707]">
// //               NSDA STP- DHA-001675 Approved
// //             </p>
// //           </div>

// //         </div>

// //         {/* Branch title */}
// //         <div className="text-center mb-4">
// //           <h3 className="text-white font-semibold text-base md:text-lg">
// //             All Branches of Ulterior Engineering & Professional Training Institute
// //           </h3>
// //         </div>

// //         {/* Map */}
// //         {/* <div className="flex justify-center">
// //           <div className="border border-[#df0707] w-full max-w-[1000px]">
// //             <img
// //               src={MapBanner}
// //               alt="Map"
// //               className="w-full object-contain"
// //             />
// //           </div>
// //         </div> */}

// //         {/* Bottom logo */}
// //         <div className="flex justify-end mt-6">
// //           <h2 className="text-xl md:text-3xl font-bold text-white">
// //             U<span className="text-[#df0707]">E</span>
// //           </h2>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default CertificatePage;


// import React, { useState } from "react";

// import ISO from "./Image/ISO.jpeg";
// import NSDA from "./Image/NSDA.jpeg";
// import UlteriorLogo from "./Image/UlteriorLogoWhite.png";

// const CertificatePage = () => {
//   const [loaded, setLoaded] = useState({
//     iso: false,
//     nsda: false,
//   });

//   return (
//     <div className="bg-[#0b0000] min-h-screen py-6 px-3">
//       <div className="max-w-7xl mx-auto bg-[#0b0000] border border-[#780909] rounded-xl p-4 md:p-6">

//         {/* Top banner */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-black text-white font-semibold text-sm md:text-lg px-4 py-2 flex items-center">
//             <span className="w-2 h-6 bg-[#df0707] mr-2"></span>
//             Ulterior Engineering & Professional Training Institute
//           </div>
//         </div>

//         {/* Three top boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6">

//           <div className="border border-[#780909] rounded-md bg-[#111] py-4 px-3 text-center">
//             <p className="text-sm md:text-base text-gray-300">
//               Number 1 Professional <br />
//               Technical Training Institute <br />
//               in Bangladesh
//             </p>
//           </div>

//           <div className="border border-[#780909] rounded-md bg-[#111] py-4 flex items-center justify-center">
//             <img
//               src={UlteriorLogo}
//               alt="Logo"
//               loading="eager"
//               decoding="async"
//               className="h-12 md:h-16 object-contain"
//             />
//           </div>

//           <div className="border border-[#780909] rounded-md bg-[#111] py-4 px-3 text-center">
//             <p className="text-sm md:text-base text-gray-300">
//               All Companies first choice <br />
//               for Technical Corporate <br />
//               Training
//             </p>
//           </div>

//         </div>

//         {/* Certificates */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-6">

//           {/* ISO */}
//           <div className="text-center">
//             <div className="border border-[#780909] p-2 bg-black relative">

//               {/* Skeleton */}
//               {!loaded.iso && (
//                 <div className="absolute inset-0 bg-[#1a0505] animate-pulse"></div>
//               )}

//               <img
//                 src={ISO}
//                 alt="ISO"
//                 loading="lazy"
//                 decoding="async"
//                 width="300"
//                 height="400"
//                 onLoad={() =>
//                   setLoaded((prev) => ({ ...prev, iso: true }))
//                 }
//                 className={`w-[240px] md:w-[300px] h-[320px] md:h-[400px] object-cover bg-white transition-opacity duration-500 ${
//                   loaded.iso ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             </div>

//             <p className="mt-2 text-sm md:text-base text-[#df0707]">
//               ISO 21001:2018 Certified
//             </p>
//           </div>

//           {/* NSDA */}
//           <div className="text-center">
//             <div className="border border-[#780909] p-2 bg-black relative">

//               {!loaded.nsda && (
//                 <div className="absolute inset-0 bg-[#1a0505] animate-pulse"></div>
//               )}

//               <img
//                 src={NSDA}
//                 alt="NSDA"
//                 loading="lazy"
//                 decoding="async"
//                 width="300"
//                 height="400"
//                 onLoad={() =>
//                   setLoaded((prev) => ({ ...prev, nsda: true }))
//                 }
//                 className={`w-[240px] md:w-[300px] h-[320px] md:h-[400px] object-cover bg-white transition-opacity duration-500 ${
//                   loaded.nsda ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             </div>

//             <p className="mt-2 text-sm md:text-base text-[#df0707]">
//               NSDA STP- DHA-001675 Approved
//             </p>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="flex justify-end mt-6">
//           <h2 className="text-xl md:text-3xl font-bold text-white">
//             U<span className="text-[#df0707]">E</span>
//           </h2>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CertificatePage;


import React, { useState } from "react";

import ISO from "./Image/ISO.jpeg";
import NSDA from "./Image/NSDA.jpeg";
import UlteriorLogo from "./Image/UlteriorLogoWhite.png";

const CertificatePage = () => {
  const [loaded, setLoaded] = useState({
    iso: false,
    nsda: false,
  });

  return (
    <div className="bg-[#0B1026] min-h-screen py-6 px-3">
      <div className="max-w-7xl mx-auto bg-[#0B1026] border border-[#0089A8] rounded-xl p-4 md:p-6">

        {/* Top banner */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#101833] text-white font-semibold text-sm md:text-lg px-4 py-2 flex items-center">
            <span className="w-2 h-6 bg-[#00B4D8] mr-2"></span>
           Tasisat Engineering 
          </div>
        </div>

        {/* Three top boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6">

          <div className="border border-[#0089A8] rounded-md bg-[#101833] py-4 px-3 text-center">
            <p className="text-sm md:text-base text-gray-300">
              Number 1 Professional <br />
              Technical Training Institute <br />
              in Bangladesh
            </p>
          </div>

          <div className="border border-[#0089A8] rounded-md bg-[#101833] py-4 flex items-center justify-center">
            <img
              src="/"
              alt="Logo"
              loading="eager"
              decoding="async"
              className="h-12 md:h-16 object-contain"
            />
          </div>

          <div className="border border-[#0089A8] rounded-md bg-[#101833] py-4 px-3 text-center">
            <p className="text-sm md:text-base text-gray-300">
              All Companies first choice <br />
              for Technical Corporate <br />
              Training
            </p>
          </div>

        </div>

        {/* Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-6">

          {/* ISO */}
          <div className="text-center">
            <div className="border border-[#0089A8] p-2 bg-[#101833] relative">

              {/* Skeleton */}
              {!loaded.iso && (
                <div className="absolute inset-0 bg-[#101833] animate-pulse"></div>
              )}

              <img
                src={ISO}
                alt="ISO"
                loading="lazy"
                decoding="async"
                width="300"
                height="400"
                onLoad={() =>
                  setLoaded((prev) => ({ ...prev, iso: true }))
                }
                className={`w-[240px] md:w-[300px] h-[320px] md:h-[400px] object-cover bg-white transition-opacity duration-500 ${
                  loaded.iso ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <p className="mt-2 text-sm md:text-base text-[#00B4D8]">
              ISO 21001:2018 Certified
            </p>
          </div>

          {/* NSDA */}
          <div className="text-center">
            <div className="border border-[#0089A8] p-2 bg-[#101833] relative">

              {!loaded.nsda && (
                <div className="absolute inset-0 bg-[#101833] animate-pulse"></div>
              )}

              <img
                src={NSDA}
                alt="NSDA"
                loading="lazy"
                decoding="async"
                width="300"
                height="400"
                onLoad={() =>
                  setLoaded((prev) => ({ ...prev, nsda: true }))
                }
                className={`w-[240px] md:w-[300px] h-[320px] md:h-[400px] object-cover bg-white transition-opacity duration-500 ${
                  loaded.nsda ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <p className="mt-2 text-sm md:text-base text-[#00B4D8]">
              NSDA STP- DHA-001675 Approved
            </p>
          </div>
        </div>

        {/* Bottom */}
        {/* <div className="flex justify-end mt-6">
          <h2 className="text-xl md:text-3xl font-bold text-white">
            U<span className="text-[#00B4D8]">E</span>
          </h2>
        </div> */}

      </div>
    </div>
  );
};

export default CertificatePage;