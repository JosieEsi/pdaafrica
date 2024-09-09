import React from "react";
import ContactCard from "../components/ContactCard";
import { contacts } from "../constants";
import { africateam } from "../assets/images";

const Contacts = () => {
  return (
    <section
      id="contact-us"
      className="max-container py-2 flex flex-wrap min-h-screen justify-center gap-14  max-sm:gap-2"
    >
      <div className="w-full flex justify-center flex-col">
        <h2 className="text-orange font-bold text-xl text-center">
          Contact Us
        </h2>
        <h3 className="font-poppins text-4xl font-bold text-black leading-tight mb-5 text-center ">
          Feel Free To <span className="text-red">Contact & Reach </span>Us!
        </h3>
      </div>
      {/* Left Section - Contact Information */}
      <div className="w-full md:w-1/2 lg:w-1/3 pl-2">
        {/* <div className="mb-8">
          <h3 className="font-poppins text-4xl font-bold text-black leading-tight mb-5 ">
            Feel Free To Contact &<br /> Reach Us!
          </h3>
          <p className="text-gray-600 text-base mb-8">
            Etiam! Veniam voluptate vero quam bibendum, metus tempor fringilla
            rutrum taciti odio rutrum quis, harum faucibus primis pellentesque,
            porro commodo.
          </p>
        </div> */}
        <div className="flex flex-col gap-3">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full md:w-1/2 lg:w-[50%] px-1 lg:mt-0  justify-center flex-wrap">
        <div className="bg-cover bg-africa p-10 rounded-lg shadow-lg ">
          {/* <img src={africateam} alt="" /> */}
          <form className="flex flex-col gap-4 mt-5">
            {/* <div>
              <h3 className="font-poppins font-semibold text-3xl leading-8 text-orange ">
                Leave a comment, review, or problem!
              </h3>
            </div> */}
            <div className="flex gap-4 max-sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
              <input
                type="text"
                placeholder="Enter Name*"
                className="flex-1 p-3 rounded-lg border border-gray-300 bg-opacity-50"
              />
              <input
                type="email"
                placeholder="Enter Email*"
                className="flex-1 p-3 rounded-lg border border-gray-300"
              />
            </div>
            <div className="flex gap-4 max:sm-flex-wrap max-md:flex-wrap md:flex-wrap lg:flex-nowrap">
              <input
                type="text"
                placeholder="Enter Subject*"
                className="flex-1 p-3 rounded-lg border border-gray-300"
              />
              <input
                type="text"
                placeholder="Enter Phone No.*"
                className="flex-1 p-3 rounded-lg border border-gray-300"
              />
            </div>
            <textarea
              placeholder="Enter Message*"
              className="p-2 rounded-lg border border-gray-300 h-36 w-full pr-0 flex-grow-0"
            ></textarea>
            <button
              type="submit"
              className="p-3 rounded-lg bg-orange text-white font-bold hover:bg-red"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
