import { map } from "../assets/images";
import Button from "../components/Button";

const Work = () => {
  return (
    <section
      id="work"
      className="max-container items-center justify-between gap-10 w-full flex max-sm:flex-col"
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={map}
          alt="Map"
          width={300}
          height={250}
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins font-bold text-4xl lg:text-6xl  text-stone-700 lg:max-w-lg">
          Where We Work
        </h2>
        <p className="font-poppins text-stone-500  lg:max-w-lg py-4 ">
          PDA is a social development organization in Ghana with operations in
          Cote D'Ivoire, Cameroon, Kenya, Uganda, and other African countries
        </p>
        <a href="./">
          <Button label="READ MORE" />
        </a>
      </div>
    </section>
  );
};

export default Work;
