"use client";

import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { Arrow } from "../../icons/arrow";
import { MyButton } from "../../myButton";

export const VerticalSlider = ({ children, boxStyle, totalItems, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    register();
    const swiperInstance = swiperRef.current.swiper;
    const params = {
      ...rest,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
    swiperRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperRef.current.addEventListener("swiperslidechange", (e) => {
      const [swiper, progress] = e.detail;
      setActiveIndex(swiper.activeIndex);
    });
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
      <swiper-container init="false" ref={swiperRef}>
        {children}
      </swiper-container>
      <div className="">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
          }}
        >
          <MyButton handler={goToPrevSlide}>
            <Arrow
              color={activeIndex === 0 ? "#717171" : "white"}
              width={20}
              height={20}
              rotation={270}
            />
          </MyButton>
          <div
            style={{
              width: "90%",
              height: 1,
              backgroundColor: "white",
              borderRadius: 50,
            }}
          />
          <MyButton handler={goToNextSlide}>
            <Arrow
              color={activeIndex === totalItems - 1 ? "#717171" : "white"}
              width={20}
              height={20}
              rotation={90}
            />
          </MyButton>
        </div>
        <p>
          {activeIndex + 1}/{totalItems}
        </p>
      </div>
    </div>
  );
};
export function VerticalSlide({ children, ...rest }) {
  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
