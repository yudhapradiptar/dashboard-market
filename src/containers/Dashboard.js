import React from "react";
import "./Dashboard.scss";
import FilterPeriod from "./components/FilterPeriod/FilterPeriod";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="title-row">
        <h1>Dashboard</h1>
        <div className="filter-period-box">
          <FilterPeriod />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
