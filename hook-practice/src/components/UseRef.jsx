import React, { useRef } from "react";

const UseRef = () => {
  const input = useRef(null);

  return (
    <div>
      <input ref={input} type="text" placeholder="enter.." />
      <button onClick={() => input.current.focus()}>Change Name</button>
    </div>
  );
};

export default UseRef;
