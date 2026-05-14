import React from "react";
import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

const SolarWaterHeatting = () => {
  const projects = [
    {
        title: "Grand mosque in king Salman park Installation of 3,000L Solar water heaters",
        client: "Freyssinet",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation, testing and commissioning of centralized Solar water heating Systems 20,000L in Parcel 3.10 in KAFD",
        client: "MOBCO",
        details: "2022",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Installation, testing and commissioning of centralized Solar water heating Systems 30,000L in Parcel 1.08 in KAFD",
        client: "Saudico",
        details: "2019",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Supply, install solar water heating system for SPARK",
        client: "Saudi Aramco",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Solar Water heating for C32 Project",
        client: "Al-Kifah",
        details: "2019",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Solar water heating systems for KFU",
        client: "King Faissal university- Al-Hassa",
        details: "2018",
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
            Our Recent <br /> Accomplished Project #<span className="bg-gradient-to-r from-[#2E174F] to-[#0089A8] bg-clip-text text-transparent ">Solar Water Heatting</span>
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

export default SolarWaterHeatting;