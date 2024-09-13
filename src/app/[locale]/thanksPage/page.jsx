import initTranslations from "../../i18n";
import { TranslationsProvider } from "../../../helper/translationProvider/index";
import { squarePeg } from "../../../fonts/index";
import styles from "./style.module.scss";
import { HeaderBlack } from "../../../components/header/headerBlack";
import { Footer } from "../../../components/footer/index";
import GetHelpButton from '../../../components/сontactUsModal/GetHelpButton'; 

const i18nNamespaces = ["thankspage"];

export default async function ThanksPage({
  params: { locale },
}) { 
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const translations = {};
 
  if (resources && resources[locale] && resources[locale][i18nNamespaces[0]]) {
    Object.keys(resources[locale][i18nNamespaces[0]]).forEach(key => {
      translations[key] = t(key);
    });
  }

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className={styles.thankspage__header}>  
        <HeaderBlack locale={locale} />
      </div>
      <main className={styles.thankspage}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t("thanks.title")}</h1>
          <div className={styles.checkmark}>✓</div>
          <p className={styles.message}>
          {t("thanks.text")}
          </p>
        </div>
      </main>
      <Footer locale={locale} /> 
    </TranslationsProvider>
  );
}