import React from "react";

export const Button = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ type: "Add", payload: { digit } })}>
      {digit}
    </button>
  );
};
