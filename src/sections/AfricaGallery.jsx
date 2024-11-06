import React from "react";
import { useState, useEffect } from "react";
import Tab from "../components/Tab";
import {
  rand1,
  rand2,
  rand3,
  rand4,
  rand5,
  rand6,
  rand7,
  rand8,
  rand9,
} from "../assets/images";

const AfricaGallery = () => {
  const imageLinks = [
    rand1,
    rand2,
    rand3,
    rand4,
    rand5,
    rand6,
    rand7,
    rand8,
    rand9,

    // Add more links as needed
  ];

  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    // Shuffle the images and pick the first 3
    const shuffledImages = imageLinks
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setRandomImages(shuffledImages);
  }, []); // This ensures new random images are picked each time the component is rendered

  return (
    <section className="max-container justify-center max-sm:mx-5" id="gallery">
      <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
        Gallery
      </h2>
      <div className="flex justify-center w-full">
        <h3 className="text-4xl leading-[68px] font-poppins font-bold mb-5">
          Our<span className="text-orange"> Activities </span>
        </h3>
      </div>
      <div className="flex justify-between mx-24 max-sm:ml-0 max-sm:gap-7">
        <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
          Photos
        </h3>

        <a href="https://photos.app.goo.gl/cYe3GkajXRf1VfdF8">
          <Tab label="MORE PHOTOS" />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 md:grid-cols-3 lg:mx-10 mt-5">
        {randomImages.map((imageLink, index) => (
          <div key={index}>
            <img
              className="h-60 max-sm:w-full w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AfricaGallery;
