import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scroll(0, 0);
    navigate("/download");
  };

  const handletrade = () => {
    window.scroll(900,900);
  };
  const handleContact = () => {
    window.scrollTo(6000,6000)
  };

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
            onClick={handletrade}
          >
            <span>
              <p>How To Trade</p>
            </span>
          </a>
          <a activeclassname="active" className="nav-link magnet" href="/faq">
            <span styles="">
              <p>FAQ</p>
            </span>
          </a>
          <a
            activeclassname="active"
            className="nav-link magnet"
            onClick={handleContact}
          >
            <span styles="">
              <p>Contact</p>
            </span>
          </a>
          <Link
            className="button-download"
            to="https://taktikapk.s3.ap-south-1.amazonaws.com/taktik.apk"
            target="_blank"
            download
            onClick={handleClick}
          >
            <span>Download</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
