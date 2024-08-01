import { partners } from "../assets/images";

const Partners = () => {
  return (
    <section id="partners" className="flex max-container flex-col">
      <div className="bg-white flex ml-10 ">
        <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
          Partners
        </h3>
      </div>
      <div className="flex ml-10">
        <img src={partners} alt="" />
      </div>
    </section>
  );
};

export default Partners;
