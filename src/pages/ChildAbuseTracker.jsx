import React from "react";
import { childabuse, abusecase } from "../assets/images";
import Button from "../components/Button";

const ChildAbuseTracker = () => {
  return (
    <section
      id="child-abuse-tracker"
      className="max-container w-full min-h-screen"
    >
      <div className="mt-24 bg-gray-200 w-full h-32 flex items-center justify-between px-40">
        <h1 className="font-poppins font-bold text-3xl  ">
          Child Abuse Tracker
        </h1>
        <Button label="NEWS & UPDATES>>" />
      </div>
      <div className="w-full mb-10">
        <img src={childabuse} alt="" className="w-full " />
      </div>
      <div className="ml-32 mb-10">
        <Button label="NEWS & UPDATES>>" />
      </div>
      <div className="mt-10 mb-10 ml-32">
        <img src={abusecase} alt="" />
      </div>
    </section>
  );
};

export default ChildAbuseTracker;
