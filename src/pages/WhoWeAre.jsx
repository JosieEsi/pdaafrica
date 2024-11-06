import React from "react";
import { whoweare } from "../assets/images";
import { puzzle } from "../assets/icons";
import { peak } from "../assets/icons";
import { dart } from "../assets/icons";
import { bulb } from "../assets/icons";

const WhoWeAre = () => {
  return (
    <section
      id="whoweare"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col"
    >
      <div className="mt-24 relative w-full">
        <img src={whoweare} className="w-[100vw] h-auto object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <h1 className="font-poppins font-bold text-4xl text-white text-center absolute bottom-20 pl-48">
          Who we are
        </h1>
      </div>
      <div className="flex flex-row w-full padding gap-10 ">
        <div className="flex w-1/3 lg:ml-60 mt-20 md:ml-10 max-sm:ml-10">
          <div className=" bg-orange rounded-[50px] w-28 h-28 flex items-center justify-center">
            <img src={puzzle} alt="" className="w-20 h-20 " />
          </div>
        </div>

        <div className="flex-col flex lg:mr-40 md:mr-8 max-sm:mr-8">
          <p className="font-poppins text-base text-justify">
            Participatory Development Associates (PDA), is a social development,
            project management and advisory organisation that is based in Ghana
            and works across Sub-Saharan Africa. PDA’s work over the last 20
            years has focused on development research, design of independent and
            evidence-based process and impact evaluations systems for programme
            improvement, and project design and management.
          </p>

          <p className="font-poppins text-base pt-10 text-justify ">
            PDA has a proven track record in the use of various participatory
            methodologies and mixed methods (qualitative and quantitative) in
            the design and implementation of projects across communities,
            districts and national government systems. The organisation has a
            pool of experienced research and impact evaluation experts,
            development consultants and associates who have a wide range of
            expertise in designing and management of projects; conducting
            research, impact evaluations and analysing data at different levels
            and across various sectors.
          </p>
        </div>
      </div>
      <section
        id="vision"
        className="bg-gray-200 lg:w-[45rem] max-sm:w-[20rem] md:w-[35rem] rounded-lg h-48 mb-10 lg:ml-[470px] flex flex-row px-10 py-10 max-sm:ml-8 md:ml-32"
      >
        <div className="flex flex-col w-full">
          <img src={peak} alt="" className="h-20 w-20" />

          <h3 className="text-orange font-poppins font-bold text-xl">
            OUR VISION
          </h3>
        </div>
        <p className="pl-5 font-poppins">
          Our vision is: of a world where states, communities and organisations
          provide an enabling environment in which all people, regardless of
          sex, race, ethnicity, creed, age or disability, can realise their full
          potential and contribute their best to the common good.
        </p>
      </section>
      <section
        id="mission"
        className="bg-gray-200 lg:w-[45rem] max-sm:w-[20rem] md:w-[35rem] rounded-lg h-48 mb-10 lg:ml-[470px] flex flex-row px-10 py-10 max-sm:ml-8 md:ml-32"
      >
        <div className="flex flex-col w-full">
          <img src={dart} alt="" className="h-20 w-20" />

          <h3 className="text-orange font-poppins font-bold text-xl">
            OUR MISSION
          </h3>
        </div>
        <p className="pl-5 font-poppins">
          Our mission is: to work with communities, organisations and government
          to facilitate the participation of all people towards taking greater
          control over their own lives and determining their own destiny.
        </p>
      </section>
      <div className="flex w-full padding lg:ml-60 md:ml-32 max-sm:ml-16">
        <div className="flex flex-row lg:gap-10 md:gap-5 max-sm:gap-2">
          <div className=" bg-orange rounded-[45px] w-36 h-24 flex items-center justify-center">
            <img src={bulb} alt="" className="w-20 h-20 " />
          </div>
          <div className="flex flex-col mt-10 ">
            <h3 className="text-orange font-poppins font-bold text-2xl ">
              Our Core Values
            </h3>

            <div className="flex flex-col mt-5 lg:mr-96 md:mr-44 max-sm:mr-20">
              <p className="font-poppins text-base pt-5 leading-6">
                We care about:
              </p>
              <p className="font-poppins text-base leading-6 ml-2">
                <span className="font-poppins text-base font-bold">
                  .Empowerment{" "}
                </span>{" "}
                We believe in balance of power – gender, race, age, class. We
                work to strengthen capacities and give equal opportunity to all.
              </p>

              <p className="font-poppins text-base pt-5 leading-6 ml-2">
                <span className="font-poppins text-base font-bold">
                  . Inclusiveness{" "}
                </span>{" "}
                We believe everyone has an active role to play in realising
                social change. Together we are more and we achieve more.
              </p>

              <p className="font-poppins text-base pt-5 leading-6 ml-2">
                <span className="font-poppins text-base font-bold">
                  . Innovation and Creativity{" "}
                </span>{" "}
                We believe we attain resilience and self-reliance by recognising
                opportunity, adapting and breaking new ground.
              </p>

              <p className="font-poppins text-base pt-5 leading-6 ml-2">
                <span className="font-poppins text-base font-bold">
                  . Quality{" "}
                </span>{" "}
                We do what we say we will do, maintaining and improving
                standards.
              </p>

              <p className="font-poppins text-base pt-5 leading-6 ml-2">
                <span className="font-poppins text-base font-bold">
                  . Efficiency
                </span>{" "}
                We strive to make judicious use of resources, including time.
              </p>

              <p className="font-poppins text-base pt-5 leading-6 ml-2">
                <span className="font-poppins text-base font-bold">
                  {" "}
                  . Effectiveness and Impact{" "}
                </span>{" "}
                We strive to excel, exceed expectations and leave a lasting
                effect.
              </p>

              <p className="font-poppins text-base pt-5 leading-6 ml-2">
                <span className="font-poppins text-base font-bold">
                  {" "}
                  . Transparency and accountability{" "}
                </span>
                We value openness, the building of trust, and being accountable
                to ourselves, our partners and our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
