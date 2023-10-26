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
    fallbackLng: "en",
  })
  .then((t) => {
    document.querySelector("h1").innerHTML = i18next.t(
      "Get Unlimited <br>Access"
    );
    document.querySelector(".creation").innerHTML = i18next.t(
      "Unlimited Art <br>Creation"
    );
    document.querySelector(".styles").innerHTML = i18next.t(
      "Exclusive <br>Styles"
    );
    document.querySelector(".avatars").innerHTML = i18next.t(
      "Magic Avatars <br>With 20% Off"
    );
    document.querySelector(".avatars").innerHTML = i18next.t(
      "Magic Avatars <br>With 20% Off"
    );
    document.querySelector(".yearly-access").innerHTML =
      i18next.t("YEARLY ACCESS");
    document.querySelector(".per-year").innerHTML = i18next.t(
      "Just {{price}} per year",
      { price: "$39.99" }
    );
    document.querySelector(".per-week-economy").innerHTML = i18next.t(
      "{{price}} <br>per week",
      { price: "$0.48" }
    );
    document.querySelector(".weekly-access").innerHTML =
      i18next.t("WEEKLY ACCESS");
    document.querySelector(".per-week").innerHTML = i18next.t(
      "{{price}} <br>per week",
      { price: "$6.99" }
    );
    document.querySelector(".button-continue").innerHTML =
      i18next.t("Continue");
  });
