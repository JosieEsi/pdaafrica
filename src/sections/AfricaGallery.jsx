import React from "react";
import { useState, useEffect } from "react";
import Tab from "../components/Tab";

const AfricaGallery = () => {
  const imageLinks = [
    "https://lh3.googleusercontent.com/pw/AP1GczMZO_E-j5Go_nCYG3HxtQjW2vRE3J2zx_Y_hHCz5AQUVxbClRL4w5XA9Vbs5HpwjSev0t_-rsjaau7O5_8VDEWJ-iY1jNvS3mt1v0NeXwEL1YWx_jpQ81_kqiXnc8VW-FIPsm7_a3kRGePzHtZm-LgClg=w911-h607-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNH3ll8aVwPGz2QZgFywuUy7f1Oep9Dq-gzvWCgOqc0IaL1dxlSaNy_QVAptPg8B3ZoH-On3cwQUDFs7jJBuxsTIRp8pJVEa5jyD1ef2lhIZe-Ek4zthgeYcDCq1jinSMp2WmzEvIB6jV3FcrNwqSQv=w1081-h607-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOdlQOwt8ZYJPYgBVyvbxWih_CA6T6QppFotPZleP5FIEI83aB0BLIObXNUfjFFV2E3cwIJx7gKVmbyKN_GCfBS7yCYznmKtqTI5BN6dCN4n12Wv4q400TUR7WzvYFWyYLeiZUcSo4ww2ujNo1zS8SQ=w1081-h607-s-no-gm?authuser=0",
    // "https://lh3.googleusercontent.com/pw/AP1GczMidjxwea8ch3eXjtu43I8uy73L1Iv7PnFzpRIixpT16uMYnEHrbQqnDlzsDOyaxU_tlpskkGy8b3owoEPW1H7JfVeKNHN1yY6cOBWn4t_jHgM2WP2oluTM-KKaKZtrNxjFuiR64qacaZoRKzy0R6B7-Q=w911-h607-s-no-gm?authuser=0",
    // " https://lh3.googleusercontent.com/pw/AP1GczPlwSYVRZzZW2MeByjDFnPDLc8Gfu1N9UC1nCjavsTZrKPhpWR5Wv2nwXvKnanZ8JlH7y8SP8FLjc8Zk_MKfl6VYvb2zEBrs2uHhz6DsxKELrNqcV9b0RjCqBBdt2iEZHVDppRqwRUmRlXh5dhaLP6jXQ=w911-h607-s-no-gm?authuser=0",
    // "https://lh3.googleusercontent.com/pw/AP1GczN6QLrw4DAwOEXfn25YHvJyyM-19lmcfEmPT-oGjJTsmZCDMZv05it2a4TAGVpiH5CF3CHjWJCEEBRtk4OOtwUMVUruUy5X0FtbMAM94JeRvV1pgckU0C-_FVl9I3rH-W7x57caCERQpo49Yt09coI1Sw=w911-h607-s-no-gm?authuser=0",
    // "https://lh3.googleusercontent.com/pw/AP1GczO9iprzfiJuLcWUn2L9lTqMxZ7nSFOIjhPCG9V6gKY9DGtihzDzUW4hmYXX9_Q2Rz242jOaCgeVbTOef8tp2of6y3yrF5xeUZrx2IKBF1Xps6fdKP-3ql7nWI4TJQUJTTOttZNiWW6MzgjzrdQSBsjc8A=w911-h607-s-no-gm?authuser=0",
    // "https://lh3.googleusercontent.com/pw/AP1GczPJzZ4qwog_XlNzl4H_SYirJb3Xf6q_Yti3q1m5Oq9YV2Q4QVgA775JmqFR9dVZg1ciKKYNzyQ7ClUT16uGY7uprNOMssm_05ksW6kdBDBUq9ExXfdxUYZG8pEzpxx5olrPVSslvTG99LDygIenPEEMEw=w911-h607-s-no-gm?authuser=0",
    // "https://lh3.googleusercontent.com/pw/AP1GczO8IFskA5Ewb7fa9nFQ5ahD5fMFi7qeKNvVdeC65wWBO9TKyXAjQ8Em1m5YXhUNHVzBJsLwc4Q8sQLNqcQLeWCE51O7VW71mLHoDrWNYfQj41JGtYI1Y_eM4dgaCUuvO4T_KpF9cLK1AqkRU14qhz79=w1081-h607-s-no-gm?authuser=0",
    // Add more links as needed
  ];

  const randomImages = imageLinks.sort(() => 0.5 - Math.random());

  return (
    <section
      className="max-container justify-center lg:mx-0 max-sm:mx-5"
      id="gallery"
    >
      <h2 className="text-red font-bold text-xl text-center mb-5 font-poppins">
        Gallery
      </h2>
      <div className="flex justify-center w-full">
        <h3 className="text-4xl leading-[68px]  font-poppins font-bold mb-5">
          Our<span className="text-orange"> Activities </span>
        </h3>
      </div>
      <div className="flex justify-between ml-10 max-sm:ml-0 max-sm:gap-7 ">
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
              className="h-40 max-sm:w-full w-full max-w-full rounded-lg object-cover object-center"
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
