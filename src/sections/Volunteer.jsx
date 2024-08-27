import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { close } from "../assets/icons";
// import PopupForm from "../components/PopupForm";

const Volunteer = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleButtonClick = (link) => {
    setActiveForm(link);
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
            onClick={() => handleButtonClick(service.link)}
          />
        ))}
      </div>

      {/* Conditionally render the iframe */}
      {activeForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-red-500"
            >
              <img src={close} alt="close" height={20} width={20} />
            </button>
            <iframe
              src={activeForm}
              width="100%"
              height="500px"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              style={{ border: "none" }}
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Volunteer;
