import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageArray } from "../constants"; // Your array of images
import { picture1, picture2 } from "../assets/images";

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
    <div className="w-full max-container font-poppins ">
      <Slider {...settings}>
        {/* Display images */}
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

        {/* Display first iframe */}
        <div className="w-full h-[550px] flex items-center justify-center pt-28  ">
          <iframe
            title="IA VSLA"
            width="100%"
            height="100%"
            src="https://app.powerbi.com/reportEmbed?reportId=0676b2fd-7dd2-4907-a521-d8dcb6e12fc2&autoAuth=true&ctid=e1c407f4-37ce-4d63-861f-b50872c0d662"
            // src={picture2}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <img src={picture2} alt="" />
        </div>

        {/* Display second iframe */}
        <div className="w-full h-[550px] flex items-center justify-center pt-28">
          <iframe
            title="Community Reading"
            width="100%"
            height="100%"
            src="https://app.powerbi.com/reportEmbed?reportId=2f0c1f4f-2c7b-44e8-b00b-f3847e7d51e6&autoAuth=true&ctid=e1c407f4-37ce-4d63-861f-b50872c0d662"
            // src={picture1}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
