 "use client";

import initTranslations from "../../app/i18n";  
import React, { useState, useEffect, useRef } from "react";
import { TranslationsProvider } from "../../helper/translationProvider/index";
import styles from "./ContactUsModal.module.scss";

 
const i18nNamespaces = ["contactUs"];

const ContactUsModal = ({ isOpen, onClose, locale }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [t, setT] = useState(() => (key) => key);  
  const [resources, setResources] = useState({});
  const modalRef = useRef(null);

  
  useEffect(() => {
    async function loadTranslations() {
      try {
        const { t, resources } = await initTranslations(locale, i18nNamespaces);
        setT(() => t);  
        setResources(resources);
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    }
  
    loadTranslations();
  }, [locale]);

 
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, phone });
    onClose();
  };

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <div className={styles.modalOverlay}>
        <div ref={modalRef} className={styles.modalContent}>
          <h2 className={styles.title}>
            {t("getInTouch")}
            <div className={styles.underline}></div>
          </h2>
          <p className={styles.description}>{t("contactDescription")}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t("yourName")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            <input
              type="tel"
              placeholder={t("phoneNumber")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              <span>{t("getInTouchNow")}</span>
              <span className={styles.buttonArrow}>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 1L0.5 15" stroke="white" stroke-linecap="round"/>
              <path d="M14 1V14" stroke="white" stroke-linecap="round"/>
              <path d="M0.5 1L13.5 0.999999" stroke="white" stroke-linecap="round"/>
              </svg>
              </span>

            </button>
          </form>
        </div>
      </div>
    </TranslationsProvider>
  );
};

export default ContactUsModal;
