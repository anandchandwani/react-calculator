import React from "react";

export const OprationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() => dispatch({ type: "operation", payload: { operation } })}
    >
      {operation}
    </button>
  );
};
