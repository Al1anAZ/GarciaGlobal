import React from "react";

export const MyButton = ({ className, handler, children, style }) => {
  return (
    <button onClick={handler} className={[className].join(" ")} style={style}>
      {children}
    </button>
  );
};
