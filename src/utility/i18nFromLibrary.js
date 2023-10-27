import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { languages } from "./localTranslations/languages.js";
import { translateUseLibrary } from "./translateUseLibrary.js";

export function i18nFromLibrary() {
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
      fallbackLng: "en",
    })
    .then((t) => {
      translateUseLibrary(t);
    });
}
