import React from "react";
import { Linkedin, Mail, Instagram } from "lucide-react";

export default function Socials() {
  return (
    <>
      <a href="mailto:maddyoali+career@gmail.com" className="cursor-pointer">
        <Mail />
      </a>

      <a
        href="https://www.linkedin.com/in/maddyali"
        target="_blank"
        className="cursor-pointer"
      >
        <Linkedin />
      </a>
      <a
        href="https://www.instagram.com/builtbyali"
        target="_blank"
        className="cursor-pointer"
      >
        <Instagram />
      </a>
    </>
  );
}
