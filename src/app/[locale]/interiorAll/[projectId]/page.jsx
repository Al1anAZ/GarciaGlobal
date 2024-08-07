import React from "react";
import { TranslationsProvider } from "@/helper/translationProvider";
import initTranslations from "@/app/i18n";
import styles from "./style.module.scss";
import { Footer } from "@/components/footer";
import { redirect } from "next/navigation";
import { camelCaseToWords } from "@/util/cameCase";
import { Container } from "@/components/ui/container";
import sliders from "../../../../projects/sliders.json";
import { BackToHome } from "@/components/backToHome";
import { ProjectItemAdv } from "@/components/projectItem";
import { ContentWithSlider } from "@/components/contentWithSlider";
import { Gallery } from "@/components/gallery";

export async function generateMetadata({ params: { locale, projectId } }) {
  const project = sliders.find((item) => item.id === projectId);
  if (project)
    return {
      title: camelCaseToWords(project.id) + " - Garcia Global",
    };
}

export default async function ProjectPage({ params: { locale, projectId } }) {
  const project = sliders.find((item) => item.id === projectId);
  const advantages = ["kitchen", "living", "terrace"];
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
            <h1 className={styles.project__titleTablet}>
              {camelCaseToWords(projectId)}
            </h1>
            <div className={styles.project__topContent}>
              <div className={styles.project__leftSide}>
                <div className={styles.project__leftSideContent}>
                  <div className={styles.project__leftSideTitleContainer}>
                    <h1>{camelCaseToWords(projectId)}</h1>
                    <div className="">
                      <p>{t("location")}</p>
                      <p>{t("designStyle")}</p>
                      <p>{t("architecturalFusion")}</p>
                      <p>{t("ambience")}</p>
                    </div>
                  </div>
                  <ProjectItemAdv locale={locale} flex="start" />
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
                  <p>Location: Valencia, Spain Design Style: Contemporary</p>
                  <p>Minimalism Architectural Fusion: Industrial-Traditional</p>
                  <p>Blend Ambience: Biophilic Light-Filled Spaces</p>
                </div>
                <div className={styles.project__topImgNAdvContainerPhone}>
                  <ProjectItemAdv locale={locale} flex="start" />
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
                <p>
                  This space is characterized by its clean, modern design, which
                  seamlessly integrates elements of historical architecture. The
                  emphasis is on simplicity and openness, with large windows
                  inviting ample natural light that enhances the fusion of
                  industrial and traditional materials. The overall feel is one
                  of calm and clarity, offering a tranquil environment for
                  living and working.
                </p>
                <Gallery img={project["allImgs"]} />
              </div>
            </div>
          </div>
          {advantages.map((item, index) => (
            <ContentWithSlider
              key={index}
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
