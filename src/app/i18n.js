import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import en from "../locales/en.json";
import ua from "../locales/ua.json";
import es from "../locales/es.json";

export default async function initTranslations(
  locale,
  namespaces,
  i18nInstance,
  resources
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    await i18nInstance.init({
      lng: locale,
      fallbackLng: "en",
      supportedLngs: ["en", "ua", "es"],
      defaultNS: namespaces[0],
      fallbackNS: namespaces[0],
      ns: namespaces,
      preload: resources ? [] : ["en", "ua", "es"],
      resources: {
        en,
        ua,
        es,
      },
    });
  } else {
    await i18nInstance.init({
      lng: locale,
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "ua", "es"],
      defaultNS: namespaces[0],
      fallbackNS: namespaces[0],
      ns: namespaces,
      preload: resources ? [] : ["en", "ua", "es"],
    });
  }

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
