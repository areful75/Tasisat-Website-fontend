import React from "react";

// import CEO from "./teamImage/ahmed.jpg";
// import Researcher from "./teamImage/CEO.jpg";
// import CTO from "./teamImage/owner.jpg";
// import SalesDirector from "./teamImage/shakirJaber.jpg";
// import ProjectManager from "./teamImage/ahmedreza.jpeg";
// import TechnicalManager from "./teamImage/mahmudul.jpeg";   
import CEO from "./teamImage/owner.jpg";
import DGM from "./teamImage/ahmedsir2.jpg";
import CTO from "./teamImage/CEO.jpg";
import SalesDirector from "./teamImage/shakirJaber.jpg";
import ProjectManager from "./teamImage/ahmedreza.jpeg";
import TechnicalManager from "./teamImage/mahmudul.jpeg";
const teamMembers = [
  {
    id: 1,
    name: "Ali Al Rehaili",
    role: "CEO",
    image: CEO,
  },
  {
    id: 2,
    name: "Ahmed AL-Rusan",
    role: "Deputy General Manager",
    image: DGM,
  },
  {
    id: 3,
    name: "Engr. Shiekh Rafat Bin Ali",
    role: "Cheif technical officer",
    image: CTO,
  },
  {
    id: 4,
    name: "Shakir Jaber",
    role: "Sales Director",
    image: SalesDirector,
  },
  {
    id: 5,
    name: "Ahmed Reza",
    role: "Project Manager",
    image: ProjectManager,
  },
  {
    id: 6,
    name: "Enggr.Mahamudul Hasan",
    role: "Technical Manager",
    image: TechnicalManager,
  },
];

const TasisatTeamMember = () => {
  return (
    <section className="bg-[#0B1026] px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold leading-tight text-[#00B4D8] md:text-5xl">
            Our Team Members
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#F8FAFC]">
            We are a multidisciplinary engineering firm with over 20 years of
            expertise. We provide innovative solutions for our partners and
            clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}

              //rounded-xl border border-[#0089A8]/40 bg-[#101833] p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]
              className="flex flex-col items-center "
            >
              <div className="flex justify-center">
                <img
                  className="h-[200px] w-[200px] rounded-full border-4 border-[#00B4D8] bg-white object-cover shadow-xl transition-all duration-300 hover:border-[#0089A8]"
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <div className="mt-4 min-h-[70px] text-center">
                <h3 className="text-lg font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-1 text-[#F8FAFC]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasisatTeamMember;