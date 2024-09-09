"use client";  

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import initTranslations from "../../app/i18n";
import styles from "./style.module.scss";
import { ArrowBack } from "../ui/icons/arrowBack";

const i18nNamespaces = ["backToHome"];

export const BackToHome = ({ locale }) => {
  const router = useRouter();   
  const [t, setT] = useState(() => (key) => key);  
 
  useEffect(() => {
    const loadTranslations = async () => {
      const { t } = await initTranslations(locale, i18nNamespaces);
      setT(() => t);  
    };

    loadTranslations();
  }, [locale]);

  return (
    <button
      className={styles.blackToHome}
      onClick={() => router.back()}  
    >
      <ArrowBack color="white" width={10} height={10} />
      {t("back")}
    </button>
  );
};
