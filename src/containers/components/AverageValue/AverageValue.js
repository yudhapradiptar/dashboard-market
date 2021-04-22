import React, { useContext, useEffect, useState } from "react";
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
  ResponsiveContainer,
} from "recharts";
import { DateRangeContext } from "../../../context/DateRangeContext";

const AverageValue = () => {
  const { dateRange } = useContext(DateRangeContext);

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    let dataTemp = [];

    for (let d = dateRange[0]; d <= dateRange[1]; d.setDate(d.getDate() + 1)) {
      const net = getRandomValue(10000, 25000);
      const apv = getRandomValue(1500, 5000);
      const total = net + apv;

      dataTemp.push({
        name: `${d.getDate()}/${d.getMonth()}/${d.getYear()}`,
        net: net,
        apv: apv,
        total: total
      })
    }

    setData(dataTemp);
  }, [dateRange]);

  const [data, setData] = useState([]);

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
        <ResponsiveContainer width={"99%"} height={400}>
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
            <Line
              type="total"
              dataKey="total"
              stroke="#FFE854"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
            <Bar dataKey="net" stackId="a" barSize={20} fill="#37B04C" />
            <Bar dataKey="apv" stackId="a" barSize={20} fill="#289E45" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageValue;
