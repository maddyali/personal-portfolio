import React from "react";
import photo from "../assets/images/favcombo.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-10 flex flex-col gap-16 bg-white lg:py-24"
    >
      <div className="container lg:max-w-4xl m-auto">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row">
          <div className="max-w-xs">
            <img
              src={photo}
              alt="desk setup"
              className="h-auto w-full rounded-md"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-primary-dark leading-10 lg:text-3xl lg:text-left lg:ml-10">
              About Me
            </h2>

            <p className="text-sm text-secondary-dark px-2 leading-6 sm:px-10 md:text-lg lg:text-left">
              I'm a passionate and creative full stack developer fueled entirely
              by curiosity, iced americanos, and a drive to succeed.
            </p>

            <p className="font-semibold italic text-sm text-secondary-dark px-2 leading-6 sm:px-10 md:text-lg lg:text-left">
              I want to build things people love with people that inspire me.
            </p>
            <p className="text-sm text-secondary-dark px-2 leading-6 sm:px-10 md:text-lg lg:text-left">
              When I'm not coding, you'll find me shooting hoops, planning world
              domination, or diving face-first down an internet rabbit hole in
              pursuit of truth and knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
