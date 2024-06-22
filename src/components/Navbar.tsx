import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "@/constants/nav-links";
import MobileNav from "./MobileNav";
import { Phone, PhoneCall } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        {/* desktop navigation */}
        <nav className="hidden md:flex gap-6 capitalize">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-[16px] hover:border-b-2 border-sky-400 font-semibold tracking-wide text-slate-200"
            >
              {link}
            </Link>
          ))}

          <Link
            href=""
            className="text-sm font-semibold tracking-wide text-slate-200"
          >
            <div className="flex items-center">
              <PhoneCall className="w-6 h-6 text-blue-500" />
              <span className="ml-2 text-[16px] font-semibold text-slate-200">
                0512345678
              </span>
            </div>
          </Link>
        </nav>
        {/* mobile navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
