import { Container } from "../ui/container";
import { MapItem } from "../mapItem";
import { MapIcon } from "../ui/icons/map/map";
import { Scope } from "../ui/icons/scope";
import initTranslations from "@/app/i18n";
import styles from "./style.module.scss";

const i18nNamespaces = ["map"];

export const Map = async ({ locale }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <section className={styles.map}>
      <Container className={styles.map__container}>
        <div className={styles.map__pjcFind}>
          <Scope color="black" width={28} height={28} />
          <span>5 {t("mapProjectFind")}</span>
        </div>
        <div className={styles.map__ourPrjc}>{t("mapOurProjects")}</div>
      </Container>
      <MapIcon className={styles.map__section} />
      <MapItem
        top={10}
        left={18}
        bgColor="white"
        line={{ right: -163, top: 33 }}
        prjcName={"3 PROJECTS developed"}
      />
      <MapItem
        top={10}
        left={55}
        bgColor="white"
        line={{ left: -45, top: 150, rotate: 90 }}
        prjcName={"3 PROJECTS developed"}
      />
      <MapItem
        bottom={33}
        left={53}
        bgColor="white"
        line={{ left: -46, top: -84, rotate: 270 }}
        prjcName={"3 PROJECTS developed"}
      />
      <MapItem
        bottom={53}
        left={28}
        bgColor="rgba(255, 255, 255, 0.45)"
        line={{ left: 70, top: 33 }}
        prjcName={"3 PROJECTS developed"}
      />
      <MapItem
        bottom={48}
        right={23}
        bgColor="rgba(255, 255, 255, 0.45)"
        line={{ right: 70, top: 35, rotate: 180 }}
        prjcName={"3 PROJECTS developed"}
      />
    </section>
  );
};
