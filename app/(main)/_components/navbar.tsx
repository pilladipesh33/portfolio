"use client";

import React from "react";
import { Logo } from "./logo";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="px-5 py-1 w-full">
      <div className="flex justify-between items-center">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <div className="md:flex justify-between items-center w-2/5 lg:w-3/12">
          <nav className="">
            <Link href="/" className="hover:underline">
              About
            </Link>
          </nav>
          <nav>
            <Link href="/" className="hover:underline">
              Work
            </Link>
          </nav>
          <nav>
            <Link href="/" className="hover:underline">
              Process
            </Link>
          </nav>
          <nav>
            <Link href="/" className="hover:underline">
              Drop me a line
            </Link>
          </nav>
        </div>
        <div className="flex justify-around items-center">
          {theme == "light" ? (
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setTheme("dark")}
            >
              <Moon className="h-[1.2rem] w-[1.2rem] " />
            </Button>
          ) : (
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setTheme("light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] " />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
