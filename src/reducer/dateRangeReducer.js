export const dateRangeReducer = (state, action) => {
    switch (action.type) {
      case "SET_DATE":
        return action.dateRange;
      default:
        return state;
    }
  };