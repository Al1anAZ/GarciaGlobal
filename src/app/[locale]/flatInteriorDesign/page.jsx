import initTranslations from "@/app/i18n";
import { TranslationsProvider } from "@/helper/translationProvider";
import flat from "../../../projects/flat.json";
import Link from "next/link";
import { ArrowPrjct } from "@/components/ui/icons/arrowPrjct";
import styles from "./style.module.scss";

import { HeaderBlack } from "@/components/header/headerBlack";
import { Container } from "@/components/ui/container";

import { Footer } from "@/components/footer";
import { ContentWithSlider } from "@/components/contentWithSlider";

const i18nNamespaces = ["flatInteriorDesign"];

export const metadata = {
  title: "Flat Interior Design - Garcia Global",
  description: "Generated by create next app",
};

export default async function FlatInteriorDesign({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const advantages = [
    "kitchen",
    "bathroom",
    "bedroom",
    "hallway",
    "diningArea",
  ];
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
       <div className={styles.flat__header}>  
     <HeaderBlack locale={locale} />
     </div>

      <main className={styles.flat}>
        <Container className={styles.flat__container}>
          <div className={styles.flat__titleContainer}>
            <h1>{t("title")}</h1>
            <div className={styles.flat__projectsContainer}>
              <Link href={"/interiorAll/penthouseValencia"}>
                <div className={styles.flat__projectItem}>
                  <span>Penthouse Valencia</span>
                  <ArrowPrjct color="black" width={20} height={20} />
                </div>
              </Link>
              <div className="">
                <Link href={"/interiorAll/tranquilModernity"}>
                  <div className={styles.flat__projectItem}>
                    <span>Tranquil Modernity</span>
                    <ArrowPrjct color="black" width={20} height={20} />
                  </div>
                </Link>
                <Link href={"/interiorAll/projectLoftLivingRoom"}>
                  <div className={styles.flat__projectItem}>
                    <span>Project Loft Living Room</span>
                    <ArrowPrjct color="black" width={20} height={20} />
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
          <div className={styles.flat__content}>
            {advantages.map((item, index) => (
              <ContentWithSlider
                title={t(item)}
                text={t(item + "Descr")}
                key={index}
                imgs={flat[item]}
                textColor="black"
                arrowColor="black"
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer locale={locale} />
    </TranslationsProvider>
  );
}
