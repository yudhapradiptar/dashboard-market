import React from "react";
import "./Dashboard.scss";
import FilterPeriod from "./components/FilterPeriod/FilterPeriod";
import help from "../assets/images/Help.png";
import { IoIosArrowUp } from "react-icons/io";
import SalesTurnover from "./components/SalesTurnover/SalesTurnover";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="title-row">
        <h1>Dashboard</h1>
        <div className="filter-period-box">
          <FilterPeriod />
        </div>
      </div>
      <div className="market-insight">
        <div className="insight-title">MARKET INSIGHT</div>
        <div className="help">
          <img src={help} alt="help" className="help-icon" />
          <div className="help-text">Click Here for Help</div>
          <div className="up-arrow">
            <IoIosArrowUp />
          </div>
        </div>
      </div>
      <div className="sales-turnover-box">
        <SalesTurnover />
      </div>
    </div>
  );
};

export default Dashboard;
