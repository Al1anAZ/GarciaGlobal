import initTranslations from "../../i18n";
import { TranslationsProvider } from "../../../helper/translationProvider/index";
import {
  ProjectItem,
  ProjectItemTablet,
  ProjectItemPhone,
} from "../../../components/projectItem/index";
import { Container } from "../../../components/ui/container/index";
import styles from "./style.module.scss";
import Link from "next/link";
import { ArrowPrjct } from "../../../components/ui/icons/arrowPrjct";
import { BackToHome } from "../../../components/backToHome/index";
import sliders from "../../../projects/sliders.json";
import { Instagram } from "../../../components/ui/icons/instagram";

const i18nNamespaces = ["home"];

export const metadata = {
  title: "Interior All - Garcia Global",
  description: "Generated by create next app",
};

export default async function InteriorAll({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  // Filter out specific projects by their IDs
  const filteredSliders = sliders.filter(
    (item) =>
      ![
        "villarenovation",
        "goodlifepark",
        "villacartagena",
        "townhousealbacete",
        "penthousevalencia",
        "penthouseValencia",
        "obolonapartment",
        "mynystercki",
        "kyivlakehouse",
        "eliteresidentialcomplexinkyiv",
      ].includes(item.id)
  );

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={styles.interiorDesing}>
        <Container className={styles.interiorAll__container}>
          <div className="">
            <BackToHome locale={locale} />
            <div className={styles.interiorDesing__titleContainer}>
              <div className={styles.interiorDesing__textTitleBox}>
                <h1>{t("interirDesignTitle")}</h1>
                <p>{t("interirDesignText")}</p>
              </div>
            </div>
          </div>
          <div className={styles.interiorDesing__desktopContent}>
            {filteredSliders.map((item, index) => (
              <section key={index}>
                <ProjectItem id={item.id} locale={locale} />
              </section>
            ))}
          </div>
          <div className={styles.interiorDesing__tabletContent}>
            {filteredSliders.map((item, index) => (
              <section key={index}>
                <ProjectItemTablet id={item.id} locale={locale} />
              </section>
            ))}
          </div>
          <div className={styles.interiorDesing__phoneContent}>
            {filteredSliders.map((item, index) => (
              <section key={index}>
                <ProjectItemPhone id={item.id} locale={locale} />
              </section>
            ))}
          </div>

          <div className={styles.interiorDesing__titleContainer}>
            <div className={styles.interiorDesing__textTitleBox}>
              <p>{t("interirDesignTextEnd")}</p>
            </div>
            <div className="">
              <Link
                href={
                  "https://www.instagram.com/zubromanarchitects/?locale=en-us"
                }
                target="__blank"
              >
                <Instagram width={24} height={24} color="white" />
              </Link>
            </div>
          </div>
        </Container>
        <div className={styles.interiorDesing__imgBg} />
      </main>
    </TranslationsProvider>
  );
}
