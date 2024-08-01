// import Button from "../components/Button";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="max-container flex flex-col justify-center min-h-screen gap-10 p-4 border-box bg-hero bg-cover"
//     >
//       <div className="lg:grid lg:grid-cols-2 lg:px-2 xl:grid xl:grid-cols-2 xl:px-2 sm:flex sm:justify-end md:flex">
//         <div></div>
//         <div>
//           <h1 className="font-poppins font-bold lg:text-6xl text-white sm:text-5xl sm:px-5 ">
//             Everyone Matters
//           </h1>
//           <p className="py-5 lg:pr-[16rem] sm:px-5 text-white text-xl font-poppins">
//             Participatory Development Associates (PDA), is a social development,
//             project management and advisory organisation that is based in Ghana
//             and works across Sub-Saharan Africa
//           </p>
//           <a className="sm:pl-5" href="./">
//             <Button label="READ MORE" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end lg:justify-center min-h-screen bg-cover bg-left"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url('src/assets/images/hero.svg')`,
      }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:px-2 xl:grid xl:grid-cols-2 xl:px-2 sm:flex sm:flex-col sm:justify-end sm:h-full p-4">
        <div></div>
        <div className="p-5 max-sm:pb-10 text-white">
          <h1 className="font-poppins font-bold lg:text-8xl max-sm:text-4xl md:text-6xl">
            Everyone Matters
          </h1>
          <p className="py-5 lg:pr-[9rem] sm:px-4 text-xl max-sm:text-sm font-poppins">
            Participatory Development Associates (PDA), is a social development,
            project management and advisory organisation that is based in Ghana
            and works across Sub-Saharan Africa.
          </p>
          <a className="sm:pl-5" href="./">
            <Button label="READ MORE" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
