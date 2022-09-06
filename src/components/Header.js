import React from "react";
import Banner from "./Banner";
const Header = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-1 black"> Le Cafe </h1>
      <React.Fragment>
        <Banner />
      </React.Fragment>
      <div className="text-center"></div>
    </div>
  );
};

export default Header;
