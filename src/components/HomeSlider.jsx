import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageArray } from "../constants";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    fade: true,
  };

  return (
    <div className="w-full max-container">
      <Slider {...settings}>
        {imageArray.map((image, index) => (
          <div key={index} className="relative w-full h-[550px]">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-white p-5">
              <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
              <p className="text-lg">{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
