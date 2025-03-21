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
            <p className="text-sm text-secondary-dark px-2 leading-6 sm:px-10 md:text-lg text-left">
              I used to be an accountant. The problem? I liked when money went
              missing. Now before you get any ideas, let me explain. See, it
              gave me a problem to solve:
            </p>

            <p className="text-sm text-secondary-dark px-2 leading-6 sm:px-10 md:text-lg text-left">
              • Was it a human error? <br />• A spreadsheet mistake? <br />•
              Someone cooking the books?
            </p>

            <p className="text-sm text-secondary-dark px-2 leading-6 sm:px-10 md:text-lg text-left">
              It was an introduction to the art of debugging. When I realized
              software development is just testing, problem solving, and
              building solutions–I was hooked. Now, instead of tracking down
              missing money, I track down problems to solve using code.
            </p>

            <p className="text-sm text-secondary-dark px-2 leading-6 sm:px-10 md:text-lg text-left">
              When I'm not building, you'll find me shooting hoops, reading with
              an iced americano in hand, or creating educational content online.
            </p>
            <p className="font-semibold italic text-sm px-2 leading-6 sm:px-10 md:text-lg text-left text-secondary-dark">
              My goal? To build things people love with people that inspire me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
