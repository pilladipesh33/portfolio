import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5">
      <div className="py-[3vh] border-t-[1px] border-black">
        <div className="flex justify-between items-center">
          <Link href={""}>
            <span>Linkedin</span>
          </Link>
          <Link href={""}>
            <span>Github</span>
          </Link>
          <Link href={""}>
            <span>X</span>
          </Link>
          <Link href={""}>
            <span>Email</span>
          </Link>
        </div>
        <div>©️ Design and coded with ❤️</div>
      </div>
    </div>
  );
};

export default Footer;
