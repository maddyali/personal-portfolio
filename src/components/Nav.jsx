import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavLinks(props) {
  return (
    <>
      <ul className={props.className}>
        <li onClick={props.isMobileOpen ? props.toggleMobile : null}>
          <a href="#home">Home</a>
        </li>
        <li onClick={props.isMobileOpen ? props.toggleMobile : null}>
          <a href="#about">About</a>
        </li>
        <li onClick={props.isMobileOpen ? props.toggleMobile : null}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={props.isMobileOpen ? props.toggleMobile : null}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  const mobileStyle = {
    container:
      "flex items-center justify-center w-full h-screen fixed z-10 text-center bg-white left-0 top-0 transition-all duration-300 ease-in-out",
    btnMenu: "hidden",
    btnX: "absolute top-6 right-7",
    navlinks: "flex flex-col gap-8",
  };

  return (
    <nav className={isOpen ? mobileStyle.container : "h-6"}>
      <button
        onClick={toggleMobile}
        type="button"
        className={isOpen ? mobileStyle.btnMenu : "sm:hidden"}
      >
        <Menu size={30} />
      </button>

      <button
        onClick={toggleMobile}
        type="button"
        className={isOpen ? mobileStyle.btnX : "hidden"}
      >
        <X size={30} />
      </button>

      <NavLinks
        className={
          isOpen
            ? mobileStyle.navlinks
            : "hidden sm:flex gap-8 lg:text-lg font-semibold"
        }
        toggleMobile={toggleMobile}
        isMobileOpen={isOpen === true}
      />
    </nav>
  );
}
