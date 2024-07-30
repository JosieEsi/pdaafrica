import { partners } from "../assets/images";

const Partners = () => {
  return (
    <section
      id="partners"
      className="flex items-center justify-center max-container"
    >
      <div className="bg-white">
        <h3 className="font-poppins font-bold text-3xl text-black pb-4">
          Partners
        </h3>
        <div className="mt-10">
          <img src={partners} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
