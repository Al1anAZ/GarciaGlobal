import Link from "next/link";
import { Container } from "../ui/container";
import { LangChange } from "../ui/langChange";
import styles from "./style.module.scss";
import initTranslations from "@/app/i18n";
import { Facebook } from "../ui/icons/facebook";
import { Instagram } from "../ui/icons/instagram";
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
                <Link href={"/interiorAll"}>{t("home")}</Link>
              </li>
              <li>
                <Link href={"#"}>{t("services")}</Link>
              </li>
              <li>
                <Link href={"#"}>{t("projects")}</Link>
              </li>
              <li>
                <Link href={"#"}>{t("interiorDesign")}</Link>
              </li>
              <li>
                <Link href={"#"}>{t("aboutUs")}</Link>
              </li>
            </ul>
          </nav>
          <LangChange gap={10} padding="6px 8px 6px 12px" />
        </div>
        <div className={styles.footer__middleContainer}>
          <div>
            <p>hello@garcia-global.com</p>
            <div className="">
              <Link href={"#"}>
                <Instagram width={24} height={24} color="white" />
              </Link>
              <Link href={"#"}>
                <WatsApp width={24} height={24} color="white" />
              </Link>
              <Link href={"#"}>
                <Telegram width={24} height={24} color="white" />
              </Link>
              <Link href={"#"}>
                <Facebook width={24} height={24} color="white" />
              </Link>
            </div>
          </div>
          <div>
            <p>
              Pl. de la Iglesia, 3, office 1-D, 29670, San Pedro de Alcantara,
              Malaga
            </p>
            <p>+34 695-049-104</p>
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
