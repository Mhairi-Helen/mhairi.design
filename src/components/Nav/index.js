import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav role="navigation" className="nav">
      <button className="nav__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="nav__content">
        <li className="nav__item">
          <Link className="nav__link" to="/devprojects">
            development projects
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/illustration">
            illustration projects
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/aboutme">
            about me
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
