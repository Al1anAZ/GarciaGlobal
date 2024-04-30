import React from "react";

export const ArrowPrjct = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
    >
      <path d="M20 1L1 21" stroke={color} stroke-linecap="round" />
      <path d="M20.5 1V14" stroke={color} stroke-linecap="round" />
      <path d="M7 1L20 0.999999" stroke={color} stroke-linecap="round" />
    </svg>
  );
};
