import React from "react";

export const ArrowBack = ({ color, width, height, rotation }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 6 10"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M5 1L1.35355 4.64645C1.15829 4.84171 1.15829 5.15829 1.35355 5.35355L5 9"
        stroke={color}
        stroke-linecap="round"
      />
    </svg>
  );
};
