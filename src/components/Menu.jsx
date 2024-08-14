import { search } from "../assets/icons";
import { navLinks } from "../constants";
import { navigation } from "../constants";
import { socialMedia } from "../constants";
import Button from "./Button";

const Menu = () => {
  return (
    <section className="max-container flex flex-row justify-between p-10 flex-wrap overflow-y-auto max-h-screen">
      <div className="flex flex-col text-red gap-10 ml-10 font-semibold text-xl font-poppins max-sm:text-base max-sm:ml-0 max-sm:gap-4 md:text-base md:gap-6 ">
        {navLinks.map((section) => (
          <a key={section.label} href={section.href}>
            {section.label}
          </a>
        ))}
        <div className="flex gap-5 mt-5">
          {socialMedia.map((icon) => (
            <div className="flex" key={icon.alt}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange h-auto w-0.5 mx-10"></div>

      <div className="flex flex-1 justify-between gap-10  max-sm:flex-row max-sm:gap-3 md:gap-6 flex-wrap max-sm:flex-nowrap">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="font-poppins text-black font-semibold text-xl mb-10 md:text-base md:mb-5 max-sm:text-sm">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li
                  className="font-poppins text-base text-black hover:text-black mt-5 max-sm:text-xs"
                  key={link.name}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-row pl-5">
        <img src={search} alt="Search Icon" className="w-6 h-6 mb-5" />
        <a className="sm:pl-5" href="tel:+233302252998,+2333022970177">
          <Button label="Contact Us" />
        </a>
      </div>
    </section>
  );
};

export default Menu;
