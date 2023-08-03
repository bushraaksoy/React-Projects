import React, { useEffect, useState } from "react";

const Input = () => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log(inputVal);
  }, [inputVal]);

  return (
    <div className="input">
      <input
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
        type="text"
        placeholder="Enter text.."
      />
      <br />
      {inputVal}
    </div>
  );
};

export default Input;
