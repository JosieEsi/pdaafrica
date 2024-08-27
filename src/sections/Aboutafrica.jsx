import Button from "../components/Button";
import { mission } from "../assets/images";

const Aboutafrica = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full mt-20 lg:grid"
    >
      <div className="flex flex-row gap-20 justify-between items-center flex-wrap">
        <div className="flex flex-1 flex-col">
          <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold">
            Our
            <span className="text-orange"> Mission </span>
            {/* <span className='text-coral-red'>Quality </span> Shoes */}
          </h2>
          <p className="mt-4 lg:max-w-lg text-base">
            PDA Africa works with communities, governments, local assemblies and
            like-minded partners to facilitate community-led development using
            sustainable, innovative and participatory approaches
          </p>
          {/* <p className="mt-6 lg:max-w-lg text-base">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div> */}
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={mission}
            alt="mission"
            width={570}
            height={522}
            className="object-contain rounded-xl"
          />
        </div>
      </div>

      <div></div>

      <div className="flex flex-row gap-20 justify-between items-center flex-wrap">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={mission}
            alt="mission"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold">
            Our
            <span className="text-orange"> Vision </span>
            {/* <span className='text-coral-red'>Quality </span> Shoes */}
          </h2>
          <p className="mt-4 lg:max-w-lg text-base">
            We envisage countries where communities have the capacity to plan
            and implement their own development agendas
          </p>
          <p className="mt-6 lg:max-w-lg text-base">
            We envisage a community where vulnerable, marginalized and minority
            groups participate actively in the development process for an
            inclusive society
          </p>
          <p className="mt-6 lg:max-w-lg text-base">
            We envisage a community where the youth are empowered to make
            positive impact on society
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutafrica;
