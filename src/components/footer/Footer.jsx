import React from "react";
import "./Footer.css";
import applogo from "../../assets/logo.svg";
import upi from "../../assets/upilogo.svg"
import { useNavigate } from "react-router-dom";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { BiMap } from "react-icons/bi";


const Footer = () => {
  const navigate = useNavigate();
 
  const handleClick1 = () => {
    window.scroll(0, 0);
    navigate("/privacy")
  };

  const handleClick2 = () => {
    window.scroll(0, 0);
    navigate("/terms")
  };
  const handleClick3 = () => {
    window.scroll(0, 0);
    navigate("/refund");
  };
  const handlefaq = () => {
    window.scroll(0, 0);
    navigate("/faq");
  };
   const handleabout = () => {
     window.scroll(0, 0);
     navigate("/about");
   };
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-lists">
            <ul className="footerlist">
              <li className="footer-list-item">
                <div className="footer-title">
                  <div className="footer-app-logo">
                    <img src={applogo} alt=""></img>
                    <span>TakTik</span>
                  </div>
                </div>
              </li>
              <li className="footer-list-item">
                <div className="provide-support-text">
                  <span>We Provide Upi Support</span>
                </div>
              </li>
              <li className="footer-list-item">
                <img className="upi-logo" src={upi} alt="" />
              </li>
            </ul>

            <ul className="footerlist">
              <li className="footer-list-item">
                <div className="footer-title">Get Help</div>
              </li>
              <li className="footer-list-item" onClick={handlefaq}>
                FAQ
              </li>
              <li className="footer-list-item" onClick={handleabout}>
                About Us
              </li>
            </ul>

            <ul className="footerlist">
              <li className="footer-list-item">
                <div className="footer-title">Legal</div>
              </li>
              <li className="footer-list-item" onClick={handleClick1}>
                Privacy Policy
              </li>
              <li className="footer-list-item" onClick={handleClick3}>
                Refund Policy
              </li>
              <li className="footer-list-item" onClick={handleClick2}>
                Terms & Conditions
              </li>
            </ul>

            <ul className="footerlist">
              <li className="footer-list-item">
                <div className="footer-title">Contact</div>
              </li>
              <li className="footer-list-item">
                <div className="container-1">
                  <BsFillTelephoneFill />
                  <div className="number">+91-9105557000</div>
                </div>
              </li>
              <li className="footer-list-item">
                <div className="container-1">
                  <IoIosMail />
                  <div className="number">
                    sayhello@applytaktik.com
                    <br />
                    meetmanish@applytaktik.com
                  </div>
                </div>
              </li>
              <li className="footer-list-item">
                <div className="container-1">
                  <BiMap />
                  <div className="number">Lucknow - 226023, UP</div>
                </div>
              </li>
            </ul>

            <ul className="footerlist">
              <li className="footer-list-item">
                <div className="footer-title">Social Media</div>
              </li>
              <li className="footer-list-item">
                <div className="media-links">
                  <span>
                    <BsFacebook />
                  </span>
                  <span>
                    <BsTwitter />
                  </span>
                  <span>
                    <BsLinkedin />
                  </span>
                  <a href="https://www.instagram.com/taktik_india/">
                    <BsInstagram />
                  </a>
                  <a href="https://www.youtube.com/channel/UCceSGTtnKTwE5mevPtfYUTg?sub_confirmation=1">
                    <BsYoutube />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
