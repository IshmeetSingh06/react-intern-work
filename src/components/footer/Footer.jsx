import React from "react";
import "./Footer.css";
import applogo from "../../assets/logo.svg";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-lists">
          <ul className="footerlist">
            <li className="footer-list-item">
              <div className="footer-title">
                <div className="footer-app-logo">
                  <img src={applogo}></img>
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
              <div className="upi-logo"></div>
            </li>
          </ul>
          <ul className="footerlist">
            <li className="footer-list-item">
              <div className="footer-title">Pages</div>
            </li>
            <li className="footer-list-item">Home it Work</li>
            <li className="footer-list-item">Pricing</li>
            <li className="footer-list-item">Blog</li>
            <li className="footer-list-item">Demo</li>
          </ul>

          <ul className="footerlist">
            <li className="footer-list-item">
              <div className="footer-title">Services</div>
            </li>
            <li className="footer-list-item">Shopify</li>
            <li className="footer-list-item">WordPress</li>
            <li className="footer-list-item">UI/UX Design</li>
          </ul>

          <ul className="footerlist">
            <li className="footer-list-item">
              <div className="footer-title">Contact</div>
            </li>
            <li className="footer-list-item">
              <div>
                <BsFillTelephoneFill />
                xyz
              </div>
            </li>
            <li className="footer-list-item">
              <div>
                <IoIosMail />
                <span>xyz</span>
              </div>
            </li>
            <li className="footer-list-item">
              <div>
                <BiMap />
                xyz
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
                <span>
                  <BsInstagram />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
