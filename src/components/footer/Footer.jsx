import React from "react";
import "./Footer.css";
import { Link } from "react-router";
import CommonButton from "../../common/commonButton/CommonButton";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_content">
            <div className="footer_logo">
              <img src="/images/robotiko.png" alt="logo" />
            </div>
            <div className="footer_links_area">
              <div className="footer_links">
                <div>
                  <div className="heading">
                    <h4>Company</h4>
                  </div>
                  <div className="links">
                    <ul>
                      <li>
                        <Link>About</Link>
                      </li>
                      <li>
                        <Link>Services</Link>
                      </li>
                      <li>
                        <Link>Features</Link>
                      </li>
                      <li>
                        <Link>Pricing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="heading">
                    <h4>Resources</h4>
                  </div>
                  <div className="links">
                    <ul>
                      <li>
                        <Link>Case Studies</Link>
                      </li>
                      <li>
                        <Link>Webinars</Link>
                      </li>
                      <li>
                        <Link>Developer</Link>
                      </li>
                      <li>
                        <Link>Documentation</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="heading">
                    <h4>Help</h4>
                  </div>
                  <div className="links">
                    <ul>
                      <li>
                        <Link>Customer Support</Link>
                      </li>
                      <li>
                        <Link>Delivery Details</Link>
                      </li>
                      <li>
                        <Link>Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="subscribe">
                <div className="heading">Subscribe To Newsletter</div>
                <div className="input_area">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Email Address"
                  />
                  <CommonButton commonButtonContent={"Subscribe"} />
                </div>
              </div>
            </div>
            <div className="hr"></div>
            <div className="footer_bottom">
              <div className="copyright">Copyright © 2023 Robotiko</div>
              <div className="developer">Designed by TokoTema</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
