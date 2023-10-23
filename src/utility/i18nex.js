import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { languages } from "./localTranslations/languages.js";

window.i18next = i18next;

const en = {
    translation: languages.en,
  },
  de = {
    translation: languages.de,
  },
  es = {
    translation: languages.es,
  },
  pt = {
    translation: languages.pt,
  },
  fr = {
    translation: languages.fr,
  },
  ja = {
    translation: languages.ja,
  };

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18next
  .use(languageDetector)
  .init({
    detection: options,
    resources: {
      en,
      es,
      fr,
      de,
      ja,
      pt,
    },
    ns: ["translation"],
    defaultNS: "translation",
    fallbackLng: en,
    supportedLngs: ["pt", "en", "es", "fr", "de", "ja"],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  })
  .then((t) => {
    document.querySelector("h1").innerHTML = i18next.t(
      "Get Unlimited <br>Access"
    );
    // console.log(t("nested.key"));
    // console.log(t("great", { name: "Marcin" }));
  });
