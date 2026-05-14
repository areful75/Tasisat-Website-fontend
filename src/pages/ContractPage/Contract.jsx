// import React from "react";
// import {
//   FaPaperPlane,
// } from "react-icons/fa";
// import { MdBusinessCenter } from "react-icons/md";
// import mapBanner from "./ContractImage/Doted-Map.jpg";
// import logo from "./ContractImage/UE PAGE LOGO.png";
// import black from  "./ContractImage/Ulteriorblack.png";

// const Contract = () => {
//   return (
//     <div className="bg-[#0b0000] min-h-screen py-8 px-4 text-white">
//       <div className="max-w-7xl mx-auto bg-[#0b0000] border border-[#780909] rounded-2xl overflow-hidden shadow-xl">

//         <div className="px-6 md:px-10 py-8 bg-[#111111]">

//           {/* Title */}
//           <div className="flex justify-center mb-6">
//             <div className="bg-black px-5 py-3 flex items-center gap-3 border border-[#780909]">
//               <span className="w-2 h-10 bg-[#df0707] inline-block"></span>
//               <h1 className="text-xl md:text-4xl font-bold text-white">
//                 Meet Our Other Companies
//               </h1>
//             </div>
//           </div>

//           {/* Intro */}
//           <p className="text-center text-gray-300 text-sm md:text-lg max-w-5xl mx-auto leading-relaxed mb-8">
//             UE Energy &amp; Control Ltd operates as part of a complete ecosystem
//             designed to train, develop, and empower engineers across the world.
//           </p>

//           {/* Logo section (empty for manual add) */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

//           <div className="h-28 rounded-xl border border-[#780909] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
//   <img src={logo} alt="UE Logo" className="h-20 object-contain" />
// </div>

// <div className="h-28 rounded-xl border border-[#780909] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
//   <img src={black} alt="Ulterior Black" className="h-20 object-contain" />
// </div>

// <div className="h-28 rounded-xl border border-[#780909] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
//   <img src={black} alt="Ulterior Black" className="h-20 object-contain" />
// </div>

// <div className="h-28 rounded-xl border border-[#780909] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
//   <img src={black} alt="Ulterior Black" className="h-20 object-contain" />
// </div>

//           </div>

//           {/* Ecosystem text */}
//           <div className="text-center space-y-3 mb-10">

//             <h2 className="text-[#df0707] text-lg md:text-3xl font-bold">
//               “One Ecosystem — From Engineering to Employment.”
//             </h2>

//             <p className="text-gray-300 text-sm md:text-lg">
//               <span className="font-semibold text-white">
//                 Ulterior Engineering
//               </span>{" "}
//               - Research, Development, Manufacturing, Design & Consultancy
//             </p>

//             <p className="text-gray-300 text-sm md:text-lg">
//               <span className="font-semibold text-white">
//                 UE Energy & Control Ltd.
//               </span>{" "}
//               - Core Engineering & EPC Division
//             </p>

//             <p className="text-gray-300 text-sm md:text-lg">
//               <span className="font-semibold text-white">
//                 UE & Professional Training Institute
//               </span>{" "}
//               - ISO 21001 Certified & NSDA Approved Technical Education Hub
//             </p>

//             <p className="text-gray-300 text-sm md:text-lg">
//               <span className="font-semibold text-white">
//                 UE Job Replacement Cell
//               </span>{" "}
//               - Bridging skilled engineers with global employment opportunities
//             </p>

//             <p className="text-gray-300 text-sm md:text-lg font-medium">
//               Innovation | Education | Employment — Our integrated pathway for
//               the engineers of tomorrow.
//             </p>

//           </div>

//           {/* Map + Form */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">

//             {/* Map */}
//             <div className="border border-[#780909] rounded-xl p-3 bg-[#0b0000]">
//               <img
//                 src={mapBanner}
//                 alt="Map"
//                 className="w-full object-contain rounded-lg"
//               />
//             </div>

//             {/* Form */}
//             <div className="bg-[#0b0000] border border-[#780909] rounded-xl p-6">

//               <div className="flex items-center gap-3 mb-5">
//                 <MdBusinessCenter className="text-[#df0707] text-2xl" />
//                 <h3 className="text-xl md:text-2xl font-bold text-white">
//                   Contact Our Team
//                 </h3>
//               </div>

//               <p className="text-gray-300 text-sm md:text-base mb-6">
//                 Reach out for collaboration, training, engineering services, or
//                 business inquiries.
//               </p>

//               <form className="space-y-4">

//                 <div>
//                   <label className="block text-sm text-gray-300 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full bg-[#111111] border border-[#780909] rounded-lg px-4 py-3 text-white outline-none focus:border-[#df0707]"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm text-gray-300 mb-2">
//                     Comment / Message
//                   </label>
//                   <textarea
//                     rows="6"
//                     placeholder="Write your message here..."
//                     className="w-full bg-[#111111] border border-[#780909] rounded-lg px-4 py-3 text-white outline-none focus:border-[#df0707] resize-none"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="inline-flex items-center gap-2 bg-[#df0707] hover:bg-[#b70606] text-white font-semibold px-5 py-3 rounded-lg transition"
//                 >
//                   <FaPaperPlane />
//                   Send Message
//                 </button>

//               </form>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contract;


import React from "react";
import {
  FaPaperPlane,
} from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import mapBanner from "./ContractImage/Doted-Map.jpg";
import logo from "./ContractImage/UE PAGE LOGO.png";
import black from  "./ContractImage/Ulteriorblack.png";
import contract from "../../components/logo/contractMap.png"

const Contract = () => {
  return (
    <div className="bg-[#0B1026] min-h-screen py-8 px-4 text-white">
      <div className="max-w-7xl mx-auto bg-[#0B1026] border border-[#0089A8] rounded-2xl overflow-hidden shadow-xl">

        <div className="px-6 md:px-10 py-8 bg-[#101833]">

          {/* Title */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#101833] px-5 py-3 flex items-center gap-3 border border-[#0089A8]">
              <span className="w-2 h-10 bg-[#00B4D8] inline-block"></span>
              <h1 className="text-xl md:text-4xl font-bold text-white">
                Meet Our Other Companies
              </h1>
            </div>
          </div>

          {/* Intro */}
          <p className="text-center text-gray-300 text-sm md:text-lg max-w-5xl mx-auto leading-relaxed mb-8">
            UE Energy &amp; Control Ltd operates as part of a complete ecosystem
            designed to train, develop, and empower engineers across the world.
          </p>

          {/* Logo section (empty for manual add) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <div className="h-28 rounded-xl border border-[#0089A8] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
  <img src={logo} alt="UE Logo" className="h-20 object-contain" />
</div>

<div className="h-28 rounded-xl border border-[#0089A8] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
  <img src={black} alt="Ulterior Black" className="h-20 object-contain" />
</div>

<div className="h-28 rounded-xl border border-[#0089A8] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
  <img src={black} alt="Ulterior Black" className="h-20 object-contain" />
</div>

<div className="h-28 rounded-xl border border-[#0089A8] bg-white/90 backdrop-blur flex items-center justify-center text-gray-500 text-sm">
  <img src={black} alt="Ulterior Black" className="h-20 object-contain" />
</div>

          </div>

          {/* Ecosystem text */}
          <div className="text-center space-y-3 mb-10">

            <h2 className="text-[#00B4D8] text-lg md:text-3xl font-bold">
              “One Ecosystem — From Engineering to Employment.”
            </h2>

            <p className="text-gray-300 text-sm md:text-lg">
              <span className="font-semibold text-white">
                Ulterior Engineering
              </span>{" "}
              - Research, Development, Manufacturing, Design & Consultancy
            </p>

            <p className="text-gray-300 text-sm md:text-lg">
              <span className="font-semibold text-white">
                UE Energy & Control Ltd.
              </span>{" "}
              - Core Engineering & EPC Division
            </p>

            <p className="text-gray-300 text-sm md:text-lg">
              <span className="font-semibold text-white">
                UE & Professional Training Institute
              </span>{" "}
              - ISO 21001 Certified & NSDA Approved Technical Education Hub
            </p>

            <p className="text-gray-300 text-sm md:text-lg">
              <span className="font-semibold text-white">
                UE Job Replacement Cell
              </span>{" "}
              - Bridging skilled engineers with global employment opportunities
            </p>

            <p className="text-gray-300 text-sm md:text-lg">
              <span className="font-semibold text-white">
                Riyadh Branch Location:
              </span>{" "}
              Al Hussein Ibn Ali, Al Izdihar, Riyadh 12485
            </p>

            <p className="text-gray-300 text-sm md:text-lg">
              <span className="font-semibold text-white">
                AlMadinah Branch Location:
              </span>{" "}
              Wadi Bthan, Ar Ranuna Dist., Madinah 42392
            </p>

            <p className="text-gray-300 text-sm md:text-lg font-medium">
              Innovation | Education | Employment — Our integrated pathway for
              the engineers of tomorrow.
            </p>

          </div>

          {/* Map + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">

            {/* Map */}
            <div className="border border-[#0089A8] rounded-xl p-3 bg-[#0B1026]">
              <img
                //src={mapBanner}
                src={contract}
                alt="Map"
                className="w-full object-contain rounded-lg"
              />
            </div>

            {/* Form */}
            <div className="bg-[#0B1026] border border-[#0089A8] rounded-xl p-6">

              <div className="flex items-center gap-3 mb-5">
                <MdBusinessCenter className="text-[#00B4D8] text-2xl" />
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Contact Our Team
                </h3>
              </div>

              <p className="text-gray-300 text-sm md:text-base mb-6">
                Reach out for collaboration, training, engineering services, or
                business inquiries.
              </p>

              <form className="space-y-4">

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#101833] border border-[#0089A8] rounded-lg px-4 py-3 text-white outline-none focus:border-[#00B4D8]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Comment / Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full bg-[#101833] border border-[#0089A8] rounded-lg px-4 py-3 text-white outline-none focus:border-[#00B4D8] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0089A8] text-white font-semibold px-5 py-3 rounded-lg transition"
                >
                  <FaPaperPlane />
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contract;