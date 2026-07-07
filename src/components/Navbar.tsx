import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="container relative z-20 pt-5">
      <nav className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 backdrop-blur-xl">
        <a href="#hero" className="text-lg font-bold tracking-normal">
          Hammad<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <li className="menulink">
            <a href="#about">About</a>
          </li>
          <li className="menulink">
            <a href="#projects">Projects</a>
          </li>
          <li className="menulink">
            <a href="#skills">Skills</a>
          </li>
          <li className="menulink">
            <a href="#assistant">Assistant</a>
          </li>
          <li className="menulink">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-accent md:inline-flex"
        >
          Start Project
        </a>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
