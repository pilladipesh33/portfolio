import React from "react";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Footer from "./_components/footer";

const MainPage = () => {
  return (
    <div>
      <Heading />
      <div className="pt-10 px-5">
        <Heroes />
      </div>
      {/* <div className="absolute bottom-0 w-full"> */}
      {/* </div> */}
    </div>
  );
};

export default MainPage;
