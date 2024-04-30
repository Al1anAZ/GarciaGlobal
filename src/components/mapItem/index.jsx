import React from "react";
import { House } from "../ui/icons/map/house";
import styles from "./style.module.scss";

export const MapItem = ({
  prjcId,
  prjcName,
  top,
  left,
  right,
  bottom,
  bgColor,
  line,
}) => {
  return (
    <div
      className={styles.mapItem}
      style={{
        top: top,
        left: left + "%",
        right: right + "%",
        bottom: bottom + "%",
        backgroundColor: bgColor,
      }}
    >
      <div style={{ position: "relative" }}>
        <div className={styles.mapItem__toolTip}>{prjcName}</div>
        <House bgColor={bgColor} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="153"
          height="2"
          viewBox="0 0 153 2"
          fill="none"
          className={styles.mapItem__line}
          style={{
            top: line?.top,
            bottom: line?.bottom,
            left: line?.left,
            right: line?.right,
            transform: `rotate(${line?.rotate}deg)`,
          }}
        >
          <path
            d="M152 1L0.999995 0.999993"
            stroke="url(#paint0_linear_3550_4240)"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-dasharray="3 3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3550_4240"
              x1="152"
              y1="1.5"
              x2="1"
              y2="1.49999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5B5B5B" stop-opacity="0" />
              <stop offset="1" stop-color="#9C9C9C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
