// import React from "react";
// import {
//   FaFlask,
//   FaMicrochip,
//   FaSolarPanel,
//   FaRobot,
//   FaChartLine,
//   FaCogs,
//   FaArrowRight,
//   FaCheckCircle,
//   FaLightbulb,
// } from "react-icons/fa";

// const researchAreas = [
//   {
//     title: "Automation & Control",
//     icon: <FaRobot size={28} />,
//     desc: "Development of intelligent automation systems, PLC logic, industrial control strategies, and smart monitoring solutions for modern engineering applications.",
//   },
//   {
//     title: "SCADA & Smart Monitoring",
//     icon: <FaChartLine size={28} />,
//     desc: "Research on real-time data acquisition, process visualization, remote monitoring, and advanced SCADA integration for industrial and energy systems.",
//   },
//   {
//     title: "Renewable Energy",
//     icon: <FaSolarPanel size={28} />,
//     desc: "Innovation in solar systems, hybrid power models, energy efficiency, and sustainable engineering solutions for industrial, commercial, and residential sectors.",
//   },
//   {
//     title: "Embedded & IoT Systems",
//     icon: <FaMicrochip size={28} />,
//     desc: "Design of smart embedded devices, sensor-based systems, IoT applications, and connected engineering technologies for future-ready solutions.",
//   },
// ];

// const innovationPoints = [
//     "Complex solution development for industrial and smart engineering systems",
//     "Computer vision based monitoring, inspection, and automation solutions",
//     "IIoT-based device integration, data acquisition, and remote control systems",
//     "Customized SCADA development for industrial, energy, and utility applications",
//     "Intelligent system design, testing, simulation, and performance optimization",
//     "Applied R&D support for product innovation, pilot projects, and deployment",
//   ];

// const projects = [
//   {
//     title: "Industrial Automation Prototype Lab",
//     desc: "Hands-on development and testing of PLC, HMI, SCADA, and control systems for practical field implementation.",
//   },
//   {
//     title: "Smart Energy Research",
//     desc: "Exploration of solar integration, energy management systems, and sustainable power solutions for smart infrastructure.",
//   },
//   {
//     title: "IoT & Monitoring Systems",
//     desc: "Building connected sensor-based platforms for remote monitoring, analytics, and smart control applications.",
//   },
// ];

// const RND = () => {
//   return (
//     <div className="bg-[#0b0000] text-white min-h-screen overflow-hidden">
//       {/* HERO */}
//       <section className="relative px-6 md:px-12 lg:px-20 py-24">
//         <div className="absolute top-0 left-0 w-80 h-80 bg-[#df0707]/20 blur-3xl rounded-full"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#780909]/30 blur-3xl rounded-full"></div>

//         <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <p className="inline-block px-4 py-2 rounded-full bg-[#df0707]/10 text-[#df0707] border border-[#df0707]/30 text-sm font-semibold mb-6">
//               Research & Development
//             </p>

//             <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//               Innovation Through
//               <span className="block text-[#df0707]">
//                 Engineering Research
//               </span>
//             </h1>

//             <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
//               Our R&amp;D division focuses on transforming ideas into practical,
//               scalable, and future-ready engineering solutions. We combine
//               automation, SCADA, renewable energy, embedded systems, and smart
//               technologies to create impactful innovation for industry and society.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="bg-[#df0707] hover:bg-[#ba0c0c] transition px-6 py-3 rounded-xl font-semibold shadow-lg shadow-red-900/30 flex items-center gap-2">
//                 Explore Research <FaArrowRight />
//               </button>

//               <button className="border border-[#df0707]/40 hover:bg-[#df0707]/10 transition px-6 py-3 rounded-xl font-semibold">
//                 Contact R&amp;D Team
//               </button>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-[#df0707]/20 to-[#780909]/20 border border-[#df0707]/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
//             <div className="bg-[#140202] rounded-2xl p-8 border border-white/10">
//               <div className="flex items-center gap-3 mb-6">
//                 <FaFlask className="text-[#df0707] text-2xl" />
//                 <h3 className="text-2xl font-bold">R&amp;D Focus</h3>
//               </div>

//               <div className="space-y-4">
//                 {innovationPoints.map((item, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <FaCheckCircle className="text-[#df0707] mt-1" />
//                     <span className="text-gray-200">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 rounded-2xl bg-[#df0707]/10 border border-[#df0707]/20 p-6">
//                 <p className="text-sm text-gray-300">Core Strength</p>
//                 <h2 className="text-3xl font-extrabold text-[#df0707] mt-2">
//                   Applied Innovation
//                 </h2>
//                 <p className="text-gray-400 mt-2">
//                   From concept and simulation to prototype and field-level
//                   implementation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT R&D */}
//       <section className="px-6 md:px-12 lg:px-20 py-10">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
//             <p className="text-[#df0707] font-semibold uppercase tracking-[0.25em] mb-3">
//               About Our Lab
//             </p>
//             <h2 className="text-3xl md:text-4xl font-bold mb-5">
//               Building the Future of Smart Engineering
//             </h2>
//             <p className="text-gray-300 leading-relaxed text-lg mb-4">
//               The R&amp;D unit of UE Energy &amp; Control Ltd is dedicated to
//               research, design, development, and testing of engineering
//               solutions that address real-world industrial and technological
//               challenges.
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               We work on advanced automation systems, intelligent monitoring,
//               renewable energy applications, and next-generation smart
//               infrastructure. Our goal is to bridge innovation with execution,
//               ensuring every research effort contributes to practical and
//               sustainable progress.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-5">
//             <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#df0707]/40 transition">
//               <FaLightbulb className="text-[#df0707] text-3xl mb-4" />
//               <h3 className="text-xl font-bold mb-2">Idea to Prototype</h3>
//               <p className="text-gray-400">
//                 Converting innovative concepts into workable engineering
//                 prototypes.
//               </p>
//             </div>

//             <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#df0707]/40 transition">
//               <FaCogs className="text-[#df0707] text-3xl mb-4" />
//               <h3 className="text-xl font-bold mb-2">Testing & Validation</h3>
//               <p className="text-gray-400">
//                 Performance verification, optimization, and reliability testing.
//               </p>
//             </div>

//             <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#df0707]/40 transition">
//               <FaRobot className="text-[#df0707] text-3xl mb-4" />
//               <h3 className="text-xl font-bold mb-2">Smart Systems</h3>
//               <p className="text-gray-400">
//                 Research in automation, control, IoT, and intelligent systems.
//               </p>
//             </div>

//             <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#df0707]/40 transition">
//               <FaSolarPanel className="text-[#df0707] text-3xl mb-4" />
//               <h3 className="text-xl font-bold mb-2">Sustainable Energy</h3>
//               <p className="text-gray-400">
//                 Renewable energy innovation for efficient and greener solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* RESEARCH AREAS */}
//       <section className="px-6 md:px-12 lg:px-20 py-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="text-[#df0707] font-semibold uppercase tracking-[0.25em] mb-3">
//               Research Domains
//             </p>
//             <h2 className="text-4xl md:text-5xl font-extrabold">
//               Our Core <span className="text-[#df0707]">Research Areas</span>
//             </h2>
//             <p className="max-w-3xl mx-auto mt-5 text-gray-400 text-lg leading-relaxed">
//               We focus on multi-disciplinary engineering research to develop
//               practical, intelligent, and scalable solutions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {researchAreas.map((area, index) => (
//               <div
//                 key={index}
//                 className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#df0707]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-[#df0707]/15 border border-[#df0707]/20 flex items-center justify-center text-[#df0707] mb-5">
//                   {area.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{area.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CURRENT INITIATIVES */}
//       <section className="px-6 md:px-12 lg:px-20 py-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-10">
//             <p className="text-[#df0707] font-semibold uppercase tracking-[0.25em] mb-3">
//               Current Initiatives
//             </p>
//             <h2 className="text-4xl font-extrabold">
//               Ongoing <span className="text-[#df0707]">R&amp;D Projects</span>
//             </h2>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-[#140202] to-[#1b0505] border border-white/10 rounded-3xl p-7 shadow-2xl hover:border-[#df0707]/40 transition"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-[#df0707] flex items-center justify-center text-white font-bold text-lg mb-5">
//                   {index + 1}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{project.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 md:px-12 lg:px-20 py-20">
//         <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-r from-[#140202] via-[#df0707]/20 to-[#140202] p-10 md:p-14 shadow-2xl text-center">
//           <p className="text-[#df0707] font-semibold uppercase tracking-[0.25em] mb-3">
//             Collaborate With Us
//           </p>
//           <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
//             Research. Innovate. Build the Future.
//           </h2>
//           <p className="max-w-3xl mx-auto mt-5 text-gray-300 text-lg leading-relaxed">
//             We welcome collaboration with industries, researchers, institutions,
//             and future engineers to create impactful and sustainable engineering
//             solutions.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 mt-8">
//             <button className="bg-[#df0707] hover:bg-[#ba0c0c] transition px-6 py-3 rounded-xl font-semibold shadow-lg shadow-red-900/30">
//               Contact R&amp;D Department
//             </button>
//             <button className="border border-[#df0707]/40 hover:bg-[#df0707]/10 transition px-6 py-3 rounded-xl font-semibold">
//               View Innovation Areas
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RND;

import React from "react";
import {
  FaFlask,
  FaMicrochip,
  FaSolarPanel,
  FaRobot,
  FaChartLine,
  FaCogs,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";

const researchAreas = [
  {
    title: "Automation & Control",
    icon: <FaRobot size={28} />,
    desc: "Development of intelligent automation systems, PLC logic, industrial control strategies, and smart monitoring solutions for modern engineering applications.",
  },
  {
    title: "SCADA & Smart Monitoring",
    icon: <FaChartLine size={28} />,
    desc: "Research on real-time data acquisition, process visualization, remote monitoring, and advanced SCADA integration for industrial and energy systems.",
  },
  {
    title: "Renewable Energy",
    icon: <FaSolarPanel size={28} />,
    desc: "Innovation in solar systems, hybrid power models, energy efficiency, and sustainable engineering solutions for industrial, commercial, and residential sectors.",
  },
  {
    title: "Embedded & IoT Systems",
    icon: <FaMicrochip size={28} />,
    desc: "Design of smart embedded devices, sensor-based systems, IoT applications, and connected engineering technologies for future-ready solutions.",
  },
];

const innovationPoints = [
    "Complex solution development for industrial and smart engineering systems",
    "Computer vision based monitoring, inspection, and automation solutions",
    "IIoT-based device integration, data acquisition, and remote control systems",
    "Customized SCADA development for industrial, energy, and utility applications",
    "Intelligent system design, testing, simulation, and performance optimization",
    "Applied R&D support for product innovation, pilot projects, and deployment",
  ];

const projects = [
  {
    title: "Industrial Automation Prototype Lab",
    desc: "Hands-on development and testing of PLC, HMI, SCADA, and control systems for practical field implementation.",
  },
  {
    title: "Smart Energy Research",
    desc: "Exploration of solar integration, energy management systems, and sustainable power solutions for smart infrastructure.",
  },
  {
    title: "IoT & Monitoring Systems",
    desc: "Building connected sensor-based platforms for remote monitoring, analytics, and smart control applications.",
  },
];

const RND = () => {
  return (
    <div className="bg-[#0B1026] text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#00B4D8]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0089A8]/30 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block px-4 py-2 rounded-full bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 text-sm font-semibold mb-6">
              Research & Development
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Innovation Through
              <span className="block text-[#00B4D8]">
                Engineering Research
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
              Our R&amp;D division focuses on transforming ideas into practical,
              scalable, and future-ready engineering solutions. We combine
              automation, SCADA, renewable energy, embedded systems, and smart
              technologies to create impactful innovation for industry and society.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#00B4D8] hover:bg-[#0089A8] transition px-6 py-3 rounded-xl font-semibold shadow-lg shadow-[#00B4D8]/30 flex items-center gap-2">
                Explore Research <FaArrowRight />
              </button>

              <button className="border border-[#00B4D8]/40 hover:bg-[#00B4D8]/10 transition px-6 py-3 rounded-xl font-semibold">
                Contact R&amp;D Team
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00B4D8]/20 to-[#0089A8]/20 border border-[#00B4D8]/20 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
            <div className="bg-[#101833] rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <FaFlask className="text-[#00B4D8] text-2xl" />
                <h3 className="text-2xl font-bold">R&amp;D Focus</h3>
              </div>

              <div className="space-y-4">
                {innovationPoints.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#00B4D8] mt-1" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 p-6">
                <p className="text-sm text-gray-300">Core Strength</p>
                <h2 className="text-3xl font-extrabold text-[#00B4D8] mt-2">
                  Applied Innovation
                </h2>
                <p className="text-gray-400 mt-2">
                  From concept and simulation to prototype and field-level
                  implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT R&D */}
      <section className="px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-[#00B4D8] font-semibold uppercase tracking-[0.25em] mb-3">
              About Our Lab
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Building the Future of Smart Engineering
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              The R&amp;D unit of Tasisat is dedicated to
              research, design, development, and testing of engineering
              solutions that address real-world industrial and technological
              challenges.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We work on advanced automation systems, intelligent monitoring,
              renewable energy applications, and next-generation smart
              infrastructure. Our goal is to bridge innovation with execution,
              ensuring every research effort contributes to practical and
              sustainable progress.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#00B4D8]/40 transition">
              <FaLightbulb className="text-[#00B4D8] text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Idea to Prototype</h3>
              <p className="text-gray-400">
                Converting innovative concepts into workable engineering
                prototypes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#00B4D8]/40 transition">
              <FaCogs className="text-[#00B4D8] text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Testing & Validation</h3>
              <p className="text-gray-400">
                Performance verification, optimization, and reliability testing.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#00B4D8]/40 transition">
              <FaRobot className="text-[#00B4D8] text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Systems</h3>
              <p className="text-gray-400">
                Research in automation, control, IoT, and intelligent systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-[#00B4D8]/40 transition">
              <FaSolarPanel className="text-[#00B4D8] text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Sustainable Energy</h3>
              <p className="text-gray-400">
                Renewable energy innovation for efficient and greener solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#00B4D8] font-semibold uppercase tracking-[0.25em] mb-3">
              Research Domains
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Our Core <span className="text-[#00B4D8]">Research Areas</span>
            </h2>
            <p className="max-w-3xl mx-auto mt-5 text-gray-400 text-lg leading-relaxed">
              We focus on multi-disciplinary engineering research to develop
              practical, intelligent, and scalable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#00B4D8]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00B4D8]/15 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-5">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT INITIATIVES */}
      <section className="px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#00B4D8] font-semibold uppercase tracking-[0.25em] mb-3">
              Current Initiatives
            </p>
            <h2 className="text-4xl font-extrabold">
              Ongoing <span className="text-[#00B4D8]">R&amp;D Projects</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#101833] to-[#2E174F] border border-white/10 rounded-3xl p-7 shadow-2xl hover:border-[#00B4D8]/40 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00B4D8] flex items-center justify-center text-white font-bold text-lg mb-5">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-r from-[#101833] via-[#00B4D8]/20 to-[#101833] p-10 md:p-14 shadow-2xl text-center">
          <p className="text-[#00B4D8] font-semibold uppercase tracking-[0.25em] mb-3">
            Collaborate With Us
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Research. Innovate. Build the Future.
          </h2>
          <p className="max-w-3xl mx-auto mt-5 text-gray-300 text-lg leading-relaxed">
            We welcome collaboration with industries, researchers, institutions,
            and future engineers to create impactful and sustainable engineering
            solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-[#00B4D8] hover:bg-[#0089A8] transition px-6 py-3 rounded-xl font-semibold shadow-lg shadow-[#00B4D8]/30">
              Contact R&amp;D Department
            </button>
            <button className="border border-[#00B4D8]/40 hover:bg-[#00B4D8]/10 transition px-6 py-3 rounded-xl font-semibold">
              View Innovation Areas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RND;