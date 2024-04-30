import { VerticalSlide, VerticalSlider } from "../ui/sliders";
import initTranslations from "@/app/i18n";
import styles from "./style.module.scss";
import { squarePeg } from "@/fonts";
import { MyButton } from "../ui/myButton";
import { ArrowPrjct } from "../ui/icons/arrowPrjct";
import Link from "next/link";
import sliders from "@/sliders.json";

const i18nNamespaces = ["projectGlobal"];
export const ProjectItem = async ({ id, locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className={styles.projectItem}>
      <VerticalSlider
        direction={"vertical"}
        className={styles.projectItem__sliderContainer}
        boxStyle={styles.projectItem__sliderBoxStyle}
        totalItems={3}
      >
        {sliders[id].previewSlider.map((item, index) => (
          <VerticalSlide key={index} spaceBetween={50}>
            <img
              src={item}
              alt="projectImg"
              width={475}
              height={720}
              className={styles.projectItem__sliderImg}
            />
          </VerticalSlide>
        ))}
      </VerticalSlider>
      <div className={styles.projectItem__contentContainer}>
        <div className={styles.projectItem__contentContainer__top}>
          <div style={{ display: "flex", gap: 90 }}>
            <div
              className={styles.projectItem__contentContainer__topTextContainer}
            >
              <p className={squarePeg.className}>{t("luxuryTailored")}</p>
              <p className={squarePeg.className}>{t("toYou")}</p>
            </div>
            <img
              src={sliders[id].smallImg}
              alt="smallImg"
              width={216}
              height={328}
              className={styles.projectItem__contentContainer__imgMain}
            />
            <ProjectItemAdv locale={locale} flex="end" />
          </div>
        </div>
        <div className={styles.projectItem__contentContainer__middle}>
          <p>{t(`${id}.text`)}</p>
          <Link href={"/interiorAll/"}>
            <MyButton>
              <ArrowPrjct color="white" width={20} height={20} />
            </MyButton>
          </Link>
        </div>
        <div className={styles.projectItem__contentContainer__bottom}>
          <h2>{t(`${id}.title`)}</h2>
          <p>{t(`${id}.underTitle`)}</p>
        </div>
      </div>
    </div>
  );
};
export const ProjectItemTablet = async ({ id, locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <div className={styles.projectItem}>
      <div
        style={{ display: "flex", gap: 34, justifyContent: "space-between" }}
      >
        <VerticalSlider
          direction={"vertical"}
          className={styles.projectItem__sliderContainer}
          boxStyle={styles.projectItem__sliderBoxStyle}
          totalItems={3}
        >
          {sliders[id].previewSlider.map((item, index) => (
            <VerticalSlide key={index} spaceBetween={50}>
              <img
                src={item}
                alt="projectImg"
                width={475}
                height={720}
                className={styles.projectItem__sliderImg}
              />
            </VerticalSlide>
          ))}
        </VerticalSlider>
        <div style={{ display: "flex", gap: 90, flexDirection: "column" }}>
          <div
            className={styles.projectItem__contentContainer__topTextContainer}
          >
            <p className={squarePeg.className}>{t("luxuryTailored")}</p>
            <p className={squarePeg.className}>{t("toYou")}</p>
          </div>
          <ProjectItemAdv locale={locale} flex="end" />
        </div>
      </div>
      <div className={styles.projectItem__contentContainer}>
        <p className={styles.projectItem__contentContainer__greyPtext}>
          {t(`${id}.text`)}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={sliders[id].smallImg}
            alt="smallImg"
            width={216}
            height={328}
            className={styles.projectItem__contentContainer__imgMain}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              justifyContent: "flex-end",
              padding: 0,
              paddingBottom: 63,
            }}
            className={styles.projectItem__contentContainer__middle}
          >
            <Link href={"/interiorAll/"}>
              <MyButton>
                <ArrowPrjct color="white" width={20} height={20} />
              </MyButton>
            </Link>
            <h2>{t(`${id}.title`)}</h2>
            <p>{t(`${id}.underTitle`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ProjectItemPhone = async ({ id, locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItem__titlePhone}>
        <h2>{t(`${id}.title`)}</h2>
        <p>{t(`${id}.underTitle`)}</p>
      </div>
      <div className={styles.projectItem__sliderPhone}>
        <VerticalSlider
          direction={"vertical"}
          className={styles.projectItem__sliderContainer}
          boxStyle={styles.projectItem__sliderBoxStyle}
          totalItems={3}
        >
          {sliders[id].previewSlider.map((item, index) => (
            <VerticalSlide key={index} spaceBetween={50}>
              <img
                src={item}
                alt="projectImg"
                width={475}
                height={720}
                className={styles.projectItem__sliderImg}
              />
            </VerticalSlide>
          ))}
        </VerticalSlider>
      </div>
      <div className={styles.projectItem__contentContainer}>
        <div className={styles.projectItem__phoneTextBox}>
          <div className="">
            <p className={squarePeg.className}>
              {t("luxuryTailored")} {t("toYou")}
            </p>
            <p>{t(`${id}.text`)}</p>
          </div>
          <ProjectItemAdv locale={locale} flex="end" />
        </div>
        <div className={styles.projectItem__contentContainer__middle}>
          <img
            src={sliders[id].smallImg}
            alt="smallImg"
            width={216}
            height={328}
            className={styles.projectItem__contentContainer__imgMain}
          />
          <Link href={"/interiorAll/"}>
            <MyButton>
              <ArrowPrjct color="white" width={20} height={20} />
            </MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export const ProjectItemAdv = async ({ locale, flex }) => {
  const { t } = await initTranslations(locale, ["projectItemAdv"]);
  return (
    <div
      className={styles.projectItem__contentContainer__advantageContainer}
      style={{ alignItems: `flex-${flex}` }}
    >
      <div className={styles.projectItem__contentContainer__advantageItem}>
        {t("kitchen")}
      </div>
      <div className={styles.projectItem__contentContainer__advantageItem}>
        {t("bathroom")}
      </div>
      <div className={styles.projectItem__contentContainer__advantageItem}>
        {t("bedroom")}
      </div>
      <div className={styles.projectItem__contentContainer__advantageItem}>
        {t("hallway")}
      </div>
      <div className={styles.projectItem__contentContainer__advantageItem}>
        {t("dinner")}
      </div>
    </div>
  );
};
