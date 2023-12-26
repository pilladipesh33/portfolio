"use client";

import { ModeToggle } from "@/components/mode-toggle";
import useWindowDimensions from "@/hooks/useWindowDimension";
import React from "react";
import { Logo } from "./logo";

const Navbar = () => {
  return (
    <div className="px-5 py-1 w-full">
      <div className="flex justify-between items-center">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <div className="md:flex justify-between items-center w-2/5">
          <p>About</p>
          <p>Work</p>
          <p>Process</p>
          <p>Drop me a line</p>
        </div>
        <div className="flex justify-around items-center">
          <ModeToggle />
          <p>Theme</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
