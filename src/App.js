import { useReducer } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { OprationButton } from "./components/OprationButton";

function reducer(state, { type, payload }) {
  switch (type) {
    case "Add":
      return {
        ...state,
        cnumber: `${state.cnumber || ""}${payload.digit}`,
      };
    case "operation":
      return {
        ...state,
        operation: payload.operation,
        pre: state.cnumber,
        cnumber: null,
      };
    case "EVALUATE":
      return {
        ...state,
        operation: null,
        pre: null,
        cnumber: evaluate(state),
      };
    case "CLEAR":
      return {
        ...state,
        operation: null,
        pre: null,
        cnumber: 0,
      };
  }
}
function App() {
  const [{ cnumber, pre, operation }, dispatch] = useReducer(reducer, {});

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="calculator-panel">
            {pre} {operation}
            <div className="output">
              <span className="upper"> {cnumber}</span>
            </div>
          </div>

          <button
            className=""
            onClick={() => dispatch({ type: "CLEAR" })}
            style={{ width: "400px", borderRadius: "inherit" }}
          >
            CLR
          </button>
          <Button dispatch={dispatch} digit={1} />
          <Button dispatch={dispatch} digit={2} />
          <Button dispatch={dispatch} digit={3} />
          <OprationButton dispatch={dispatch} operation="/" />
          <Button dispatch={dispatch} digit={4} />
          <Button dispatch={dispatch} digit={5} />
          <Button dispatch={dispatch} digit={6} />
          <OprationButton dispatch={dispatch} operation="-" />
          <Button dispatch={dispatch} digit={7} />
          <Button dispatch={dispatch} digit={8} />
          <Button dispatch={dispatch} digit={9} />
          <OprationButton dispatch={dispatch} operation="*" />
          <Button dispatch={dispatch} digit="." />
          <Button dispatch={dispatch} digit={0} />
          <OprationButton dispatch={dispatch} operation="+" />
          <button className="" onClick={() => dispatch({ type: "EVALUATE" })}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

function evaluate({ cnumber, pre, operation }) {
  const prev = parseFloat(pre);
  const current = parseFloat(cnumber);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
  }

  return computation.toString();
}

export default App;
