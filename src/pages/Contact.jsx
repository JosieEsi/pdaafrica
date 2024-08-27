import { contactimage } from "../assets/images";
import { communication } from "../assets/images";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex max-container justify-center min-h-screen"
    >
      <div className="font-poppins font-bold bg-cover relative ">
        <img src={contactimage} alt="" className="bg-opacity-100" />
        <div className="absolute top-32 flex justify-center items-center flex-col gap-3 text-center">
          <img src={communication} alt="" className="h-20 w-20 " />
          <span className="text-2xl text-white">
            <p>Have a project for us?</p>
          </span>
          <h3 className="text-white text-4xl">Let's discuss it!</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
