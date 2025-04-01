"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBarsStaggered, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  return (
    <div className="flex   xs:justify-end lg:justify-center xs:flex-col xs:gap-y-2 lg:gap-y-0 lg:flex-row lg:items-center py-4  xs:px-10 lg:px-0 " >
      <button onClick={() => setIsOpen(!isOpen)} className="xs:inline-block lg:hidden">
        {isOpen ? <FaX /> : <FaBarsStaggered />}
      </button>
      <nav className="flex gap-x-8 xs:hidden lg:flex">
        {navlinks.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="font-jost text-gray text-lg tracking-wider hover:text-white transition-colors duration-300 "
          >
            {item.name}
          </a>
        ))}
      </nav>

      <nav
        className={`${
          isOpen
            ? "flex flex-col bg-[#00000090] rounded-md p-5 transition-all  ease-in-out"
            : "hidden"
        }`}
      >
        {navlinks.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="font-jost text-gray text-lg tracking-wider hover:text-white transition-colors duration-300 "
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
