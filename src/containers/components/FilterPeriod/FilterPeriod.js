import React, { useContext } from "react";
import "./FilterPeriod.scss";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DateRangeContext } from "../../../context/DateRangeContext";

function FilterPeriod() {
  const { dispatch, dateRange } = useContext(DateRangeContext);

  console.log(dateRange)

  const maxDate = new Date(new Date().setDate(new Date().getDate() - 1));

  const presets = [
    {
      label: "Yesterday",
      start: new Date(new Date().setDate(new Date().getDate() - 1)),
      end: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      label: "Last 7 Days",
      start: new Date(new Date().setDate(new Date().getDate() - 7)),
      end: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      label: "Last 30 Days",
      start: new Date(new Date().setDate(new Date().getDate() - 30)),
      end: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
  ];

  return (
    <div className="filter-period">
      <DateRangePickerComponent
        placeholder="Select a range"
        presets={presets}
        format="dd MMMMMMMMM yyyy"
        maxDays={180}
        max={maxDate}
        value={dateRange}
        onChange={(e) => dispatch({ type: "SET_DATE", dateRange: e.value })}
        allowEdit={false}
      />
    </div>
  );
}

export default FilterPeriod;
