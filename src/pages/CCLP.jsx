// import React from "react";

// const CCLP = () => {
//   return (
//     <section id="pdaafrica" className="max-container w-full min-h-screen">
//       <div className="mt-28 ">
//         <h1 className="font-poppins font-bold text-4xl text-orange text-center">
//           Cocoa Communities Library Project
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default CCLP;

// import React from "react";

// const CCLP = () => {
//   return (
//     <section
//       id="pdaafrica"
//       className="max-container w-full min-h-screen bg-white"
//     >
//       {/* Hero Section */}
//       <div className="mt-28">
//         <h1 className="font-poppins font-bold text-4xl text-orange text-center">
//           Cocoa Communities Library Project
//         </h1>
//         <p className="text-gray-700 text-center mt-4 px-4 md:px-12">
//           A 2-year initiative by Participatory Development Associates (PDA) in
//           partnership with Magic Libraries Foundation. It aims to promote
//           reading literacy among children in cocoa-growing communities in Ghana.
//         </p>
//       </div>

//       {/* Quick Stats Section */}
//       <div className="py-12 bg-gray-100">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-gray-800 mb-8">
//           Quick Stats
//         </h2>
//         <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
//           <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
//             <h3 className="font-semibold text-xl text-blue-600">
//               Quick Stats 1
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 mt-4">
//               <li>
//                 1129 children participate in the reading clubs across 10 project
//                 communities.
//               </li>
//               <li>579 children attend weekly reading sessions.</li>
//               <li>148.7% increase in reading club membership since 2023.</li>
//               <li>Reading club attendance has increased by 34.99%.</li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg">
//             <h3 className="font-semibold text-xl text-blue-600">
//               Quick Stats 2
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 mt-4">
//               <li>
//                 Clubs meet 2 to 3 times weekly to manage large attendance.
//               </li>
//               <li>
//                 Upper primary students participate more than lower primary
//                 students.
//               </li>
//               <li>
//                 More female children are involved in the reading clubs than
//                 males.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Project Goals Section */}
//       <div className="py-12">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-orange mb-8">
//           Rationale for Reading Festival & Competitions
//         </h2>
//         <div className="max-w-5xl mx-auto px-4">
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed">
//             <li>
//               Ignite the interest of children toward reading and a love for
//               books.
//             </li>
//             <li>
//               Encourage reading for pleasure, reading diversely, and cognitive
//               development.
//             </li>
//             <li>
//               Boost children’s confidence, literacy skills, and creativity.
//             </li>
//             <li>
//               Engage local communities, Ghana Education Service, and other
//               stakeholders to support reading literacy activities.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Project Components Section */}
//       <div className="py-12 bg-gray-100">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-gray-800 mb-8">
//           Key Components of the Project
//         </h2>
//         <div className="max-w-5xl mx-auto px-4">
//           <ul className="list-disc list-inside text-gray-700 leading-relaxed">
//             <li>Renovation of 2 libraries in cocoa-growing communities.</li>
//             <li>
//               Establishing community reading clubs and weekly reading
//               activities.
//             </li>
//             <li>Purchasing and distributing 5000 books.</li>
//             <li>Providing "Library-in-a-Box" kits to communities.</li>
//             <li>Organizing reading competitions for children.</li>
//             <li>Engaging stakeholders for project sustainability.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Reading Competition Flow Section */}
//       <div className="py-12">
//         <h2 className="font-poppins font-semibold text-2xl text-center text-orange mb-8">
//           Reading Festival & Competitions Structure
//         </h2>
//         <div className="max-w-5xl mx-auto">
//           <p className="text-gray-700 text-center mb-8">
//             Schools within clusters 'A' and 'B' compete for the Reading Champion
//             position, inspiring students to achieve excellence in literacy.
//           </p>
//           {/* Simple flowchart */}
//           <div className="flex justify-center items-center gap-8">
//             <div className="bg-blue-200 p-4 rounded-lg shadow-md w-40 text-center">
//               Cluster 'A' - 5 Schools
//             </div>
//             <div className="bg-orange-200 p-4 rounded-lg shadow-md w-40 text-center">
//               Cluster 'B' - 5 Schools
//             </div>
//           </div>
//           <div className="text-center mt-8">
//             <span className="font-semibold text-lg">
//               1st & 2nd Place Schools Compete for Reading Champion
//             </span>
//             <div className="bg-yellow-200 p-4 mt-4 inline-block rounded-lg shadow-md">
//               Overall Winner
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4 mt-8">
//         <div className="text-center">
//           <p>© 2024 PDA Ghana | Cocoa Communities Library Project</p>
//           <a
//             href="https://pdaghana.com"
//             className="text-orange hover:underline"
//           >
//             www.pdaghana.com
//           </a>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default CCLP;

import React from "react";
import { FaBook, FaChild, FaSchool, FaChartLine } from "react-icons/fa"; // Icons
import { FiBox } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { competition, reading, cluster } from "../assets/images";
import QuickStats from "../components/QuickStats";

const CCLP = () => {
  return (
    <section
      id="pdaafrica"
      className="max-container w-full min-h-screen bg-white"
    >
      {/* Hero Section */}
      {/* <div className="mt-28 text-center animate-fade-in">
        <h1 className="font-poppins font-bold text-4xl text-orange">
          Cocoa Communities Library Project
        </h1>
        <p className="text-gray-700 mt-4 px-4 md:px-12">
          A 2-year initiative by Participatory Development Associates (PDA) in
          partnership with Magic Libraries Foundation. It aims to promote
          reading literacy among children in cocoa-growing communities in Ghana.
        </p>
        <div className="mt-8">
          <img
            src={reading}
            alt="Cocoa Communities"
            className="mx-auto rounded-lg shadow-lg w-11/12 md:w-8/12"
          />
        </div>
      </div> */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${reading})` }}
      >
        {/* Optional Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text Content */}
        <div className="relative flex items-end justify-center h-full pb-12 text-center animate-fade-in">
          <div className="text-white">
            <h1 className="font-poppins font-bold text-4xl text-orange">
              Cocoa Communities Library Project
            </h1>
            <p className="text-gray-300 mt-4 px-4 md:px-12">
              A 2-year initiative by Participatory Development Associates (PDA)
              in partnership with Magic Libraries Foundation. It aims to promote
              reading literacy among children in cocoa-growing communities in
              Ghana.
            </p>
          </div>
        </div>
      </div>
      {/* Quick Stats Section */}
      {/* <div className="py-12 bg-gray-100">
        <h2 className="font-poppins font-semibold text-2xl text-center text-gray-800 mb-8">
          Quick Stats
        </h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
          <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="font-semibold text-xl text-blue-600 flex items-center">
              <FaBook className="mr-2" /> Reading Clubs Participation
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                1129 children participate in the reading clubs across 10 project
                communities.
              </li>
              <li>579 children attend weekly reading sessions.</li>
              <li>148.7% increase in reading club membership since 2023.</li>
              <li>Reading club attendance has increased by 34.99%.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="font-semibold text-xl text-blue-600 flex items-center">
              <FaChild className="mr-2" /> Gender and Age Distribution
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                Clubs meet 2 to 3 times weekly to manage large attendance.
              </li>
              <li>
                Upper primary students participate more than lower primary
                students.
              </li>
              <li>
                More female children are involved in the reading clubs than
                males.
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <QuickStats />

      {/* Project Goals Section */}
      <div className="py-12">
        <h2 className="font-poppins font-semibold text-2xl text-center text-orange mb-8">
          Rationale for Reading Festival & Competitions
        </h2>
        <div className="grid grid-cols-2">
          <div className="px-4 ml-20 pt-10 animate-slide-in ">
            <ul className="list-disc list-inside text-gray-700 leading-relaxed font-poppins">
              <li>
                Ignite the interest of children toward reading and a love for
                books.
              </li>
              <li>
                Encourage reading for pleasure, reading diversely, and cognitive
                development.
              </li>
              <li>
                Boost children’s confidence, literacy skills, and creativity.
              </li>
              <li>
                Engage local communities, Ghana Education Service, and other
                stakeholders to support reading literacy activities.
              </li>
            </ul>
          </div>
          <img
            src={competition}
            alt="Reading Festival"
            className="mx-auto mt-8 rounded-lg shadow-lg w-11/12 md:w-8/12 animate-slide-in"
          />
        </div>
      </div>

      {/* Project Components Section */}
      <div className="py-12 bg-gray-100">
        <h2 className="font-poppins font-semibold text-2xl text-center text-gray-800 mb-8">
          Key Components of the Project
        </h2>
        <div className="max-w-5xl mx-auto px-4">
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li className="flex items-center">
              <FaSchool className="mr-2 text-orange" /> Renovation of 2
              libraries in cocoa-growing communities.
            </li>
            <li className="flex items-center mt-2">
              <IoIosPeople className="mr-2 text-orange" /> Establishing
              community reading clubs and weekly reading activities.
            </li>
            <li className="flex items-center mt-2">
              <FaBook className="mr-2 text-orange" /> Purchasing and
              distributing 5000 books.
            </li>
            <li className="flex items-center mt-2">
              <FiBox className="mr-2 text-orange" /> Providing
              "Library-in-a-Box" kits to communities.
            </li>
            <li className="flex items-center mt-2">
              <FaChartLine className="mr-2 text-orange" /> Organizing reading
              competitions for children.
            </li>
            <li className="flex items-center mt-2">
              <IoIosPeople className="mr-2 text-orange" /> Engaging stakeholders
              for project sustainability.
            </li>
          </ul>
        </div>
      </div>

      {/* Reading Competition Flow Section */}
      <div className="py-12">
        <h2 className="font-poppins font-semibold text-2xl text-center text-orange mb-8">
          Reading Festival & Competitions Structure
        </h2>
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-700 text-center mb-8">
            Schools within clusters 'A' and 'B' compete for the Reading Champion
            position, inspiring students to achieve excellence in literacy.
          </p>

          <div className="mt-8">
            <img
              src={cluster}
              alt="Cluster Winner"
              className="mx-auto rounded-lg shadow-lg w-11/12 md:w-8/12 "
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="text-center">
          <p>© 2024 PDA Ghana | Cocoa Communities Library Project</p>
          <a
            href="https://pdaghana.com"
            className="text-orange hover:underline"
          >
            www.pdaghana.com
          </a>
        </div>
      </footer>
    </section>
  );
};

export default CCLP;