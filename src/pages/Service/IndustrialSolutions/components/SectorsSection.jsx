// import React from "react";

// const SectorsSection = ({ sectionContent, sectors }) => {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-14">
//           <p className="text-[#df0707] font-semibold uppercase tracking-widest">
//             {sectionContent.badge}
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold mt-3">
//             {sectionContent.title}
//           </h2>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {sectors.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#140202] rounded-2xl border border-white/10 p-6 flex items-center gap-4 hover:border-[#df0707]/40 transition"
//             >
//               <div className="text-[#df0707] text-2xl">{item.icon}</div>
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectorsSection;

import React from "react";

const SectorsSection = ({ sectionContent, sectors }) => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#3b82f6] font-semibold uppercase tracking-widest">
            {sectionContent.badge}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            {sectionContent.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2937] rounded-2xl border border-white/10 p-6 flex items-center gap-4 hover:border-[#3b82f6]/40 transition"
            >
              <div className="text-[#3b82f6] text-2xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;