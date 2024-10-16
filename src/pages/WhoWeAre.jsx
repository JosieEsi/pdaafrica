import React from "react";
import { whoweare } from "../assets/images";
import { puzzle } from "../assets/icons";
import { peak } from "../assets/icons";
import { dart } from "../assets/icons";
import { bulb } from "../assets/icons";

const WhoWeAre = () => {
  return (
    <section id="whoweare" className="max-container w-full min-h-screen ">
      <div className="mt-24 relative">
        <img src={whoweare} className="w-full" alt="" />
        <h1 className="font-poppins font-bold text-4xl text-white text-center absolute bottom-20 pl-48">
          Who we are
        </h1>
      </div>
      <div className="flex flex-row w-full padding">
        <div className="flex w-1/3 ml-60">
          <div className=" bg-orange rounded-3xl w-24 h-24">
            <img src={puzzle} alt="" className="w-20 h-20 " />
          </div>
        </div>

        <div className="flex-col flex w-2/3 mr-10">
          <p className="font-poppins text-base ">
            Participatory Development Associates (PDA), is a social development,
            project management and advisory organisation that is based in Ghana
            and works across Sub-Saharan Africa. PDA’s work over the last 20
            years has focused on development research, design of independent and
            evidence-based process and impact evaluations systems for programme
            improvement, and project design and management.
          </p>

          <p className="font-poppins text-base pt-10 ">
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
      <div className="bg-gray-200 w-1/2 rounded-lg h-48 mb-10 ml-64 flex flex-row px-10 py-10">
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
      </div>
      <div className="bg-gray-200 w-1/2 rounded-lg h-48 mb-10 ml-64 flex flex-row px-10 py-10">
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
      </div>
      <div className="flex flex-row w-full padding">
        <div className="flex w-1/3 ml-60">
          <div className=" bg-orange rounded-3xl w-24 h-24">
            <img src={bulb} alt="" className="w-20 h-20 " />
          </div>
          <div>
            <h3 className="text-orange font-poppins font-bold text-2xl">
              Our Core Values
            </h3>
          </div>
        </div>
        <div>
          <p>We care about:</p>
          <p>
            Empowerment:We believe in balance of power – gender, race, age,
            class. We work to strengthen capacities and give equal opportunity
            to all.
          </p>

          <p>
            Inclusiveness:We believe everyone has an active role to play in
            realising social change. Together we are more and we achieve more.
          </p>

          <p>
            Innovation and Creativity:We believe we attain resilience and
            self-reliance by recognising opportunity, adapting and breaking new
            ground.
          </p>

          <p>
            Quality:We do what we say we will do, maintaining and improving
            standards.
          </p>

          <p>
            Efficiency:We strive to make judicious use of resources, including
            time.
          </p>

          <p>
            Effectiveness and Impact:We strive to excel, exceed expectations and
            leave a lasting effect.
          </p>

          <p>
            Transparency and accountability:We value openness, the building of
            trust, and being accountable to ourselves, our partners and our
            clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
