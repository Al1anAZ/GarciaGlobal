import styles from "./style.module.scss";
import { Footer } from "@/components/footer";
import { HeaderWhite } from "@/components/header/headerWhite";
import initTranslations from "@/app/i18n";
import { TranslationsProvider } from "@/helper/translationProvider";
import { Map } from "@/components/map";
import { Videos } from "@/components/videos";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowPrjct } from "@/components/ui/icons/arrowPrjct";

const i18nNamespaces = ["houseInteriorDesign"];

export const metadata = {
  title: "House Interior Design - Garcia Global",
  description: "Generated by create next app",
};

export default async function HouseInteriorDesign({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <HeaderWhite />
      <main className={styles.houseInteriorDesign}>
        <section className={styles.topSection}>
          <Container className={styles.topSection__top}>
            <h1>{t("title")}</h1>
            <div className={styles.topSection__projectsContainer}>
              <Link href={"#"}>
                <div className={styles.topSection__projectItem}>
                  <span>Mynysterkiy</span>
                  <ArrowPrjct color="black" width={20} height={20} />
                </div>
              </Link>
              <div className="">
                <Link href={"#"}>
                  <div className={styles.topSection__projectItem}>
                    <span>Villa Cartagena</span>
                    <ArrowPrjct color="black" width={20} height={20} />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className={styles.topSection__projectItem}>
                    <span>Townhouse Albacete</span>
                    <ArrowPrjct color="black" width={20} height={20} />
                  </div>
                </Link>
              </div>
            </div>
          </Container>
          <div className={styles.topSection__bottom}>
            <p>{t("text")}</p>
            <Link href={"/interiorAll"}>
              <span>{t("viewFullGallery")}</span>
            </Link>
          </div>
        </section>
        <Videos locale={locale} />
        {/* <Map locale={locale} /> */}
      </main>
      <Footer locale={locale} />
    </TranslationsProvider>
  );
}