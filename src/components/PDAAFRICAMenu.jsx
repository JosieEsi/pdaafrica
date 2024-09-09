import React from "react";
import { pdaLogo } from "../assets/images";
import { africaLinks } from "../constants";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PDAAFRICAMenu = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    toggleNavigation();
  };

  return (
    <header className="w-full h-24 fixed top-0 left-0 z-50 ">
      <div className="w-full h-3 bg-orange relative z-10 "></div>
      <nav className="max-w-full shadow-3xl bg-white flex justify-around items-center relative z-10 ">
        <a href="/">
          <img
            className="pt-3 pb-3"
            src={pdaLogo}
            alt="Logo"
            width={150}
            height={40}
          />
        </a>
        {/* Custom menu items for PDAAFRICA page */}
        <ul className="flex gap-8 text-lg max-lg:hidden">
          {africaLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-poppins leading-normal text-xl text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <input
            type="checkbox"
            className=" openSidebarMenu hidden"
            id="openSidebarMenu"
          ></input>
          <label
            for="openSidebarMenu"
            className="sidebarIconToggle cursor-pointer absolute top-[22px] lg:right-[300px] w-[35px] h-[35px] z-[99] "
            onClick={toggleNavigation}
          >
            <div className="spinner diagonal part-1 w-full h-[3px] bg-black absolute "></div>
            <div className="spinner horizontal w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <div className="spinner diagonal part-2 w-full h-[3px] bg-black absolute mt-[10px]"></div>
            <span>
              <p className="font-poppins font-medium items-center mt-2 ">
                {" "}
                Menu
              </p>
            </span>
          </label>
        </div>

        {/* Mobile menu */}

        <div
          className={`absolute left-0 w-full bg-white bg-opacity-80 transform transition-transform duration-1000 ease-in-out ${
            openNavigation ? "translate-y-[-0%]" : "translate-y-[-200%]"
          }`}
          style={{
            top: "87px",
            zIndex: 1,
          }}
        >
          <ul className="flex flex-col gap-8 text-xl items-center mt-2 mb-4">
            {africaLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleClick}
                  className="font-poppins text-xl text-slate-gray openSidebarMenu "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default PDAAFRICAMenu;
