import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isOverlayActive, setOverlayActive] = useState(false);

  const navigate = useNavigate();
  const path = window.location.pathname;

  const toggle = () => {
    setOverlayActive(!isOverlayActive);
  };
  const toggle1 = () => {
    setOverlayActive(!isOverlayActive);
    navigate("/");
    window.scrollTo(6000, 6000);
  };

  const toggle2 = () => {
    setOverlayActive(!isOverlayActive);
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    window.scroll(0, 0);
    navigate("/download");
  };

  const handleClick1 = () => {
    if (path === "/") window.scrollTo(2100, 2100);
    else {
      window.scrollTo(2100, 2100);
      navigate("/");
    }
  };

  const handletrade = () => {
    if (path === "/") window.scrollTo(900, 900);
    else {
      window.scrollTo(-900, 900);
      navigate("/");
    }
  };
  const handleContact = () => {
    window.scrollTo(6000, 6000);
  };

  return (
    <>
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
            <div
              activeclassname="active"
              aria-current="page"
              className="nav-link magnet"
              onClick={handletrade}
            >
              <span>
                <p>How To Trade</p>
              </span>
            </div>
            <div
              activeclassname="active"
              className="nav-link magnet"
              onClick={handleClick1}
            >
              <span styles="">
                <p>FAQ</p>
              </span>
            </div>
            <div
              activeclassname="active"
              className="nav-link magnet"
              onClick={handleContact}
            >
              <span styles="">
                <p>Contact</p>
              </span>
            </div>
            <a
              className="button-download"
              href="https://taktikapk.s3.ap-south-1.amazonaws.com/taktik.apk"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={handleClick}
            >
              <span>Download</span>
            </a>
          </div>
          <svg
            className={`ham hamRotate ${isOverlayActive ? "activated" : ""}`}
            viewBox="0 0 100 100"
            width="70"
            onClick={toggle}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            ></path>
            <path className="line middle" d="m 30,50 h 40"></path>
            <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            ></path>
          </svg>
          <div className="magnet-1">
            <a
              className="button-download-mobile"
              href="https://taktikapk.s3.ap-south-1.amazonaws.com/taktik.apk"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={handleClick}
            >
              <span>Download</span>
            </a>
          </div>
        </nav>
      </header>
      <div
        className={`overlay-menu ${isOverlayActive ? "overlay-active" : ""}`}
      >
        <Link
          activeclassname="active"
          aria-current="page"
          className="nav-link active"
          onClick={toggle2}
          to="/"
        >
          <div className="overlay-font">
            <p>Home</p>
          </div>
        </Link>
        <Link
          activeclassname="active"
          className="nav-link"
          onClick={toggle2}
          to="/about"
        >
          <div className="overlay-font">
            <p>About Us</p>
          </div>
        </Link>
        <Link
          activeclassname="active"
          className="nav-link"
          onClick={toggle2}
          rel="noref"
          to="/faq"
        >
          <div className="overlay-font">
            <p>FAQ</p>
          </div>
        </Link>
        <Link
          activeclassname="active"
          className="nav-link"
          onClick={toggle1}
          to="/"
        >
          <div className="overlay-font">
            <p>Contact Us</p>
          </div>
        </Link>
        <Link
          activeclassname="active"
          className="nav-link"
          onClick={toggle2}
          to="/terms"
        >
          <div className="overlay-font">
            <p>Terms & Conditions</p>
          </div>
        </Link>
        <Link
          activeclassname="active"
          className="nav-link"
          onClick={toggle2}
          to="/privacy"
        >
          <div className="overlay-font">
            <p>Privacy Policy</p>
          </div>
        </Link>
        <Link
          activeclassname="active"
          className="nav-link"
          onClick={toggle2}
          to="/refund"
        >
          <div className="overlay-font">
            <p>Refund Policy</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
