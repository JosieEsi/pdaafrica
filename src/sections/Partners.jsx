// import { partners } from "../constants";
// import PartnersCard from "../components/PartnersCard";
import {
  beyond,
  british,
  callund,
  cdd,
  cocoa,
  coram,
  edtech,
  euro,
  slaves,
  gain,
  initial,
  institute,
  ipsos,
  kokoo,
  mastercard,
  opm,
  pandemics,
  root,
  sabre,
  schol,
  star,
  sustainable,
  tonys,
  tzedek,
  unicef,
  university,
} from "../assets/images";

const Partners = () => {
  return (
    <section
      id="partners"
      className="flex max-container flex-col lg:w-2/3 max-sm:w-full md:full justify-center overflow-hidden"
    >
      <div className="bg-white flex ml-10 max-sm:ml-0">
        <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
          Partners
        </h3>
      </div>

      <div className="flex overflow-hidden space-x-10 group md:ml:10">
        <div className="flex animate-loop-scroll space-x-10 group-hover:paused ">
          <img src={beyond} alt="" className="w-20 h-20" />
          <img src={british} alt="" className="w-20 h-20" />
          <img src={callund} alt="" className="w-20 h-20" />
          <img src={cdd} alt="" className="w-20 h-20" />
          <img src={cocoa} alt="" className="w-20 h-20" />
          <img src={coram} alt="" className="w-20 h-20" />
          <img src={edtech} alt="" className="w-20 h-20" />
          <img src={euro} alt="" className="w-20 h-20" />
          <img src={slaves} alt="" className="w-20 h-20" />
          <img src={gain} alt="" className="w-20 h-20" />
          <img src={initial} alt="" className="w-20 h-20" />
          <img src={ipsos} alt="" className="w-20 h-20" />
          <img src={institute} alt="" className="w-20 h-20" />
          <img src={kokoo} alt="" className="w-20 h-20" />
          <img src={mastercard} alt="" className="w-20 h-20" />
          <img src={opm} alt="" className="w-20 h-20" />
          <img src={pandemics} alt="" className="w-20 h-20" />
          <img src={root} alt="" className="w-20 h-20" />
          <img src={sabre} alt="" className="w-20 h-20" />
          <img src={schol} alt="" className="w-20 h-20" />
          <img src={star} alt="" className="w-20 h-20" />
          <img src={sustainable} alt="" className="w-20 h-20" />
          <img src={tonys} alt="" className="w-20 h-20" />
          <img src={tzedek} alt="" className="w-20 h-20" />
          <img src={unicef} alt="" className="w-20 h-20" />
          <img src={university} alt="" className="w-20 h-20" />
        </div>
        {/* <div
          className="flex animate-loop-scroll  space-x-10 group-hover:paused "
          aria-hidden="true"
        >
          <img src={beyond} alt="" className="w-20 h-20" />
          <img src={british} alt="" className="w-20 h-20" />
          <img src={callund} alt="" className="w-20 h-20" />
          <img src={cdd} alt="" className="w-20 h-20" />
          <img src={cocoa} alt="" className="w-20 h-20" />
          <img src={coram} alt="" className="w-20 h-20" />
          <img src={edtech} alt="" className="w-20 h-20" />
          <img src={euro} alt="" className="w-20 h-20" />
          <img src={slaves} alt="" className="w-20 h-20" />
          <img src={gain} alt="" className="w-20 h-20" />
          <img src={initial} alt="" className="w-20 h-20" />
          <img src={ipsos} alt="" className="w-20 h-20" />
          <img src={institute} alt="" className="w-20 h-20" />
          <img src={kokoo} alt="" className="w-20 h-20" />
          <img src={mastercard} alt="" className="w-20 h-20" />
          <img src={opm} alt="" className="w-20 h-20" />
          <img src={pandemics} alt="" className="w-20 h-20" />
          <img src={root} alt="" className="w-20 h-20" />
          <img src={sabre} alt="" className="w-20 h-20" />
          <img src={schol} alt="" className="w-20 h-20" />
          <img src={star} alt="" className="w-20 h-20" />
          <img src={sustainable} alt="" className="w-20 h-20" />
          <img src={tonys} alt="" className="w-20 h-20" />
          <img src={tzedek} alt="" className="w-20 h-20" />
          <img src={unicef} alt="" className="w-20 h-20" />
          <img src={university} alt="" className="w-20 h-20" />
        </div> */}
      </div>
    </section>
  );
};

export default Partners;
