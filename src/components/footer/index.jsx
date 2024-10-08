import Link from "next/link";
import { Container } from "../ui/container";
import { LangChange } from "../ui/langChange";
import styles from "./style.module.scss";
import initTranslations from "../../app/i18n";
import { WatsApp } from "../ui/icons/watsApp";
import { Telegram } from "../ui/icons/telegram";

const i18nNamespaces = ["footer"];

export const Footer = async ({ locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__topContainer}>
          <img src="/assets/ui/logo.webp" alt="logo" width={192} height={51} />
          <nav className={styles.footer__nav}>
            <ul>
              <li>
                <Link href={"/#"}>{t("home")}</Link>
              </li>
              <li>
                <Link href={"/#ourService"}>{t("services")}</Link>
              </li>
              <li>
                <Link href={"/interiorProjects"}>{t("projects")}</Link>
              </li>
              <li>
                <Link href={"/interiorAll"}>{t("interiorDesign")}</Link>
              </li>
              <li>
                <Link href={"/#aboutUs"}>{t("aboutUs")}</Link>
              </li>
            </ul>
          </nav>
          <LangChange gap={10} padding="6px 8px 6px 12px" />
        </div>
        <div className={styles.footer__middleContainer}>
          <div>
            <p>
              <a href="mailto:hello@garcia-global.com">
                hello@garcia-global.com
              </a>
            </p>
            <div className="">
              <Link href={"https://wa.me/34695049104"} target="__blank">
                <WatsApp width={24} height={24} color="white" />
              </Link>
              <Link href={"https://t.me/+34695049104"} target="__blank">
                <Telegram width={24} height={24} color="white" />
              </Link>
            </div>
          </div>
          <div>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pl.+de+la+Iglesia,+3,+office+1-D,+29670,+San+Pedro+de+Alcantara,+Malaga"
                target="_blank"
              >
                Pl. de la Iglesia, 3, office 1-D, 29670, San Pedro de Alcantara,
                Malaga
              </a>
            </p>
            <p>
              <a href="tel:34695049104">+34 695-049-104</a>
            </p>
          </div>
        </div>
        <div className={styles.footer__allRightsReserved}>
          <p>{t("allRightsReserved")}</p>
        </div>
      </Container>
      <div className={styles.footer__imgBg} />
    </footer>
  );
};
