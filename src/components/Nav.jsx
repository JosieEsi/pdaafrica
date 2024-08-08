// import { useState } from "react";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
// import { pdaLogo } from "../assets/images";
// import { menu } from "../assets/icons";
// import Menu from "./Menu";

// const Nav = () => {
//   const [isMenuVisible, setIsMenuVisible] = useState(false);
//   // const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleMenu = () => {
//     if (isMenuVisible) {
//       setIsMenuVisible(false);
//       enablePageScroll();
//     } else {
//       setIsMenuVisible(true);
//       disablePageScroll();
//     }
//   };

//   // const handleClick = () => {
//   //   if (!isMenuVisible) return;

//   //   enablePageScroll();
//   //   setIsMenuVisible(false);
//   // };

//   return (
//     <header className="w-full h-24 fixed top-0 left-0 z-50">
//       <div className="w-full h-3 bg-orange"></div>
//       <nav className="w-full bg-white  flex justify-around items-center ">
//         <a href="/">
//           <img
//             className="pt-3 pb-3"
//             src={pdaLogo}
//             alt="Logo"
//             width={150}
//             height={40}
//           />
//         </a>
//         <div>
//           <img
//             src={menu}
//             alt="Menu"
//             width={50}
//             height={50}
//             onClick={toggleMenu}
//             className="cursor-pointer"
//           />
//         </div>
//       </nav>
//       <div className="h-28"></div>

//       {/* {isMenuVisible && (
//         <div
//           className={`absolute left-0 w-full bg-white bg-opacity-35 transition-all duration-700 ease-in-out ${
//             isMenuVisible ? "top-24 opacity-100" : "top-[-500px] opacity-0"
//           }`}
//         >
//           <Menu />
//         </div>
//       )} */}

//       {isMenuVisible && (
//         <div
//           className={`absolute left-0 w-full bg-white bg-opacity-35 transition-all duration-700 ease-in-out ${
//             isMenuVisible ? "top-24 opacity-100" : "top-[-500px] opacity-0"
//           }`}
//         >
//           <Menu />
//         </div>
//       )}
//     </header>
//   );
// };

// export default Nav;

import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { pdaLogo } from "../assets/images";
import { menu, close } from "../assets/icons";
import Menu from "./Menu";

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
      enablePageScroll();
    } else {
      setIsMenuVisible(true);
      disablePageScroll();
    }
  };

  return (
    <header className="w-full h-24 fixed top-0 left-0 z-50">
      <div className="w-full h-3 bg-orange"></div>
      <nav className="w-full bg-white  flex justify-around items-center ">
        <a href="/">
          <img
            className="pt-3 pb-3"
            src={pdaLogo}
            alt="Logo"
            width={150}
            height={40}
          />
        </a>
        <div>
          <img
            src={isMenuVisible ? close : menu}
            alt={isMenuVisible ? "Close" : "Menu"}
            width={50}
            height={50}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>
      <div className="h-28"></div>

      <div
        className={`absolute top-0 left-0 w-full bg-white bg-opacity-35 transform transition-transform duration-1000 ease-in-out ${
          isMenuVisible ? "top-24 translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <Menu />
      </div>
    </header>
  );
};

export default Nav;
