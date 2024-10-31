import React from "react";
import { covid } from "../assets/images";
import Tab from "../components/Tab";
import Button from "../components/Button";

const Covid19 = () => {
  return (
    <section
      id="child-abuse-tracker"
      className="max-container w-full min-h-screen"
    >
      <div className="mt-24 w-full">
        <img src={covid} alt="" className="w-full" />
      </div>
      <div className="flex my-10 mx-10 ml-40">
        <Tab label="COVID 19 SERIES" />
      </div>
      <div className="space-y-6 mx-auto mb-20 lg:ml-20 lg:mr-20">
        <div className="bg-gray-200 w-5/6 h-28 ml-20 mb-10 flex items-center justify-between px-10 font-poppins ">
          <p>12 APRIL, 2022</p>
          <p className="font-bold">COVID-19; A THREAT TO FOOD SECURITY</p>
          <Button label="DOWNLOAD >>>" />
        </div>

        <div className="bg-gray-50 w-5/6 h-28 ml-20 mb-10 flex items-center justify-between px-10 font-poppins ">
          <p>26 MAY, 2022</p>
          <p className="font-bold">
            PANDEMICS AND THE USE OF NON-PHARMACEUTICAL INTERVENTIONS...
          </p>
          <Button label="DOWNLOAD >>>" />
        </div>

        <div className="bg-gray-200 w-5/6 h-28 ml-20 mb-10 flex items-center justify-between px-10 font-poppins ">
          <p>28 MAY, 2022</p>
          <p className="font-bold">
            RETHINKING SOCIAL PROTECTION AND SAFETY NETS IN GHANA: WHAT THE
            COVID-19 PANDEMIC ...
          </p>
          <Button label="DOWNLOAD >>>" />
        </div>

        <div className="bg-gray-50 w-5/6 h-28 ml-20 mb-10 flex items-center justify-between px-10 font-poppins ">
          <p>2 JUNE, 2023</p>
          <p className="font-bold">
            GHANA'S CHILD WELFARE SYSTEM AND COVID-19 PANDEMIC
          </p>
          <Button label="DOWNLOAD >>>" />
        </div>

        <div className="bg-gray-200 w-5/6 h-28 ml-20 mb-20 flex items-center justify-between px-10 font-poppins ">
          <p>18 JANUARY, 2024</p>
          <p className="font-bold">
            THE POLITICAL ECONOMY OF COVID-19 IN AFRICA
          </p>
          <Button label="DOWNLOAD >>>" />
        </div>
      </div>
    </section>
  );
};

export default Covid19;
