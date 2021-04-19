import React from "react";
import Logo from "./../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <img src={Logo} alt="logo" className="flash-logo" />
        <p className="flash-logo-text">FlashType</p>
      </div>
    </div>
  );
};

export default Navbar;
