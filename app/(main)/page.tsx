import React from "react";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Footer from "./_components/footer";

const MainPage = () => {
  return (
    <div>
      <Heading />
      <div>
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
