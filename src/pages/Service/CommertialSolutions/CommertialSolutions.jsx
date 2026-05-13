// https://i.ibb.co/j92JtfRw/IMG-79.png
// https://i.ibb.co/VF60TT8/IMG-80.png
// https://i.ibb.co/b5NcygGw/IMG-81.png
// https://i.ibb.co/chm5RNrc/IMG-82.png
// https://i.ibb.co/LzPmyQ26/IMG-83.png
// https://i.ibb.co/Zpcjp2Ww/IMG-84.png
// https://i.ibb.co/GfQm9DGV/IMG-85.png
// https://i.ibb.co/YF4tqGkp/IMG-86.png
// https://i.ibb.co/XxJ9YkTn/IMG-87.png


import React from "react";
import {
  FaBuilding,
  FaBolt,
  FaIndustry,
  FaSolarPanel,
  FaSitemap,
  FaNetworkWired,
  FaHeadset,
  FaCubes,
  FaTruckRampBox,
  FaPlane,
  FaFlask,
  FaBottleWater,
  FaWheatAwn,
  FaSheetPlastic,
  FaHouseChimneyWindow,
  FaHardDrive,
} from "react-icons/fa6";
import { FaCogs, FaTools } from "react-icons/fa";
import SolutionHeroSection from "../IndustrialSolutions/components/SolutionHeroSection";
import SolutionGallerySection from "../IndustrialSolutions/components/SolutionGallerySection";
import CoreSystemsSection from "../IndustrialSolutions/components/CoreSystemsSection";
import SectorsSection from "../IndustrialSolutions/components/SectorsSection";



const heroContent = {
  badge: "Industrial Solutions",
  title: "Smart Industrial",
  titleHighlight: "Automation & SCADA.",
  description:
    "We deliver industrial SCADA, automation, power and solar integration, data logging, IoT connectivity, and 24/7 after-sales support for mission-critical operations.",
  rightTitle: "SCADA System",
  rightDescription:
    "Process SCADA, Machine SCADA, Batch SCADA, Alarm SCADA, Safety SCADA, and Energy Monitoring SCADA for real-time industrial control and visibility.",
};

const highlights = [
  {
    title: "SCADA Systems",
    desc: "Process, machine, batch, alarm, safety, and energy monitoring SCADA.",
    icon: <FaSitemap />,
  },
  {
    title: "Automation Systems",
    desc: "PLC-HMI-VFD-instrumentation integration with industrial networking.",
    icon: <FaCogs />,
  },
  {
    title: "Power & Solar",
    desc: "Solar SCADA, power plant automation, and load management integration.",
    icon: <FaSolarPanel />,
  },
];

const scopeItems = [
  "Process SCADA",
  "Machine SCADA",
  "Batch SCADA",
  "Alarm SCADA",
  "Safety SCADA",
  "Energy Monitoring",
];

const gallerySectionContent = {
  badge: "Core Service",
  title: "SCADA System",
  description:
    "Process SCADA | Machine SCADA | Batch SCADA | Alarm SCADA | Safety SCADA | Energy Monitoring SCADA",
};

const solutionGallery = [
  {
    title: "Industrial SCADA with Data Logging, Data Storage and IOT",
    image: "https://i.ibb.co/qMbpCHkv/IMG-73.png",
  },
  {
    title: "SCADA With Networking",
    image: "https://i.ibb.co/1fZvnB9R/IMG-74.png",
  },
  {
    title: "Energy Management System",
    image: "https://i.ibb.co/Q3j6sh6y/IMG-75.png",
  },
  {
    title: "Solar Plant Control & Monitoring System (PV SCADA & PPC)",
    image: "https://i.ibb.co/DfRjY10d/IMG-76.png",
  },
  {
    title: "Substation With SCADA System",
    image: "https://i.ibb.co/Kjpctmxz/IMG-77.png",
  },
  {
    title: "SCADA Integration with Utility",
    image: "https://i.ibb.co/PzfxwJpR/IMG-78.png",
  },
  {
    title: "Rail Mounted Gantry Crane Chattogram Port",
    image: "https://i.ibb.co/cfFDdm7/IMG-03.png",
  },
  {
    title:
      "Commissioning and Complete Automation Work of 5th Floor Cargo Lift for Product Transfer",
    image: "https://i.ibb.co/39mkrqrn/IMG-53.png",
  },
  {
    title: "PLC, HMI Installation & Integration",
    image: "https://i.ibb.co/B5Pc8zdk/IMG-52.png",
  },
];

const coreSystemsSectionContent = {
  badge: "Automation Systems",
  title: "Industrial Control & Integration",
  description:
    "PLC-HMI-VFD-Instrumentation-field devices integration | Industrial networking via Modbus, Profibus, Profinet, CANbus, OPC UA, etc | Power & solar integration",
};

const coreSystems = [
  {
    title: "Automation Systems",
    desc: "PLC-HMI-VFD-Instrumentation-field devices integration for industrial automation.",
    icon: <FaCogs />,
  },
  {
    title: "Industrial Networking",
    desc: "Modbus, Profibus, Profinet, CANbus, OPC UA and industrial communication integration.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Power & Solar Integration",
    desc: "Industrial rooftop solar with SCADA monitoring, power plant automation and load management.",
    icon: <FaSolarPanel />,
  },
  {
    title: "After-Sales Support",
    desc: "24/7 remote and on-site troubleshooting, retrofit, and maintenance.",
    icon: <FaHeadset />,
  },
];

const sectorsSectionContent = {
  badge: "Industries We Serve",
  title: "Built for Heavy Industry & Critical Infrastructure",
};

const sectors = [
  { title: "Rolling & Steel", icon: <FaIndustry /> },
  { title: "Cement", icon: <FaCubes /> },
  { title: "Chemical", icon: <FaFlask /> },
  { title: "Treatment Plant", icon: <FaBottleWater /> },
  { title: "Solar Power Plant", icon: <FaSolarPanel /> },
  { title: "Power Plant", icon: <FaBolt /> },
  { title: "Feed Mill", icon: <FaWheatAwn /> },
  { title: "Food & Beverage", icon: <FaTruckRampBox /> },
  { title: "Textile", icon: <FaSheetPlastic /> },
  { title: "Agro", icon: <FaHouseChimneyWindow /> },
  { title: "Paper Packaging", icon: <FaHardDrive /> },
  { title: "Pharmaceutical", icon: <FaTools /> },
  { title: "Airport", icon: <FaPlane /> },
];

const CommertialSolutions = () => {
  return (
    <div className="bg-[#0b0000] text-white min-h-screen overflow-hidden">
      <SolutionHeroSection
        highlights={highlights}
        heroContent={heroContent}
        scopeItems={scopeItems}
        heroImage="https://i.ibb.co/qMbpCHkv/IMG-73.png"
      />

      <SolutionGallerySection
        sectionContent={gallerySectionContent}
        solutionGallery={solutionGallery}
      />

      <CoreSystemsSection
        sectionContent={coreSystemsSectionContent}
        coreSystems={coreSystems}
      />

      <SectorsSection
        sectionContent={sectorsSectionContent}
        sectors={sectors}
      />
    </div>
  );
};

export default CommertialSolutions;