import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from '../locales/en.json';
import arJSON from '../locales/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enJSON },
      ar: { translation: arJSON },
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
