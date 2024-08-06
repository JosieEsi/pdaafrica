import { useState } from "react";
import { pdaLogo } from "../assets/images";
import { menu } from "../assets/icons";
import Menu from "./Menu";

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="w-full h-28 pb-10 relative">
      <div className="w-full h-3 bg-orange"></div>
      <nav className="w-full bg-white  flex justify-around items-center">
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
            src={menu}
            alt="Menu"
            width={50}
            height={50}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {isMenuVisible && (
        <div
          className={`absolute left-0 w-full bg-white bg-opacity-35 transition-all duration-300 ease-in-out ${
            isMenuVisible ? "top-24 opacity-100" : "top-[-500px] opacity-0"
          }`}
        >
          <Menu />
        </div>
      )}
    </header>
  );
};

export default Nav;
