// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { IoMdConstruct } from "react-icons/io";
// import { MdBusiness, MdHome } from "react-icons/md";
// import { FaCheckCircle } from "react-icons/fa";
// import industry from "./ServiceSectionPicture/industrialservicepicture.png";
// import commertial from "./ServiceSectionPicture/commertialservicepicture.png";
// import residential from "./ServiceSectionPicture/residentiaslservicepicture.png";

// // Services data
// const services = [
//   {
//     id: 1,
//     title: "Industrial Solutions",
//     route: "/industrialsolution",
//     description: [
//       "Advanced SCADA and automation for factories.",
//       "Optimized industrial energy management.",
//       "Real-time monitoring and predictive maintenance.",
//     ],
//     image: industry,
//     icon: IoMdConstruct,
//   },
//   {
//     id: 2,
//     title: "Commercial Solutions",
//     route: "/commertialsolution",
//     description: [
//       "Smart automation for office spaces and malls.",
//       "Energy efficiency and HVAC control.",
//       "Integrated security and monitoring systems.",
//     ],
//     image: commertial,
//     icon: MdBusiness,
//   },
//   {
//     id: 3,
//     title: "Residential Solutions",
//     route: "/residentialsolution",
//     description: [
//       "Home automation for lighting and appliances.",
//       "Solar integration and energy optimization.",
//       "Enhanced security and smart monitoring.",
//     ],
//     image: residential,
//     icon: MdHome,
//   },
// ];

// const LazyImage = ({ src, alt }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="relative w-full h-64 bg-[#780909] rounded-t-[28px] overflow-hidden">
//       {!loaded && (
//         <div className="absolute inset-0 bg-[#980a0a] animate-pulse"></div>
//       )}

//       <img
//         src={src}
//         alt={alt}
//         loading="lazy"
//         onLoad={() => setLoaded(true)}
//         className={`w-full h-64 object-cover transition-transform duration-700 ${
//           loaded ? "scale-100" : "scale-105"
//         } group-hover:scale-110`}
//       />
//     </div>
//   );
// };

// const ServicesSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-24 bg-[#0b0000] text-white">
//       <div className="px-6 lg:px-10 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-[#df0707] font-semibold uppercase tracking-[0.3em] mb-3">
//             Services
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//             Your Best Possible Solutions
//           </h2>
//           <p className="max-w-3xl mx-auto text-gray-400 mt-5 text-lg leading-relaxed">
//             Commercial construction involves the design, development, and
//             construction of structures intended for business use. From office
//             buildings to smart automation solutions, we provide excellence in
//             every service.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate(service.route)}
//                 className="group cursor-pointer bg-[#780909] rounded-[28px] overflow-hidden border border-[#980a0a] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
//               >
//                 <div className="relative">
//                   <LazyImage src={service.image} alt={service.title} />

//                   <div className="absolute -bottom-5 left-6 w-16 h-16 rounded-2xl bg-[#df0707] shadow-lg flex items-center justify-center border border-[#ba0c0c] group-hover:bg-[#ba0c0c] transition-all duration-500">
//                     <Icon className="text-white text-2xl transition-all duration-500" />
//                   </div>
//                 </div>

//                 <div className="pt-12 pb-8 px-6">
//                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#df0707] transition-colors duration-300">
//                     {service.title}
//                   </h3>

//                   <div className="flex flex-col gap-3 mb-6">
//                     {service.description.map((line, idx) => (
//                       <div key={idx} className="flex items-start gap-3">
//                         <FaCheckCircle className="text-[#df0707] mt-1 shrink-0" />
//                         <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                           {line}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoMdConstruct } from "react-icons/io";
import { MdBusiness, MdHome } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import industry from "./ServiceSectionPicture/industrialservicepicture.png";
import commertial from "./ServiceSectionPicture/commertialservicepicture.png";
import residential from "./ServiceSectionPicture/residentiaslservicepicture.png";

// Services data
const services = [
  {
    id: 1,
    title: "Industrial Solutions",
    route: "/industrialsolution",
    description: [
      "Advanced SCADA and automation for factories.",
      "Optimized industrial energy management.",
      "Real-time monitoring and predictive maintenance.",
    ],
    image: industry,
    icon: IoMdConstruct,
  },
  {
    id: 2,
    title: "Commercial Solutions",
    route: "/commertialsolution",
    description: [
      "Smart automation for office spaces and malls.",
      "Energy efficiency and HVAC control.",
      "Integrated security and monitoring systems.",
    ],
    image: commertial,
    icon: MdBusiness,
  },
  {
    id: 3,
    title: "Residential Solutions",
    route: "/residentialsolution",
    description: [
      "Home automation for lighting and appliances.",
      "Solar integration and energy optimization.",
      "Enhanced security and smart monitoring.",
    ],
    image: residential,
    icon: MdHome,
  },
];

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-64 bg-[#0089A8]/20 rounded-t-[28px] overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-[#101833] animate-pulse"></div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-64 object-cover transition-transform duration-700 ${
          loaded ? "scale-100" : "scale-105"
        } group-hover:scale-110`}
      />
    </div>
  );
};

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#0B1026] text-white">
      <div className="px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] font-semibold uppercase tracking-[0.3em] mb-3">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Your Best Possible Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 mt-5 text-lg leading-relaxed">
            Commercial construction involves the design, development, and
            construction of structures intended for business use. From office
            buildings to smart automation solutions, we provide excellence in
            every service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => navigate(service.route)}
                className="group cursor-pointer bg-[#2E174F]/40 rounded-[28px] overflow-hidden border border-[#0089A8]/30 shadow-lg shadow-[#00B4D8]/10 hover:shadow-2xl hover:shadow-[#00B4D8]/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="relative">
                  <LazyImage src={service.image} alt={service.title} />

                  <div className="absolute -bottom-5 left-6 w-16 h-16 rounded-2xl bg-[#0089A8] shadow-lg shadow-[#00B4D8]/25 flex items-center justify-center border border-[#00B4D8]/40 group-hover:bg-[#00B4D8] transition-all duration-500">
                    <Icon className="text-white text-2xl transition-all duration-500" />
                  </div>
                </div>

                <div className="pt-12 pb-8 px-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00B4D8] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <div className="flex flex-col gap-3 mb-6">
                    {service.description.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#00B4D8] mt-1 shrink-0" />
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;