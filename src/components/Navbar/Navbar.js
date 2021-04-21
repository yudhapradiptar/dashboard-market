import React from "react";
import logo from "../../assets/images/advotics-logo.jpg";
import profileIcon from "../../assets/images/Profile.svg";
import logout from "../../assets/images/logout.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="advotics-logo" className="advotics-logo" />
        <div className="logo-down">
          <div className="powered-by">powered by</div>
          <img
            src={logo}
            alt="advotics-logo-smaller"
            className="advotics-logo-smaller"
          />
        </div>
      </div>
      <div className="profile">
        <div className="text-profile">
          <div className="username">Username</div>
          <div className="company">Company Name</div>
        </div>
        <img src={profileIcon} alt="profile-icon" className="profile-icon" />
        <img src={logout} alt="logout" className="logout" />
      </div>
    </div>
  );
}

export default Navbar;
