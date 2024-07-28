import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-container flex flex-col justify-center min-h-screen gap-10 bg-slate-600 p-4 border-box"
    >
      <div className="lg:grid lg:grid-cols-2 lg:px-2 xl:grid xl:grid-cols-2 xl:px-2 sm:flex sm:justify-end md:flex">
        <div></div>
        <div>
          <h1 className="font-poppins font-bold lg:text-6xl text-white sm:text-5xl sm:px-5 ">
            Everyone Matters
          </h1>
          <p className="py-5 lg:pr-[16rem] sm:px-5 ">
            Participatory Development Associates (PDA), is a social development,
            project management and advisory organisation that is based in Ghana
            and works across Sub-Saharan Africa
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
