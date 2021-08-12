import PropTypes from "prop-types";
import React from "react";

const Info = ({ id, todo, date, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            - {todo}
          </span>

          <div className="card-data">
            <span data-test="date">Date: {date}</span>
          </div>
          <button className="delete-btn" onClick={handleDelete}>
            <i className="small material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  date: PropTypes.string,
  todo: PropTypes.string,
  delete: PropTypes.func,
};

export default Info;
