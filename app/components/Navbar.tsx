"use client";

import { navLinks } from "../constants";
import ThemeToggler from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex max-md:flex-col justify-between m-6 ">
      <strong className="max-md:mb-3">Doğan EFE</strong>
      <ul className="flex max-md:flex-col md:space-x-4">
        {navLinks.map((link) => (
          <li key={link} className="hover:underline cursor-pointer">
            {link}
          </li>
        ))}
        <ThemeToggler />
      </ul>
    </nav>
  );
};

export default Navbar;
