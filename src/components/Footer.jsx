// // import React from "react";
// // import { Link } from "react-router";
// // import {
// //   FaFacebookF,
// //   FaLinkedinIn,
// //   FaPhoneAlt,
// //   FaEnvelope,
// //   FaMapMarkerAlt,
// //   FaGlobe,
// // } from "react-icons/fa";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#0b0000] text-white border-t border-[#780909] mt-16">
// //       <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

// //           {/* Company Info */}
// //           <div>
// //             <h2 className="text-xl font-bold text-[#df0707] mb-4">
// //               Ulterior Engineering
// //             </h2>

// //             <p className="text-gray-300 text-sm leading-6 mb-4">
// //               Professional engineering solutions, technical training, automation,
// //               industrial services, and career-focused development.
// //             </p>

// //             <div className="flex items-center gap-3 mt-4">
// //               <a
// //                 href="https://facebook.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="w-10 h-10 rounded-full border border-[#780909] flex items-center justify-center hover:bg-[#df0707] transition"
// //               >
// //                 <FaFacebookF />
// //               </a>

// //               <a
// //                 href="https://linkedin.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="w-10 h-10 rounded-full border border-[#780909] flex items-center justify-center hover:bg-[#df0707] transition"
// //               >
// //                 <FaLinkedinIn />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="text-lg font-semibold text-[#df0707] mb-4">
// //               Quick Links
// //             </h3>

// //             <ul className="space-y-3 text-sm text-gray-300">
// //               <li><Link to="/" className="hover:text-[#df0707]">Home</Link></li>
// //               <li><Link to="/about" className="hover:text-[#df0707]">About</Link></li>
// //               <li><Link to="/service" className="hover:text-[#df0707]">Services</Link></li>
// //               <li><Link to="/projects" className="hover:text-[#df0707]">Projects</Link></li>
// //               <li><Link to="/ue-club" className="hover:text-[#df0707]">UE Club</Link></li>
// //               <li><Link to="/contact" className="hover:text-[#df0707]">Contact</Link></li>
// //             </ul>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h3 className="text-lg font-semibold text-[#df0707] mb-4">
// //               Contact Info
// //             </h3>

// //             <div className="space-y-4 text-sm text-gray-300">

// //               <p className="flex items-start gap-3">
// //                 <FaPhoneAlt className="text-[#df0707] mt-1" />
// //                 <span>
// //                   <a href="tel:+8801818988959" className="hover:text-[#df0707]">+8801818988959</a><br/>
// //                   <a href="tel:+8801638316427" className="hover:text-[#df0707]">+8801638316427</a><br/>
// //                   <a href="tel:+8801972484608" className="hover:text-[#df0707]">+8801972484608</a><br/>
// //                   <a href="tel:+8801832237811" className="hover:text-[#df0707]">+8801832237811</a>
// //                 </span>
// //               </p>

// //               <p className="flex items-start gap-3 break-all">
// //                 <FaEnvelope className="text-[#df0707] mt-1" />
// //                 <span>
// //                   <a href="mailto:info@ulterior.com.bd" className="hover:text-[#df0707]">info@ulterior.com.bd</a><br/>
// //                   <a href="mailto:admin@ulteriorengineering.com" className="hover:text-[#df0707]">admin@ulteriorengineering.com</a><br/>
// //                   <a href="mailto:ultrbd@gmail.com" className="hover:text-[#df0707]">ultrbd@gmail.com</a>
// //                 </span>
// //               </p>

// //               <p className="flex items-start gap-3 break-all">
// //                 <FaGlobe className="text-[#df0707] mt-1" />
// //                 <span>
// //                   <a href="https://uehitech.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#df0707]">
// //                     uehitech.com
// //                   </a>
// //                   <br />
// //                   <a href="https://ueenergycontrol.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#df0707]">
// //                     ueenergycontrol.com
// //                   </a>
// //                   <br />
// //                   <a href="https://ulteriorengineering.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#df0707]">
// //                     ulteriorengineering.com
// //                   </a>
// //                 </span>
// //               </p>
// //             </div>
// //           </div>

// //           {/* Branches */}
// //           <div>
// //             <h3 className="text-lg font-semibold text-[#df0707] mb-4">
// //               Our Branches
// //             </h3>

// //             <div className="space-y-4 text-sm text-gray-300">
// //               <p className="flex items-start gap-3">
// //                 <FaMapMarkerAlt className="text-[#df0707] mt-1" />
// //                 <span>
// //                   <span className="font-semibold text-white">Dhaka:</span> Alook Tower, Mohakhali
// //                 </span>
// //               </p>

// //               <p className="flex items-start gap-3">
// //                 <FaMapMarkerAlt className="text-[#df0707] mt-1" />
// //                 <span>
// //                   <span className="font-semibold text-white">Chattogram:</span> O.R. Nizam Road
// //                 </span>
// //               </p>

// //               <p className="flex items-start gap-3">
// //                 <FaMapMarkerAlt className="text-[#df0707] mt-1" />
// //                 <span>
// //                   <span className="font-semibold text-white">Gazipur:</span> Joydebpur
// //                 </span>
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom */}
// //         <div className="border-t border-[#780909] mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
// //           <p>© {new Date().getFullYear()} Ulterior Engineering. All rights reserved.</p>
// //           <p>Designed for engineering, innovation, and growth.</p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import React from "react";
// import { Link } from "react-router";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaGlobe,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0B1026] text-white border-t border-[#0089A8] mt-16">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//           {/* Company Info */}
//           <div>
//             <h2 className="text-xl font-bold text-[#00B4D8] mb-4">
//               Ulterior Engineering
//             </h2>

//             <p className="text-gray-300 text-sm leading-6 mb-4">
//               Professional engineering solutions, technical training, automation,
//               industrial services, and career-focused development.
//             </p>

//             <div className="flex items-center gap-3 mt-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full border border-[#0089A8] flex items-center justify-center hover:bg-[#00B4D8] transition"
//               >
//                 <FaFacebookF />
//               </a>

//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full border border-[#0089A8] flex items-center justify-center hover:bg-[#00B4D8] transition"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#00B4D8] mb-4">
//               Quick Links
//             </h3>

//             <ul className="space-y-3 text-sm text-gray-300">
//               <li><Link to="/" className="hover:text-[#00B4D8]">Home</Link></li>
//               <li><Link to="/about" className="hover:text-[#00B4D8]">About</Link></li>
//               <li><Link to="/service" className="hover:text-[#00B4D8]">Services</Link></li>
//               <li><Link to="/projects" className="hover:text-[#00B4D8]">Projects</Link></li>
//               <li><Link to="/contact" className="hover:text-[#00B4D8]">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#00B4D8] mb-4">
//               Contact Info
//             </h3>

//             <div className="space-y-4 text-sm text-gray-300">

//               <p className="flex items-start gap-3">
//                 <FaPhoneAlt className="text-[#00B4D8] mt-1" />
//                 <span>
//                   <a href="tel:+8801818988959" className="hover:text-[#00B4D8]">+8801818988959</a><br/>
//                   <a href="tel:+8801638316427" className="hover:text-[#00B4D8]">+8801638316427</a><br/>
//                   <a href="tel:+8801972484608" className="hover:text-[#00B4D8]">+8801972484608</a><br/>
//                   <a href="tel:+8801832237811" className="hover:text-[#00B4D8]">+8801832237811</a>
//                 </span>
//               </p>

//               <p className="flex items-start gap-3 break-all">
//                 <FaEnvelope className="text-[#00B4D8] mt-1" />
//                 <span>
//                   <a href="mailto:info@ulterior.com.bd" className="hover:text-[#00B4D8]">info@ulterior.com.bd</a><br/>
//                   <a href="mailto:admin@ulteriorengineering.com" className="hover:text-[#00B4D8]">admin@ulteriorengineering.com</a><br/>
//                   <a href="mailto:ultrbd@gmail.com" className="hover:text-[#00B4D8]">ultrbd@gmail.com</a>
//                 </span>
//               </p>

//               <p className="flex items-start gap-3 break-all">
//                 <FaGlobe className="text-[#00B4D8] mt-1" />
//                 <span>
//                   <a href="https://uehitech.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8]">
//                     uehitech.com
//                   </a>
//                   <br />
//                   <a href="https://ueenergycontrol.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8]">
//                     ueenergycontrol.com
//                   </a>
//                   <br />
//                   <a href="https://ulteriorengineering.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8]">
//                     ulteriorengineering.com
//                   </a>
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* Branches */}
//           <div>
//             <h3 className="text-lg font-semibold text-[#00B4D8] mb-4">
//               Our Branches
//             </h3>

//             <div className="space-y-4 text-sm text-gray-300">
//               <p className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="text-[#00B4D8] mt-1" />
//                 <span>
//                   <span className="font-semibold text-white">Dhaka:</span> Alook Tower, Mohakhali
//                 </span>
//               </p>

//               <p className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="text-[#00B4D8] mt-1" />
//                 <span>
//                   <span className="font-semibold text-white">Chattogram:</span> O.R. Nizam Road
//                 </span>
//               </p>

//               <p className="flex items-start gap-3">
//                 <FaMapMarkerAlt className="text-[#00B4D8] mt-1" />
//                 <span>
//                   <span className="font-semibold text-white">Gazipur:</span> Joydebpur
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-[#0089A8] mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
//           <p>© {new Date().getFullYear()} Ulterior Engineering. All rights reserved.</p>
//           <p>Designed for engineering, innovation, and growth.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1026] text-white border-t border-[#0089A8] mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-[#00B4D8] mb-4">
              Ulterior Engineering
            </h2>

            <p className="text-gray-300 text-sm leading-6 mb-4">
              Professional engineering solutions, technical training, automation,
              industrial services, and career-focused development.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#0089A8] flex items-center justify-center hover:bg-[#00B4D8] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#0089A8] flex items-center justify-center hover:bg-[#00B4D8] transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#00B4D8] mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-[#00B4D8]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#00B4D8]">About</Link></li>
              <li><Link to="/service" className="hover:text-[#00B4D8]">Services</Link></li>
              <li><Link to="/projects" className="hover:text-[#00B4D8]">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-[#00B4D8]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#00B4D8] mb-4">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm text-gray-300">

              <p className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#00B4D8] mt-1" />
                <span>
                  <a href="tel:+8801818988959" className="hover:text-[#00B4D8]">+8801818988959</a><br/>
                  <a href="tel:+8801638316427" className="hover:text-[#00B4D8]">+8801638316427</a><br/>
                  <a href="tel:+8801972484608" className="hover:text-[#00B4D8]">+8801972484608</a><br/>
                  <a href="tel:+8801832237811" className="hover:text-[#00B4D8]">+8801832237811</a>
                </span>
              </p>

              <p className="flex items-start gap-3 break-all">
                <FaEnvelope className="text-[#00B4D8] mt-1" />
                <span>
                  <a href="mailto:shakir@tasisatsolar.com" className="hover:text-[#00B4D8]">shakir@tasisatsolar.com</a><br/>
                  
                </span>
              </p>

              <p className="flex items-start gap-3 break-all">
                <FaGlobe className="text-[#00B4D8] mt-1" />
                {/* <span>
                  <a href="https://uehitech.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8]">
                    uehitech.com
                  </a>
                  <br />
                  <a href="https://ueenergycontrol.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8]">
                    ueenergycontrol.com
                  </a>
                  <br />
                  <a href="https://ulteriorengineering.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B4D8]">
                    ulteriorengineering.com
                  </a>
                </span> */}
              </p>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-lg font-semibold text-[#00B4D8] mb-4">
              Our Branches
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#00B4D8] mt-1" />
                <span>
                  <span className="font-semibold text-white">Riyadh Branch:</span> Al Hussein Ibn Ali, Al Izdihar, Riyadh 12485
                </span>
              </p>

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#00B4D8] mt-1" />
                <span>
                  <span className="font-semibold text-white">AlMadinah Branch:</span> Wadi Bthan, Ar Ranuna Dist., Madinah 42392
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#0089A8] mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Ulterior Engineering. All rights reserved.</p>
          <p>Designed for engineering, innovation, and growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;