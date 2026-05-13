// import React from "react";

// const SolutionGallerySection = ({ sectionContent, solutionGallery }) => {
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
//           <p className="text-gray-300 max-w-4xl mx-auto mt-5 text-lg">
//             {sectionContent.description}
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {solutionGallery.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#140202] border border-white/10 rounded-2xl overflow-hidden hover:border-[#df0707]/40 transition"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolutionGallerySection;


import React from "react";

const SolutionGallerySection = ({ sectionContent, solutionGallery }) => {
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

          <p className="text-gray-300 max-w-4xl mx-auto mt-5 text-lg">
            {sectionContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {solutionGallery.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2937] border border-white/10 rounded-2xl overflow-hidden hover:border-[#3b82f6]/40 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionGallerySection;