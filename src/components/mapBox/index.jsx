"use client";
import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";

export const MapBox = () => {
  const [map, setMap] = useState();
  const mapNode = useRef(null);
  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);
  return (
    <div
      ref={mapNode}
      style={{ width: "100%", height: "100%" }}
      className={styles.mapBox}
    />
  );
};
