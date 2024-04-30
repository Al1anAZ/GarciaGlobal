import initTranslations from "@/app/i18n";
import { Container } from "../ui/container";
import { LangChange } from "../ui/langChange";
import styles from "./style.module.scss";
import Link from "next/link";

const i18nNamespaces = ["footer"];

export const HeaderMain = async ({ locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <img src="/assets/ui/logo.webp" alt="logo" width={192} height={51} />
        <nav className={styles.header__nav}>
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
        <div className={styles.header__right}>
          <p>+34 695 049 104</p>
          <LangChange padding="6px 8px 6px 12px" gap={3} />
        </div>
      </Container>
    </header>
  );
};
