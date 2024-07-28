import { image1 } from "../assets/images";

const Units = () => {
  return (
    <section
      id="units"
      className="max-container flex items-center justify-center p-4 border-box"
    >
      <div className="bg-white flex rounded-2xl flex-row w-full justify-between">
        <div className="bg-gray-200 rounded-3xl w-full">
          <h3 className="font-poppins font-bold text-3xl text-black pt-4 pl-10">
            Our Units
          </h3>

          <div className="pl-6 col-span-2 grid grid-cols-2 ">
            <div className="w-[250px] h-[150px] bg-red relative">
              <img src="" alt="" />
              <div className="w-[250px] h-[20px] bg-white absolute bottom-0 font-poppins text-xs flex items-center justify-center font-semibold">
                <p>PDA Africa</p>
              </div>
            </div>

            <div className="w-[250px] h-[150px] bg-red relative ">
              <img src="" alt="" />
              <div className="w-[250px] h-[20px] bg-white absolute bottom-0 font-poppins text-xs flex items-center justify-center font-semibold ">
                <p>PDA Research, Evaluation and Learning</p>
              </div>
            </div>

            <div className="w-[250px] h-[150px] bg-orange relative ">
              <img src="" alt="" />
              <div className="w-[250px] h-[20px] bg-white absolute bottom-0 font-poppins text-xs flex items-center justify-center font-semibold">
                <p>PDA Communications & Advocacy</p>
              </div>
            </div>

            <div className="w-[250px] h-[150px] bg-orange relative">
              <img src="" alt="" />
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
