export const increase = () => {
  console.log("buraya geldi");
  return (dispatch) => {
    dispatch({
      type: "increament",
    });
  };
};

export const decrease = () => {
  return (dispatch) => {
    dispatch({
      type: "decreament",
    });
  };
};
