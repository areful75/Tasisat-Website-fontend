// import React from "react";
// import CEO from "./BOD/CEO.jpg";

// // ✅ Internal images
// import homeImg from "./aboutpicture/solarrafatbhaiya.jpg";
// import scadaImg from "./aboutpicture/scadaimg.jpg";
// import iotImg from "./aboutpicture/bmsimg.jpg";
// import solarImg from "./aboutpicture/solargroup.jpg";

// const aboutImages = [
//   homeImg,
//   scadaImg,
//   iotImg,
//   solarImg,
// ];

// const AboutSection = () => {
//   return (
//     <section className="py-24 bg-[#0b0000] text-white">
//       <p className="text-[#df0707] text-center font-semibold uppercase tracking-[0.3em] mb-5">
//         About Us
//       </p>

//       <div className="px-6 lg:px-10 flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
        
//         {/* Left: Image Grid */}
//         <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">

//           {/* First Image */}
//           <div className="relative overflow-hidden rounded-3xl shadow-md group cursor-pointer transition-all duration-500 row-span-2 col-span-2 lg:col-span-1 lg:row-span-2 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.05]">
//             <img
//               src={aboutImages[0]}
//               alt="About 1"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//           </div>

//           {/* Second Image */}
//           <div className="relative overflow-hidden rounded-3xl shadow-md group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.05]">
//             <img
//               src={aboutImages[1]}
//               alt="About 2"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//           </div>

//           {/* Third Image */}
//           <div className="relative overflow-hidden rounded-3xl shadow-md group cursor-pointer transition-all duration-500 row-span-2 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.05]">
//             <img
//               src={aboutImages[2]}
//               alt="About 3"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//           </div>

//           {/* Fourth Image */}
//           <div className="relative overflow-hidden rounded-3xl shadow-md group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.05]">
//             <img
//               src={aboutImages[3]}
//               alt="About 4"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//           </div>

//         </div>

//         {/* Right: Text */}
//         <div className="flex flex-col w-full lg:w-1/2 gap-6">
//           <h2 className="text-4xl font-bold text-[#df0707]">
//             About UE Energy & Control Ltd.
//           </h2>

//           <p className="text-white text-lg leading-relaxed">
//             Ulterior Engineering Energy & Control Ltd. is a multidisciplinary
//             engineering organization specializing in Automation, SCADA, Solar,
//             BMS, Power, and EPC solutions.
//           </p>

//           <p className="text-white text-lg leading-relaxed">
//             Our integrated approach combines design, implementation, training,
//             and maintenance, creating a complete ecosystem that connects
//             technology with human expertise.
//           </p>

//           {/* CEO */}
//           <div className="flex items-center gap-4 mt-4">
//             <img
//               src={CEO}
//               alt="Chairman"
//               className="w-24 h-24 rounded-full object-cover border-2 border-[#df0707]"

//             />
//             <div>
//               <h4 className="text-lg font-bold text-white">
//                 Engr. Shiekh Rafat Bin Ali
//               </h4>
//               <p className="text-white">Founder, CEO</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import React from "react";
import CEO from "./BOD/ahmedsir2.jpg";

// ✅ Internal images
import homeImg from "./aboutpicture/solarrafatbhaiya.jpg";
import scadaImg from "./aboutpicture/scadaimg.jpg";
import iotImg from "./aboutpicture/bmsimg.jpg";
import solarImg from "./aboutpicture/solargroup.jpg";

const aboutImages = [
  homeImg,
  scadaImg,
  iotImg,
  solarImg,
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#0B1026] text-white">
      <p className="text-[#00B4D8] text-center font-semibold uppercase tracking-[0.3em] mb-5">
        About Us
      </p>

      <div className="px-6 lg:px-10 flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
        
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">

          {/* First Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 col-span-2 lg:col-span-1 lg:row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
            <img
              src={aboutImages[0]}
              alt="About 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Second Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
            <img
              src={aboutImages[1]}
              alt="About 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Third Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 row-span-2 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
            <img
              src={aboutImages[2]}
              alt="About 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Fourth Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-md shadow-[#00B4D8]/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B4D8]/20 hover:-translate-y-1 hover:scale-[1.05]">
            <img
              src={aboutImages[3]}
              alt="About 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>

        {/* Right: Text */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          <h2 className="text-4xl font-bold text-[#00B4D8]">
            About UE Energy & Control Ltd.
          </h2>

          <p className="text-[#F8FAFC] text-lg leading-relaxed">
            Ulterior Engineering Energy & Control Ltd. is a multidisciplinary
            engineering organization specializing in Automation, SCADA, Solar,
            BMS, Power, and EPC solutions.
          </p>

          <p className="text-[#F8FAFC] text-lg leading-relaxed">
            Our integrated approach combines design, implementation, training,
            and maintenance, creating a complete ecosystem that connects
            technology with human expertise.
          </p>

          {/* CEO */}
          <div className="flex items-center gap-4 mt-4">
            <img
              src={CEO}
              alt="Chairman"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#00B4D8] shadow-lg shadow-[#00B4D8]/25"
            />
            <div>
              <h4 className="text-lg font-bold text-white">
                Ahmed AL-Rushan
              </h4>
              <p className="text-[#94A3B8]">CEO</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;