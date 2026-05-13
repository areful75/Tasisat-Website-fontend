// import React, { useEffect, useState } from "react";
// import { FaProjectDiagram, FaUsers, FaSmile, FaTrophy } from "react-icons/fa";

// const statsData = [
//   {
//     title: "Successful Projects",
//     count: 500,
//     icon: <FaProjectDiagram className="text-5xl text-white" />,
//     bgColor: "bg-[#780909]",
//   },
//   {
//     title: "Member",
//     count: 10000,
//     icon: <FaUsers className="text-5xl text-white" />,
//     bgColor: "bg-[#780909]",
//   },
//   {
//     title: "Satisfied Clients",
//     count: 70,
//     icon: <FaSmile className="text-5xl text-white" />,
//     bgColor: "bg-[#780909]",
//   },
//   {
//     title: "Achievement",
//     count: 15,
//     icon: <FaTrophy className="text-5xl text-white" />,
//     bgColor: "bg-[#780909]",
//   },
// ];

// const StatsSection = () => {
//   const [counts, setCounts] = useState(statsData.map(() => 0));

//   useEffect(() => {
//     const intervals = statsData.map((stat, idx) => {
//       const increment = Math.ceil(stat.count / 100);
//       return setInterval(() => {
//         setCounts((prev) => {
//           const newCounts = [...prev];
//           if (newCounts[idx] < stat.count) {
//             newCounts[idx] += increment;
//             if (newCounts[idx] > stat.count) newCounts[idx] = stat.count;
//           }
//           return newCounts;
//         });
//       }, 20);
//     });

//     return () => intervals.forEach((i) => clearInterval(i));
//   }, []);

//   return (
//     <section className="py-24 bg-[#0b0000]">
//       <div className="px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {statsData.map((stat, idx) => (
//           <div
//             key={idx}
//             className={`${stat.bgColor} p-6 rounded-2xl flex flex-col items-center justify-center text-center text-white shadow-lg transition duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer`}
//           >
//             <div className="mb-4">{stat.icon}</div>
//             <h3 className="text-4xl font-bold">{counts[idx]}+</h3>
//             <p className="mt-2 font-medium">{stat.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import React, { useEffect, useState } from "react";
import { FaProjectDiagram, FaUsers, FaSmile, FaTrophy } from "react-icons/fa";

const statsData = [
  {
    title: "Successful Projects",
    count: 500,
    icon: <FaProjectDiagram className="text-5xl text-white" />,
    bgColor: "bg-[#0089A8]",
  },
  {
    title: "Member",
    count: 10000,
    icon: <FaUsers className="text-5xl text-white" />,
    bgColor: "bg-[#0089A8]",
  },
  {
    title: "Satisfied Clients",
    count: 70,
    icon: <FaSmile className="text-5xl text-white" />,
    bgColor: "bg-[#0089A8]",
  },
  {
    title: "Achievement",
    count: 15,
    icon: <FaTrophy className="text-5xl text-white" />,
    bgColor: "bg-[#0089A8]",
  },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, idx) => {
      const increment = Math.ceil(stat.count / 100);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.count) {
            newCounts[idx] += increment;
            if (newCounts[idx] > stat.count) newCounts[idx] = stat.count;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className="py-24 bg-[#0B1026]">
      <div className="px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className={`${stat.bgColor} p-6 rounded-2xl flex flex-col items-center justify-center text-center text-white shadow-lg shadow-[#00B4D8]/25 transition duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer`}
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-4xl font-bold">{counts[idx]}+</h3>
            <p className="mt-2 font-medium">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;