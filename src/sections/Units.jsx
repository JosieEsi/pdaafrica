// import { image1 } from "../assets/images";
// import { globe } from "../assets/icons";
// import { research } from "../assets/icons";
// import { signal } from "../assets/icons";
// import { finance } from "../assets/icons";

// const Units = () => {
//   return (
//     <section
//       id="units"
//       className="max-container flex items-center justify-center p-4 border-box "
//     >
//       <div className="bg-white flex rounded-2xl flex-row w-full justify-between flex-wrap flex-1">
//         <div className="bg-gray-200 rounded-3xl w-full p-5">
//           <h3 className="font-poppins font-bold text-3xl text-ash pb-5">
//             Our Units
//           </h3>
//           <div className="grid grid-cols-2 max-sm:grid-cols-1 xl:grid-cols-4 gap-4">
//             <div className="w-full h-[150px] bg-red relative shadow-lg flex flex-col items-center justify-center">
//               <img src={globe} alt="africa" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Africa</p>
//               </div>
//             </div>
//             <div className="w-full h-[150px] bg-red relative shadow-lg flex flex-col items-center justify-center">
//               <img src={research} alt="REL" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Research, Evaluation & Learning</p>
//               </div>
//             </div>
//             <div className="w-full h-[150px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
//               <img src={signal} alt="ACU" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Communications & Advocacy</p>
//               </div>
//             </div>
//             <div className="w-full h-[150px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
//               <img src={finance} alt="F&A" className="h-20 w-20" />
//               <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
//                 <p>PDA Finance & Administration</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="w-1/3 flex justify-center items-center">
//           <img
//             src={image1}
//             alt="Units Image"
//             className="object-cover w-full h-auto rounded-3xl"
//           />
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Units;

import { image1 } from "../assets/images";
import { globe } from "../assets/icons";
import { research } from "../assets/icons";
import { signal } from "../assets/icons";
import { finance } from "../assets/icons";

const Units = () => {
  return (
    <section
      id="units"
      className="max-container flex items-center justify-center p-4 border-box min-h-screen md:p-2"
    >
      <div className="bg-white flex rounded-2xl flex-row lg:w-2/3 justify-between flex-wrap max-sm:grid max-sm:grid-rows-1 max-sm:w-full md:w-full">
        <div className="bg-gray-200 rounded-3xl w-1/2 p-5 h-[400px] mt-10 max-sm:w-full">
          <h3 className="font-poppins font-bold text-3xl text-ash pb-5">
            Our Units
          </h3>
          <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-4 ">
            <div className="w-full h-[130px] bg-red relative shadow-lg flex flex-col items-center justify-center">
              <img
                src={globe}
                alt="africa"
                className="h-10 w-10 flex justify-center"
              />
              <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
                <p>PDA Africa</p>
              </div>
            </div>
            <div className="w-full h-[130px] bg-red relative shadow-lg flex flex-col items-center justify-center">
              <img
                src={research}
                alt="REL"
                className="h-10 w-10 flex justify-center"
              />
              <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
                <p>PDA Research, Evaluation & Learning</p>
              </div>
            </div>
            <div className="w-full h-[130px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
              <img
                src={signal}
                alt="ACU"
                className="h-10 w-10 flex justify-center"
              />
              <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
                <p>PDA Communications & Advocacy</p>
              </div>
            </div>
            <div className="w-full h-[130px] bg-orange relative shadow-lg flex flex-col items-center justify-center">
              <img
                src={finance}
                alt="F&A"
                className="h-10 w-10 flex justify-center"
              />
              <div className="w-full bg-white absolute bottom-0 text-center py-2 font-poppins text-xs font-semibold">
                <p>PDA Finance & Administration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col md:flex-row max-sm:grid max-sm:grid-rows-1 max-sm:w-full max-sm:mt-10">
          <img src={image1} alt="Units Image" className="object-fill" />
        </div>
      </div>
    </section>
  );
};

export default Units;
