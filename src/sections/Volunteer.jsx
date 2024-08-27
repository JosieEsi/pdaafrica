import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import PopupForm from "../components/PopupForm";

const Volunteer = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleButtonClick = (label) => {
    setActiveForm(label);
  };

  const handleClose = () => {
    setActiveForm(null);
  };

  return (
    <section id="getinvolved" className="max-container ">
      <div className="flex justify-center w-full">
        <h3 className="text-4xl leading-[68px]  font-poppins font-bold mb-5">
          Let's Make A<span className="text-red"> Difference</span> Today
        </h3>
      </div>
      <div className=" flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            {...service}
            onClick={() => handleButtonClick(service.label)}
          />
        ))}
      </div>
      {activeForm && <PopupForm label={activeForm} onClose={handleClose} />}
    </section>
  );
};

export default Volunteer;
