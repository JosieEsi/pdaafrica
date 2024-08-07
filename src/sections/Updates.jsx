import { image2 } from "../assets/images";
import { arrowLeft } from "../assets/icons";
import { arrowRight } from "../assets/icons";

const Updates = () => {
  return (
    <section
      id="updates"
      className="max-container flex items-center justify-center lg:min-h-screen md:h-2/3"
    >
      <div className="bg-white flex flex-col  p-5 shadow-lg w-2/3">
        <h3 className="font-poppins font-bold text-3xl text-ash pb-4 pl-5 max-sm:pl-1">
          UPDATES
        </h3>
        <div className="relative w-full flex justify-center">
          <img
            src={image2}
            alt="Updates Image"
            className="object-cover w-full h-auto"
          />
          <div className="flex flex-row justify-between absolute inset-0 items-center px-5 max-sm:px-0">
            <img
              src={arrowLeft}
              alt="Left Arrow"
              width={40}
              height={20}
              className="max-sm:w-20 max-sm:h-10 cursor-pointer"
            />
            <img
              src={arrowRight}
              alt="Right Arrow"
              width={40}
              height={20}
              className="max-sm:w-20 max-sm:h-10 cursor-pointer"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-55 bg-black pl-10 max-sm:pl-2 max-sm:h-10 h-16">
            <p className="text-white font-poppins max-sm:text-[10px] max-sm:leading-3 text-lg lg:text-2xl pt-2 font-semibold">
              Organizational development of PDA staff in Ada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
