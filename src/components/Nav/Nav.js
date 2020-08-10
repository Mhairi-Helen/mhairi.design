import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav role="navigation" className="nav">
      <button className="nav__btn">
        <span class="nav__btn--burger"></span>
      </button>

      <ul className="nav__content">
        <li>
          <Link className="nav__item" to="/devprojects">
            development projects
          </Link>
        </li>
        <li>
          <Link className="nav__item" to="/illustration">
            illustration projects
          </Link>
        </li>
        <li>
          <Link className="nav__item" to="/aboutme">
            about me
          </Link>
        </li>
        <li>
          <Link className="nav__item" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
