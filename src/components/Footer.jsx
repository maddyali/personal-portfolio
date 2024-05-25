import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-2 py-6 lg:py-8 text-center bg-primary-dark text-primary font-semibold">
      <h3>Copyright © {currentYear}. All rights reserved.</h3>
    </footer>
  );
}
