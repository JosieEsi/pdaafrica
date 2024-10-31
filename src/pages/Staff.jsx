// import React from "react";
// import { annabelle, alex, ampah, edem, kamil, raymond } from "../assets/images";

// const Staff = () => {
//   return (
//     <section id="staff" className="max-container w-full min-h-screen">
//       <div className="mt-28">
//         <h1 className="font-poppins font-bold text-4xl text-orange text-center">
//           Staff
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default Staff;

// import React from "react";
// import { annabelle, alex, ampah, edem, kamil, raymond } from "../assets/images";
// import

// const Staff = () => {
//   return (
//     <section id="staff" className="max-container w-full min-h-screen">
//       <div className="mt-28 text-center">
//         <h1 className="font-poppins font-bold text-4xl text-orange">STAFF</h1>
//       </div>

//       <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 lg:px-0">
//         {/* First row */}
//         <div className="flex flex-col items-center">
//           <img src={edem} alt="Edem Agbe" className="h-32 w-32 rounded-full" />
//           <h2 className="font-poppins font-bold text-lg mt-4">EDEM AGBE</h2>
//           <p className="font-poppins text-base">Managing Director</p>
//           <a href="#" className="text-orange font-bold text-sm mt-2">
//             Read More &gt;
//           </a>
//         </div>

//         <div className="flex flex-col items-center">
//           <img
//             src={alex}
//             alt="Alexander Afram"
//             className="h-32 w-32 rounded-full"
//           />
//           <h2 className="font-poppins font-bold text-lg mt-4">
//             ALEXANDER AFRAM
//           </h2>
//           <p className="font-poppins text-base">
//             Research, Evaluation & Learning Manager
//           </p>
//           <a href="#" className="text-orange font-bold text-sm mt-2">
//             Read More &gt;
//           </a>
//         </div>

//         {/* Second row */}
//         <div className="lg:col-span-3 flex justify-center items-center mt-10 mb-10 bg-gray-100 rounded-2xl py-10">
//           <div className="flex flex-col items-center">
//             <img
//               src={annabelle}
//               alt="Annabelle Osei"
//               className="h-32 w-32 rounded-full"
//             />
//             <h2 className="font-poppins font-bold text-lg mt-4">
//               ANNABELLE Y. OSEI
//             </h2>
//             <p className="font-poppins text-base">Director of Operations</p>
//             <a href="#" className="text-orange font-bold text-sm mt-2">
//               Read More &gt;
//             </a>
//           </div>

//           <div className="flex flex-col items-center mx-10">
//             <img
//               src={ampah}
//               alt="Victoria Ampah"
//               className="h-32 w-32 rounded-full"
//             />
//             <h2 className="font-poppins font-bold text-lg mt-4">
//               VICTORIA AMPAH
//             </h2>
//             <p className="font-poppins text-base">Senior Finance Officer</p>
//             <a href="#" className="text-orange font-bold text-sm mt-2">
//               Read More &gt;
//             </a>
//           </div>
//         </div>

//         {/* Third row */}
//         <div className="flex flex-col items-center">
//           <img
//             src={kamil}
//             alt="Kamil Abdul Salam"
//             className="h-32 w-32 rounded-full"
//           />
//           <h2 className="font-poppins font-bold text-lg mt-4">
//             KAMIL ABDUL SALAM
//           </h2>
//           <p className="font-poppins text-base">
//             Assistant Project Coordinator, PDA Africa
//           </p>
//           <a href="#" className="text-orange font-bold text-sm mt-2">
//             Read More &gt;
//           </a>
//         </div>

//         <div className="flex flex-col items-center">
//           <img
//             src={raymond}
//             alt="Raymond Hodor"
//             className="h-32 w-32 rounded-full"
//           />
//           <h2 className="font-poppins font-bold text-lg mt-4">RAYMOND HODOR</h2>
//           <p className="font-poppins text-base">
//             Research, Evaluation & Learning Manager
//           </p>
//           <a href="#" className="text-orange font-bold text-sm mt-2">
//             Read More &gt;
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Staff;

// import React from "react";
// import { annabelle, alex, ampah, edem, kamil, raymond } from "../assets/images";

// const Staff = () => {
//   return (
//     <section id="staff" className="max-container w-full min-h-screen">
//       <div className="mt-28 text-center">
//         <h1 className="font-poppins font-bold text-4xl text-orange mb-16">
//           STAFF
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-y-14 place-items-center px-4 lg:px-20">
//         {/* First Row */}
//         <div className="flex items-center space-x-6 lg:space-x-8">
//           <img src={edem} alt="Edem Agbe" className="h-36 w-36 rounded-full" />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">EDEM AGBE</h2>
//             <p className="font-poppins text-base">Managing Director</p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center space-x-6 lg:space-x-8">
//           <img
//             src={alex}
//             alt="Alexander Afram"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">ALEXANDER AFRAM</h2>
//             <p className="font-poppins text-base">
//               Research, Evaluation & Learning Manager
//             </p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="flex items-center space-x-6 lg:space-x-8">
//           <img
//             src={annabelle}
//             alt="Annabelle Y. Osei"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">
//               ANNABELLE Y. OSEI
//             </h2>
//             <p className="font-poppins text-base">Director of Operations</p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center space-x-6 lg:space-x-8">
//           <img
//             src={ampah}
//             alt="Victoria Ampah"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">VICTORIA AMPAH</h2>
//             <p className="font-poppins text-base">Senior Finance Officer</p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Third Row */}
//         <div className="flex items-center space-x-6 lg:space-x-8">
//           <img
//             src={kamil}
//             alt="Kamil Abdul Salam"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">
//               KAMIL ABDUL SALAM
//             </h2>
//             <p className="font-poppins text-base">
//               Assistant Project Coordinator, PDA Africa
//             </p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center space-x-6 lg:space-x-8">
//           <img
//             src={raymond}
//             alt="Raymond Hodor"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">RAYMOND HODOR</h2>
//             <p className="font-poppins text-base">
//               Research, Evaluation & Learning Manager
//             </p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Staff;

// import React from "react";
// import { annabelle, alex, ampah, edem, kamil, raymond } from "../assets/images";

// const Staff = () => {
//   return (
//     <section id="staff" className="max-container w-full min-h-screen">
//       {/* Title Section */}
//       <div className="mt-28 text-center">
//         <h1 className="font-poppins font-bold text-4xl text-orange mb-16">
//           STAFF
//         </h1>
//       </div>

//       {/* Staff Grid Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 place-items-center px-6 lg:px-20">
//         {/* First Row */}
//         <div className="flex items-center space-x-6">
//           <img src={edem} alt="Edem Agbe" className="h-36 w-36 rounded-full" />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">EDEM AGBE</h2>
//             <p className="font-poppins text-base">Managing Director</p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center space-x-6">
//           <img
//             src={alex}
//             alt="Alexander Afram"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">ALEXANDER AFRAM</h2>
//             <p className="font-poppins text-base">
//               Research, Evaluation & Learning Manager
//             </p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Middle Row with unified background */}
//         <div className="lg:col-span-2 flex justify-between p-8 rounded-lg bg-gray-100 shadow-lg">
//           <div className="flex items-center space-x-6">
//             <img
//               src={annabelle}
//               alt="Annabelle Y. Osei"
//               className="h-36 w-36 rounded-full"
//             />
//             <div className="text-left">
//               <h2 className="font-poppins font-bold text-lg">
//                 ANNABELLE Y. OSEI
//               </h2>
//               <p className="font-poppins text-base">Director of Operations</p>
//               <a href="#" className="text-orange font-bold text-sm">
//                 Read More
//               </a>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6">
//             <img
//               src={ampah}
//               alt="Victoria Ampah"
//               className="h-36 w-36 rounded-full"
//             />
//             <div className="text-left">
//               <h2 className="font-poppins font-bold text-lg">VICTORIA AMPAH</h2>
//               <p className="font-poppins text-base">Senior Finance Officer</p>
//               <a href="#" className="text-orange font-bold text-sm">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Third Row */}
//         <div className="flex items-center space-x-6">
//           <img
//             src={kamil}
//             alt="Kamil Abdul Salam"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">
//               KAMIL ABDUL SALAM
//             </h2>
//             <p className="font-poppins text-base">
//               Assistant Project Coordinator, PDA Africa
//             </p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center space-x-6">
//           <img
//             src={raymond}
//             alt="Raymond Hodor"
//             className="h-36 w-36 rounded-full"
//           />
//           <div className="text-left">
//             <h2 className="font-poppins font-bold text-lg">RAYMOND HODOR</h2>
//             <p className="font-poppins text-base">
//               Research, Evaluation & Learning Manager
//             </p>
//             <a href="#" className="text-orange font-bold text-sm">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Staff;

import React from "react";
import { annabelle, alex, ampah, edem, kamil, raymond } from "../assets/images";

const Staff = () => {
  return (
    <section id="staff" className="max-container w-full min-h-screen">
      {/* Title Section */}
      <div className="mt-28 text-center">
        <h1 className="font-poppins font-bold text-4xl text-orange mb-16">
          STAFF
        </h1>
      </div>

      {/* Staff Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 px-6 lg:px-20">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={edem}
            alt="Edem Agbe"
            className="h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="font-poppins font-bold text-lg">EDEM AGBE</h2>
            <p className="font-poppins text-base">Managing Director</p>
            <a href="#" className="text-orange font-bold text-sm">
              Read More
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={alex}
            alt="Alexander Afram"
            className="h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="font-poppins font-bold text-lg">ALEXANDER AFRAM</h2>
            <p className="font-poppins text-base leading-tight">
              Research, Evaluation & Learning Manager
            </p>
            <a href="#" className="text-orange font-bold text-sm">
              Read More
            </a>
          </div>
        </div>

        {/* Middle Row with unified background */}
        {/* <div className="lg:col-span-2 flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 rounded-lg bg-gray-100 shadow-lg space-y-4 lg:space-y-0 lg:space-x-12"> */}

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={annabelle}
            alt="Annabelle Y. Osei"
            className="h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="font-poppins font-bold text-lg">
              ANNABELLE Y. OSEI
            </h2>
            <p className="font-poppins text-base">Director of Operations</p>
            <a href="#" className="text-orange font-bold text-sm">
              Read More
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={ampah}
            alt="Victoria Ampah"
            className="h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="font-poppins font-bold text-lg">VICTORIA AMPAH</h2>
            <p className="font-poppins text-base">Senior Finance Officer</p>
            <a href="#" className="text-orange font-bold text-sm">
              Read More
            </a>
          </div>
        </div>
        {/* </div> */}

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6 mb-10">
          <img
            src={kamil}
            alt="Kamil Abdul Salam"
            className="h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="font-poppins font-bold text-lg">
              KAMIL ABDUL SALAM
            </h2>
            <p className="font-poppins text-base">
              Assistant Project Coordinator, PDA Africa
            </p>
            <a href="#" className="text-orange font-bold text-sm">
              Read More
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={raymond}
            alt="Raymond Hodor"
            className="h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="font-poppins font-bold text-lg">RAYMOND HODOR</h2>
            <p className="font-poppins text-base leading-tight">
              Research, Evaluation & Learning Manager
            </p>
            <a href="#" className="text-orange font-bold text-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
