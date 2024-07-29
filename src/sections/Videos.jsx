import Tab from "../components/Tab";

const Videos = () => {
  return (
    <section id="videos" className="flex max-container ">
      <div className=" bg-white w-full flex flex-row justify-between">
        <h3 className="font-poppins font-bold text-3xl text-black pb-4">
          Videos
        </h3>
        <div className="flex justify-end">
          <a href="">
            <Tab label="MORE VIDEOS" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
