import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "toggleShowText":
        return { ...state, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click
      </button>
      <div>{state.showText && <h5>This is a text</h5>}</div>
    </div>
  );
};

export default UseReducer;
