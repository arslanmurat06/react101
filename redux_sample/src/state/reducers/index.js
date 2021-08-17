import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const reducers = combineReducers({
  customReducer: CounterReducer,
});

export default reducers;
