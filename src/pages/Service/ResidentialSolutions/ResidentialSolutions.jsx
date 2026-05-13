// https://i.ibb.co/BHh6W8sh/IMG-88.png
// https://i.ibb.co/9HhmD21Y/IMG-89.png
// https://i.ibb.co/hxFqVFkL/IMG-90.png
// https://i.ibb.co/5WT1kVn6/IMG-91.png
// https://i.ibb.co/xtBXmk1y/IMG-92.png
// https://i.ibb.co/B5PRdbPt/IMG-93.png



// import React from "react";
// import {
//   FaHouse,
//   FaBolt,
//   FaShieldHalved,
//   FaMicrophoneLines,
//   FaMobileScreenButton,
//   FaBuilding,
//   FaCity,
//   FaPeopleGroup,
// } from "react-icons/fa6";
// import SolutionHeroSection from "../IndustrialSolutions/components/SolutionHeroSection";
// import SolutionGallerySection from "../IndustrialSolutions/components/SolutionGallerySection";
// import SectorsSection from "../IndustrialSolutions/components/SectorsSection";



// const heroContent = {
//   badge: "Residential Solutions",
//   title: "Smart Living",
//   titleHighlight: "for a Smarter Future.",
//   description:
//     "We offer Home Automation, Solar, and Power Management Solutions that enhance comfort, safety, and energy independence.",
//   rightTitle: "Home Automation",
//   rightDescription:
//     "Smart automation solutions designed for modern living with comfort, control, safety, and seamless connected experiences.",
// };

// const highlights = [
//   {
//     title: "Home Automation",
//     desc: "Integrated living control for lighting, devices, and smart home convenience.",
//     icon: <FaHouse />,
//   },
//   {
//     title: "Smart Security",
//     desc: "Secure homes with monitoring, control, and connected safety systems.",
//     icon: <FaShieldHalved />,
//   },
//   {
//     title: "Mobile Living",
//     desc: "Manage and monitor your home through voice and mobile app integration.",
//     icon: <FaMobileScreenButton />,
//   },
// ];

// const scopeItems = [
//   "Lighting",
//   "Appliance",
//   "Security",
//   "Voice Control",
//   "Mobile App Integration",
//   "Power Management",
// ];

// const gallerySectionContent = {
//   badge: "Smart Automation",
//   title: "Connected Residential Experience",
//   description:
//     "Lighting | Appliance | Security | Voice Control | Mobile App Integration",
// };

// const solutionGallery = [
//   {
//     title: "Smart Office",
//     image: "https://i.ibb.co/BHh6W8sh/IMG-88.png",
//   },
//   {
//     title: "Charging Station",
//     image: "https://i.ibb.co/9HhmD21Y/IMG-89.png",
//   },
//   {
//     title: "Home Automation",
//     image: "https://i.ibb.co/hxFqVFkL/IMG-90.png",
//   },
//   {
//     title: "Virtual Queue Management System",
//     image: "https://i.ibb.co/5WT1kVn6/IMG-91.png",
//   },
//   {
//     title: "Security System",
//     image: "https://i.ibb.co/xtBXmk1y/IMG-92.png",
//   },
//   {
//     title: "Mobile App Integration",
//     image: "https://i.ibb.co/B5PRdbPt/IMG-93.png",
//   },
// ];

// const sectorsSectionContent = {
//   badge: "Sectors Covered",
//   title: "Built for Modern Residential Living",
// };

// const sectors = [
//   { title: "Home", icon: <FaHouse /> },
//   { title: "Apartment", icon: <FaBuilding /> },
//   { title: "Duplex", icon: <FaCity /> },
//   { title: "Villa", icon: <FaHouse /> },
//   { title: "Housing Project", icon: <FaBuilding /> },
//   { title: "Smart Community", icon: <FaPeopleGroup /> },
// ];

// const rdContent = {
//   badge: "R&D Division",
//   title: "Innovation for Smart Automation",
//   paragraphs: [
//     "UE Energy & Control Ltd’s Research & Development Division is dedicated to advancing Smart Automation and Intelligent Control Technologies tailored to client requirements.",
//     "Our team develops custom PLC modules, SCADA extensions, IoT gateways, and smart monitoring systems to meet industrial and commercial demands.",
//     "We focus on prototype design, testing, and continuous optimization to ensure precision, reliability, and innovation.",
//     "By collaborating with industries and partners, we turn automation challenges into cutting-edge, field-deployable engineering solutions.",
//   ],
// };

// const ResidentialSolutions = () => {
//   return (
//     <div className="bg-[#0b0000] text-white min-h-screen overflow-hidden">
//       <SolutionHeroSection
//         highlights={highlights}
//         heroContent={heroContent}
//         scopeItems={scopeItems}
//         heroImage="https://i.ibb.co/hxFqVFkL/IMG-90.png"
//       />

//       <SolutionGallerySection
//         sectionContent={gallerySectionContent}
//         solutionGallery={solutionGallery}
//       />

//       <SectorsSection
//         sectionContent={sectorsSectionContent}
//         sectors={sectors}
//       />

//       {/* <RDSection rdContent={rdContent} /> */}
//     </div>
//   );
// };

// export default ResidentialSolutions;


import React from "react";
import {
  FaHouse,
  FaBolt,
  FaShieldHalved,
  FaMicrophoneLines,
  FaMobileScreenButton,
  FaBuilding,
  FaCity,
  FaPeopleGroup,
} from "react-icons/fa6";
import SolutionHeroSection from "../IndustrialSolutions/components/SolutionHeroSection";
import SolutionGallerySection from "../IndustrialSolutions/components/SolutionGallerySection";
import SectorsSection from "../IndustrialSolutions/components/SectorsSection";

const heroContent = {
  badge: "Residential Solutions",
  title: "Smart Living",
  titleHighlight: "for a Smarter Future.",
  description:
    "We offer Home Automation, Solar, and Power Management Solutions that enhance comfort, safety, and energy independence.",
  rightTitle: "Home Automation",
  rightDescription:
    "Smart automation solutions designed for modern living with comfort, control, safety, and seamless connected experiences.",
};

const highlights = [
  {
    title: "Home Automation",
    desc: "Integrated living control for lighting, devices, and smart home convenience.",
    icon: <FaHouse />,
  },
  {
    title: "Smart Security",
    desc: "Secure homes with monitoring, control, and connected safety systems.",
    icon: <FaShieldHalved />,
  },
  {
    title: "Mobile Living",
    desc: "Manage and monitor your home through voice and mobile app integration.",
    icon: <FaMobileScreenButton />,
  },
];

const scopeItems = [
  "Lighting",
  "Appliance",
  "Security",
  "Voice Control",
  "Mobile App Integration",
  "Power Management",
];

const gallerySectionContent = {
  badge: "Smart Automation",
  title: "Connected Residential Experience",
  description:
    "Lighting | Appliance | Security | Voice Control | Mobile App Integration",
};

const solutionGallery = [
  {
    title: "Smart Office",
    image: "https://i.ibb.co/BHh6W8sh/IMG-88.png",
  },
  {
    title: "Charging Station",
    image: "https://i.ibb.co/9HhmD21Y/IMG-89.png",
  },
  {
    title: "Home Automation",
    image: "https://i.ibb.co/hxFqVFkL/IMG-90.png",
  },
  {
    title: "Virtual Queue Management System",
    image: "https://i.ibb.co/5WT1kVn6/IMG-91.png",
  },
  {
    title: "Security System",
    image: "https://i.ibb.co/xtBXmk1y/IMG-92.png",
  },
  {
    title: "Mobile App Integration",
    image: "https://i.ibb.co/B5PRdbPt/IMG-93.png",
  },
];

const sectorsSectionContent = {
  badge: "Sectors Covered",
  title: "Built for Modern Residential Living",
};

const sectors = [
  { title: "Home", icon: <FaHouse /> },
  { title: "Apartment", icon: <FaBuilding /> },
  { title: "Duplex", icon: <FaCity /> },
  { title: "Villa", icon: <FaHouse /> },
  { title: "Housing Project", icon: <FaBuilding /> },
  { title: "Smart Community", icon: <FaPeopleGroup /> },
];

const rdContent = {
  badge: "R&D Division",
  title: "Innovation for Smart Automation",
  paragraphs: [
    "UE Energy & Control Ltd’s Research & Development Division is dedicated to advancing Smart Automation and Intelligent Control Technologies tailored to client requirements.",
    "Our team develops custom PLC modules, SCADA extensions, IoT gateways, and smart monitoring systems to meet industrial and commercial demands.",
    "We focus on prototype design, testing, and continuous optimization to ensure precision, reliability, and innovation.",
    "By collaborating with industries and partners, we turn automation challenges into cutting-edge, field-deployable engineering solutions.",
  ],
};

const ResidentialSolutions = () => {
  return (
    <div className="bg-[#111827] text-white min-h-screen overflow-hidden">
      <SolutionHeroSection
        highlights={highlights}
        heroContent={heroContent}
        scopeItems={scopeItems}
        heroImage="https://i.ibb.co/hxFqVFkL/IMG-90.png"
      />

      <SolutionGallerySection
        sectionContent={gallerySectionContent}
        solutionGallery={solutionGallery}
      />

      <SectorsSection
        sectionContent={sectorsSectionContent}
        sectors={sectors}
      />

      {/* <RDSection rdContent={rdContent} /> */}
    </div>
  );
};

export default ResidentialSolutions;