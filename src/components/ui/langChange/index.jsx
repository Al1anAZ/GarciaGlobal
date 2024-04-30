"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../../i18nConfig";
import { ArrowDropDown } from "../icons/arrowDropDown";
import { MyButton } from "../myButton";
import { useState } from "react";
import styles from "./style.module.scss";

export const LangChange = ({ gap, padding }) => {
  const { i18n } = useTranslation();
  const [showDropDown, setShowDropDown] = useState(false);
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  let dropDownStyle = [styles.changeLanguage__dropDown];

  showDropDown && dropDownStyle.push(styles.changeLanguage__dropDown__active);

  const handleChange = (e) => {
    setShowDropDown(false);
    const newLocale = e;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className={styles.changeLanguage__container}>
      <MyButton
        className={styles.changeLanguage}
        style={{ gap: gap, padding: padding }}
        handler={() => setShowDropDown(!showDropDown)}
      >
        <span>{currentLocale}</span>
        <ArrowDropDown
          color="white"
          width={24}
          height={24}
          rotation={showDropDown ? "180" : "0"}
        />
      </MyButton>
      <MyButton
        className={dropDownStyle.join(" ")}
        handler={() => handleChange(currentLocale === "en" ? "ua" : "en")}
      >
        {currentLocale === "en" ? "ua" : "en"}
      </MyButton>
    </div>
  );
};
