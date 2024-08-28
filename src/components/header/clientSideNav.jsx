'use client';

import React, { useRef } from 'react';
import Link from "next/link";
import styles from "./style.module.scss";

export const ClientSideNav = ({ translations }) => {
  const menuToggleRef = useRef(null);

  const closeMenu = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  return (
    <nav className={styles.hamburger_menu}>
      <input id={styles.menu__toggle} type="checkbox" ref={menuToggleRef} />
      <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
        <span></span>
      </label>
      <ul className={styles.menu__box}>
        <div
          className=""
          style={{
            marginLeft: 20,
            marginRight: 20,
            borderBottom: "1px solid #363636",
            paddingBottom: 20, 
            marginBottom: 36,
          }}
        >
          <img
            src="/assets/ui/logo.webp"
            alt="logo"
            width={192}
            height={51}
          />
        </div>
        <li>
          <Link href={"#"} className={styles.menu__item} onClick={closeMenu}>
            {translations.home}
          </Link>
        </li>
        <li>
          <Link href={"#ourService"} className={styles.menu__item} onClick={closeMenu}>
            {translations.services}
          </Link>
        </li>
        <li>
          <Link href={"/interiorAll"} className={styles.menu__item} onClick={closeMenu}>
            {translations.projects}
          </Link>
        </li>
        <li>
          <Link href={"#interiorDesing"} className={styles.menu__item} onClick={closeMenu}>
            {translations.interiorDesign}
          </Link>
        </li>
        <li>
          <Link href={"#aboutUs"} className={styles.menu__item} onClick={closeMenu}>
            {translations.aboutUs}
          </Link>
        </li>
      </ul>
    </nav>
  );
};