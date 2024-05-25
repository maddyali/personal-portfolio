import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Project(props) {
  /*
      name: str, 
      description: str,
      tools: array,
      img: str,
      githubLink: str,
      demoLink: str,
*/
  const toolsArray = props.project.tools;

  const listElements = toolsArray.map((tool) => (
    <li key={tool} className="uppercase text-sm">
      {tool}
    </li>
  ));

  return (
    <div
      className={`flex flex-col gap-4 mb-10 lg:gap-8 ${
        props.index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="max-w-xl m-auto">
        <img
          src={props.project.img}
          alt={`${props.project.name} project image`}
          className="h-auto w-full rounded-md"
        />
      </div>
      <div className="py-4">
        <h3 className="text-lg font-semibold uppercase text-primary-dark leading-10 mb-2 md:text-xl">
          {props.project.name}
        </h3>
        <p className="text-sm text-secondary-dark px-14 leading-6 mb-4 sm:px-20 md:text-lg md:px-40 lg:px-6">
          {props.project.description}
        </p>
        <ul className="flex gap-2 justify-center mb-4">{listElements}</ul>

        <div className="flex justify-center gap-4">
          <a
            href={props.project.githubLink}
            target="_blank"
            className="flex gap-1 font-medium"
          >
            Code <Github />
          </a>

          <a
            href={props.project.demoLink}
            target="_blank"
            className="flex gap-1 font-medium"
          >
            Demo
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}
