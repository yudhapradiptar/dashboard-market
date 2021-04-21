import React from "react";
import calendarIcon from "../../../assets/images/calendar.png";
import "./FilterPeriod.scss";
import { IoIosArrowDown } from "react-icons/io";

function FilterPeriod() {
  return (
    <div className="filter-period">
      <img src={calendarIcon} alt="calendar" className="calendar" />
      <div className="period-text">Period</div>
      <div className="period-range">11 September 2018 - 14 September 2018</div>
      <div className="down-arrow">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default FilterPeriod;
