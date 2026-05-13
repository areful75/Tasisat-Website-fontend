// import React from "react";

// const SolutionHeroSection = ({ highlights, heroContent, scopeItems, heroImage }) => {
//   return (
//     <section className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
//       <div className="absolute top-0 left-0 w-80 h-80 bg-[#df0707]/20 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#780909]/30 blur-3xl rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="inline-block px-4 py-2 rounded-full bg-[#df0707]/10 text-[#df0707] border border-[#df0707]/30 text-sm font-semibold mb-6">
//             {heroContent.badge}
//           </p>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             {heroContent.title}
//             <span className="block text-[#df0707]">
//               {heroContent.titleHighlight}
//             </span>
//           </h1>

//           <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
//             {heroContent.description}
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
//             {highlights.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#df0707]/40 transition"
//               >
//                 <div className="text-[#df0707] text-2xl mb-3">{item.icon}</div>
//                 <h3 className="text-lg font-bold">{item.title}</h3>
//                 <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-[#df0707]/20 to-[#780909]/20 border border-[#df0707]/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
//           <div className="bg-[#140202] rounded-2xl p-8 border border-white/10">
//             <p className="text-[#df0707] font-semibold uppercase tracking-widest mb-3">
//               Solution Scope
//             </p>

//             <h3 className="text-3xl md:text-4xl font-bold leading-tight">
//               {heroContent.rightTitle}
//             </h3>

//             <p className="text-gray-300 mt-5 text-lg leading-relaxed">
//               {heroContent.rightDescription}
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4 mt-8">
//               {scopeItems.map((item, index) => (
//                 <div
//                   key={index}
//                   className="rounded-2xl bg-[#df0707]/10 border border-[#df0707]/20 px-4 py-3 text-gray-200"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden">
//               <img
//                 src={heroImage}
//                 alt="Commercial solutions overview"
//                 className="w-full h-64 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolutionHeroSection;

import React from "react";

const SolutionHeroSection = ({ highlights, heroContent, scopeItems, heroImage }) => {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden bg-[#111827]">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#3b82f6]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1d4ed8]/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-block px-4 py-2 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30 text-sm font-semibold mb-6">
            {heroContent.badge}
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {heroContent.title}
            <span className="block text-[#3b82f6]">
              {heroContent.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
            {heroContent.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-[#3b82f6]/40 transition"
              >
                <div className="text-[#3b82f6] text-2xl mb-3">{item.icon}</div>

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#1d4ed8]/20 border border-[#3b82f6]/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
          <div className="bg-[#1f2937] rounded-2xl p-8 border border-white/10">
            <p className="text-[#3b82f6] font-semibold uppercase tracking-widest mb-3">
              Solution Scope
            </p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              {heroContent.rightTitle}
            </h3>

            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              {heroContent.rightDescription}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {scopeItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 px-4 py-3 text-gray-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden">
              <img
                src={heroImage}
                alt="Commercial solutions overview"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHeroSection;