import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
    >
      {i18n.language === 'en' ? 'VI' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;