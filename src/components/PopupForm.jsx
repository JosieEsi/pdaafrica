// import { close } from "../assets/icons";

// const PopupForm = ({ label, onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">{label} Form</h2>

//           <button onClick={onClose} className="focus:outline-none">
//             <img src={close} alt="Close" height={20} width={20} />
//           </button>
//         </div>
//         {/* <div className="bg-white p-8 rounded-lg max-w-lg w-full absolute">
//         <div className="flex justify-between">
//           <h2 className="text-2xl font-bold mb-4">{label} Form</h2>
//         </div>
//         <button onClick={onClose}>
//           <img src={close} alt="close" height={20} width={20} />
//         </button> */}
//         {/* <button
//             onClick={() => {
//               console.log("Close button clicked"); // Check if this logs
//               onClose();
//             }}
//             className="mb-4 bg-red"
//           >
//             <img src={close} alt="close" height={20} width={20} />
//           </button> */}

//         <form>
//           {/* Form fields go here */}
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//           />
//           {/* Add more fields based on the label */}
//           {/* Conditional fields based on label */}
//           {label === "Become a Volunteer" && (
//             <textarea
//               placeholder="Why do you want to volunteer with us?"
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//               rows="4"
//               required
//             />
//           )}

//           {label === "Donate to support" && (
//             <input
//               type="number"
//               placeholder="How much do you want to donate?"
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//               required
//             />
//           )}

//           {label === "Become a partner" && (
//             <textarea
//               placeholder="In what way do you want to partner with us?"
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//               rows="4"
//               required
//             />
//           )}
//           <button
//             type="submit"
//             className="w-full bg-orange text-white py-2 rounded"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopupForm;
