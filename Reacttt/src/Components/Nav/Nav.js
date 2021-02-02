import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

function Nav({ link1, to1, link2, to2 }) {
  return (
    <>
      <nav className="nav container-fluid">
        <Link to='/'>
          <div className="nav__brand">
            <img src="https://img.icons8.com/nolan/64/breaking-bad.png" />
          </div>
        </Link>
        <div className="nav__links">
          <Link className="a" to={to2}>
            {link2}
          </Link>
          <Link className="a" to={to1}>
            {link1}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
