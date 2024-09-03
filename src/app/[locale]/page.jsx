import { Footer } from "../../components/footer/index";
import initTranslations from "../i18n";
import { TranslationsProvider } from "../../helper/translationProvider/index";
import { HeaderMain } from "../../components/header/headerMain";
import styles from "./style.module.scss";
import { Container } from "../../components/ui/container/index";
import { squarePeg } from "../../fonts/index";
import { OurServiceItem } from "../../components/home/ourServiceItem/index";

import { MapBox } from "../../components/mapBox/index";
import { WatsApp } from "../../components/ui/icons/watsApp";
import { Telegram } from "../../components/ui/icons/telegram";
import Link from "next/link";
import {
  ProjectItem,
  ProjectItemPhone,
  ProjectItemTablet,
} from "../../components/projectItem";
import { Videos } from "../../components/videos/index";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <HeaderMain locale={locale} />
      <main>
        <section className={styles.landingSection}>
          <Container className={styles.landingSection__container}>
            <div>
              <div className={styles.landingSection__titleText}>
                <h1>{t("landingTitle")}</h1>
                <p className={squarePeg.className}>{t("landingTitleP")}</p>
              </div>
              <div className={styles.landingSection__consNdesignContainer}>
                <p>
                  <Link
                    href={"/constructionOfCottagesAndVillas"}
                    className={styles.landingSection__link}
                  >
                    <span>{t("landingConstruction")}</span>
                  </Link>
                </p>
                <p>
                  <Link
                    href={"/interiorAll"}
                    className={styles.landingSection__link}
                  >
                    <span>{t("landingInteriorDesign")}</span>
                  </Link>
                </p>
              </div>
            </div>
            <p className={styles.landingSection__bottomText}>
              {t("landingText")}
            </p>
          </Container>
        </section>
        <section className={styles.ourServices} id="ourService">
          <Container className={styles.ourServices__container}>
            <div className={styles.ourServices__item}>
              <h2>{t("ourServiceTitel")}</h2>
              <p>{t("ourSerivceText")}</p>
            </div>
            <div className={styles.ourServices__itemsContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <OurServiceItem
                  key={index}
                  title={t(`ourServiceItemTitle${index + 1}`)}
                  text={t(`ourServiceItemText${index + 1}`)}
                  btn={index === 0}
                />
              ))}
            </div>
          </Container>
          <img
            src="/assets/ui/bearBg.svg"
            alt="bearImg"
            width={300}
            height={350}
            className={styles.ourServices__bearImg}
          />
        </section>
        <section className={styles.aboutUs} id="aboutUs">
          <Container className={styles.aboutUs__container}>
            <div className={styles.aboutUs__top}>
              <div className={styles.aboutUs__titleContainer}>
                <div>
                  <span>{t("aboutUs")}</span>
                  <h2>{t("aboutUsTitle")}</h2>
                </div>
                <p>{t("aboutUsText")}</p>
              </div>
              <div className={styles.aboutUs__villaBlock}></div>
            </div>
            <div className={styles.aboutUs__bottom}>
              <div className={styles.aboutUs__item}>
                <h3>{t("aboutUsItemTitle1")}</h3>
                <p>{t("aboutUsItemText1")}</p>
              </div>
              <div className={styles.aboutUs__item}>
                <h3>{t("aboutUsItemTitle2")}</h3>
                <p>{t("aboutUsItemText2")}</p>
              </div>
              <div className={styles.aboutUs__item}>
                <h3>{t("aboutUsItemTitle3")}</h3>
                <p>{t("aboutUsItemText3")}</p>
              </div>
            </div>
          </Container>
        </section>
        {/* <Map locale={locale} /> */}
        <section className={styles.interiorDesing} id="interiorDesing">
          <Container className={styles.interiorDesing__container}>
            <div className={styles.interiorDesing__titleContainer}>
              <div className={styles.interiorDesing__textTitleBox}>
                <h2>{t("ProjectTitle")}</h2>
                <p>{t("interirDesignText")}</p>
              </div>
            </div>
            <div className={styles.interiorDesing__contentDesktop}>
              <ProjectItem id={"villarenovation"} locale={locale} />
              <ProjectItem id={"goodlifepark"} locale={locale} />
            </div>
            <div className={styles.interiorDesing__contentTablet}>
              <ProjectItemTablet id={"villarenovation"} locale={locale} />
              <ProjectItemTablet id={"goodlifepark"} locale={locale} />
            </div>
            <div className={styles.interiorDesing__contentPhone}>
              <ProjectItemPhone id={"villarenovation"} locale={locale} />
              <ProjectItemPhone id={"goodlifepark"} locale={locale} />
            </div>
          </Container>
          <Link
            className={styles.interiorDesing__seeMore}
            href={"/interiorProjects"}
          >
            {t("seeMore")}
          </Link>
          <div className={styles.interiorDesing__imgBg} />
        </section>
        <section className={styles.interiorDesing} id="interiorDesing">
          <Container className={styles.interiorDesing__container}>
            <div className={styles.interiorDesing__titleContainer}>
              <div className={styles.interiorDesing__textTitleBox}>
                <h2>{t("interirDesignTitle")}</h2>
                <p>{t("interirDesignText")}</p>
              </div>
            </div>
            <div className={styles.interiorDesing__contentDesktop}>
              <ProjectItem id={"projectLoftLivingRoom"} locale={locale} />
              <ProjectItem id={"tranquilModernity"} locale={locale} />
            </div>
            <div className={styles.interiorDesing__contentTablet}>
              <ProjectItemTablet id={"projectLoftLivingRoom"} locale={locale} />
              <ProjectItemTablet id={"tranquilModernity"} locale={locale} />
            </div>
            <div className={styles.interiorDesing__contentPhone}>
              <ProjectItemPhone id={"projectLoftLivingRoom"} locale={locale} />
              <ProjectItemPhone id={"tranquilModernity"} locale={locale} />
            </div>
          </Container>
          <Link
            className={styles.interiorDesing__seeMore}
            href={"/interiorAll"}
          >
            {t("seeMore")}
          </Link>
          <div className={styles.interiorDesing__imgBg} />
        </section>

        <Videos locale={locale} />
        <section className={styles.findUs}>
          <Container className={styles.findUs__container}>
            <div className={styles.findUs__textBlock}>
              <span className={styles.findUs__titleContainer}>
                <span>GARCIA GLOBAL CONSTRUCTION</span>
                <h2>{t("findUs")}</h2>
              </span>
              <span className={styles.findUs__textContainer}>
                <p>+34 695-049-104</p>
                <p>hello@garcia-global.com</p>
                <p>
                  Pl. de la Iglesia, 3, office 1-D, 29670, San Pedro de
                  Alcantara, Malaga
                </p>
                <div>
                  <Link href={"https://wa.me/34695049104"} target="__blank">
                    <WatsApp color="#DBA77B" width={24} height={24} />
                  </Link>
                  <Link href={"https://t.me/+34695049104"} target="__blank">
                    <Telegram color="#DBA77B" width={24} height={24} />
                  </Link>
                </div>
              </span>
            </div>
            <div className={styles.findUs__mapContainer}>
              <MapBox />
            </div>
          </Container>
          <img
            src="/assets/ui/bearBg.svg"
            alt="bear"
            width={430}
            height={520}
            className={styles.findUs__bearImg}
          />
        </section>
      </main>
      <Footer locale={locale} />
    </TranslationsProvider>
  );
}
