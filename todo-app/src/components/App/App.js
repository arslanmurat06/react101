import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import TodoForm from "../TodoForm/Todo_Form";
import Info from "../Info/info";
import React, { useState } from "react";
import { getData, storeData } from "../../helper/localStorage";

function App() {
  const initialState = () => getData("data") || [];
  const [state, setState] = useState(initialState);

  const handleChange = (newTodo) => {
    let newVal = [...state, newTodo];
    setState(newVal);
  };
  const handleDelete = (id) => {
    storeData("lastState", state);
    let newState = state.filter((i) => {
      return i.id !== id;
    });
    setState(newState);
  };

  return (
    <div className="container">
      <div className="row center">
        <h2 className="white-text">TODO App</h2>
      </div>
      <div>
        <TodoForm change={handleChange} />
      </div>
      <>
        <div className="row center">
          <h4 className="white-text">TODOs</h4>
        </div>
        <div className="data-container row">
          {state.length > 0 ? (
            <>
              {state.map((info) => (
                <Info
                  key={info.id}
                  id={info.id}
                  todo={info.todo}
                  date={info.date}
                  deleteCard={handleDelete}
                />
              ))}
            </>
          ) : (
            <div className="center white-text">No todo found</div>
          )}
        </div>
      </>
    </div>
  );
}

export default App;
