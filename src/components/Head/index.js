import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <header className="header">
      <Nav />

      <h2 className="header__name">
        mhairi hislop |
        <span className="header__name--title"> full stack developer</span>
      </h2>
    </header>
  );
};

export default Head;
