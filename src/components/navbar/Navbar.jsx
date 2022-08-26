import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <header className="nav-collapsed">
      <nav>
        <div className="magnet" href="/">
          <a className="nav-logo" href="/">
            <img className="app-logo" src={logo} alt="logo" />
            <span className="initials">TakTik</span>
          </a>
        </div>
        <div className="nav-links">
          <a activeclassname="active" className="nav-link magnet" href="/">
            <span styles="">
              <p>Home</p>
            </span>
          </a>
          <a
            activeclassname="active"
            aria-current="page"
            className="nav-link magnet"
            href="/about"
          >
            <span>
              <p>How To Trade</p>
            </span>
          </a>
          <a activeclassname="active" className="nav-link magnet" href="/">
            <span styles="">
              <p>FAQ</p>
            </span>
          </a>
          <a activeclassname="active" className="nav-link magnet" href="/">
            <span styles="">
              <p>Contact</p>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
