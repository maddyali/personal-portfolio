import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="py-6 px-7 flex justify-between items-center sticky top-0 bg-white border-b border-gray-100 shadow-md md:px-10 lg:py-8 lg:px-14">
      <h3 className="text-primary-dark font-semibold">@alithetechie</h3>
      <Nav />
    </header>
  );
}
