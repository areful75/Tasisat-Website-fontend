import React from "react";
import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

const SolarPv = () => {
  const projects = [
    {
        title: "Installation, Testing & Commissioning of 3.15 MWp Solar PV at KSAU University & Hospitals",
        client: "Tarshid",
        details: "Ongoing",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation, Testing & Commissioning of 1.5 MW Solar PV On-Grid System at Islamic University of Madinah Al-Munawarah",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation, Testing & Commissioning of 1.4 MWp Solar PV System at Prince Nourah University, Riyadh",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation, Testing & Commissioning of 2.55 MWp Solar PV System at TVTC, Jeddah",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation of 540 kWp Solar PV System for SGS, Jeddah",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation, Testing of Complete Rooftop Solar On-Grid System for Taif University (Male & Female) 2.5 MWp",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation, Testing & Commissioning of Solar On-Grid System for 200 Schools (3000 kWp) in Madinah Al-Munawarah",
        client: "Zamil Services",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation of Complete Solar PV On-Grid Rooftop System at Technical College (TC 385 kWp)",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      }
    
  ];

  return (
    <div className="min-h-screen bg-[#0B1026] px-4 py-10">
      <div className="mx-auto max-w-7xl rounded-xl border border-[#0089A8] bg-[#0B1026] p-5">
        
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-[#0089A8] md:text-5xl">
            Our Recent <br /> Accomplished Project #<span className="bg-gradient-to-r from-[#2E174F] to-[#0089A8] bg-clip-text text-transparent ">Lighting Control</span>
          </h1>
          <div className="mt-2 h-1 w-40 bg-[#00B4D8]"></div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[#0089A8] bg-[#101833] p-2"
            >
              <div className="grid grid-cols-2">
                <img
                  src={project.image1}
                  alt={project.title}
                  className="h-44 w-full object-cover"
                />

                <img
                  src={project.image2}
                  alt={project.title}
                  className="h-44 w-full object-cover"
                />
              </div>

              <div className="-mt-10 bg-[#0089A8] px-2 py-1 text-sm font-semibold text-black relative">
                {project.title}
              </div>

              <div className="mt-3 space-y-1 p-2 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="text-[#00B4D8]">{project.icon}</span>
                  Client: {project.client}
                </p>

                <p className="flex items-center gap-2">
                  <FaCogs className="text-[#00B4D8]" />
                  {project.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SolarPv;