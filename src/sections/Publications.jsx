import { pdf } from "../assets/icons";
import Button from "../components/Button";
import Tab from "../components/Tab";

const Publications = () => {
  return (
    <section
      id="units"
      className="max-container flex items-center justify-center font-poppins"
    >
      <div className="bg-white h-[500px] grid rounded-3xl w-full">
        <h3 className="font-poppins font-bold text-3xl text-gray-800 pt-6 px-10">
          Publications
        </h3>
        <div className="flex text-xl max-sm:text-sm justify-items-center justify-evenly ">
          <img src={pdf} alt="" width={70} height={100} />
          <div className="lg:w-[600px] md:w-[400px] max-sm:w-[200px]">
            <span className="font-semibold items-center flex">
              Business Formalization in Ghana's Construction Industry
            </span>
            <div className="bg-orange h-0.5 w-full mt-10 flex items-center justify-center"></div>
          </div>
          <a href="./">
            <Button
              label="View file"
              className="flex items-center justify-center"
            />
          </a>
        </div>
        <div className="flex text-xl max-sm:text-sm justify-items-center justify-evenly ">
          <img src={pdf} alt="" width={70} height={100} />
          <div className="lg:w-[600px] md:w-[400px] max-sm:w-[200px]">
            <span className="font-semibold items-center flex">
              Understanding Vulnerability and Exclusion in Ghana November 2022
            </span>
            <div className="bg-orange h-0.5 w-full mt-10 flex items-center justify-center"></div>
          </div>
          <a href="./">
            <Button
              label="View file"
              className="flex items-center justify-center"
            />
          </a>
        </div>
        <div className="flex text-xl max-sm:text-sm justify-items-center justify-evenly ">
          <img src={pdf} alt="" width={70} height={100} />
          <div className="lg:w-[600px] md:w-[400px] max-sm:w-[200px]">
            <span className="font-semibold items-center flex">
              Voices and Evidence from End-Users of the GLTV and GLRRP Remote
              Learning Programme in Ghana
            </span>
            <div className="bg-orange h-0.5 w-full mt-10 flex items-center justify-center"></div>
          </div>
          <a href="./">
            <Button
              label="View file"
              className="flex items-center justify-center"
            />
          </a>
        </div>

        <div className="flex justify-center">
          <a href="./">
            <Tab label="MORE PUBLICATIONS" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
