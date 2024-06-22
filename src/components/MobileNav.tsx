"use client";

import { navLinks } from "@/constants/nav-links";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={toggleMenu}
      >
        {!isOpen ? <Menu /> : <X />}
      </div>
      <figure
        className={`absolute rounded-md right-2 origin-top top-20 w-screen ${
          isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"
        } w-auto bg-slate-800 p-6 transition-all duration-300 ease-in-out z-50`}
      >
        <nav className="w-full h-full flex flex-col transition-shadow duration-300 space-y-2 capitalize font-normal tracking-wide">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
};

export default MobileNav;
