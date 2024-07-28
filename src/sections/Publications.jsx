import { pdf } from "../assets/icons";
import Button from "../components/Button";

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
        {/* <div className="flex text-sm justify-items-center justify-evenly ">
          <img src={pdf} alt="" width={70} height={100} />
          <p className="font-semibold">
            Business Formalization in Ghana's Construction Industry
          </p>
          <a href="./">
            <Button label="View file" />
          </a>
        </div>
        <div className="bg-orange h-0.5 w-3/4 justify-center "></div>
        <div className="flex">
          <img src={pdf} alt="" width={100} height={150} />
          <p>
            Understanding Vulnerability and Exclusion in Ghana November 2022
          </p>
          <a href="./">
            <Button label="View file" />
          </a>
        </div>
        <div className="flex">
          <img src={pdf} alt="" width={100} height={150} />
          <p>
            Voices and Evidence from End-Users of the GLTV and GLRRP Remote
            Learning Programme in Ghana
          </p>
          <a href="./">
            <Button label="View file" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Publications;
