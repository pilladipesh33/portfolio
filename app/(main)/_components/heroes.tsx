import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Projects from "./projects";

const Heroes = () => {
  return (
    <div className="py-3.5 px-5">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#00000a] dark:text-[#fffffa] text-xl md:line-clamp-4 md:w-1/2">
            I&apos;ve worked with startup agencies, and my contributions have
            positively impacted their businesses. Additionally, I&apos; ve also
            worked as a freelance developer, collaborating with UX/UI designers,
            which has taught me the importance of cohesive design.
          </p>
          <div className="pt-5">
            <Button className="rounded-[40px] bg-[#00000a] dark:bg-[#fffffa]">
              Drop me a line <ArrowUpRight className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="p-5">
            <p className="text-neutral-500 dark:text-neutral-300 underline">
              Let&apos;s get connected.
            </p>
            <ul className="pt-3">
              <li>
                <span className="text-[#00000a] dark:text-[#fffffa] text-sm pb-3 hover:underline">
                  LinkedIn
                </span>
              </li>
              <li>
                <span className="text-[#00000a] dark:text-[#fffffa] text-sm pb-3 hover:underline">
                  X
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Heroes;
