import React from "react";
import { TranslationsProvider } from "../../../../helper/translationProvider/index";
import initTranslations from "../../../i18n";
import styles from "./style.module.scss";
import { Footer } from "../../../../components/footer/index";
import { redirect } from "next/navigation";
import { camelCaseToWords } from "../../../../util/cameCase/index";
import { Container } from "../../../../components/ui/container/index";
import sliders from "../../../../projects/sliders.json";
import { BackToHome } from "../../../../components/backToHome/index";
import { ProjectItemAdv } from "../../../../components/projectItem/index";
import { ContentWithSlider } from "../../../../components/contentWithSlider/index";
import { Gallery } from "../../../../components/gallery/index";

export async function generateMetadata({ params: { locale, projectId } }) {
  const project = sliders.find((item) => item.id === projectId);
  if (project)
    return {
      title: camelCaseToWords(project.id) + " - Garcia Global",
    };
}

export default async function ProjectPage({ params: { locale, projectId } }) {
  const project = sliders.find((item) => item.id === projectId);
  // List of project IDs where advantages and ProjectItemAdv should not appear
  const excludedProjects = [
    "villarenovation",
    "goodlifepark",
    "villacartagena",
    "townhousealbacete",
    "penthousevalencia",
    "obolonapartment",
    "mynystercki",
    "kyivlakehouse",
    "eliteresidentialcomplexinkyiv",
  ];

  // Only include advantages if the project ID is not in the excluded list
  const showAdvantages = !excludedProjects.includes(projectId);
  const advantages = showAdvantages ? ["kitchen", "livingroom", "bathroom"] : [];
  
  if (!project) redirect("/");
  const i18nNamespaces = [projectId];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={styles.project}>
        <div className={styles.project__bg} />
        <Container className={styles.project__container}>
          <div className={styles.project__topContainer}>
            <BackToHome locale={locale} />
            <h1 className={styles.project__titleTablet}>{t("name")}</h1>
            <div className={styles.project__topContent}>
              <div className={styles.project__leftSide}>
                <div className={styles.project__leftSideContent}>
                  <div className={styles.project__leftSideTitleContainer}>
                    <h1>{t("name")}</h1>
                    <div className="">
                      <p>{t("location")}</p>
                      <p>{t("designStyle")}</p>
                      <p>{t("architecturalFusion")}</p>
                      <p>{t("ambience")}</p>
                    </div>
                  </div>
                  {/* Only render ProjectItemAdv if not in excludedProjects */}
                  {!excludedProjects.includes(projectId) && (
                    <ProjectItemAdv
                      locale={locale}
                      flex="start"
                      projectId={projectId}
                    />
                  )}
                  <p>{t("descr")}</p>
                </div>
                <Gallery img={project["allImgs"]} />
              </div>
              <img
                src={project.mainImg}
                alt="mainImg"
                height={773}
                width={512}
                className={styles.project__mainImg}
              />
            </div>
            <div className={styles.project__topContentPhone}>
              <div className={styles.project__topTextContainerPhone}>
                <div className={styles.project__topTextPhone}>
                  <p>{t("location")}</p>
                  <p>{t("designStyle")}</p>
                  <p>{t("architecturalFusion")}</p>
                </div>
                <div className={styles.project__topImgNAdvContainerPhone}>
                  {/* Only render ProjectItemAdv if not in excludedProjects */}
                  {!excludedProjects.includes(projectId) && (
                    <ProjectItemAdv
                      locale={locale}
                      flex="start"
                      projectId={projectId}
                    />
                  )}
                  <img
                    src={project.mainImg}
                    alt="mainImg"
                    height={773}
                    width={512}
                    className={styles.project__mainImg}
                  />
                </div>
              </div>
              <div className={styles.project__topGalleryNTextContainerPhone}>
                <p>{t("descr")}</p>
                <Gallery img={project["allImgs"]} />
              </div>
            </div>
          </div>
          {advantages.map((item, index) => (
            <ContentWithSlider
              key={index}
              id={item}
              title={t(item)}
              text={t(item + "Descr")}
              imgs={project[item]}
              textColor="white"
              arrowColor="white"
            />
          ))}
        </Container>
      </main>
      <Footer locale={locale} />
    </TranslationsProvider>
  );
}
