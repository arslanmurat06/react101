import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import "materialize-css/dist/css/materialize.min.css";

const initialValues = {
  id: "",
  todo: "",
  date: "",
};

const TodoForm = ({ change }) => {
  const [state, setState] = useState(initialValues);

  const handleChange = (e) => {
    let { value } = e.target;
    const date = new Date().toLocaleDateString().split(",")[0];
    const id = uuidv4();
    setState({ ...state, todo: value, date, id });
  };

  const handleSubmit = () => {
    change(state);
    setState(initialValues);
  };

  return (
    <>
      <div className="row">
        <div className="col m12 s12">
          <label htmlFor="todoTExt">Todo</label>
          <input
            id="todo"
            name="todo"
            type="text"
            placeholder="Enter todo please"
            value={state.todo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="center">
        <button
          id="bmi-btn"
          className="calculate-btn"
          type="button"
          disabled={state.todo === ""}
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

TodoForm.propTypes = {
  change: PropTypes.func.isRequired,
};

export default TodoForm;
