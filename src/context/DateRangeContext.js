import React, { createContext, useReducer } from "react";
import { dateRangeReducer } from "../reducer/dateRangeReducer";

export const DateRangeContext = createContext();

const DateRangeContextProvider = (props) => {
  const [dateRange, dispatch] = useReducer(dateRangeReducer, [
    new Date(new Date().setDate(new Date().getDate() - 7)),
    new Date(new Date().setDate(new Date().getDate() - 1)),
  ]);

  return (
    <DateRangeContext.Provider
      value={{ dateRange, dispatch }}
    >{props.children}</DateRangeContext.Provider>
  );
};

export default DateRangeContextProvider;
