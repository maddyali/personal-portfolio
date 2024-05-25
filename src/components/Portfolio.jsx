import React from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio(props) {
  const [...projectsArray] = props.projects;

  const projectElements = projectsArray.map((obj, index) => {
    return <ProjectCard key={obj.name} project={obj} index={index} />;
  });

  return (
    <section
      id="projects"
      className="px-4 py-4  bg-primary text-center lg:py-24"
    >
      <div className="container lg:max-w-4xl m-auto">
        <h2 className="text-2xl font-bold text-primary-dark leading-10 mb-10 lg:text-left lg:text-3xl">
          My Projects
        </h2>
        {projectElements}
      </div>
    </section>
  );
}
