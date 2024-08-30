import React from 'react';
import initTranslations from "@/app/i18n";
import { Container } from "../ui/container";
import { LangChange } from "../ui/langChange";
import styles from "./header.black.style.module.scss";
import { Phone } from "../ui/icons/phone";
import { ClientSideNavBlack } from './сlientSideNavBlack';
import Link from "next/link";
const i18nNamespaces = ["footer"];

export const HeaderBlack  = async ({ locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  const translations = {
    home: t("home"),
    services: t("services"),
    projects: t("projects"),
    interiorDesign: t("interiorDesign"),
    aboutUs: t("aboutUs"),
  };

 
  return (
    <header className={styles.header}>

      <Container className={styles.header__container}>
      <Link href="/">
        <img src="/assets/ui/logoGrey.webp" alt="logo" width={192} height={51} />
        </Link>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <a href="/#">{translations.home}</a>
            </li>
            <li>
              <a href="#ourService">{translations.services}</a>
            </li>
            <li>
              <a href="/interiorAll">{translations.projects}</a>
            </li>
            <li>
              <a href="#interiorDesing">{translations.interiorDesign}</a>
            </li>
            <li>
              <a href="#aboutUs">{translations.aboutUs}</a>
            </li>
          </ul>
        </nav>
        <div className={styles.header__right}>
          <p>+34 695 049 104</p>
          <Phone color="black" width={24} height={24} />
          <LangChange padding="6px 8px 6px 12px" gap={3} />
        </div>
        <ClientSideNavBlack translations={translations}  />
      </Container>
    </header>
  );
};