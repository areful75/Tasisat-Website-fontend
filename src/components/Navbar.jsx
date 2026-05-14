// import React, { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import { NavLink } from "react-router";
// import logo from "./logo/tasisatlogo.jpg";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
// //https://i.ibb.co/PZYQX7Mq/white-Abbribation-of-logo.png
//   const navClass = ({ isActive }) =>
//     isActive
//       ? "text-[#df0707] whitespace-nowrap"
//       : "hover:text-[#df0707] transition duration-300 whitespace-nowrap";

//   return (
//     <nav className="w-full bg-[#0b0000]/80 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <NavLink to="/" className="flex items-center">
//             <img
//               src={logo}
//            // src="https://i.ibb.co/PZYQX7Mq/white-Abbribation-of-logo.png"
//               alt="UE Logo"
//               className="h-12 w-auto"
//             />
//           </NavLink>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex items-center gap-6 text-white font-medium">

//             <li><NavLink to="/" className={navClass}>Home</NavLink></li>
//             <li><NavLink to="/about" className={navClass}>About</NavLink></li>

//             {/* SERVICE */}
//             <li
//               className="relative"
//               onMouseEnter={() => setServiceDropdownOpen(true)}
//               onMouseLeave={() => setServiceDropdownOpen(false)}
//             >
//               <button className="flex items-center gap-1 hover:text-[#df0707] whitespace-nowrap">
//                 Service <ChevronDown size={18} />
//               </button>

//               <div className={`absolute top-10 left-0 w-64 bg-[#0b0000] shadow-xl rounded-xl overflow-hidden transition-all duration-300 ${
//                 serviceDropdownOpen
//                   ? "opacity-100 visible translate-y-0"
//                   : "opacity-0 invisible -translate-y-2"
//               }`}>
//                 <NavLink to="/industrialsolution" className="block px-5 py-3 hover:bg-[#780909] hover:text-[#df0707]">
//                   Industrial Solution
//                 </NavLink>
//                 <NavLink to="/commertialsolution" className="block px-5 py-3 hover:bg-[#780909] hover:text-[#df0707]">
//                   Commercial Solution
//                 </NavLink>
//                 <NavLink to="/residentialsolution" className="block px-5 py-3 hover:bg-[#780909] hover:text-[#df0707]">
//                   Residential Solution
//                 </NavLink>
//               </div>
//             </li>

//             <li><NavLink to="/projects" className={navClass}>Projects</NavLink></li>
//             <li><NavLink to="/rnd" className={navClass}>R&D</NavLink></li>

//             <li><NavLink to="/product" className={navClass}>Products</NavLink></li>
//             <li><NavLink to="/certification" className={navClass}>Certification</NavLink></li>
//             <li><NavLink to="/contract" className={navClass}>Contact</NavLink></li>
//             <li><NavLink to="/team" className={navClass}>UE Team Member</NavLink></li>

//           </ul>

//           {/* Desktop Social */}
//           <div className="hidden lg:flex items-center gap-3 mr-4">

//             <a href="https://www.facebook.com/UlteriorEngineeringIntl" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#780909] text-[#0b0000] hover:bg-[#df0707] hover:text-[#0b0000] transition">
//               <FaFacebookF />
//             </a>

//             <a href="https://www.linkedin.com/in/mdarefulamin/" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#780909] text-[#0b0000] hover:bg-[#df0707] hover:text-[#0b0000] transition">
//               <FaLinkedinIn />
//             </a>

//             <a href="https://www.instagram.com/the_areful_omi/" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#780909] text-[#0b0000] hover:bg-[#df0707] hover:text-[#0b0000]">
//               <FaInstagram />
//             </a>

//             <a href="https://www.youtube.com/@ulteriorengineeringltd/featured" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#780909] text-[#0b0000] hover:bg-[#df0707] hover:text-[#0b0000] transition">
//               <FaYoutube />
//             </a>

//           </div>

//           {/* Mobile Button */}
//           <button
//             className="lg:hidden text-[#df0707]"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div className={`lg:hidden bg-[#0b0000] shadow-md overflow-hidden transition-all duration-300 ${
//         mobileMenuOpen ? "max-h-[700px] py-4" : "max-h-0"
//       }`}>
//         <ul className="flex flex-col px-6 space-y-3 text-[#ba0c0c] font-medium">

//           <li><NavLink to="/" className="block hover:text-[#df0707]">Home</NavLink></li>
//           <li><NavLink to="/about" className="block hover:text-[#df0707]">About</NavLink></li>
//           <li><NavLink to="/projects" className="block hover:text-[#df0707]">Projects</NavLink></li>
//           <li><NavLink to="/rnd" className="block hover:text-[#df0707]">R&D</NavLink></li>

//           <li><NavLink to="/product" className="block hover:text-[#df0707]">Products</NavLink></li>
//           <li><NavLink to="/certification" className="block hover:text-[#df0707]">Certification</NavLink></li>
//           <li><NavLink to="/contract" className="block hover:text-[#df0707]">Contact</NavLink></li>
//           <li><NavLink to="/team" className="block hover:text-[#df0707]">UE Team Member</NavLink></li>

//           {/* Social */}
//           <li className="pt-3">
//             <div className="flex gap-4 text-[#df0707]">
//               <a href="https://www.facebook.com/UlteriorEngineeringIntl" target="_blank"><FaFacebookF /></a>
//               <a href="https://www.linkedin.com/in/mdarefulamin/" target="_blank"><FaLinkedinIn /></a>
//               <a href="https://www.instagram.com/the_areful_omi/" target="_blank"><FaInstagram /></a>
//               <a href="https://www.youtube.com/@ulteriorengineeringltd/featured" target="_blank"><FaYoutube /></a>
//             </div>
//           </li>

//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";
// import { NavLink } from "react-router";
// import logo from "./logo/tasisatlogo2.png";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

//   const navClass = ({ isActive }) =>
//     isActive
//       ? "text-[#00B4D8] whitespace-nowrap"
//       : "hover:text-[#00B4D8] transition duration-300 whitespace-nowrap";

//   return (
//     <nav className="w-full bg-[#0B1026]/90 shadow-md sticky top-0 z-50 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <NavLink to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="TASISAT Logo"
//               className="h-12 w-auto"
//             />
//           </NavLink>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex items-center gap-6 text-[#F8FAFC] font-medium">

//             <li><NavLink to="/" className={navClass}>Home</NavLink></li>
//             <li><NavLink to="/about" className={navClass}>About</NavLink></li>

//             {/* SERVICE */}
//             <li
//               className="relative"
//               onMouseEnter={() => setServiceDropdownOpen(true)}
//               onMouseLeave={() => setServiceDropdownOpen(false)}
//             >
//               <button className="flex items-center gap-1 hover:text-[#00B4D8] whitespace-nowrap transition duration-300">
//                 Service <ChevronDown size={18} />
//               </button>

//               <div className={`absolute top-10 left-0 w-64 bg-[#0B1026] border border-[#0089A8]/30 shadow-xl rounded-xl overflow-hidden transition-all duration-300 ${
//                 serviceDropdownOpen
//                   ? "opacity-100 visible translate-y-0"
//                   : "opacity-0 invisible -translate-y-2"
//               }`}>
//                 <NavLink to="/industrialsolution" className="block px-5 py-3 text-[#F8FAFC] hover:bg-[#0089A8]/20 hover:text-[#00B4D8] transition">
//                   Industrial Solution
//                 </NavLink>
//                 <NavLink to="/commertialsolution" className="block px-5 py-3 text-[#F8FAFC] hover:bg-[#0089A8]/20 hover:text-[#00B4D8] transition">
//                   Commercial Solution
//                 </NavLink>
//                 <NavLink to="/residentialsolution" className="block px-5 py-3 text-[#F8FAFC] hover:bg-[#0089A8]/20 hover:text-[#00B4D8] transition">
//                   Residential Solution
//                 </NavLink>
//               </div>
//             </li>

//             <li><NavLink to="/projects" className={navClass}>Projects</NavLink></li>
//             <li><NavLink to="/rnd" className={navClass}>R&D</NavLink></li>

//             <li><NavLink to="/product" className={navClass}>Products</NavLink></li>
//             <li><NavLink to="/certification" className={navClass}>Certification</NavLink></li>
//             <li><NavLink to="/contract" className={navClass}>Contact</NavLink></li>
//             <li><NavLink to="/team" className={navClass}>Tasisat Members</NavLink></li>

//           </ul>

//           {/* Desktop Social */}
//           <div className="hidden lg:flex items-center gap-3 mr-4">

//             <a href="https://www.facebook.com/UlteriorEngineeringIntl" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
//               <FaFacebookF />
//             </a>

//             <a href="https://www.linkedin.com/in/mdarefulamin/" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
//               <FaLinkedinIn />
//             </a>

//             <a href="https://www.instagram.com/the_areful_omi/" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
//               <FaInstagram />
//             </a>

//             <a href="https://www.youtube.com/@ulteriorengineeringltd/featured" target="_blank" rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
//               <FaYoutube />
//             </a>

//           </div>

//           {/* Mobile Button */}
//           <button
//             className="lg:hidden text-[#00B4D8]"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div className={`lg:hidden bg-[#0B1026] border-t border-[#0089A8]/30 shadow-md overflow-hidden transition-all duration-300 ${
//         mobileMenuOpen ? "max-h-[700px] py-4" : "max-h-0"
//       }`}>
//         <ul className="flex flex-col px-6 space-y-3 text-[#F8FAFC] font-medium">

//           <li><NavLink to="/" className="block hover:text-[#00B4D8] transition">Home</NavLink></li>
//           <li><NavLink to="/about" className="block hover:text-[#00B4D8] transition">About</NavLink></li>
//           <li><NavLink to="/projects" className="block hover:text-[#00B4D8] transition">Projects</NavLink></li>
//           <li><NavLink to="/rnd" className="block hover:text-[#00B4D8] transition">R&D</NavLink></li>

//           <li><NavLink to="/product" className="block hover:text-[#00B4D8] transition">Products</NavLink></li>
//           <li><NavLink to="/certification" className="block hover:text-[#00B4D8] transition">Certification</NavLink></li>
//           <li><NavLink to="/contract" className="block hover:text-[#00B4D8] transition">Contact</NavLink></li>
//           <li><NavLink to="/team" className="block hover:text-[#00B4D8] transition">UE Team Member</NavLink></li>

//           {/* Social */}
//           <li className="pt-3">
//             <div className="flex gap-4 text-[#00B4D8]">
//               <a href="https://www.facebook.com/UlteriorEngineeringIntl" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//               <a href="https://www.linkedin.com/in/mdarefulamin/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//               <a href="https://www.instagram.com/the_areful_omi/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//               <a href="https://www.youtube.com/@ulteriorengineeringltd/featured" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
//             </div>
//           </li>

//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "./logo/tasisatlogo2.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  const projectItems = [
    // "Electrical",
    "Solar Energy",
    "Automation",
    "MEP",
    "Lighting Control",
    // "Solar PV",
    // "Solar Water Heating",
    // "MEP",
    // "HVAC",
    // "Street Light",
    // "Fire Alarm",
    "BMS",
    // "Solar Pumping",
    // "Mechanical",
    // "HVAC and Electrical",
    // "Solar Thermodynamic",
    // "Solar-Energy",
    // "Plumbing",
    "FM200",
    // "Piping and Landscape",
    "Fire Fighting System",
    // "Electrical Solar",
    // "Solar Water Heating",
  ];

  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#00B4D8] whitespace-nowrap"
      : "hover:text-[#00B4D8] transition duration-300 whitespace-nowrap";

  return (
    <nav className="w-full bg-[#0B1026]/90 shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="TASISAT Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-[#F8FAFC] font-medium">
            <li><NavLink to="/" className={navClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={navClass}>About</NavLink></li>

            {/* SERVICE */}
            <li
              className="relative"
              onMouseEnter={() => setServiceDropdownOpen(true)}
              onMouseLeave={() => setServiceDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#00B4D8] whitespace-nowrap transition duration-300">
                Service <ChevronDown size={18} />
              </button>

              <div className={`absolute top-10 left-0 w-64 bg-[#0B1026] border border-[#0089A8]/30 shadow-xl rounded-xl overflow-hidden transition-all duration-300 ${
                serviceDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}>
                <NavLink to="/industrialsolution" className="block px-5 py-3 text-[#F8FAFC] hover:bg-[#0089A8]/20 hover:text-[#00B4D8] transition">
                  Industrial Solution
                </NavLink>
                <NavLink to="/commertialsolution" className="block px-5 py-3 text-[#F8FAFC] hover:bg-[#0089A8]/20 hover:text-[#00B4D8] transition">
                  Commercial Solution
                </NavLink>
                <NavLink to="/residentialsolution" className="block px-5 py-3 text-[#F8FAFC] hover:bg-[#0089A8]/20 hover:text-[#00B4D8] transition">
                  Residential Solution
                </NavLink>
              </div>
            </li>

            {/* PROJECTS */}
            <li
              className="relative"
              onMouseEnter={() => setProjectDropdownOpen(true)}
              onMouseLeave={() => setProjectDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#00B4D8] whitespace-nowrap transition duration-300">
                Projects <ChevronDown size={18} />
              </button>

              <div className={`absolute top-10 left-0 w-72 max-h-[500px] overflow-y-auto bg-[#0B1026] border border-[#0089A8]/30 shadow-xl rounded-xl transition-all duration-300 ${
                projectDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}>
                {projectItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={`/projects/${item.toLowerCase().replaceAll(" ", "-")}`}
                    className="block px-5 py-3 text-[#F8FAFC] hover:bg-[#0089A8]/20 hover:text-[#00B4D8] transition"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </li>

            <li><NavLink to="/rnd" className={navClass}>R&D</NavLink></li>
            <li><NavLink to="/product" className={navClass}>Products</NavLink></li>
            <li><NavLink to="/certification" className={navClass}>Certification</NavLink></li>
            <li><NavLink to="/contract" className={navClass}>Contact</NavLink></li>
            <li><NavLink to="/team" className={navClass}>Tasisat Members</NavLink></li>
          </ul>

          {/* Desktop Social */}
          <div className="hidden lg:flex items-center gap-3 mr-4">
            <a href="https://www.facebook.com/UlteriorEngineeringIntl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
              <FaFacebookF />
            </a>

            <a href="https://www.linkedin.com/in/mdarefulamin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
              <FaLinkedinIn />
            </a>

            <a href="https://www.instagram.com/the_areful_omi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
              <FaInstagram />
            </a>

            <a href="https://www.youtube.com/@ulteriorengineeringltd/featured" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0089A8]/20 text-[#00B4D8] border border-[#0089A8]/40 hover:bg-[#00B4D8] hover:text-[#0B1026] transition">
              <FaYoutube />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-[#00B4D8]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden bg-[#0B1026] border-t border-[#0089A8]/30 shadow-md overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? "max-h-[1200px] py-4" : "max-h-0"
      }`}>
        <ul className="flex flex-col px-6 space-y-3 text-[#F8FAFC] font-medium">
          <li><NavLink to="/" className="block hover:text-[#00B4D8] transition">Home</NavLink></li>
          <li><NavLink to="/about" className="block hover:text-[#00B4D8] transition">About</NavLink></li>

          {/* Mobile Service */}
          <li>
            <p className="text-[#00B4D8] font-semibold">Service</p>
            <div className="pl-4 mt-2 space-y-2">
              <NavLink to="/industrialsolution" className="block hover:text-[#00B4D8] transition">
                Industrial Solution
              </NavLink>
              <NavLink to="/commertialsolution" className="block hover:text-[#00B4D8] transition">
                Commercial Solution
              </NavLink>
              <NavLink to="/residentialsolution" className="block hover:text-[#00B4D8] transition">
                Residential Solution
              </NavLink>
            </div>
          </li>

          {/* Mobile Projects */}
          <li>
            <p className="text-[#00B4D8] font-semibold">Projects</p>
            <div className="pl-4 mt-2 space-y-2 max-h-[300px] overflow-y-auto">
              {projectItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={`/projects/${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="block hover:text-[#00B4D8] transition"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </li>

          <li><NavLink to="/rnd" className="block hover:text-[#00B4D8] transition">R&D</NavLink></li>
          <li><NavLink to="/product" className="block hover:text-[#00B4D8] transition">Products</NavLink></li>
          <li><NavLink to="/certification" className="block hover:text-[#00B4D8] transition">Certification</NavLink></li>
          <li><NavLink to="/contract" className="block hover:text-[#00B4D8] transition">Contact</NavLink></li>
          <li><NavLink to="/team" className="block hover:text-[#00B4D8] transition">UE Team Member</NavLink></li>

          {/* Social */}
          <li className="pt-3">
            <div className="flex gap-4 text-[#00B4D8]">
              <a href="https://www.facebook.com/UlteriorEngineeringIntl" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/mdarefulamin/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/the_areful_omi/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/@ulteriorengineeringltd/featured" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;