import React from "react";
import "./Sidebar.scss";
import { BiMenuAltLeft } from "react-icons/bi";
import dashIcon from "../../assets/images/Dashboard icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-icon">
        <BiMenuAltLeft />
      </div>
      <div className="dash-nav">
        <div className="dash-box">
          <img src={dashIcon} alt="dashboard-icon" className="dash-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
