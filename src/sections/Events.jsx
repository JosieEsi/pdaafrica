const Events = () => {
  return (
    <section
      id="events"
      className="max-container items-center justify-center flex max-sm:flex-col lg:px-10 "
    >
      <div className="flex flex-1 flex-col max-sm:pb-10 justify-center items-center">
        <h3 className="font-poppins font-bold text-3xl text-red ">
          Upcoming Events
        </h3>

        <div className="pt-5 max-sm:pl-5">
          <div className="flex pb-5">
            <div className="pr-6">
              <div className="bg-gray-200 w-20 h-8 text-center font-bold font-poppins">
                02
              </div>
              <div className="bg-orange w-20 h-8 text-white text-center font-bold font-poppins">
                SEPT
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-poppins">Cluster Reading Level Competition</p>
              <p className="font-poppins text-red">Mankraso</p>
            </div>
          </div>
          <div className="flex pb-5">
            <div className="pr-6">
              <div className="bg-gray-200 w-20 h-8 text-center font-bold font-poppins">
                16
              </div>
              <div className="bg-orange w-20 h-8 text-white text-center font-bold font-poppins">
                NOV
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-poppins">Annual Reading Level Competition</p>
              <p className="font-poppins text-red">Mankraso</p>
            </div>
          </div>
          <div className="flex ">
            <div className="pr-6">
              <div className="bg-gray-200 w-20 h-8 text-center font-bold font-poppins">
                12
              </div>
              <div className="bg-orange w-20 h-8 text-white text-center font-bold font-poppins">
                DEC
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-poppins">8th Knowledge Sharing Workshop</p>
              <p className="font-poppins text-red">Accra</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <div className="h-[300px] w-[250px] bg-black border-solid rounded-3xl">
          <div className="w-[250px] h-10 pt-2 pl-2 bg-yellow-50 flex justify-start rounded-tr-2xl rounded-tl-2xl">
            <p>Tweets from @pdaghanaofficial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

// const Events = () => {
//   return (
//     <section
//       id="events"
//       className="max-container items-center justify-center flex flex-col lg:flex-row lg:px-10 py-10"
//     >
//       <div className="flex flex-1 flex-col justify-center items-center mb-10 lg:mb-0 lg:pr-10">
//         <h3 className="font-poppins font-bold text-3xl text-red mb-6">
//           Upcoming Events
//         </h3>

//         <div className="space-y-6">
//           <div className="flex items-center space-x-6">
//             <div>
//               <div className="bg-gray-200 w-20 h-8 flex items-center justify-center font-bold font-poppins">
//                 02
//               </div>
//               <div className="bg-orange w-20 h-8 flex items-center justify-center text-white font-bold font-poppins">
//                 SEPT
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <p className="font-poppins">Cluster Reading Level Competition</p>
//               <p className="font-poppins text-red">Mankraso</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div>
//               <div className="bg-gray-200 w-20 h-8 flex items-center justify-center font-bold font-poppins">
//                 16
//               </div>
//               <div className="bg-orange w-20 h-8 flex items-center justify-center text-white font-bold font-poppins">
//                 NOV
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <p className="font-poppins">Annual Reading Level Competition</p>
//               <p className="font-poppins text-red">Mankraso</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div>
//               <div className="bg-gray-200 w-20 h-8 flex items-center justify-center font-bold font-poppins">
//                 12
//               </div>
//               <div className="bg-orange w-20 h-8 flex items-center justify-center text-white font-bold font-poppins">
//                 DEC
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <p className="font-poppins">8th Knowledge Sharing Workshop</p>
//               <p className="font-poppins text-red">Accra</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex-1 flex justify-center items-center">
//         <div className="h-[300px] w-[250px] bg-black border-solid rounded-3xl">
//           <div className="w-full h-10 flex items-center pl-2 bg-yellow-50 rounded-t-3xl">
//             <p className="font-poppins">Tweets from @pdaghanaofficial</p>
//           </div>
//           <div className="p-4 text-white">{/* Embed Twitter feed here */}</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
