"use client";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapBox = () => {
  const mapNode = useRef(null);
  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/abiespana/cltantp6a00ut01pj4v9h0srk",
      center: [-4.989546, 36.487223],
      zoom: 12,
    });
    mapboxMap.on("load", function () {
      new mapboxgl.Marker({
        color: "black",
        anchor: "bottom",
      })
        .setLngLat([-4.989546, 36.487223])
        .addTo(mapboxMap);
    });
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