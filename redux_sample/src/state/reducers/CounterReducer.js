const initialState = 0;

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    default:
      return state;
  }
};

export default CounterReducer;
