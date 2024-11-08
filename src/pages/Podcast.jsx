import React from "react";
import { pic, micro, vid } from "../assets/icons";
import { podpic } from "../assets/images";

const Podcast = () => {
  return (
    <section
      id="podcast"
      className="max-container max-w-full w-full min-h-screen lg:justify-center flex flex-col font-poppins"
    >
      <div className="relative w-full">
        <img src={podpic} className="w-full h-[400px]" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Podcast;
