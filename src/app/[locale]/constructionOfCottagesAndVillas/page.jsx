import initTranslations from "../../i18n";
import { TranslationsProvider } from "../../../helper/translationProvider/index";
import { squarePeg } from "../../../fonts/index";
import styles from "./style.module.scss";
import { HeaderBlack } from "../../../components/header/headerBlack";
import { Footer } from "../../../components/footer/index";
import GetHelpButton from "../../../components/сontactUsModal/GetHelpButton";

const i18nNamespaces = ["constructionOfCottagesAndVillas"];

export const metadata = {
  title: "Construction of Cottages and Villas - Garcia Global",
  description: "Generated by create next app",
};

export default async function ConstructionOfCottagesAndVillas({
  params: { locale },
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {};
  Object.keys(resources[locale][i18nNamespaces[0]]).forEach((key) => {
    translations[key] = t(key);
  });
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className={styles.constructionOfCottagesAndVillas__header}>
        <HeaderBlack locale={locale} />
      </div>
      <main className={styles.constructionOfCottagesAndVillas}>
        <div
          className={styles.constructionOfCottagesAndVillas__contentContainer}
        >
          <section
            className={styles.constructionOfCottagesAndVillas__titleContainer}
          >
            <h1>{t("title")}</h1>
            <p className={squarePeg.className}>{t("text")}</p>
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("generalContractor.title")}</h2>
              <p>{t("generalContractor.text")}</p>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">{t(`generalContractor.item${index + 1}`)}</p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("geodeticWorks.title")}</h2>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">{t(`geodeticWorks.item${index + 1}`)}</p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
            <img
              src="/assets/ui/bearBg.svg"
              alt="bearBgIcon"
              width={650}
              height={754}
              className={styles.constructionOfCottagesAndVillas__itemBgImg}
            />
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("earthwork.title")}</h2>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">{t(`earthwork.item${index + 1}`)}</p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("monolithicWorks.title")}</h2>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">{t(`monolithicWorks.item${index + 1}`)}</p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("capitalConstruction.title")}</h2>
            </div>
            <div
              className={[
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer,
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer__oneLine,
              ].join(" ")}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">
                    {t(`capitalConstruction.item${index + 1}`)}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("renovation.title")}</h2>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">{t(`renovation.item${index + 1}`)}</p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("finishingWorks.title")}</h2>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              <div
                className={styles.constructionOfCottagesAndVillas__itemFloors}
              >
                Floors
              </div>
              <div
                className={[
                  styles.constructionOfCottagesAndVillas__itemFeaturesContainer,
                  styles.constructionOfCottagesAndVillas__itemFeaturesContainer__finishWorksFirstContainer,
                ].join(" ")}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeature
                    }
                    key={index}
                  >
                    <div
                      className={
                        styles.constructionOfCottagesAndVillas__itemFeatureLine
                      }
                    />
                    <p className="">{t(`finishingWorks.item${index + 1}`)}</p>
                  </div>
                ))}
              </div>
              <div
                className={styles.constructionOfCottagesAndVillas__itemWalls}
              >
                Walls, partitions, openings
              </div>
              <div
                className={[
                  styles.constructionOfCottagesAndVillas__itemFeaturesContainer,
                  styles.constructionOfCottagesAndVillas__itemFeaturesContainer__twoColums,
                ].join(" ")}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeature
                    }
                    key={index + 6}
                  >
                    <div
                      className={
                        styles.constructionOfCottagesAndVillas__itemFeatureLine
                      }
                    />
                    <p className="">{t(`finishingWorks.item${index + 6}`)}</p>
                  </div>
                ))}
              </div>
              <div
                className={styles.constructionOfCottagesAndVillas__itemCelling}
              >
                Celing
              </div>
              <div
                className={[
                  styles.constructionOfCottagesAndVillas__itemFeaturesContainer,
                  styles.constructionOfCottagesAndVillas__itemFeaturesContainer__twoColums,
                ].join(" ")}
              >
                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeature
                    }
                    key={index + 12}
                  >
                    <div
                      className={
                        styles.constructionOfCottagesAndVillas__itemFeatureLine
                      }
                    />
                    <p className="">{t(`finishingWorks.item${index + 12}`)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
            <img
              src="/assets/ui/bearBg.svg"
              alt="bearBgIcon"
              width={650}
              height={754}
              className={styles.constructionOfCottagesAndVillas__itemBgImg}
            />
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("engineeringSystems.title")}</h2>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">{t(`engineeringSystems.item${index + 1}`)}</p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
          </section>
          <section
            className={styles.constructionOfCottagesAndVillas__itemContainer}
          >
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFirstTopContainer
              }
            >
              <h2>{t("siteImprovement.title")}</h2>
            </div>
            <div
              className={
                styles.constructionOfCottagesAndVillas__itemFeaturesContainer
              }
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  className={
                    styles.constructionOfCottagesAndVillas__itemFeature
                  }
                  key={index}
                >
                  <div
                    className={
                      styles.constructionOfCottagesAndVillas__itemFeatureLine
                    }
                  />
                  <p className="">{t(`siteImprovement.item${index + 1}`)}</p>
                </div>
              ))}
            </div>
            <div
              className={styles.constructionOfCottagesAndVillas__itemGetHelp}
            >
              <GetHelpButton locale={locale} />
            </div>
          </section>
        </div>
        <div className={styles.constructionOfCottagesAndVillas__imgsContainer}>
          {Array.from({ length: 9 }).map((_, index) => (
            <img
              src={`/assets/constructionOfCottagesAndVillas/${index + 1}.webp`}
              alt={`img${index + 1}`}
              width={780}
              height={691}
              key={index}
            />
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </TranslationsProvider>
  );
}
