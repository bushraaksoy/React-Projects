import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggled, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle() {
      setToggle(!toggled);
    },
  }));

  return (
    <div>
      <button onClick={() => setToggle(!toggled)} className="btn btn-primary">
        Button From Childs
      </button>
      <div>{toggled && <>TOGGLED</>}</div>
    </div>
  );
});

export default Button;
