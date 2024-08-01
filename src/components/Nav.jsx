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
            width={120}
            height={20}
          />
        </a>
        <div>
          <img
            src={menu}
            alt="Menu"
            width={35}
            height={35}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {isMenuVisible && (
        <div className="absolute top-30 left-0 w-full bg-white z-50">
          <Menu />
        </div>
      )}
    </header>
  );
};

export default Nav;
