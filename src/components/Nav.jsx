import { pdaLogo } from "../assets/images";
import { menu } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="w-full max-container h-28 pb-10">
      <div className="w-full max-container h-3 bg-orange"></div>
      <nav className="w-full bg-white  flex justify-around items-center max-container">
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
          <img src={menu} alt="Menu" width={35} height={35} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
