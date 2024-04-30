import React from "react";
import initTranslations from "@/app/i18n";
import Link from "next/link";
import styles from "./style.module.scss";
import { ArrowBack } from "../ui/icons/arrowBack";

const i18nNamespaces = ["backToHome"];
export const BackToHome = async ({ locale }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <Link className={styles.blackToHome} href="/">
      <ArrowBack color="white" width={10} height={10} />
      {t("back")}
    </Link>
  );
};
