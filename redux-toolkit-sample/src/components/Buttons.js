import { useDispatch } from "react-redux";
import { decrement, increment } from "../state/counterSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Buttons;
