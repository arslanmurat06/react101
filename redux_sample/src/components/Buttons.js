import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
const Buttons = () => {
  const dispatch = useDispatch();

  const { increase, decrease } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <button onClick={() => increase()}>+</button>
      <button onClick={() => decrease()}>-</button>
    </>
  );
};

export default Buttons;
