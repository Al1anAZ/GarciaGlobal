'use client';

import React, { useState, useEffect } from 'react';
import ContactUsModal from './ContactUsModal';
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["contactUs"];

const GetHelpButton = ({ locale }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        const { t, resources } = await initTranslations(locale, i18nNamespaces);
        const newTranslations = {};
        if (resources && resources[locale] && resources[locale][i18nNamespaces[0]]) {
          Object.keys(resources[locale][i18nNamespaces[0]]).forEach(key => {
            newTranslations[key] = t(key);
          });
        } else {
          console.warn(`Translation resources not found for locale: ${locale}`);
        }
        setTranslations(newTranslations);
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    }
    loadTranslations();
  }, [locale]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getTranslation = (key, fallback) => translations[key] || fallback;

  return (
    <>
      <button
        onClick={openModal}
        className="constructionOfCottagesAndVillas__itemGetHelp"
      >
        {getTranslation("getHelp", "Get Help")}
      </button>
      <ContactUsModal isOpen={isModalOpen} onClose={closeModal} locale={locale} />
    </>
  );
};

export default GetHelpButton;