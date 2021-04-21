import React from "react";
import iconMore from "../../../assets/images/Icon - More.svg";
import cart from "../../../assets/images/Sales Turnover.svg";
import "./SalesTurnover.scss";
import { AiOutlineArrowDown } from "react-icons/ai";

function SalesTurnover() {
  return (
    <div className="sales-turnover">
      <div className="sales-title">
        <p>Sales Turnover</p>
        <img src={iconMore} alt="icon-more" className="icon-more" />
      </div>
      <div className="sales-content">
        <div className="sales-value">
          <div className="main-value">Rp 3,600,000</div>
          <div className="movement-value">
              <div className="percentage">
                <AiOutlineArrowDown /> 13.8%
              </div>
              <div className="movement-info">last period in products sold</div>
          </div>
        </div>
        <img src={cart} alt="cart" className="cart" />
      </div>
    </div>
  );
}

export default SalesTurnover;
