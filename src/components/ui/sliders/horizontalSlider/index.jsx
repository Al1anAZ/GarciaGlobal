"use client";

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { Arrow } from "../../icons/arrow";
import { MyButton } from "../../myButton";

export const HorizontalSlider = ({
  children,
  boxStyle,
  totalItems,
  arrowColor,
  ...rest
}) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      ...rest,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={boxStyle}>
      <div
        style={{
          display: "flex",
          gap: 15,
          marginBottom: 20,
          justifyContent: "flex-end",
        }}
      >
        <MyButton handler={goToPrevSlide}>
          <Arrow color={arrowColor} width={20} height={20} rotation={180} />
        </MyButton>

        <MyButton handler={goToNextSlide}>
          <Arrow color={arrowColor} width={20} height={20} />
        </MyButton>
      </div>
      <swiper-container init="false" ref={swiperRef}>
        {children}
      </swiper-container>
    </div>
  );
};
export function HorizontalSlide({ children, ...rest }) {
  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
