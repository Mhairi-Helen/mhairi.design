import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <footer className="footer">
      <picture className="footer--logo">
        <img
          className="icon"
          src={require("../../assets/icons/mhairiPink.png")}
          alt="M logo"
        />
      </picture>
    </footer>
  );
};

export default Foot;
