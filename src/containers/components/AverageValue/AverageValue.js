import React from "react";
import "./AverageValue.scss";
import iconMore from "../../../assets/images/Icon - More.svg";
import { IoIosArrowDown } from "react-icons/io";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AverageValue = () => {
  const data = [
    {
      name: "Jan",
      net: 19000,
      apv: 3000,
      total: 22000,
    },
    {
      name: "Feb",
      net: 13000,
      apv: 1000,
      total: 14000,
    },
    {
      name: "Mar",
      net: 14000,
      apv: 2500,
      total: 16500,
    },
    {
      name: "Apr",
      net: 16000,
      apv: 1700,
      total: 17700,
    },
    {
      name: "May",
      net: 16300,
      apv: 2300,
      total: 18600,
    },
    {
      name: "Jun",
      net: 15000,
      apv: 2400,
      total: 17400,
    },
    {
      name: "Jul",
      net: 16300,
      apv: 2100,
      total: 18400,
    },
  ];

  return (
    <div className="avg-value">
      <div className="avg-title-row">
        <p>AVERAGE PURCHASE VALUE</p>
        <div className="avg-row-right">
          <div className="avg-period-box">
            <div className="avg-period-text">Last 6 Months</div>
            <div className="avg-period-down">
              <IoIosArrowDown />
            </div>
          </div>
          <img src={iconMore} alt="icon-more" className="icon-more" />
        </div>
      </div>
      <div className="graph">
          <ComposedChart
            width={650}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="total" dataKey="total" stroke="#FFE854" activeDot={{ r: 8 }} strokeWidth={3}/>
            <Bar dataKey="net" stackId="a" barSize={20} fill="#37B04C" />
            <Bar dataKey="apv" stackId="a" barSize={20} fill="#289E45" />
          </ComposedChart>
      </div>
    </div>
  );
};

export default AverageValue;
