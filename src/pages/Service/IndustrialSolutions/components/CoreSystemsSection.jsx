// import React from "react";

// const CoreSystemsSection = ({ coreSystems }) => {
//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#110101]">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {coreSystems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#140202] p-6 rounded-2xl border border-white/10 hover:border-[#df0707]/40 transition"
//             >
//               <div className="text-[#df0707] text-3xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-bold">{item.title}</h3>
//               <p className="text-sm text-gray-400 mt-3">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreSystemsSection;

import React from "react";

const CoreSystemsSection = ({ coreSystems }) => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreSystems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2937] p-6 rounded-2xl border border-white/10 hover:border-[#3b82f6]/40 transition"
            >
              <div className="text-[#3b82f6] text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSystemsSection;