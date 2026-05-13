// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// import CEO from "./BOD/CEO.jpg";
// import Researcher from "./BOD/Engr. Sayed Bin Osman.jpg";
// import CPO from "./BOD/EngrFahim.png";

// import "swiper/css";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Engr. Shiekh Rafat Bin Ali",
//     role: "Founder, CEO",
//     image: CEO,
//     facebook: "https://facebook.com/",
//     linkedin: "https://linkedin.com/",
//     twitter: "https://twitter.com/",
//   },
//   {
//     id: 2,
//     name: "Engr. Sayed Bin Osman",
//     role: "Chief Research & Development Officer",
//     image: Researcher,
//     facebook: "https://facebook.com/",
//     linkedin: "https://linkedin.com/",
//     twitter: "https://twitter.com/",
//   },
//   {
//     id: 3,
//     name: "Engr Fahim Shahrier Khan",
//     role: "CPO",
//     image: CPO,
//     facebook: "https://facebook.com/",
//     linkedin: "https://linkedin.com/",
//     twitter: "https://twitter.com/",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <section className="mt-20 px-4 mb-10 bg-[#0b0000] text-white">
//       <div className="text-center mb-10">
//         <h2 className="font-bold text-4xl md:text-5xl text-[#df0707] leading-tight">
//           Our Team Members
//         </h2>
//         <p className="max-w-3xl mx-auto text-white mt-5 text-lg leading-relaxed">
//           We are a multidisciplinary engineering firm with over 20 years of
//           expertise. We provide innovative solutions for our partners and
//           clients.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           loop={false}
//           speed={1000}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {teamMembers.map((member) => (
//             <SwiperSlide key={member.id}>
//               <div className="text-center flex flex-col items-center">
//                 <div className="flex justify-center">
//                   <img
//                     className="w-[200px] h-[200px] rounded-full object-cover bg-white border-4 border-[#df0707] hover:border-[#ba0c0c] shadow-xl transition-all duration-300"
//                     src={member.image}
//                     alt={member.name}
//                   />
//                 </div>

//                 <div className="text-center mt-3 min-h-[70px]">
//                   <h3 className="font-bold text-white">{member.name}</h3>
//                   <p className="text-white">{member.role}</p>
//                 </div>

//                 <div className="flex justify-center gap-4 mt-4">
//                   <a
//                     href={member.facebook}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 rounded-full bg-[#980a0a] text-white hover:bg-[#df0707] hover:text-white transition duration-300"
//                   >
//                     <FaFacebookF size={20} />
//                   </a>

//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 rounded-full bg-[#980a0a] text-white hover:bg-[#df0707] hover:text-white transition duration-300"
//                   >
//                     <FaLinkedinIn size={20} />
//                   </a>

//                   <a
//                     href={member.twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 rounded-full bg-[#980a0a] text-white hover:bg-[#df0707] hover:text-white transition duration-300"
//                   >
//                     <FaTwitter size={20} />
//                   </a>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import CEO from "./BOD/CEO.jpg";
import Researcher from "./BOD/ahmedsir2.jpg";
import CPO from "./BOD/shakirJaber.jpg";

import "swiper/css";

const teamMembers = [
 
  {
    id: 1,
    name: "Ahmed AL-Rusan",
    role: "CEO",
    image: Researcher,
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 2,
    name: "Engr. Shiekh Rafat Bin Ali",
    role: "CTO",
    image: CEO,
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 3,
    name: "Shakir Jaber",
    role: "Sales Director",
    image: CPO,
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
];

const TeamSection = () => {
  return (
    <section className="mt-20 px-4 mb-10 bg-[#0B1026] text-white">
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl md:text-5xl text-[#00B4D8] leading-tight">
          Our Team Members
        </h2>
        <p className="max-w-3xl mx-auto text-[#F8FAFC] mt-5 text-lg leading-relaxed">
          We are a multidisciplinary engineering firm with over 20 years of
          expertise. We provide innovative solutions for our partners and
          clients.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={false}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="text-center flex flex-col items-center">
                <div className="flex justify-center">
                  <img
                    className="w-[200px] h-[200px] rounded-full object-cover bg-white border-4 border-[#00B4D8] hover:border-[#0089A8] shadow-xl transition-all duration-300"
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                <div className="text-center mt-3 min-h-[70px]">
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-[#F8FAFC]">{member.role}</p>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#0089A8] text-white hover:bg-[#00B4D8] hover:text-white transition duration-300"
                  >
                    <FaFacebookF size={20} />
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#0089A8] text-white hover:bg-[#00B4D8] hover:text-white transition duration-300"
                  >
                    <FaLinkedinIn size={20} />
                  </a>

                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#0089A8] text-white hover:bg-[#00B4D8] hover:text-white transition duration-300"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;