import initTranslations from "@/app/i18n";
import { TranslationsProvider } from "@/helper/translationProvider";
import {
  ProjectItem,
  ProjectItemTablet,
  ProjectItemPhone,
} from "@/components/projectItem";
import { Container } from "@/components/ui/container";
import styles from "./style.module.scss";
import Link from "next/link";
import { ArrowPrjct } from "@/components/ui/icons/arrowPrjct";
import { BackToHome } from "@/components/backToHome";
import sliders from "@/projects/sliders.json";

const i18nNamespaces = ["home"];

export const metadata = {
  title: "Interior All - Garcia Global",
  description: "Generated by create next app",
};

export default async function InteriorAll({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
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
                <h1>{t("ProjectTitle")}</h1>
                <p>{t("interirDesignText")}</p>
              </div>
              <div className={styles.interiorDesing__projectsContainer}>
                <Link href={"/interiorAll/penthouseValencia"}>
                  <div className={styles.interiorDesing__projectItem}>
                    <span>Penthouse Valencia</span>
                    <ArrowPrjct color="white" width={20} height={20} />
                  </div>
                </Link>
                <div className="">
                  <Link href={"/interiorAll/tranquilModernity"}>
                    <div className={styles.interiorDesing__projectItem}>
                      <span>Tranquil Modernity</span>
                      <ArrowPrjct color="white" width={20} height={20} />
                    </div>
                  </Link>
                  <Link href={"/interiorAll/projectLoftLivingRoom"}>
                    <div className={styles.interiorDesing__projectItem}>
                      <span>Project Loft Living Room</span>
                      <ArrowPrjct color="white" width={20} height={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.interiorDesing__desktopContent}>
            {sliders.map((item, index) => (
              <section key={index}>
                <ProjectItem id={item.id} locale={locale} />
              </section>
            ))}
          </div>
          <div className={styles.interiorDesing__tabletContent}>
            {sliders.map((item, index) => (
              <section key={index}>
                <ProjectItemTablet id={item.id} locale={locale} />
              </section>
            ))}
          </div>
          <div className={styles.interiorDesing__phoneContent}>
            {sliders.map((item, index) => (
              <section key={index}>
                <ProjectItemPhone id={item.id} locale={locale} />
              </section>
            ))}
          </div>
        </Container>
        <div className={styles.interiorDesing__imgBg} />
      </main>
    </TranslationsProvider>
  );
}
