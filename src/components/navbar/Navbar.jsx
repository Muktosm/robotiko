import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router";
import CommonButton from "../../common/commonButton/CommonButton";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navrow">
            <div className="logo">
              <NavLink to="/">
                <img src="/images/robotiko.png" alt="company logo" />
              </NavLink>
            </div>
            <div className="navLinks">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="buttton">
              <CommonButton commonButtonContent={"Get Started"} commonButtonStyle={"getStartedb"}   />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
