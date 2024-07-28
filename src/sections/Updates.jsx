import { image2 } from "../assets/images";
import { arrowLeft } from "../assets/icons";
import { arrowRight } from "../assets/icons";

const Updates = () => {
  return (
    <section
      id="updates"
      className="max-container flex items-center justify-center min-h-screen"
    >
      <div className="bg-white">
        <h3 className="font-poppins font-bold text-4xl text-black pb-4 pl-5 ">
          UPDATES
        </h3>
        <img
          src={image2}
          alt="Updates Image"
          className="object-scale-down px-2"
        />
        <div className="flex flex-row justify-between relative bottom-72 max-sm:bottom-28 max-sm:px-0.5 px-5">
          <img
            src={arrowLeft}
            alt="Left Arrow"
            width={40}
            height={20}
            className="max-sm:w-20 max-sm:h-10"
          />
          <img
            src={arrowRight}
            alt="Right Arrow"
            width={40}
            height={20}
            className="max-sm:w-20 max-sm:h-10"
          />
        </div>
        <div className="h-16 bg-opacity-55 bg-black pl-10 relative bottom-36 max-sm:bottom-20 max-sm:h-12 ml-2 mr-2">
          <p className="text-white font-poppins max-sm:text-sm text-lg lg:text-2xl pt-2 font-semibold">
            Organizational development of PDA staff in Ada
          </p>
        </div>
      </div>
    </section>
  );
};

export default Updates;
