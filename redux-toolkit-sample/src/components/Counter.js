import { useSelector } from "react-redux";
import "../App.css";
const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  return <p className="App-link">{count}</p>;
};

export default Counter;
