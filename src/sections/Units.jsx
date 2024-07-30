import { image1 } from "../assets/images";
import { globe } from "../assets/icons";
import { research } from "../assets/icons";
import { signal } from "../assets/icons";
import { finance } from "../assets/icons";

const Units = () => {
  return (
    <section
      id="units"
      className="max-container flex items-center justify-center p-4 border-box min-h-sreen"
    >
      <div className="bg-white flex rounded-2xl flex-row w-full justify-between">
        <div className="bg-gray-200 rounded-3xl w-full">
          <h3 className="font-poppins font-bold text-3xl text-black pt-5 pb-5 pl-10">
            Our Units
          </h3>

          <div className="pl-10 col-span-2 pb-5 grid grid-cols-2 max-sm:grid-cols-1  xl:grid-cols-4">
            <div className="w-[250px] h-[150px] bg-red relative shadow-3xl mb-5">
              <div className="flex justify-center mt-3">
                <img src={globe} alt="africa" />
              </div>
              <div className="w-[250px] h-[20px] bg-white absolute bottom-0 font-poppins text-xs flex items-center justify-center font-semibold">
                <p>PDA Africa</p>
              </div>
            </div>

            <div className="w-[250px] h-[150px] bg-red relative shadow-3xl mb-5">
              <div className="flex justify-center mt-4">
                <img src={research} alt="REL" />
              </div>
              <div className="w-[250px] h-[20px] bg-white absolute bottom-0 font-poppins text-xs flex items-center justify-center font-semibold ">
                <p>PDA Research, Evaluation and Learning</p>
              </div>
            </div>

            <div className="w-[250px] h-[150px] bg-orange relative shadow-3xl mb-5">
              <div className="flex justify-center mt-6">
                <img src={signal} alt="ACU" />
              </div>
              <div className="w-[250px] h-[20px] bg-white absolute bottom-0 font-poppins text-xs flex items-center justify-center font-semibold">
                <p>PDA Communications & Advocacy</p>
              </div>
            </div>

            <div className="w-[250px] h-[150px] bg-orange relative shadow-3xl mb-5">
              <div className="flex justify-center mt-6">
                <img src={finance} alt="F&A" />
              </div>
              <div className="w-[250px] h-[20px] bg-white absolute bottom-0 font-poppins text-xs flex items-center justify-center font-semibold">
                <p>PDA Finance & Administration</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-[450px]">
          <img src={image1} alt="" width={250} />
        </div> */}
      </div>
    </section>
  );
};

export default Units;
