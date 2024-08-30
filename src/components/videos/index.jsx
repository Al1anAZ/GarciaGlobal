import styles from "./style.module.scss";
import { Container } from "../ui/container";
import { AdvantageItem } from "../home";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["videos"];

export const Videos = async ({ locale }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <section className={styles.videos}>
      <Container className={styles.videos__container}>
        <div className={styles.videos__item}>
          <iframe
            height={395}
            src="https://www.youtube.com/embed/-i0mmJkm-ic?si=X_0gFpLcqkYCOQlN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div>
            <span className={styles.videos__titleContainer}>
              <h2>{t("videoTitle1")}</h2>
              <h3>{t("videoSubTitle1")}</h3>
            </span>
            <p>{t("videoText1")}</p>
            <div className={styles.videos__advantageContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <AdvantageItem
                  key={index}
                  text={t(`videoAdvantage${index + 1}`)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.videos__item}>
          <iframe
            height={395}
            src="https://www.youtube.com/embed/T5FappTABUw?si=xG4bPkTupZyR19M-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div>
            <span className={styles.videos__titleContainer}>
              <h2>{t("videoTitle2")}</h2>
              <h3>{t("videoSubTitle2")}</h3>
            </span>
            <p>{t("videoText2")}</p>
            <div className={styles.videos__advantageContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <AdvantageItem
                  key={index}
                  text={t(`videoAdvantage${index + 1}`)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.videos__item}>
          <iframe
            height={395}
            src="https://www.youtube.com/embed/kl9u-364KK8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div>
            <span className={styles.videos__titleContainer}>
              <h2>{t("videoTitle3")}</h2>
              <h3>{t("videoSubTitle3")}</h3>
            </span>
            <p>{t("videoText3")}</p>
            <div className={styles.videos__advantageContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <AdvantageItem
                  key={index}
                  text={t(`videoAdvantage${index + 1}`)}
                />
              ))}
            </div>
          </div>
        </div>



        <div className={styles.videos__item}>
          <iframe
            height={395}
            src="https://www.youtube.com/embed/r8y-NErAUcA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div>
            <span className={styles.videos__titleContainer}>
              <h2>{t("videoTitle4")}</h2>
              <h3>{t("videoSubTitle4")}</h3>
            </span>
            <p>{t("videoText4")}</p>
            <div className={styles.videos__advantageContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <AdvantageItem
                  key={index}
                  text={t(`videoAdvantage${index + 1}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
