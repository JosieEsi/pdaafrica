import React from "react";
import { pic, micro, vid } from "../assets/icons";
import { yfutures, business, publication, glasses } from "../assets/images";

const Publications = () => {
  return (
    <section
      id="publications"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins"
    >
      <div className="relative w-full">
        <img src={glasses} className="w-full h-[400px]" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Publications;
