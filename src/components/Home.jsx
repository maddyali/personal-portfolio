import React from "react";
import headshot from "../assets/images/headshot.png";
import Socials from "./Socials";

export default function Home(props) {
  const [...skills] = props.skills;
  const skillElements = skills.map((obj) => {
    return (
      <li key={obj.name} className="h-[50px] w-[50px]">
        <img
          src={obj.imgPath}
          alt={obj.name + "-icon"}
          className="h-auto w-full rounded"
        />
      </li>
    );
  });

  return (
    <section
      id="home"
      className="px-4 py-24 flex flex-col gap-16 bg-primary lg:px-8 lg:py-36"
    >
      <div className="container lg:max-w-4xl m-auto">
        <div className="hero flex flex-col items-center gap-8 text-center lg:flex-row-reverse lg:gap-10 lg:justify-between lg:items-start lg:text-left">
          {/* IMG */}
          <div className="h-52 w-52">
            <img src={headshot} alt="headshot" className="h-auto w-full" />
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-10 lg:max-w-lg">
            <h1 className="text-3xl font-extrabold text-primary-dark leading-10 lg:leading-[60px] lg:text-5xl">
              Full Stack Software Developer 👋🏽
            </h1>
            <p className="text-lg text-secondary-dark px-2 leading-8 sm:px-10 md:px-36 lg:px-0">
              Hey, I'm Maddy Ali. A passionate full stack software developer
              based in Houston, TX.
            </p>
            <div className="flex justify-center gap-4 p-2 mb-10 lg:gap-6 lg:justify-start">
              <Socials />
            </div>
          </div>
        </div>

        {/* tech stack */}
        <div className="tech-stack flex flex-col items-center lg:flex-row lg:mt-20 gap-4">
          <p className="text-lg text-primary-dark font-medium border-b-2 border-secondary-dark/50 leading-10 mb-10 lg:border-b-0 lg:border-r-2 lg:pr-4 lg:mb-0 lg:mr-6">
            Tech Stack
          </p>
          <ul className="grid grid-rows-2 sm:grid-rows-1 sm:gap-6 grid-flow-col gap-4">
            {skillElements}
          </ul>
        </div>
      </div>
    </section>
  );
}
