import React from "react";
import { ethical, tony, akosua, eleanor } from "../assets/images";
import { arrow, line, line2, paper } from "../assets/icons";
import Button from "../components/Button";

const EthicalReviewCommittee = () => {
  return (
    <section
      id="ethical-review-committee"
      className="max-container w-full min-h-screen"
    >
      <div className="mt-24 relative w-full bg-cover">
        <img src={ethical} alt="" className="w-full h-auto object-cover " />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <h1 className="font-poppins font-bold text-4xl text-white text-center absolute bottom-20 pl-48">
          Ethical Review Committee
        </h1>
      </div>

      <div className="mt-10 w-5/6 h-48 bg-gray-200 mb-10 flex items-center rounded-3xl max-w-7xl mx-auto flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-10 px-4 lg:px-0">
        <div className="flex">
          <img src={tony} alt="" className="h-32 w-32 rounded-full ml-10" />
          <div className="flex-row pl-5 items-center mt-8">
            <h1 className="font-poppins text-lg font-bold pb-1">TONY DOGBE</h1>
            <img src={line} alt="" className="pb-1" />
            <h2 className="font-poppins text-base pb-1">CHAIRPERSON</h2>

            <a href="">
              <div className="flex">
                <p className="font-poppins text-orange text-sm font-bold pb-1">
                  Read more
                </p>
                <img src={arrow} alt="" className="pl-3 flex-col" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex ml-10">
          <img src={akosua} alt="" className="h-32 w-32 rounded-full ml-10" />
          <div className="flex-row pl-5 items-center mt-4">
            <h1 className="font-poppins text-lg font-bold pb-1">
              PROF. AKOSUA ADOMAKO
            </h1>
            <img src={line} alt="" className="pb-1" />
            <h2 className="font-poppins text-base pb-1">MEMBER</h2>

            <a href="">
              <div className="flex">
                <p className="font-poppins text-orange text-sm font-bold pb-1">
                  Read more
                </p>
                <img src={arrow} alt="" className="pl-3 flex-col" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex pr-5">
          <img src={eleanor} alt="" className="h-32 w-32 rounded-full" />
          <div className="flex-row pl-5 items-center mt-4 mr-10">
            <h1 className="font-poppins text-lg font-bold pb-1">
              DR. ELEANOR HILL
            </h1>
            <img src={line} alt="" className="pb-1" />
            <h2 className="font-poppins text-base pb-1">MEMBER</h2>

            <a href="">
              <div className="flex">
                <p className="font-poppins text-orange text-sm font-bold pb-1">
                  Read more
                </p>
                <img src={arrow} alt="" className="pl-3 flex-col" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-3 lg:px-0 mb-20">
        <div className="lg:col-span-2 ml-6 mr-14">
          <h1 className="font-poppins font-bold text-4xl">
            Overview of the ERC
          </h1>
          <p className="font-poppins text-base py-6 leading-6">
            Ethical and robust research underscores Participatory Development
            Associates’ (PDA’s) vision of: “A world where states, communities
            and organisations provide an enabling environment in which all
            people, regardless of sex, race, ethnicity, creed, age or
            disability, can realise their full potential and contribute their
            best to the common good”. It is for this reason that the Ethical
            Review Committee (ERC) was set up in January 2017 to help ensure
            that research is carried out to the highest ethical standards. The
            ERC has been formed to review research proposals in PDA and the
            general research community. It advises on the research process to
            ensure that both researchers and participants are adequately
            protected. The ERC is also interested in ensuring that researchers
            put adequate measures in place to minimise biases that could arise
            from both researchers’ and participants’ prejudices in the research
            process. The ERC has a multidisciplinary membership of eminent
            scholars and practitioners in their fields of specialisation.
          </p>

          <p className="font-poppins text-base leading-6">
            Ethical review is aligned with our organisation’s Values in the
            following ways:
          </p>
          <p className="font-poppins text-base leading-6">
            <span className="font-poppins text-base font-bold">
              . Empowerment:{" "}
            </span>{" "}
            we believe that research should be an enlightening process for all
            involved, not simply an extractive exercise undertaken for the
            benefit of others. Paying attention to how a research process
            empowers and/or disempowers the people involved is of great
            importance to its development outcomes. In particular, PDA believes
            that the dignity, rights, safety and well-being of both participants
            and researchers is important in any research process that PDA
            undertakes.
          </p>
          <p className="font-poppins text-base pt-5 leading-6">
            <span className="font-poppins text-base font-bold">
              . Inclusiveness:{" "}
            </span>{" "}
            we believe everyone has an active role to play in realising social
            change and so it is important that any piece of research has
            carefully considered which voices are listened to, and why.
            Innovation and creativity: thoughtful review processes can help any
            group of people to think more carefully, creatively and deeply.
          </p>
          <p className="font-poppins text-base pt-5 leading-6">
            <span className="font-poppins text-base font-bold">
              . Quality:{" "}
            </span>{" "}
            review can help us, and others, to maintain and improve our research
            standards. In doing this we can also affect ethical standards in
            Ghana more widely. Efficiency: review can identify ways in which all
            can make judicious use of resources, including natural resources and
            time.
          </p>
          <p className="font-poppins text-base pt-5 leading-6">
            <span className="font-poppins text-base font-bold">
              . Effectiveness and Impact:{" "}
            </span>{" "}
            a well-honed research process is more likely to leave a lasting
            effect.
          </p>
          <p className="font-poppins text-base pt-5 leading-6">
            <span className="font-poppins text-base font-bold">
              . Transparency and accountability:{" "}
            </span>{" "}
            ethical review helps to make research processes more accountable, to
            ourselves as researchers, to participants in the research, as well
            as to those who commission it. PDA is also committed to being a
            learning organisation. We believe that ethical review processes
            should provide a framework for those involved to learn together.
          </p>
          {/* <img src={line2} alt="" className="mt-24 " /> */}
        </div>

        <div>
          <div className="space-y-6 mt-20">
            <div className="w-full bg-gray-200 flex items-center p-4 rounded-lg">
              <img src={paper} alt="Document" className="h-8" />
              <div className="ml-2 flex-grow">
                <p className="font-poppins text-base">
                  Preliminary Screening Tool
                </p>
              </div>
              <Button label="Download" />
            </div>

            <div className="w-full bg-gray-200 flex items-center p-4 rounded-lg">
              <img src={paper} alt="Document" className="h-8" />
              <div className="ml-2 flex-grow">
                <p className="font-poppins text-base">
                  ERC Guidelines for Applicants
                </p>
              </div>
              <Button label="Download" />
            </div>

            <div className="w-full bg-gray-200 flex items-center p-4 rounded-lg">
              <img src={paper} alt="Document" className="h-8" />
              <div className="ml-2 flex-grow">
                <p className="font-poppins text-base">ERC Application Form</p>
              </div>
              <Button label="Download" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalReviewCommittee;
