import Image from "next/image";

export const Logo = () => {
  return (
    <div className=" gap-x-2">
      <Image
        className="dark:hidden"
        src={"/logo.svg"}
        height={"50"}
        width={"50"}
        alt="Logo"
      />
      <Image
        className="hidden dark:block"
        src={"/logo-dark.svg"}
        height={"50"}
        width={"50"}
        alt="Logo"
      />
    </div>
  );
};
