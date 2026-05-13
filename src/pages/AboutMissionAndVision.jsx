// import React from "react";
// import { FaBullseye, FaEye } from "react-icons/fa";
// import AboutSection from "../components/AboutSection";

// const  AboutMissionAndVision = () => {
//   return (
//     <div>
//         <AboutSection></AboutSection>
//         <section className="py-20 bg-[#0b0000] text-white px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Section Title */}
//         <div className="text-center mb-12">
          
//           <h2 className="text-4xl md:text-5xl font-extrabold">
//             Our <span className="text-[#df0707]">Mission & Vision</span>
//           </h2>
//           <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
//             Driving innovation, sustainability, and engineering excellence
//             through advanced automation and energy solutions.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Mission */}
//           <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md hover:border-[#df0707]/40 transition duration-500 group">
//             <div className="absolute -top-10 left-6 w-16 h-16 bg-[#df0707] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
//               <FaBullseye className="text-white text-2xl" />
//             </div>

//             <h3 className="text-2xl font-bold mt-8 mb-4 text-[#df0707]">
//               Mission
//             </h3>

//             <p className="text-gray-300 leading-relaxed text-lg">
//               To empower industries and engineers through innovative automation,
//               energy, and EPC solutions that create a smarter and sustainable
//               future.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md hover:border-[#df0707]/40 transition duration-500 group">
//             <div className="absolute -top-10 left-6 w-16 h-16 bg-[#df0707] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
//               <FaEye className="text-white text-2xl" />
//             </div>

//             <h3 className="text-2xl font-bold mt-8 mb-4 text-[#df0707]">
//               Vision
//             </h3>

//             <p className="text-gray-300 leading-relaxed text-lg">
//               To be a globally recognized leader in automation and renewable
//               energy, delivering intelligent, efficient, and future-ready
//               solutions that drive industrial excellence and technological
//               innovation.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//     </div>
//   );
// };

// export default AboutMissionAndVision;


import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import AboutSection from "../components/AboutSection";

const  AboutMissionAndVision = () => {
  return (
    <div>
        <AboutSection></AboutSection>
        <section className="py-20 bg-[#0B1026] text-white px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-[#00B4D8]">Mission & Vision</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Driving innovation, sustainability, and engineering excellence
            through advanced automation and energy solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md hover:border-[#00B4D8]/40 transition duration-500 group">
            <div className="absolute -top-10 left-6 w-16 h-16 bg-[#00B4D8] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <FaBullseye className="text-white text-2xl" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#00B4D8]">
              Mission
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              To empower industries and engineers through innovative automation,
              energy, and EPC solutions that create a smarter and sustainable
              future.
            </p>
          </div>

          {/* Vision */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md hover:border-[#00B4D8]/40 transition duration-500 group">
            <div className="absolute -top-10 left-6 w-16 h-16 bg-[#00B4D8] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <FaEye className="text-white text-2xl" />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#00B4D8]">
              Vision
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              To be a globally recognized leader in automation and renewable
              energy, delivering intelligent, efficient, and future-ready
              solutions that drive industrial excellence and technological
              innovation.
            </p>
          </div>

        </div>

      </div>
    </section>
    </div>
  );
};

export default AboutMissionAndVision;