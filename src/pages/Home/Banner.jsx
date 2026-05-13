// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import bannerimg from "./BannerImg/solarpic.jpg";

// const Banner = () => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const bannerContent = {
//     badge: "Industrial Automation & Power Solutions",
//     title: "We Deliver Smart",
//     highlight: "Engineering Solutions.",
//     description:
//       "Explore advanced automation systems, frequency inverters, and solar energy solutions designed for modern industrial applications.",
//     primaryBtn: "Explore Products",
//     secondaryBtn: "Contact Us",
//     image: bannerimg,
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#0b0000] px-6 py-24 text-white md:px-12 lg:px-20">
//       <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#df0707]/20 blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#780909]/30 blur-3xl"></div>

//       <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
//         <div>
//           <p className="mb-6 inline-block rounded-full border border-[#df0707]/30 bg-[#df0707]/10 px-4 py-2 text-xs font-semibold text-[#ff4d4d] md:text-sm">
//             {bannerContent.badge}
//           </p>

//           <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
//             {bannerContent.title}
//             <span className="block text-[#df0707]">
//               {bannerContent.highlight}
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
//             {bannerContent.description}
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <button className="flex items-center gap-2 rounded-xl bg-[#780909] px-6 py-3 font-semibold shadow-lg shadow-[#df0707]/30 transition hover:bg-[#b70606]">
//               {bannerContent.primaryBtn} <FaArrowRight />
//             </button>

//             <button className="rounded-xl border border-[#780909] px-6 py-3 font-semibold text-gray-300 transition hover:border-[#df0707] hover:bg-[#df0707]/10 hover:text-white">
//               {bannerContent.secondaryBtn}
//             </button>
//           </div>
//         </div>

//         <div className="rounded-3xl border border-[#780909] bg-gradient-to-br from-[#df0707]/10 to-[#780909]/20 p-6 shadow-2xl backdrop-blur-md">
//           <div className="relative overflow-hidden rounded-2xl border border-[#780909] bg-[#140202]">
//             {!imageLoaded && (
//               <div className="flex h-[350px] w-full animate-pulse items-center justify-center bg-[#1a0505]">
//                 <span className="text-sm text-gray-500">Loading image...</span>
//               </div>
//             )}

//             <img
//               src={bannerContent.image}
//               alt="Industrial Automation Banner"
//               loading="eager"
//               fetchPriority="high"
//               decoding="async"
//               onLoad={() => setImageLoaded(true)}
//               className={`h-[350px] w-full object-cover transition-opacity duration-500 ${
//                 imageLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import bannerimg from "./BannerImg/solarpic.jpg";

const Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const bannerContent = {
    badge: "Industrial Automation & Power Solutions",
    title: "We Deliver Smart",
    highlight: "Engineering Solutions.",
    description:
      "Explore advanced automation systems, frequency inverters, and solar energy solutions designed for modern industrial applications.",
    primaryBtn: "Explore Products",
    secondaryBtn: "Contact Us",
    image: bannerimg,
  };

  return (
    <section className="relative overflow-hidden bg-[#0B1026] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#0089A8]/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2E174F]/40 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-block rounded-full border border-[#00B4D8]/30 bg-[#0089A8]/10 px-4 py-2 text-xs font-semibold text-[#00B4D8] md:text-sm">
            {bannerContent.badge}
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {bannerContent.title}
            <span className="block text-[#00B4D8]">
              {bannerContent.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
            {bannerContent.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2E174F] to-[#0089A8] px-6 py-3 font-semibold shadow-lg  transition hover:from-[#0089A8] hover:to-[#00B4D8]">
              {bannerContent.primaryBtn} <FaArrowRight />
            </button>

            <button className="rounded-xl border border-[#0089A8] px-6 py-3 font-semibold text-gray-300 transition hover:border-[#00B4D8] hover:bg-[#00B4D8]/10 hover:text-white">
              {bannerContent.secondaryBtn}
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-[#0089A8]/40 bg-gradient-to-br from-[#2E174F]/30 to-[#0089A8]/20 p-6 shadow-2xl backdrop-blur-md">
          <div className="relative overflow-hidden rounded-2xl border border-[#0089A8]/40 bg-[#0B1026]">
            {!imageLoaded && (
              <div className="flex h-[350px] w-full animate-pulse items-center justify-center bg-[#101833]">
                <span className="text-sm text-gray-500">Loading image...</span>
              </div>
            )}

            <img
              src={bannerContent.image}
              alt="Industrial Automation Banner"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              className={`h-[350px] w-full object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;