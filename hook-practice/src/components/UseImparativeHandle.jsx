import Button from "./Button";
import React, { useRef } from "react";

const UseImparativeHandle = () => {
  const button = useRef(null);
  return (
    <div>
      <button
        onClick={() => button.current.toggle()}
        className="btn btn-danger"
      >
        Button from Parent
      </button>
      <Button ref={button} />
    </div>
  );
};

export default UseImparativeHandle;
