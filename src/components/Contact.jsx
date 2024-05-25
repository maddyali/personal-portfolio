import React from "react";
import Socials from "./Socials";
export default function Contact() {
  return (
    <section id="contact" className="px-4 py-8  bg-white text-center ">
      <h2 className="text-2xl font-bold text-primary-dark leading-10 mb-8 lg:text-3xl">
        Let's Connect
      </h2>
      <p className="mb-8 text-sm text-secondary-dark leading-6 md:text-lg max-w-[315px] m-auto">
        I'm actively seeking new opportunities and would love to hear from you.
        Whether you have a question or just want to say hi, feel free to shoot
        me a message. Let's chat!
      </p>
      <div className="flex justify-center gap-4 p-2 mb-10 lg:gap-6 lg:justify-center">
        <Socials />
      </div>
    </section>
  );
}
