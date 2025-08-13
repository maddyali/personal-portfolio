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
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-800 leading-10 lg:text-3xl lg:text-left lg:ml-10">
              My Story
            </h2>

            <div className="text-md text-gray-600 leading-7 md:text-lg text-left lg:ml-10 space-y-4">
              <p>
                So I used to be an accountant. The problem? I liked when money
                went missing. Now before you get any ideas, let me explain. You
                see, it gave me a problem to solve:
              </p>

              <ul className=" list-disc list-inside space-y-1 ml-4">
                <li>Was it human error?</li>
                <li>A spreadsheet mistake?</li>
                <li>Someone cooking the books?</li>
              </ul>

              <p>
                It was my introduction to the art of debugging. When I realized
                software development is just testing, problem solving, and
                building solutions–I was hooked. Now, instead of tracking down
                missing money, I track down problems to solve using code.
              </p>

              <p>
                When I'm not building, you'll find me shooting hoops, reading
                with an iced americano in hand, or creating educational content
                online.
              </p>

              <p className="font-semibold italic text-gray-700">
                My goal? To build things people love with people that inspire
                me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
