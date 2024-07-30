import Tab from "../components/Tab";
import { video1 } from "../assets/images";
import { video2 } from "../assets/images";

const Videos = () => {
  return (
    <section id="videos" className="flex max-container w-full">
      <div className=" bg-white w-full  justify-between ">
        <div className="flex justify-between">
          <h3 className="font-poppins font-bold text-3xl text-black pb-4">
            Videos
          </h3>

          <a href="">
            <Tab label="MORE VIDEOS" />
          </a>
        </div>
        <div className="flex flex-row gap-5 justify-center mt-10 flex-wrap">
          <img src={video1} alt="" />
          <img src={video2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Videos;
