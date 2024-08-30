"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link"; 
import styles from "./header.black.style.module.scss";

import { LangChange } from "../ui/langChange";

export const ClientSideNavBlack = ({ translations }) => {
  const menuToggleRef = useRef(null);
  const menuBoxRef = useRef(null);

  const closeMenu = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  const handleClickOutside = (event) => {
    if (
      menuBoxRef.current &&
      !menuBoxRef.current.contains(event.target) &&
      menuToggleRef.current.checked
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  return (
    <nav className={styles.hamburger_menu}>
      <input id={styles.menu__toggle} type="checkbox" ref={menuToggleRef} />
      <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
        <span></span>
      </label>
      <ul className={styles.menu__box} ref={menuBoxRef}>
        <div
          className={styles.menu__box__inner}
          style={{
            marginLeft: 20,
            marginRight: 20,
            borderBottom: "1px solid #363636",
            paddingBottom: 20,
            paddingTop: 10,
            marginBottom: 36,
          }}
        >
          <img src="/assets/ui/logo.webp" alt="logo" width={192} height={51} />
          <LangChange padding="6px 8px 6px 12px" gap={3} />
        </div>
        <li>
          <Link href={"/#"} className={styles.menu__item} onClick={closeMenu}>
            {translations.home}
          </Link>
        </li>
        <li>
          <Link
            href={"/#ourService"}
            className={styles.menu__item}
            onClick={closeMenu}
          >
            {translations.services}
          </Link>
        </li>
        <li>
          <Link
            href={"/interiorAll"}
            className={styles.menu__item}
            onClick={closeMenu}
          >
            {translations.projects}
          </Link>
        </li>
        <li>
          <Link
            href={"/#interiorDesing"}
            className={styles.menu__item}
            onClick={closeMenu}
          >
            {translations.interiorDesign}
          </Link>
        </li>
        <li>
          <Link
            href={"/#aboutUs"}
            className={styles.menu__item}
            onClick={closeMenu}
          >
            {translations.aboutUs}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
