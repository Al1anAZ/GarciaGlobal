import React from "react";

export const ArrowDropDown = ({ color, width, height, rotation }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 23"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)`, transition: "all 0.4s" }}
    >
      <path d="M12.5312 15.5L6.53125 10.5H18.5312L12.5312 15.5Z" fill={color} />
    </svg>
  );
};
