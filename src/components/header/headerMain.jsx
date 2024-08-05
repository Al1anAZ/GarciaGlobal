import initTranslations from "@/app/i18n";
import { Container } from "../ui/container";
import { LangChange } from "../ui/langChange";
import styles from "./style.module.scss";
import Link from "next/link";
import { Phone } from "../ui/icons/phone";

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
              <Link href={"#"}>{t("home")}</Link>
            </li>
            <li>
              <Link href={"#ourService"}>{t("services")}</Link>
            </li>
            <li>
              <Link href={"/interiorAll"}>{t("projects")}</Link>
            </li>
            <li>
              <Link href={"#interiorDesing"}>{t("interiorDesign")}</Link>
            </li>
            <li>
              <Link href={"#aboutUs"}>{t("aboutUs")}</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__right}>
          <p>+34 695 049 104</p>
          <Phone color="white" width={24} height={24} />
          <LangChange padding="6px 8px 6px 12px" gap={3} />
        </div>
        <nav className={styles.hamburger_menu}>
          <input id={styles.menu__toggle} type="checkbox" />
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
              <Link href={"/interiorAll"} className={styles.menu__item}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.menu__item}>
                {t("services")}
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.menu__item}>
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.menu__item}>
                {t("interiorDesign")}
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.menu__item}>
                {t("aboutUs")}
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
