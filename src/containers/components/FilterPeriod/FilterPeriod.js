import React, { useState } from "react";
import "./FilterPeriod.scss";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

function FilterPeriod() {

  const startValue = new Date(new Date().setDate(new Date().getDate() - 7));
  const endValue = new Date(new Date().setDate(new Date().getDate() - 1));

  const maxDate = new Date(new Date().setDate(new Date().getDate()-1));

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
        startDate={startValue}
        endDate={endValue}
        maxDays={180}
        max={maxDate}
      />
    </div>
  );
}

export default FilterPeriod;
