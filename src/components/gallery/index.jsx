"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { MyButton } from "../ui/myButton";
import styles from "./style.module.scss";
import lgZoom from "lightgallery/plugins/zoom";
import { useRef, useCallback, useState } from "react";

export const Gallery = ({ img }) => {
  const lightGallery = useRef(null);
  const [items, setItems] = useState(img);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        <a
          key={item.id}
          data-lg-size={item.size}
          className="gallery-item"
          data-src={item.src}
        ></a>
      );
    });
  }, [items]);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);
  const openGallery = () => {
    if (lightGallery.current) {
      lightGallery.current.openGallery();
    }
  };
  return (
    <div className="App">
      <MyButton className={styles.fullGalleryBtn} handler={openGallery}>
        View full gallery
      </MyButton>
      <LightGallery
        elementClassNames="custom-wrapper-class"
        plugins={[lgZoom]}
        onInit={onInit}
      >
        {getItems()}
      </LightGallery>
    </div>
  );
};
