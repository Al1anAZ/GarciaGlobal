import React from "react";

export const Phone = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 6C13 6 14.4689 6.21885 16.125 7.875C17.7811 9.53115 18 11 18 11"
        stroke={color}
        strokewidth="1.5"
        stroke-linecap="round"
      />
      <path
        d="M13 3C13 3 15.3502 3.35016 18 6C20.6498 8.64984 21 11 21 11"
        stroke={color}
        strokewidth="1.5"
        stroke-linecap="round"
      />
      <path
        d="M8.81246 6.94776L7.23283 4.25934C6.92409 3.73388 6.2541 3.55435 5.75283 3.901C4.76655 4.58305 3.29662 5.7796 2.93095 7.05889C2.36331 9.04476 4.40957 13.7741 7.1916 16.5562C9.97371 19.3384 14.4618 21.1431 16.4478 20.5757C17.727 20.2103 18.9238 18.7409 19.6061 17.7548C19.953 17.2535 19.7735 16.5834 19.2479 16.2746L16.5595 14.6949C16.0494 14.3952 15.3944 14.5432 15.0627 15.033L14.3236 16.1244C14.0037 16.5967 13.3828 16.7483 12.9049 16.4367C12.1352 15.9349 10.9373 15.0652 9.68936 13.8173C8.44161 12.5696 7.57201 11.3717 7.07014 10.6021C6.75847 10.1241 6.91019 9.50297 7.38278 9.18318L8.47403 8.44477C8.96407 8.11317 9.1122 7.45791 8.81246 6.94776Z"
        fill={color}
      />
    </svg>
  );
};
