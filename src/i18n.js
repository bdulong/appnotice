import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true, // Activez ceci pour le débogage
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // Désactivez Suspense si vous n'utilisez pas React.Suspense
    }
  });

export default i18n;