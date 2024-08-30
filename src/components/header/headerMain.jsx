import React from 'react';
import initTranslations from "@/app/i18n";
import { Container } from "../ui/container";
import { LangChange } from "../ui/langChange";
import styles from "./style.module.scss";
import { Phone } from "../ui/icons/phone";
import { ClientSideNav } from './clientSideNav';

const i18nNamespaces = ["footer"];

export const HeaderMain = async ({ locale }) => {
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
        <img src="/assets/ui/logo.webp" alt="logo" width={192} height={51} />
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <a href="#">{translations.home}</a>
            </li>
            <li>
              <a href="#ourService">{translations.services}</a>
            </li>
            <li>
              <a href="/interiorProjects">{translations.projects}</a>
            </li>
            <li>
              <a href="/interiorAll">{translations.interiorDesign}</a>
            </li>
            <li>
              <a href="#aboutUs">{translations.aboutUs}</a>
            </li>
          </ul>
        </nav>
        <div className={styles.header__right}>
          <p>+34 695 049 104</p>
          <Phone color="white" width={24} height={24} />
          <LangChange padding="6px 8px 6px 12px" gap={3} />
        </div>
        <ClientSideNav translations={translations} />
      </Container>
    </header>
  );
};