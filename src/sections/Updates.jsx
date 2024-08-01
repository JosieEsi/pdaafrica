import { image2 } from "../assets/images";
import { arrowLeft } from "../assets/icons";
import { arrowRight } from "../assets/icons";

const Updates = () => {
  return (
    <section
      id="updates"
      className="max-container flex items-center justify-center lg:min-h-screen"
    >
      <div className="bg-white flex flex-col  p-5 shadow-lg ">
        <h3 className="font-poppins font-bold text-3xl text-ash pb-4 pl-5 ">
          UPDATES
        </h3>
        <div className="relative w-full">
          <img
            src={image2}
            alt="Updates Image"
            className="object-cover w-full h-auto"
          />
          <div className="flex flex-row justify-between absolute inset-0 items-center px-5">
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
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-55 bg-black pl-10 max-sm:pl-2 max-sm:h-12 h-16">
            <p className="text-white font-poppins max-sm:text-sm text-lg lg:text-2xl pt-2 font-semibold">
              Organizational development of PDA staff in Ada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
