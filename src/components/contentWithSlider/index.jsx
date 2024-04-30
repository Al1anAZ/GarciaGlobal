import React from "react";
import styles from "./style.module.scss";
import { HorizontalSlide, HorizontalSlider } from "../ui/sliders";
export const ContentWithSlider = ({
  title,
  text,
  imgs,
  arrowColor,
  textColor,
}) => {
  return (
    <div className={styles.contentWithSlider}>
      <div className={styles.contentWithSlider__titleContainer}>
        <h2 style={{ color: textColor }}>{title}</h2>
        <p style={{ color: textColor }}>{text}</p>
      </div>
      <HorizontalSlider
        slidesPerView={1.5}
        spaceBetween={25}
        boxStyle={styles.contentWithSlider__sliderBox}
        arrowColor={arrowColor}
      >
        {imgs.map((item, index) => (
          <HorizontalSlide key={index}>
            <img
              src={item}
              alt="sliderImg"
              height={554}
              width={834}
              className={styles.contentWithSlider__sliderImg}
            />
          </HorizontalSlide>
        ))}
      </HorizontalSlider>
    </div>
  );
};
