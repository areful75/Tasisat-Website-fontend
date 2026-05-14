import React from "react";
import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

const Electrical = () => {
  const projects = [
    {
      title: "Replacement of Lighting and Control in the King Abdulaziz Campus in Jeddah",
      client: "Tarshid",
      details: "Ongoing",
      image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
      image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
      icon: <FaIndustry />,
    },
    {
      title: "Replacement of Lighting in Dammam University Campus",
      client: "Tarshid",
      details: "Ongoing",
      image1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
      image2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
      icon: <FaCogs />,
    },
    {
      title: "Replacement of Interior/Exterior Lighting and Occupancy Sensors in RCC & PSC in Riyadh",
      client: "Site Technology",
      details: "2024",
      image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
      image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
      icon: <MdEngineering />,
    },
    {
      title: "nstallation, of Energy Meters, DDC in the Prince Sattam University in Kharj",
      client: "Engie Solution Co",
      details: "2022",
      image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
      image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
      icon: <MdPrecisionManufacturing />,
    },
    {
      title: "Installation of Lighting systems in KSU- Girls Campus",
      client: "Arabian Qudra",
      details: "2022",
      image1: "https://i.ibb.co/0zxdJvK/IMG-12.png",
      image2: "https://i.ibb.co/mFDRcn2G/IMG-13.png",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Electrical Cable pulling and Termination for MDB’s and LCP’s for 50 Villas in Yanbu’",
      client: "Domani",
      details: "2020",
      image1: "https://i.ibb.co/yctxpSCY/IMG-14.png",
      image2: "https://i.ibb.co/NgSSCjyr/IMG-15.png",
      icon: <FaProjectDiagram />,
    },

    {
        title: "Installation of All Indoor and outdoor Lighting of the Islamic University of Madina Al-Munawarah",
        client: "Arabian Qudra",
        details: "2019",
        image1: "https://i.ibb.co/yctxpSCY/IMG-14.png",
        image2: "https://i.ibb.co/NgSSCjyr/IMG-15.png",
        icon: <FaProjectDiagram />,
      },
  ];

  return (
    <div className="min-h-screen bg-[#0B1026] px-4 py-10">
      <div className="mx-auto max-w-7xl rounded-xl border border-[#0089A8] bg-[#0B1026] p-5">
        
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-[#0089A8] md:text-5xl">
            Our Recent <br /> Accomplished Project <span className="bg-gradient-to-r from-[#2E174F] to-[#0089A8] bg-clip-text text-transparent ">#Electrical</span>
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

export default Electrical;