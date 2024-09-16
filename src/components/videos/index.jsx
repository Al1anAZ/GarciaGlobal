 import styles from "./style.module.scss";
import { Container } from "../ui/container";
import { AdvantageItem } from "../home";
import initTranslations from "../../app/i18n";

const i18nNamespaces = ["videos"];

export const Videos = async ({ locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  const VideoItem = ({ videoSrc, title, subTitle, text }) => {
    return (
      <div className={styles.videos__item}>
        <iframe
          loading="lazy"  
          height={395}
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
          <span className={styles.videos__titleContainer}>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
          </span>
          <p>{text}</p>
          <div className={styles.videos__advantageContainer}>
            {Array.from({ length: 4 }).map((_, index) => (
              <AdvantageItem key={index} text={t(`videoAdvantage${index + 1}`)} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.videos}>
      <Container className={styles.videos__container}>
        <VideoItem
          videoSrc="https://www.youtube.com/embed/-i0mmJkm-ic?si=X_0gFpLcqkYCOQlN"
          title={t("videoTitle1")}
          subTitle={t("videoSubTitle1")}
          text={t("videoText1")}
        />
        <VideoItem
          videoSrc="https://www.youtube.com/embed/T5FappTABUw?si=xG4bPkTupZyR19M-"
          title={t("videoTitle2")}
          subTitle={t("videoSubTitle2")}
          text={t("videoText2")}
        />
        <VideoItem
          videoSrc="https://www.youtube.com/embed/kl9u-364KK8"
          title={t("videoTitle3")}
          subTitle={t("videoSubTitle3")}
          text={t("videoText3")}
        />
        <VideoItem
          videoSrc="https://www.youtube.com/embed/r8y-NErAUcA"
          title={t("videoTitle4")}
          subTitle={t("videoSubTitle4")}
          text={t("videoText4")}
        />
      </Container>
    </section>
  );
};
