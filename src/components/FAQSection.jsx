// import React, { useState } from "react";
// import { FaSolarPanel, FaCogs, FaProjectDiagram, FaBolt } from "react-icons/fa";

// const faqData = [
//   {
//     question: "What services does UE Energy & Control provide?",
//     answer:
//       "We specialize in Automation, SCADA, Solar, BMS, Power, and EPC solutions, delivering turnkey projects that ensure efficiency and reliability.",
//   },
//   {
//     question: "Do you handle installation and maintenance?",
//     answer:
//       "Yes, our integrated approach covers design, implementation, training, and ongoing maintenance for sustainable solutions.",
//   },
//   {
//     question: "Can you provide custom automation solutions?",
//     answer:
//       "Absolutely. We tailor our solutions to the specific needs of your industrial or commercial setup, ensuring optimal performance.",
//   },
//   {
//     question: "Do you offer solar energy solutions?",
//     answer:
//       "Yes, we design and implement solar power systems for residential, commercial, and industrial projects, maximizing energy efficiency.",
//   },
// ];

// const interactiveItems = [
//   { icon: <FaSolarPanel size={32} />, color: "bg-[#df0707]" },   // Bright Red
//   { icon: <FaCogs size={32} />, color: "bg-[#ba0c0c]" },         // Medium Red
//   { icon: <FaProjectDiagram size={32} />, color: "bg-[#980a0a]" }, // Dark Red
//   { icon: <FaBolt size={32} />, color: "bg-[#df0707]" },         // Bright Red
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

//   return (
//     <section className="py-24 bg-[#0b0000] text-white">
//       <div className="px-6 lg:px-10 flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
//         {/* Left: Interactive Design */}
//         <div className="w-full lg:w-1/3 flex flex-col gap-6 items-center justify-center">
//           <div className="grid grid-cols-2 gap-6">
//             {interactiveItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`flex items-center justify-center w-24 h-24 rounded-xl ${item.color} shadow-lg hover:scale-110 transition-transform cursor-pointer`}
//               >
//                 {item.icon}
//               </div>
//             ))}
//           </div>
//           <div className="mt-6 flex flex-col items-center gap-2">
//             <div className="w-3 h-3 bg-[#df0707] rounded-full animate-ping"></div>
//             <div className="w-3 h-3 bg-[#780909] rounded-full animate-bounce"></div>
//             <div className="w-3 h-3 bg-[#ba0c0c] rounded-full animate-pulse"></div>
//           </div>
//         </div>

//         {/* Right: FAQ Accordion */}
//         <div className="w-full lg:w-2/3 flex flex-col gap-4">
//           <h3 className="text-2xl md:text-3xl font-extrabold text-[#df0707] mb-6">
//             Frequently Asked Questions
//           </h3>
//           <div className="flex flex-col gap-3">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className="border border-[#780909] rounded-xl overflow-hidden shadow-sm"
//               >
//                 <button
//                   className="w-full text-left px-6 py-4 bg-[#980a0a] hover:bg-[#ba0c0c] flex justify-between items-center font-medium text-white transition-colors"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   {item.question}
//                   <span className="text-[#df0707] font-bold">{activeIndex === index ? "-" : "+"}</span>
//                 </button>
//                 {activeIndex === index && (
//                   <div className="px-6 py-4 text-gray-300 bg-[#0b0000] transition-all">
//                     {item.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from "react";
import { FaSolarPanel, FaCogs, FaProjectDiagram, FaBolt } from "react-icons/fa";

const faqData = [
  {
    question: "What services does Tasisat provide?",
    answer:
      "We specialize in Automation, SCADA, Solar, BMS, Power, and EPC solutions, delivering turnkey projects that ensure efficiency and reliability.",
  },
  {
    question: "Do you handle installation and maintenance?",
    answer:
      "Yes, our integrated approach covers design, implementation, training, and ongoing maintenance for sustainable solutions.",
  },
  {
    question: "Can you provide custom automation solutions?",
    answer:
      "Absolutely. We tailor our solutions to the specific needs of your industrial or commercial setup, ensuring optimal performance.",
  },
  {
    question: "Do you offer solar energy solutions?",
    answer:
      "Yes, we design and implement solar power systems for residential, commercial, and industrial projects, maximizing energy efficiency.",
  },
];

const interactiveItems = [
  { icon: <FaSolarPanel size={32} />, color: "bg-[#00B4D8]" },
  { icon: <FaCogs size={32} />, color: "bg-[#0089A8]" },
  { icon: <FaProjectDiagram size={32} />, color: "bg-[#2E174F]" },
  { icon: <FaBolt size={32} />, color: "bg-[#00B4D8]" },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-24 bg-[#0B1026] text-white">
      <div className="px-6 lg:px-10 flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Left: Interactive Design */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 items-center justify-center">
          <div className="grid grid-cols-2 gap-6">
            {interactiveItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center w-24 h-24 rounded-xl ${item.color} shadow-lg hover:scale-110 transition-transform cursor-pointer`}
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="w-3 h-3 bg-[#00B4D8] rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-[#0089A8] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-[#2E174F] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Right: FAQ Accordion */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#00B4D8] mb-6">
            Frequently Asked Questions
          </h3>
          <div className="flex flex-col gap-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-[#0089A8] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-4 bg-[#0089A8] hover:bg-[#00B4D8] flex justify-between items-center font-medium text-white transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <span className="text-[#F8FAFC] font-bold">{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 text-gray-300 bg-[#0B1026] transition-all">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;