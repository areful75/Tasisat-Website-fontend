import React from "react";
import { FaIndustry, FaCogs, FaProjectDiagram } from "react-icons/fa";
import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

const MEPSection = () => {
  const projects = [
    //MEP
    {
        title: "Replacement of Lighting, Control, PACU's and Splits in the GDMS- Riyadh",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
        image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
        icon: <FaIndustry />,
      },
      {
        title: "Replacement of HVAC, Lighting, and Control system in IMSU",
        client: "Tarshid",
        details: "2025",
        image1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
        image2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
        icon: <FaCogs />,
      },
      {
        title: "EPC of centralized Solar Water heating system in Ras Alkheir",
        client: "Royal commission/Jubail",
        details: "2024",
        image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
        image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
        icon: <MdEngineering />,
      },
  
      {
          title: "Replacement of Split units, Lighting and Lighting control in Yanbu Male Colleges and Female Colleges",
          client: "Arabian Qudra",
          details: "2024",
          image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
          image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
          icon: <MdEngineering />,
        },
  
        {
          title: "Installation of indoor Lighting in KSU-Boys section",
          client: "ELEMAC-Honeywell",
          details: "2020",
          image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
          image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
          icon: <MdEngineering />,
        },
        //HVAC

        {
            title: "KAFD- Parcel 4.06, Ducting work, AHU connection, and cladding",
            client: "Al-Bawani",
            details: "2022",
            image1: "https://i.ibb.co/Vcqj6nfq/IMG-04.png",
            image2: "https://i.ibb.co/n86YcR08/IMG-05.png",
            icon: <FaIndustry />,
          },
          {
            title: "KAFD- Parcel 4.06, Ducting work for 6 floors and AHU connection and cladding",
            client: "Al-Bawani",
            details: "2022",
            image1: "https://i.ibb.co/B24D8pD6/IMG-06.png",
            image2: "https://i.ibb.co/WW8mmWCh/IMG-07.png",
            icon: <FaCogs />,
          },
          {
            title: "Replacement of 12 PACU's units and 120 AC's replacement in Emaar of Baha",
            client: "Site Technology",
            details: "2024",
            image1: "https://i.ibb.co/Z6dkgZ3v/IMG-08.png",
            image2: "https://i.ibb.co/ZzQ99qpK/IMG-09.png",
            icon: <MdEngineering />,
          },
          {
            title: "Operation and maintenance in KAFD-P1.12",
            client: "Thabat",
            details: "2023",
            image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
            image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
            icon: <MdPrecisionManufacturing />,
          },
    //Plumbing      
    {
        title: "Plumbing and Sanitary fixing for Parcel 4.03",
        client: "Al-Bawani",
        details: "2020",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },
      //mecanical
      {
        title: "eplacement of Air Conditioning, lighting and control in MOH-Qassim",
        client: "Tarshid",
        details: "Ongoing",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },
      {
        title: "Fabrication, installation of Alumnim Cladding for CHW pipes and Duct works in Parcel 1.12 KAFD",
        client: "Thabat",
        details: "2030",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },
      {
        title: "Installation of AHU Motor in the MONG",
        client: "Engie Solution Co",
        details: "2022",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },
      {
        title: "Replacement of AHU Motors in MONG",
        client: "Tarshid- Engie",
        details: "2022",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },
      {
        title: "Installation of AC- Split mounted for 50 Villas in Northern of Riyadh",
        client: "Emaar",
        details: "2021",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },
      //HvAc and Electrical
      {
        title: "Installation of VRF Split system including step-up transformer modification in Tunis Embassy in Riyadh",
        client: "Johnson Controls",
        details: "2024",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },
      //Piping and landscape
      {
        title: "Construction of Water Tanks and Irrigation System",
        client: "Municipality of Mahd",
        details: "2019",
        image1: "https://i.ibb.co/C3PgNYZc/IMG-10.png",
        image2: "https://i.ibb.co/tPZwS7sZ/IMG-11.png",
        icon: <MdPrecisionManufacturing />,
      },

  
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

export default MEPSection;