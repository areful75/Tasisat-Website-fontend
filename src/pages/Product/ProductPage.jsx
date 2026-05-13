// import React from "react";

// const ProductPage = () => {
//   const productSectionContent = {
//     badge: "Our Specialized Products",
//     title: "Industrial & Solar Product Line",
//     description:
//       "Advanced automation devices, frequency inverters, solar inverters, and energy storage solutions.",
//   };

//   const products = [
//     { title: "High-Performance PLC", image: "https://i.ibb.co/21tKFPH1/IMG-97.png" },
//     { title: "HMI Human-Machine Interface", image: "https://i.ibb.co/TDWd2T7j/IMG-98.png" },
//     { title: "High-Speed & High-Precision Servo Drive", image: "https://i.ibb.co/Hph7f0hb/IMG-99.png" },
//     { title: "T580 High-end Multi-application Frequency Inverter", image: "https://i.ibb.co/JwH8FT3C/IMG-100.png" },
//     { title: "T510 Series General Purpose Frequency Inverter", image: "https://i.ibb.co/7xX78nQ5/IMG-101.png" },
//     { title: "Non-Standard Customized Frequency Inverter", image: "https://i.ibb.co/hRd5jk2p/IMG-102.png" },
//     { title: "T600E Permanent Magnet Synchronous Frequency Inverter", image: "https://i.ibb.co/XZqFyGTb/IMG-103.png" },
//     { title: "T200 Mini Economic Frequency Inverter", image: "https://i.ibb.co/xqY21QWq/IMG-104.png" },
//     { title: "SD510 Special Frequency Inverter For Industrial Water Equipment", image: "https://i.ibb.co/Pv2KjtTB/IMG-105.png" },
//     { title: "H630-PV Series Solar Water Pump Frequency Inverter", image: "https://i.ibb.co/gZrvD7bY/IMG-106.png" },
//     { title: "Solar Hybrid Inverter", image: "https://i.ibb.co/0yhNS4WN/IMG-107.png" },
//     { title: "Solar On-Grid Inverter", image: "https://i.ibb.co/Xr4rRkgX/IMG-108.png" },
//     { title: "Solar Micro Inverter", image: "https://i.ibb.co/fV2kq9wk/IMG-109.png" },
//     { title: "Solar LiFePo4 Battery", image: "https://i.ibb.co/5xCvvfNY/IMG-110.png" },
//     { title: "Solar Energy Storage System", image: "https://i.ibb.co/spt23WBt/IMG-111.png" },
//   ];

//   const certificateSectionContent = {
//     badge: "Certificates & Authorization",
//     title: "Trusted Distribution & Brand Authorization",
//   };

//   const certificates = [
//     { title: "Authorization Certificate 1", image: "https://i.ibb.co/21sLH2sM/IMG-112-Certificate.png" },
//     { title: "Authorization Certificate 2", image: "https://i.ibb.co/rRDWfPj8/IMG-113-Certificate.png" },
//     { title: "Authorization Certificate 3", image: "https://i.ibb.co/qF1CMnPm/IMG-114-Certificate.png" },
//   ];

//   return (
//     <div className="bg-[#0b0000] text-white min-h-screen overflow-hidden">

//       {/* PRODUCT SECTION */}
//       <section className="px-6 md:px-12 lg:px-20 py-20">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center mb-14">
//             <p className="text-[#df0707] font-semibold uppercase tracking-widest">
//               {productSectionContent.badge}
//             </p>
//             <h2 className="text-3xl md:text-5xl font-bold mt-3">
//               {productSectionContent.title}
//             </h2>
//             <p className="text-gray-300 max-w-4xl mx-auto mt-5 text-lg">
//               {productSectionContent.description}
//             </p>
//           </div>

//           {/* 5 COLUMN GRID */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {products.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#140202] border border-white/10 rounded-2xl overflow-hidden hover:border-[#df0707]/40 transition"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-56 "
//                 />
//                 <div className="p-4">
//                   <h3 className="text-base font-semibold leading-snug">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* CERTIFICATE SECTION */}
//       <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#110101]">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center mb-14">
//             <p className="text-[#df0707] font-semibold uppercase tracking-widest">
//               {certificateSectionContent.badge}
//             </p>
//             <h2 className="text-3xl md:text-5xl font-bold mt-3">
//               {certificateSectionContent.title}
//             </h2>
//           </div>

//           {/* 3 COLUMN GRID */}
//           <div className="grid md:grid-cols-3 gap-6">
//             {certificates.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#140202] border border-white/10 rounded-2xl overflow-hidden hover:border-[#df0707]/40 transition"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-80 object-contain bg-white"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-base font-semibold">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default ProductPage;

import React from "react";

const ProductPage = () => {
  const productSectionContent = {
    badge: "Our Specialized Products",
    title: "Industrial & Solar Product Line",
    description:
      "Advanced automation devices, frequency inverters, solar inverters, and energy storage solutions.",
  };

  const products = [
    { title: "High-Performance PLC", image: "https://i.ibb.co/21tKFPH1/IMG-97.png" },
    { title: "HMI Human-Machine Interface", image: "https://i.ibb.co/TDWd2T7j/IMG-98.png" },
    { title: "High-Speed & High-Precision Servo Drive", image: "https://i.ibb.co/Hph7f0hb/IMG-99.png" },
    { title: "T580 High-end Multi-application Frequency Inverter", image: "https://i.ibb.co/JwH8FT3C/IMG-100.png" },
    { title: "T510 Series General Purpose Frequency Inverter", image: "https://i.ibb.co/7xX78nQ5/IMG-101.png" },
    { title: "Non-Standard Customized Frequency Inverter", image: "https://i.ibb.co/hRd5jk2p/IMG-102.png" },
    { title: "T600E Permanent Magnet Synchronous Frequency Inverter", image: "https://i.ibb.co/XZqFyGTb/IMG-103.png" },
    { title: "T200 Mini Economic Frequency Inverter", image: "https://i.ibb.co/xqY21QWq/IMG-104.png" },
    { title: "SD510 Special Frequency Inverter For Industrial Water Equipment", image: "https://i.ibb.co/Pv2KjtTB/IMG-105.png" },
    { title: "H630-PV Series Solar Water Pump Frequency Inverter", image: "https://i.ibb.co/gZrvD7bY/IMG-106.png" },
    { title: "Solar Hybrid Inverter", image: "https://i.ibb.co/0yhNS4WN/IMG-107.png" },
    { title: "Solar On-Grid Inverter", image: "https://i.ibb.co/Xr4rRkgX/IMG-108.png" },
    { title: "Solar Micro Inverter", image: "https://i.ibb.co/fV2kq9wk/IMG-109.png" },
    { title: "Solar LiFePo4 Battery", image: "https://i.ibb.co/5xCvvfNY/IMG-110.png" },
    { title: "Solar Energy Storage System", image: "https://i.ibb.co/spt23WBt/IMG-111.png" },
  ];

  const certificateSectionContent = {
    badge: "Certificates & Authorization",
    title: "Trusted Distribution & Brand Authorization",
  };

  const certificates = [
    { title: "Authorization Certificate 1", image: "https://i.ibb.co/21sLH2sM/IMG-112-Certificate.png" },
    { title: "Authorization Certificate 2", image: "https://i.ibb.co/rRDWfPj8/IMG-113-Certificate.png" },
    { title: "Authorization Certificate 3", image: "https://i.ibb.co/qF1CMnPm/IMG-114-Certificate.png" },
  ];

  return (
    <div className="bg-[#0B1026] text-white min-h-screen overflow-hidden">

      {/* PRODUCT SECTION */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-14">
            <p className="text-[#00B4D8] font-semibold uppercase tracking-widest">
              {productSectionContent.badge}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              {productSectionContent.title}
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto mt-5 text-lg">
              {productSectionContent.description}
            </p>
          </div>

          {/* 5 COLUMN GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-[#101833] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00B4D8]/40 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 "
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATE SECTION */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#101833]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-14">
            <p className="text-[#00B4D8] font-semibold uppercase tracking-widest">
              {certificateSectionContent.badge}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              {certificateSectionContent.title}
            </h2>
          </div>

          {/* 3 COLUMN GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((item, index) => (
              <div
                key={index}
                className="bg-[#101833] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00B4D8]/40 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-contain bg-white"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProductPage;