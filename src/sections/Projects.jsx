import Button from "../components/Button";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleButtonClick = (link) => {
    setActiveForm(link);
  };

  const handleClose = () => {
    setActiveForm(null);
  };

  return (
    <section id="projects" className="max-container w-full ">
      <div className="flex justify-center w-full">
        <h3 className="text-4xl leading-[68px]  font-poppins font-bold mb-5">
          Our<span className="text-red"> Projects </span>
        </h3>
      </div>
      <div className=" flex justify-center flex-wrap gap-9">
        {projects.map((project) => (
          <ProjectCard
            key={project.label}
            {...project}
            onClick={() => handleButtonClick(project.link)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
